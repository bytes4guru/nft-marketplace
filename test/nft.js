const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('NFT', function () {
  let nftContract
  const marketplaceAddress = '0x8ba1f109551bD432803012645Ac136ddd64DBA72' // Mock

  beforeEach(async () => {
    const NFT = await ethers.getContractFactory('NFT')
    nftContract = await NFT.deploy(marketplaceAddress)
    await nftContract.deployed()
  })

  it("increases token's id after each mint", async function () {
    await expect(nftContract.mintToken(''))
      .to.emit(nftContract, 'TokenMinted')
      .withArgs(1, '', marketplaceAddress)

    await expect(nftContract.mintToken(''))
      .to.emit(nftContract, 'TokenMinted')
      .withArgs(2, '', marketplaceAddress)
  })
})