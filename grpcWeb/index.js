import grpc from 'grpc-web'
import Vue from "vue"
import {
  Service
} from "protobufjs/light"
import './modifyRpcCall' //通过原型链修改自网络请求
import protoRoot from './proto.js'
import {
  anyType
} from "./unpackAny";

//定义rpcImpl
function createRpcImpl(hostname, credentials, options, metadata) {
  const rpcImpl = function (method, requestData, callback) {
    if (!options) options = {};
    options["format"] = "text";
    if (!metadata) metadata = {};
    const _client = new grpc.GrpcWebClientBase(options);
    const methodInfo = new grpc.AbstractClientBase.MethodInfo(
      null,
      arg => arg,
      arg => arg
    );
    console.log(method, requestData, callback);
    console.log(_client, methodInfo);
    const url =
      hostname + "/" + method.parent.fullName.slice(1) + "/" + method.name;
    _client.rpcCall(
      url,
      requestData,
      metadata,
      methodInfo,
      callback
    );
  };
  return rpcImpl
}

//创建rpcImpl
window.defaultUrl = "http://192.168.15.215:31300";
const defaultRpcImpl = createRpcImpl(window.defaultUrl, null);


//创建所有的服务Service,里面包含所有的方法
let protoService = {};
let rootArray = protoRoot.nestedArray;
rootArray.forEach(item => {
  let packageName = item.name;
  protoService[packageName] = {};
  item.nestedArray.forEach(item2 => {
    let serviceName = item2.name;
    if (item2 instanceof Service) {
      protoService[packageName][serviceName] = createService(
        packageName + "." + serviceName
      );
      //数据返回可以设置监听
      // protoService[packageName][serviceName].on("data", function(response, method) {
      //   console.log(response, method)
      // })
    }
  });
});

//创建服务Service
function createService(serviceName, rpcImpl) {
  const Service = protoRoot.lookup(serviceName)
  return Service.create(rpcImpl || defaultRpcImpl)
}

//所有的服务名和方法列表
Vue.prototype.protoService = Vue.prototype.protoService || protoService;
Vue.prototype.anyType = Vue.prototype.anyType || anyType;
