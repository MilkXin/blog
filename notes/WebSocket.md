### WebSocket的简单应用
- WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
  WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。
  在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
  
- 只读属性 readyState 表示连接状态，可以是以下值：
   + 0 - 表示连接尚未建立。
   + 1 - 表示连接已建立，可以进行通信。
   + 2 - 表示连接正在进行关闭。
   + 3 - 表示连接已经关闭或者连接不能打开。
  
```
//简单示例
function WebSocketTest()
         {
            if ("WebSocket" in window)
            {
               alert("您的浏览器支持 WebSocket!");
               
               // 打开一个 web socket
               var ws = new WebSocket("ws://localhost:9998/echo");
                
               ws.onopen = function()
               {
                  // Web Socket 已连接上，使用 send() 方法发送数据
                  ws.send("发送数据");
                  alert("数据发送中...");
               };
                
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  alert("数据已接收...");
               };
                
               ws.onclose = function()
               { 
                  // 关闭 websocket
                  alert("连接已关闭..."); 
               };
            }
            
            else
            {
               // 浏览器不支持 WebSocket
               alert("您的浏览器不支持 WebSocket!");
            }
         }
```

- WebSocket 对象提供了一组 API，用于创建和管理 WebSocket 连接，
  以及通过连接发送和接收数据。浏览器提供的WebSocket API很简洁，调用示例如下：
```
var ws = new WebSocket('wss://example.com/socket'); 
// 创建安全WebSocket 连接（wss）
ws.onerror = function (error) { ... } 
// 错误处理
ws.onclose = function () { ... } 
// 关闭时调用
ws.onopen = function () { 
// 连接建立时调用
  ws.send("Connection established. Hello server!"); 
// 向服务端发送消息
}

ws.onmessage = function(msg) { 
// 接收服务端发送的消息
  if(msg.data instanceof Blob) { 
// 处理二进制信息
    processBlob(msg.data);
  } else {
    processText(msg.data); 
// 处理文本信息
  }
}
```
