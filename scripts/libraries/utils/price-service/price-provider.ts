import { Address } from '@libraries/types';
import { Network } from '@ethersproject/networks';

export interface PriceProvider {
  getPriceByContractAddress({ tokenAddress, network }: { tokenAddress: Address; network: Network }): Promise<number>;
}
