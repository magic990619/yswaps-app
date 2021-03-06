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

export interface OneInchAggregatorSwapperInterface extends utils.Interface {
  contractName: 'OneInchAggregatorSwapper';
  functions: {
    'AGGREGATION_ROUTER_V3()': FunctionFragment;
    'ETH_ADDRESS()': FunctionFragment;
    'SWAPPER_TYPE()': FunctionFragment;
    'acceptGovernor()': FunctionFragment;
    'governor()': FunctionFragment;
    'isGovernor(address)': FunctionFragment;
    'pendingGovernor()': FunctionFragment;
    'sendDust(address,address,uint256)': FunctionFragment;
    'setPendingGovernor(address)': FunctionFragment;
    'setTradeFactory(address)': FunctionFragment;
    'swap(address,address,address,uint256,uint256,bytes)': FunctionFragment;
    'tradeFactory()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'AGGREGATION_ROUTER_V3', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ETH_ADDRESS', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SWAPPER_TYPE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptGovernor', values?: undefined): string;
  encodeFunctionData(functionFragment: 'governor', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isGovernor', values: [string]): string;
  encodeFunctionData(functionFragment: 'pendingGovernor', values?: undefined): string;
  encodeFunctionData(functionFragment: 'sendDust', values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setPendingGovernor', values: [string]): string;
  encodeFunctionData(functionFragment: 'setTradeFactory', values: [string]): string;
  encodeFunctionData(functionFragment: 'swap', values: [string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
  encodeFunctionData(functionFragment: 'tradeFactory', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'AGGREGATION_ROUTER_V3', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ETH_ADDRESS', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SWAPPER_TYPE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptGovernor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'governor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isGovernor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingGovernor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sendDust', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPendingGovernor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTradeFactory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tradeFactory', data: BytesLike): Result;

  events: {
    'DustSent(address,address,uint256)': EventFragment;
    'GovernorAccepted()': EventFragment;
    'PendingGovernorSet(address)': EventFragment;
    'TradeFactorySet(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'DustSent'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'GovernorAccepted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PendingGovernorSet'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TradeFactorySet'): EventFragment;
}

export type DustSentEvent = TypedEvent<[string, string, BigNumber], { _to: string; token: string; amount: BigNumber }>;

export type DustSentEventFilter = TypedEventFilter<DustSentEvent>;

export type GovernorAcceptedEvent = TypedEvent<[], {}>;

export type GovernorAcceptedEventFilter = TypedEventFilter<GovernorAcceptedEvent>;

export type PendingGovernorSetEvent = TypedEvent<[string], { pendingGovernor: string }>;

export type PendingGovernorSetEventFilter = TypedEventFilter<PendingGovernorSetEvent>;

export type TradeFactorySetEvent = TypedEvent<[string], { _tradeFactory: string }>;

export type TradeFactorySetEventFilter = TypedEventFilter<TradeFactorySetEvent>;

export interface OneInchAggregatorSwapper extends BaseContract {
  contractName: 'OneInchAggregatorSwapper';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OneInchAggregatorSwapperInterface;

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
    AGGREGATION_ROUTER_V3(overrides?: CallOverrides): Promise<[string]>;

    ETH_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    SWAPPER_TYPE(overrides?: CallOverrides): Promise<[number]>;

    acceptGovernor(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<[boolean] & { _isGovernor: boolean }>;

    pendingGovernor(overrides?: CallOverrides): Promise<[string]>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPendingGovernor(_pendingGovernor: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    swap(
      _receiver: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _minAmountOut: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tradeFactory(overrides?: CallOverrides): Promise<[string]>;
  };

  AGGREGATION_ROUTER_V3(overrides?: CallOverrides): Promise<string>;

  ETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

  SWAPPER_TYPE(overrides?: CallOverrides): Promise<number>;

  acceptGovernor(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  governor(overrides?: CallOverrides): Promise<string>;

  isGovernor(_account: string, overrides?: CallOverrides): Promise<boolean>;

  pendingGovernor(overrides?: CallOverrides): Promise<string>;

  sendDust(
    _to: string,
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPendingGovernor(_pendingGovernor: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  swap(
    _receiver: string,
    _tokenIn: string,
    _tokenOut: string,
    _amountIn: BigNumberish,
    _minAmountOut: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tradeFactory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    AGGREGATION_ROUTER_V3(overrides?: CallOverrides): Promise<string>;

    ETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

    SWAPPER_TYPE(overrides?: CallOverrides): Promise<number>;

    acceptGovernor(overrides?: CallOverrides): Promise<void>;

    governor(overrides?: CallOverrides): Promise<string>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<boolean>;

    pendingGovernor(overrides?: CallOverrides): Promise<string>;

    sendDust(_to: string, _token: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setPendingGovernor(_pendingGovernor: string, overrides?: CallOverrides): Promise<void>;

    setTradeFactory(_tradeFactory: string, overrides?: CallOverrides): Promise<void>;

    swap(
      _receiver: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _minAmountOut: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    tradeFactory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'DustSent(address,address,uint256)'(_to?: null, token?: null, amount?: null): DustSentEventFilter;
    DustSent(_to?: null, token?: null, amount?: null): DustSentEventFilter;

    'GovernorAccepted()'(): GovernorAcceptedEventFilter;
    GovernorAccepted(): GovernorAcceptedEventFilter;

    'PendingGovernorSet(address)'(pendingGovernor?: null): PendingGovernorSetEventFilter;
    PendingGovernorSet(pendingGovernor?: null): PendingGovernorSetEventFilter;

    'TradeFactorySet(address)'(_tradeFactory?: null): TradeFactorySetEventFilter;
    TradeFactorySet(_tradeFactory?: null): TradeFactorySetEventFilter;
  };

  estimateGas: {
    AGGREGATION_ROUTER_V3(overrides?: CallOverrides): Promise<BigNumber>;

    ETH_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    SWAPPER_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    acceptGovernor(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPendingGovernor(_pendingGovernor: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    swap(
      _receiver: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _minAmountOut: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tradeFactory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AGGREGATION_ROUTER_V3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ETH_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SWAPPER_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptGovernor(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPendingGovernor(_pendingGovernor: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setTradeFactory(_tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    swap(
      _receiver: string,
      _tokenIn: string,
      _tokenOut: string,
      _amountIn: BigNumberish,
      _minAmountOut: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tradeFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
