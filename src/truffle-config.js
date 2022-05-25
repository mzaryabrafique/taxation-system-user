module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost 
      port: 7545, // Standard Ethereum port 
      network_id: "*", // any network
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 1000, // Default: 200
        },
      },
    },
  },
};
