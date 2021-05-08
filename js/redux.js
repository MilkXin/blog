// redux实现原理
function createStore(reducer, initState, rewriteCreateStoreFunc) {
  if (typeof initState === 'function') {
    rewriteCreateStoreFunc = initState
    initState = undefined
  }

  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore)
    return newCreateStore(reducer, initState)
  }

  let state = initState
  let listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  dispatch({ type: Symbol() })

  function getState() {
    return state
  }

  return {
    subscribe,
    dispatch,
    getState,
  }
}

let initState = {
  counter: { count: 0 },
  info: { age: 18 },
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

function combineReducers(reducers) {
  /* reducerKeys = ['counter', 'info']*/
  const reducerKeys = Object.keys(reducers)

  /*返回合并后的新的reducer函数*/
  return function combination(state = {}, action) {
    /*生成的新的state*/
    const nextState = {}

    /*遍历执行所有的reducers，整合成为一个新的state*/
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      /*之前的 key 的 state*/
      const previousStateForKey = state[key]
      /*执行 分 reducer，获得新的state*/
      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
    }
    return nextState
  }
}

function counterReducer(state = { count: 1 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    default:
      return state
  }
}

function infoReducer(state = { age: 18 }, action) {
  switch (action.type) {
    case 'INCREMENT-AGE':
      return { age: state.age + 1 }
    default:
      return state
  }
}

const reducers = combineReducers({
  counter: counterReducer,
  info: infoReducer,
})

const applyMiddleware = function (...middlewares) {
  /*返回一个重写createStore的方法*/
  return function rewriteCreateStoreFunc(oldCreateStore) {
    /*返回重写后新的 createStore*/
    return function newCreateStore(reducer, initState) {
      /*1. 生成store*/
      const store = oldCreateStore(reducer, initState)
      /*给每个 middleware 传下store，相当于 const logger = loggerMiddleware(store);*/
      /* const chain = [exception, time, logger]*/
      const chain = middlewares.map((middleware) => middleware(store))
      let dispatch = store.dispatch
      /* 实现 exception(time((logger(dispatch))))*/
      chain.reverse().map((middleware) => {
        dispatch = middleware(dispatch)
      })

      /*2. 重写 dispatch*/
      store.dispatch = dispatch
      return store
    }
  }
}

const exceptionMiddleware = (store) => (next) => (action) => {
  try {
    next(action)
  } catch (err) {
    console.error('错误报告: ', err)
  }
}

const timeMiddleware = (store) => (next) => (action) => {
  console.log('time', new Date().getTime())
  next(action)
}

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('this state', store.getState())
  console.log('action', action)
  next(action)
  console.log('next state', store.getState())
}

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware)

// let store = createStore(reducers, {}, rewriteCreateStoreFunc)
let store = createStore(reducers, rewriteCreateStoreFunc)

store.subscribe(() => {
  let state = store.getState()
  console.log('subscribe function: ', state)
})

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT-AGE' })
