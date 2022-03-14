const VendingMachine = artifacts.require("Vending_Machine");

module.exports = function (deployer) {
  deployer.deploy(VendingMachine);
};
