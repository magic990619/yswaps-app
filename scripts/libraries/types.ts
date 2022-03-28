import { BigNumber } from 'ethers';
import { MainnetSolvers } from '../configs/mainnet';
import { FantomSolvers } from '@scripts/configs/fantom';
import { DexesSolverMetadata } from './solvers/Dexes';
import { MultiDexesSolverMetadata } from './solvers/MulticallDexes';
import { Solver } from './solvers/Solver';

export type Name = string;
export type Address = string;

export type SimpleEnabledTrade = {
  tokenIn: Address;
  tokenOut: Address;
  threshold: BigNumber;
};

export type SolversMap<T extends Network> = {
  [solver in SolversNetworksMap[T]]: Solver;
};

export type SolversNetworksMap = {
  MAINNET: MainnetSolvers;
  FANTOM: FantomSolvers;
};

export type Network = keyof SolversNetworksMap;
export type Solvers = SolversNetworksMap[keyof SolversNetworksMap];

// TODO: enforce that only accepts valid dexes keys from Solvers type
export type SolversMetadataMap = {
  Dexes: DexesSolverMetadata;
  MulticallDexes: MultiDexesSolverMetadata;
  ThreePoolCrv: MultiDexesSolverMetadata;
};

type TradeConfiguration<T extends Network> = {
  [K in SolversNetworksMap[T]]: {
    enabledTrade: SimpleEnabledTrade;
    solver: K;
    metadata: SolversMetadataMap[K];
  };
}[SolversNetworksMap[T]];

export type StrategyConfiguration<T extends Network> = {
  [strategy: Address]: {
    name: string;
    tradesConfigurations: TradeConfiguration<T>[];
  };
};
