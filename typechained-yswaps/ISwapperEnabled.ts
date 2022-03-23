/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface ISwapperEnabledInterface extends utils.Interface {
  contractName: 'ISwapperEnabled';
  functions: {
    'disableTrade(address,address)': FunctionFragment;
    'disableTradeCallback(address,address)': FunctionFragment;
    'enableTrade(address,address)': FunctionFragment;
    'setSwapper(string,bool)': FunctionFragment;
    'setTradeFactory(address)': FunctionFragment;
    'swapper()': FunctionFragment;
    'tradeFactory()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'disableTrade', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'disableTradeCallback', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'enableTrade', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'setSwapper', values: [string, boolean]): string;
  encodeFunctionData(functionFragment: 'setTradeFactory', values: [string]): string;
  encodeFunctionData(functionFragment: 'swapper', values?: undefined): string;
  encodeFunctionData(functionFragment: 'tradeFactory', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'disableTrade', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disableTradeCallback', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enableTrade', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSwapper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTradeFactory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tradeFactory', data: BytesLike): Result;

  events: {};
}

export interface ISwapperEnabled extends BaseContract {
  contractName: 'ISwapperEnabled';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapperEnabledInterface;

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
    disableTrade(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    disableTradeCallback(
      _tokenIn: string,
      _tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableTrade(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setSwapper(
      _swapper: string,
      _migrateSwaps: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    swapper(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    tradeFactory(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;
  };

  disableTrade(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  disableTradeCallback(
    _tokenIn: string,
    _tokenOut: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableTrade(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setSwapper(
    _swapper: string,
    _migrateSwaps: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  swapper(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  tradeFactory(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    disableTrade(_tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    disableTradeCallback(_tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    enableTrade(_tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    setSwapper(_swapper: string, _migrateSwaps: boolean, overrides?: CallOverrides): Promise<void>;

    setTradeFactory(_tradeFactory: string, overrides?: CallOverrides): Promise<void>;

    swapper(overrides?: CallOverrides): Promise<string>;

    tradeFactory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    disableTrade(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    disableTradeCallback(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    enableTrade(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setSwapper(_swapper: string, _migrateSwaps: boolean, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    swapper(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    tradeFactory(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    disableTrade(
      _tokenIn: string,
      _tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disableTradeCallback(
      _tokenIn: string,
      _tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableTrade(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setSwapper(
      _swapper: string,
      _migrateSwaps: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    swapper(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    tradeFactory(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;
  };
}
