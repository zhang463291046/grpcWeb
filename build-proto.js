// 运行node src/grpcWeb/build-proto.js，编译生成proto.js文件
// 或者运行pbjs -t json-module -w commonjs -o src/grpcWeb/proto.js  src/grpcWeb/proto/*.proto
const pbjs = require("protobufjs/cli/pbjs");
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 注意proto文件存放的路劲
const protoPath = 'src/grpcWeb/proto/*.proto';
const protos = glob.sync(protoPath);

pbjs.main(["--target", "json-module", '-w', 'commonjs', ...protos], function (err, output) {
  if (err)
    throw err;
  fs.writeFileSync(path.resolve(__dirname, './proto.js'), '/* eslint-disable */\n' + output);
});
