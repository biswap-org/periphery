const BiswapRouter02 = artifacts.require("BiswapRouter02");
const FACTORY_ARTIFACT  = require('../../core_latest/build/contracts/BiswapFactory.json');
module.exports = async function (deployer) {

  await deployer.deploy(BiswapRouter02, FACTORY_ARTIFACT.networks["97"].address, '0x3E32f9eFa9cc8BBF5127f9117F6B03EB5e75E79E');
  let instanceRouter = await BiswapRouter02.deployed();
};
