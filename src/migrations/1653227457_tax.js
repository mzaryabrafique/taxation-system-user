const Taxation = artifacts.require("./Taxation");

module.exports = function (deployer) {
  deployer.deploy(Taxation);
};
