import { ethers } from 'hardhat';
import { ZrxLibrary } from '../dexes/zrx';
import { DexLibrary } from '../types';
import { SpookyswapLibrary, UniswapLibrary } from './uniswap-v2';

export type SUPPORTED_NETWORKS_MOCK = 'mainnet' | 'fantom';
export type MAINNET_DEXES = 'uniswap' | 'zrx';
export type FANTOM_DEXES = 'spookyswap' | 'zrx';

export interface DexesNetworkMap {
  mainnet: Record<MAINNET_DEXES, DexLibrary>;
  fantom: Record<FANTOM_DEXES, DexLibrary>;
}

let dexesNetworkMap = {};

export const get = async (): Promise<DexesNetworkMap> => {
  if (!dexesNetworkMap) {
    dexesNetworkMap = {
      fantom: {
        zrx: await ZrxLibrary.create({ network: { name: 'fantom', chainId: 250 } }),
        spookyswap: await SpookyswapLibrary.create({ network: { name: 'fantom', chainId: 250 } }),
      },
      mainnet: {
        uniswap: await UniswapLibrary.create({ network: { name: 'mainnet', chainId: 1 } }),
        zrx: await ZrxLibrary.create({ network: { name: 'mainnet', chainId: 1 } }),
      },
    };
  }
  return dexesNetworkMap as DexesNetworkMap;
};
