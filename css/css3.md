### background

`background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;`

### transform 变形

```
transform: rotate(45deg); //旋转

transform: skew(45deg); //扭曲
transform: skewX(45deg);
transform: skewY(45deg);

transform: scale(0.8); //缩放
transform: scaleX(0.8);
transform: scaleY(0.8);

transform: translate(50px, 100px); //位移
transform: translateX(50px);
transform: translateY(100px);

transform-origin: left top; //原点
```

### transition 过渡

```
transition: width .5s ease .1s;

transition-property: width; //过渡属性
transition-duration: .5s; //过渡时间
transition-timing-function: ease-in; //过渡函数(linear, ease, ease-in, ease-out, ease-in-out)
transition-delay: .1s; //延迟时间
```

### animation, keyframes 动画

```
@keyframes toradius{
    from {
        border-radius: 0;
    }
    to {
        border-radius: 100%;
    }
}
div {
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    background: green;
    margin: 20px auto;
}
div:hover {
    animation: toradius 10s ease-in-out .1s;
}

animation-name: toradius; //动画名
animation-duration: 10s; //动画播放时间
animation-timing-function: //ease-in-out; 动画播放方式(linear, ease, ease-in, ease-out, ease-in-out)
animation-delay: .1s; //等待时间
animation-iteration-count: 5; //播放次数(infinite无限次)
animation-direction: normal; //播放方向(normal, alternate)
animation-play-state: paused; //播放状态(running, paused)
animation-fill-mode: forwards; //时间外属性(none, forwards, backwards, both)
```
