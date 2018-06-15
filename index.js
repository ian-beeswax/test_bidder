const express = require('express');
const app = express();

const protobuf = require('protobufjs');

protobuf.load('beeswax/bid/request.proto')
  .then(bid => {
    const BidAgentRequest = bid.lookupType("bid.BidAgentRequest");
    app.post('/', (message, res) => {
      // const bidRequest = BidAgentRequest.decode(message);
      // console.log(bidRequest);
      console.log(message);
    });
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
});
