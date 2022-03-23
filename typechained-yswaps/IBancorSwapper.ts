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
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface IBancorSwapperInterface extends utils.Interface {
  contractName: 'IBancorSwapper';
  functions: {
    'SLIPPAGE_PRECISION()': FunctionFragment;
    'SWAPPER_TYPE()': FunctionFragment;
    'bancorNetworkName()': FunctionFragment;
    'contractRegistry()': FunctionFragment;
    'setTradeFactory(address)': FunctionFragment;
    'swap(address,address,address,uint256,uint256,bytes)': FunctionFragment;
    'tradeFactory()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'SLIPPAGE_PRECISION', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SWAPPER_TYPE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'bancorNetworkName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'contractRegistry', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setTradeFactory', values: [string]): string;
  encodeFunctionData(functionFragment: 'swap', values: [string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
  encodeFunctionData(functionFragment: 'tradeFactory', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'SLIPPAGE_PRECISION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SWAPPER_TYPE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'bancorNetworkName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'contractRegistry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTradeFactory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tradeFactory', data: BytesLike): Result;

  events: {
    'TradeFactorySet(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'TradeFactorySet'): EventFragment;
}

export type TradeFactorySetEvent = TypedEvent<[string], { _tradeFactory: string }>;

export type TradeFactorySetEventFilter = TypedEventFilter<TradeFactorySetEvent>;

export interface IBancorSwapper extends BaseContract {
  contractName: 'IBancorSwapper';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBancorSwapperInterface;

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
    SLIPPAGE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    SWAPPER_TYPE(overrides?: CallOverrides): Promise<[number]>;

    bancorNetworkName(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    contractRegistry(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    swap(
      _receiver: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _maxSlippage: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tradeFactory(overrides?: CallOverrides): Promise<[string]>;
  };

  SLIPPAGE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  SWAPPER_TYPE(overrides?: CallOverrides): Promise<number>;

  bancorNetworkName(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  contractRegistry(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  swap(
    _receiver: string,
    _tokenIn: string,
    _tokenOut: string,
    _amountIn: BigNumberish,
    _maxSlippage: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tradeFactory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    SLIPPAGE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    SWAPPER_TYPE(overrides?: CallOverrides): Promise<number>;

    bancorNetworkName(overrides?: CallOverrides): Promise<string>;

    contractRegistry(overrides?: CallOverrides): Promise<string>;

    setTradeFactory(_tradeFactory: string, overrides?: CallOverrides): Promise<void>;

    swap(
      _receiver: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _maxSlippage: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    tradeFactory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'TradeFactorySet(address)'(_tradeFactory?: null): TradeFactorySetEventFilter;
    TradeFactorySet(_tradeFactory?: null): TradeFactorySetEventFilter;
  };

  estimateGas: {
    SLIPPAGE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    SWAPPER_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    bancorNetworkName(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    contractRegistry(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    swap(
      _receiver: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _maxSlippage: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tradeFactory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    SLIPPAGE_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SWAPPER_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bancorNetworkName(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    contractRegistry(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    swap(
      _receiver: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _maxSlippage: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tradeFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}