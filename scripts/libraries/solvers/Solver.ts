import { SimpleEnabledTrade } from '@libraries/types';
import { TradeFactory } from '@typechained-yswaps';
import { PopulatedTransaction } from 'ethers';
import { Address } from 'hardhat-deploy/dist/types';
import { SolversMetadataMap } from '@libraries/types';

export abstract class Solver {
  abstract solve({
    strategy,
    trade,
    metadata,
    tradeFactory,
  }: {
    strategy: Address;
    trade: SimpleEnabledTrade;
    metadata: SolversMetadataMap[keyof SolversMetadataMap];
    tradeFactory: TradeFactory;
  }): Promise<PopulatedTransaction>;

  abstract shouldExecuteTrade({ strategy, trade }: { strategy: Address; trade: SimpleEnabledTrade }): Promise<boolean>;
}
