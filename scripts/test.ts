import { ethers } from 'hardhat';
import { TradeFactory } from '@yearn-mechanics/yswaps/typechained';

async function main() {
  const tradeFactory = await ethers.getContract<TradeFactory>('TradeFactory');
  console.log(tradeFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
