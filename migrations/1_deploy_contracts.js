const UmblNFT = artifacts.require("UmblNFT");
const UmblMetadataURI = 'https://portal.umbrellaproject.cc';

module.exports = async function(deployer) {
  await deployer.deploy(UmblNFT, UmblMetadataURI);
};
