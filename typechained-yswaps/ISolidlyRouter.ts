/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace ISolidlyRouter {
  export type RouteStruct = { from: string; to: string; stable: boolean };

  export type RouteStructOutput = [string, string, boolean] & {
    from: string;
    to: string;
    stable: boolean;
  };
}

export interface ISolidlyRouterInterface extends utils.Interface {
  contractName: 'ISolidlyRouter';
  functions: {
    'factory()': FunctionFragment;
    'getAmountsOut(uint256,(address,address,bool)[])': FunctionFragment;
    'pairFor(address,address,bool)': FunctionFragment;
    'swapExactTokensForTokens(uint256,uint256,(address,address,bool)[],address,uint256)': FunctionFragment;
    'swapExactTokensForTokensSimple(uint256,uint256,address,address,bool,address,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'factory', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAmountsOut', values: [BigNumberish, ISolidlyRouter.RouteStruct[]]): string;
  encodeFunctionData(functionFragment: 'pairFor', values: [string, string, boolean]): string;
  encodeFunctionData(
    functionFragment: 'swapExactTokensForTokens',
    values: [BigNumberish, BigNumberish, ISolidlyRouter.RouteStruct[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapExactTokensForTokensSimple',
    values: [BigNumberish, BigNumberish, string, string, boolean, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'factory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAmountsOut', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pairFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapExactTokensForTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapExactTokensForTokensSimple', data: BytesLike): Result;

  events: {};
}

export interface ISolidlyRouter extends BaseContract {
  contractName: 'ISolidlyRouter';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISolidlyRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    factory(overrides?: CallOverrides): Promise<[string]>;

    getAmountsOut(
      arg0: BigNumberish,
      arg1: ISolidlyRouter.RouteStruct[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[string] & { pair: string }>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: ISolidlyRouter.RouteStruct[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokensSimple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: string,
      tokenTo: string,
      stable: boolean,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  factory(overrides?: CallOverrides): Promise<string>;

  getAmountsOut(arg0: BigNumberish, arg1: ISolidlyRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;

  pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<string>;

  swapExactTokensForTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    routes: ISolidlyRouter.RouteStruct[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokensSimple(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    tokenFrom: string,
    tokenTo: string,
    stable: boolean,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    factory(overrides?: CallOverrides): Promise<string>;

    getAmountsOut(arg0: BigNumberish, arg1: ISolidlyRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;

    pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<string>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: ISolidlyRouter.RouteStruct[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapExactTokensForTokensSimple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: string,
      tokenTo: string,
      stable: boolean,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountsOut(arg0: BigNumberish, arg1: ISolidlyRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;

    pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<BigNumber>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: ISolidlyRouter.RouteStruct[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokensSimple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: string,
      tokenTo: string,
      stable: boolean,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountsOut(arg0: BigNumberish, arg1: ISolidlyRouter.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: ISolidlyRouter.RouteStruct[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokensSimple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: string,
      tokenTo: string,
      stable: boolean,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
