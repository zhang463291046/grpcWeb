# 网络请求

> grpc-web+protobufjs

## grpc-web+protobufjs

``` bash
# install dependencies
cnpm install grpc-web protobufjs

# package.json scripts add
> "proto2": "node src/grpcWeb/build-proto.js"
# or add
> "proto": "pbjs -t json-module -w commonjs -o src/grpcWeb/proto.js  src/grpcWeb/proto/*.proto"

# main.js add
> import './grpcWeb'

```
