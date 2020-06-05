module.exports = {
    rpc: {
        host:"localhost",
        port:8543
    },
    networks: {
        development: {
            host: "localhost", 
            port: 8543,
            network_id: "*",
            from: "0x584750fc006760a93c335707683c9322a1561216",
            gas: 20000000
        }
    }
};
