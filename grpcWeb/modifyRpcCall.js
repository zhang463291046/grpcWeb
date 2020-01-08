/**
 * 魔改rpcCall，文件位置，node_modules/protobufjs/src/rpc/service.js
 * 添加2个方法beforeRequest和afterResponse，为了方便调试控件使用
 */
import Service from 'protobufjs/src/rpc/service'
import util from 'protobufjs/src/util/minimal'
import cloneDeep from "lodash/cloneDeep"
import {
  anyType
} from "./unpackAny"

let idCount = 0;

// 发送请求前
function beforeRequest(method, requestCtor, responseCtor, request, others) {
  // console.log(method, requestCtor, responseCtor, request, others)
  // -- 谷歌插件开始
  // 可定义只开发环境开启
  // if (process.env.NODE_ENV === 'development') {
  window.console2 = window.console2 || function () {};
  others.id = new Date().getTime() + '-' + idCount++;
  const message = {
    title: method.name,
    id: others.id,
    datas: [{
      name: 'Url',
      data: method.fullName
    }, {
      name: 'Request',
      data: request,
      expandLevel: 2 // json展开层数
    }, {
      name: 'Response',
      data: 'pedding',
      expandLevel: 2 // json展开层数
    }]
  }
  others.message = message;
  window.console2(others.message);
  // }
  // -- 谷歌插件结束
}

// 响应数据后
function afterResponse(method, requestCtor, responseCtor, response, others) {
  // console.log(method, requestCtor, responseCtor, response, others)
  if (!response) {
    const msg = method.fullName + '=>错误提示信息：接口返回null';
    return [TypeError(msg)];
  }
  if (response.code != 0) {
    const msg = method.fullName + '=>错误提示信息：' + response.msg;
    console.error(msg)
  }
  // -- 谷歌插件开始
  // 可定义只开发环境开启
  // if (process.env.NODE_ENV === 'development') {
  window.console2 = window.console2 || function () {};
  others.message.datas[2].data = cloneDeep(response); // 深拷贝防止数据污染
  others.message.type = 'update';
  window.console2(others.message);
  // }
  // -- 谷歌插件结束
}

Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

  if (!request)
    throw TypeError("request must be specified");

  var self = this;
  if (!callback)
    return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

  if (!self.rpcImpl) {
    setTimeout(function () {
      callback(Error("already ended"));
    }, 0);
    return undefined;
  }

  try {
    // -- 插入代码开始 others对象存放请求记录
    let others = {}
    beforeRequest(method, requestCtor, responseCtor, request, others);
    // -- 插入代码结束

    return self.rpcImpl(
      method,
      requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
      function rpcCallback(err, response) {

        if (err) {
          self.emit("error", err, method);
          return callback(err);
        }

        if (response === null) {
          self.end( /* endedByRPC */ true);
          return undefined;
        }

        if (!(response instanceof responseCtor)) {
          try {
            response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
          } catch (err) {
            self.emit("error", err, method);
            return callback(err);
          }
        }

        // -- 插入代码开始
        response = anyType(response)
        afterResponse(method, requestCtor, responseCtor, response, others);
        // -- 插入代码结束

        self.emit("data", response, method);
        return callback(null, response);
      }
    );
  } catch (err) {
    self.emit("error", err, method);
    setTimeout(function () {
      callback(err);
    }, 0);
    return undefined;
  }
};
