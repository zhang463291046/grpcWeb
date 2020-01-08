/**
 * 解析包含any类型的数据
 */
import util from 'protobufjs/src/util'
import {
  Message
} from "protobufjs/light"
import protoRoot from './proto.js'

//是否开启设置默认数值
const ConversionBoolean = true;

// 解析配置补全
const ConversionOptions = {
  enums: String, // enums as string names
  // longs: String,  // longs as strings (requires long.js)
  bytes: String, // bytes as base64 encoded strings
  defaults: true, // includes default values
  arrays: true, // populates empty arrays (repeated fields) even if defaults=false
  objects: true, // populates empty objects (map fields) even if defaults=false
  oneofs: true // includes virtual oneof fields set to the present field's name
}

/**
 * 判断是否是数组
 * @param {object} obj
 */
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

//缓存type
let typeCache = {}

// 单个解析
function unpack(o) {
  let type = o.$type;
  let oo = {}
  for (let key in o) {
    const value = o[key]
    if (value instanceof Message) {
      oo[key] = value
    }
  }
  let obj = ConversionBoolean ? type.toObject(o, ConversionOptions) : type.toObject(o)
  //保留子层的Message，防止结构被破坏
  obj = Object.assign({}, obj, oo)
  return obj
}

// 单个any解析
function unpackAny(o) {
  let typeUrl = o.type_url
  let typestr = typeUrl.split('/')[1]
  let type = typeCache[typestr]
  if (!type) {
    if (isArray(protoRoot)) {
      protoRoot.forEach(item => {
        type = item.lookupType(typestr)
      })
    } else {
      type = protoRoot.lookupType(typestr)
    }
  }
  if (!type) {
    console.error('包含message“' + typestr + '”的protojs文件未加载！')
    return o
  }
  typeCache[typestr] = type
  // 如果是未解密的字符串，进行解密成Uint8Array
  if (typeof o.value === 'string') {
    let buffer
    util.base64.decode(o.value, buffer = util.newBuffer(util.base64.length(o.value)), 0)
    o.value = buffer
  }
  let item = type.decode(o.value);
  let obj = ConversionBoolean ? type.toObject(item, ConversionOptions) : type.toObject(item)
  return obj
}

// 解析包含any类型的message
function unpackAnyAll(o) {
  // 解析本身
  if (o instanceof Message) {
    o = unpack(o)
  }

  //定义any的正则匹配规则
  const reg = /^type\.googleapis\.com\//;
  // 解析子层
  for (let key in o) {
    if (!o.hasOwnProperty(key)) {
      continue
    }
    const value = o[key]
    //repeated数组时
    if (isArray(value)) {
      //Message进行解析
      if (value.length && value[0] instanceof Message) {
        o[key] = value.map(item => {
          if (item && item.type_url && reg.test(item.type_url)) {
            // any类型
            return o[key] = unpackAny(item)
          } else {
            // 其他类型
            return o[key] = unpack(item)
          }
        })
      }
    } else {
      //Message进行解析
      if (value instanceof Message) {
        if (value && value.type_url && reg.test(value.type_url)) {
          // any类型
          o[key] = unpackAny(value)
        } else {
          // 其他类型
          o[key] = unpack(value)
        }
      }
    }
  }
  return o
}

// 解析message
export function anyType(o) {
  return unpackAnyAll(o)
}
