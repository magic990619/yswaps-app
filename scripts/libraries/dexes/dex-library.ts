import { Network } from '@ethersproject/networks';
import { Address, Name } from '@libraries/types';
import { BigNumber, PopulatedTransaction } from 'ethers';

export type DexLibrarySwapProps = {
  tokenIn: Address;
  tokenOut: Address;
  amountIn: BigNumber;
  strategy: Address;
  hops?: Address[];
};

export type DexLibrarySwapResponse = {
  dex: Name;
  unsignedSwapTx: PopulatedTransaction;
  swapperData: string;
  swapperAddress: Address;
  amountOut: BigNumber;
  path: Address[];
  router: Address;
};

export abstract class DexLibrary {
  abstract swap(props: DexLibrarySwapProps): Promise<DexLibrarySwapResponse>;
}

export class BaseDexLibrary {
  protected _network: Network;

  constructor({ network }: { network: Network }) {
    this._network = network;
  }

  public static async create({ network }: { network: Network }): Promise<BaseDexLibrary> {
    const dexLibraryInstance = new BaseDexLibrary({ network });
    await dexLibraryInstance.init();
    return dexLibraryInstance;
  }
  protected async init(): Promise<void> {}
}
