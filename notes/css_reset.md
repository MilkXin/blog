### rem 多屏适配 reset

```
*{max-width:100%;max-height:100%;outline:none;-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-box-sizing:border-box;}

body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td,section,article,aside,header,footer,nav,dialog,figure,figcaption,hgroup{margin:0;padding:0;}
input,select,textarea{font-size:100%;}
table{border-collapse:collapse;border-spacing:0;}
/*text-align-last: center*/
/*td{padding: 10px}*/
fieldset,img{border:0;}
caption,th{text-align:left;}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500;}
ul,ol,li{list-style:none}
em,i{font-style:normal}
del{text-decoration:line-through;}
address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500;}
img{border:0;max-width:100%;}
/*input,img{vertical-align:middle;}*/
img{vertical-align:middle;}
input:focus,a:focus{outline:none;}
a{color:#333;text-decoration:none;word-wrap: break-word;word-break: normal;}
a:active{opacity:.7;}

html{-webkit-text-size-adjust:none;overflow-y:scroll;}
body{min-width:320px;line-height:1.5;color:#333;overflow-x:hidden;font-family:Arial, Helvetica, STHeiTi, sans-serif;background:#F2F2F2;}
/*p{ margin-top:22px;}*/
/* rem方式，750px 为高保真基准，原高保真大小除以基数50，即 10px/50 = 0.2rem，以此类推,字体还是 px */
html{font-size:50px;}
body{font-size:24px;}
@media screen and (min-width:320px){html{font-size:21.333333333333332px;} body{font-size:12px;}}
@media screen and (min-width:360px){html{font-size:24px;} body{font-size:12px;}}
@media screen and (min-width:375px){html{font-size:25px;} body{font-size:12px;}}
@media screen and (min-width:384px){html{font-size:25.6px;}
    body{font-size:14px;}}
@media screen and (min-width:400px){html{font-size:26.666666666666668px;}
    body{font-size:14px;}}
@media screen and (min-width:414px){html{font-size:27.6px;}
    body{font-size:14px;}}
@media screen and (min-width:424px){html{font-size:28.266666666666667px;}
    body{font-size:14px;}}
@media screen and (min-width:480px){html{font-size:32px;}
    body{font-size:15.36px;}}
@media screen and (min-width:540px){html{font-size:36px;}
    body{font-size:17.28px;}}
@media screen and (min-width:720px){html{font-size:48px;}
    body{font-size:23.04px;}}
@media screen and (min-width:750px){html{font-size:50px;}
    body{font-size:24px;}}

body {background:#fff;font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif,STHeiti,'Microsoft YaHei',Helvetica,Arial,sans-serif;}
```
