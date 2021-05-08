### js 原生复制

`bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)`

- 此方法返回一个 Boolean 值，表示操作是否成功：

  - aCommandName ：表示命令名称，比如： copy, cut 等（更多命令见命令）
  - aShowDefaultUI：是否展示用户界面，一般情况下都是 false
  - aValueArgument：有些命令需要额外的参数，一般用不到

- 它只能操作可编辑区域

  ```
  //html
  <input id="demoInput" value="hello world">
  <button id="btn">点击复制</button>

  //js
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
      const input = document.querySelector('#demoInput');
      input.select();
      if (document.execCommand('copy')) {
          document.execCommand('copy');
          console.log('复制成功');
      }
  })
  ```

- 若页面没有`<input>`、`<textarea>`标签，如从一个`<div>`中复制内容，或者直接复制变量，则需曲线救国

  ```
  //html
  <button id="btn">点我复制</button>
  //js
  const btn = document.querySelector('#btn');
  btn.addEventListener('click',() => {
      const input = document.createElement('input')
      input.setAttribute('readonly', 'readonly')
      input.setAttribute('value', '复制的文本')
      document.body.appendChild(input);
      input.select()
      //input.setSelectionRange(0, 9999) // ios兼容
      if (document.execCommand('copy')) {
          document.execCommand('copy')
          console.log('复制成功')
      }
   document.body.removeChild(input)
  })
  ```

- iOS 下存在兼容问题，["参考链接"](https://blog.csdn.net/qq_34092577/article/details/80750220)
