var PROTO_PATH = __dirname + "/postagram.proto";

var parseArgs = require("minimist");
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,

});
var postagram_rpc = grpc.loadPackageDefinition(packageDefinition).postagram_rpc;

function main() {
  // var argv = parseArgs(process.argv.slice(2), {
  //   string: "target",
  // });
  // var target;
  // if (argv.target) {
  //   target = argv.target;
  // } else {
  //   target = "172.27.160.1:3000";
  //   target = "10.214.215.153:10000";
  // }
  //const target = "https://postagramapplsvc-0bn8.onrender.com:10000";
  //const target = "54.191.253.12:50051"
  //const target = "postagramapplsvc-0bn8.onrender.com:50051";
  const target = "216.24.57.253:5729";
  var postagram_rpc_client = new postagram_rpc.Postagram(
    "104.196.232.237:80",
    grpc.credentials.createInsecure()
  );

  postagram_rpc_client.getUserToken(
    { username: "tan1", password: "123456" },
    (err, response) => {
      console.log({err})
      console.log({ response });
    }
  );
}

main();
