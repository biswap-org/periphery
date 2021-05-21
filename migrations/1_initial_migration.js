const BiswapRouter02 = artifacts.require("BiswapRouter02");
const FACTORY_ARTIFACT  = require('../../core/build/contracts/BiswapFactory.json');
module.exports = async function (deployer) {

  await deployer.deploy(BiswapRouter02, FACTORY_ARTIFACT.networks["97"].address, '0xae13d989dac2f0debff460ac112a837c89baa7cd');
  let instanceRouter = await BiswapRouter02.deployed();
};
