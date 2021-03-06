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

export declare namespace ITradeFactoryPositionsHandler {
  export type EnabledTradeStruct = {
    _strategy: string;
    _tokenIn: string;
    _tokenOut: string;
  };

  export type EnabledTradeStructOutput = [string, string, string] & {
    _strategy: string;
    _tokenIn: string;
    _tokenOut: string;
  };
}

export declare namespace ITradeFactoryExecutor {
  export type AsyncTradeExecutionDetailsStruct = {
    _strategy: string;
    _tokenIn: string;
    _tokenOut: string;
    _amount: BigNumberish;
    _minAmountOut: BigNumberish;
  };

  export type AsyncTradeExecutionDetailsStructOutput = [string, string, string, BigNumber, BigNumber] & {
    _strategy: string;
    _tokenIn: string;
    _tokenOut: string;
    _amount: BigNumber;
    _minAmountOut: BigNumber;
  };

  export type SyncTradeExecutionDetailsStruct = {
    _tokenIn: string;
    _tokenOut: string;
    _amountIn: BigNumberish;
    _maxSlippage: BigNumberish;
  };

  export type SyncTradeExecutionDetailsStructOutput = [string, string, BigNumber, BigNumber] & {
    _tokenIn: string;
    _tokenOut: string;
    _amountIn: BigNumber;
    _maxSlippage: BigNumber;
  };
}

export interface ITradeFactoryInterface extends utils.Interface {
  contractName: 'ITradeFactory';
  functions: {
    'disable(address,address)': FunctionFragment;
    'disableByAdmin(address,address,address)': FunctionFragment;
    'enable(address,address)': FunctionFragment;
    'enabledTrades()': FunctionFragment;
    'execute((address,address,address,uint256,uint256),address,bytes)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'disable', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'disableByAdmin', values: [string, string, string]): string;
  encodeFunctionData(functionFragment: 'enable', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'enabledTrades', values?: undefined): string;
  encodeFunctionData(functionFragment: 'execute', values: [ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct, string, BytesLike]): string;

  decodeFunctionResult(functionFragment: 'disable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disableByAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enabledTrades', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;

  events: {
    'AsyncTradeExecuted(uint256,address)': EventFragment;
    'MultipleAsyncTradeExecuted(uint256[],address)': EventFragment;
    'SyncTradeExecuted(address,uint256,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AsyncTradeExecuted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MultipleAsyncTradeExecuted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SyncTradeExecuted'): EventFragment;
}

export type AsyncTradeExecutedEvent = TypedEvent<[BigNumber, string], { _receivedAmount: BigNumber; _swapper: string }>;

export type AsyncTradeExecutedEventFilter = TypedEventFilter<AsyncTradeExecutedEvent>;

export type MultipleAsyncTradeExecutedEvent = TypedEvent<[BigNumber[], string], { _receivedAmount: BigNumber[]; _swapper: string }>;

export type MultipleAsyncTradeExecutedEventFilter = TypedEventFilter<MultipleAsyncTradeExecutedEvent>;

export type SyncTradeExecutedEvent = TypedEvent<
  [string, BigNumber, string],
  { _strategy: string; _receivedAmount: BigNumber; _swapper: string }
>;

export type SyncTradeExecutedEventFilter = TypedEventFilter<SyncTradeExecutedEvent>;

export interface ITradeFactory extends BaseContract {
  contractName: 'ITradeFactory';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITradeFactoryInterface;

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
    disable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    disableByAdmin(
      _strategy: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    enabledTrades(overrides?: CallOverrides): Promise<
      [ITradeFactoryPositionsHandler.EnabledTradeStructOutput[]] & {
        _enabledTrades: ITradeFactoryPositionsHandler.EnabledTradeStructOutput[];
      }
    >;

    'execute((address,address,address,uint256,uint256),address,bytes)'(
      _tradeExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct,
      _swapper: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'execute((address,address,uint256,uint256),bytes)'(
      _tradeExecutionDetails: ITradeFactoryExecutor.SyncTradeExecutionDetailsStruct,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'execute((address,address,address,uint256,uint256)[],address,bytes)'(
      _tradesExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct[],
      _swapper: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  disable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  disableByAdmin(
    _strategy: string,
    _tokenIn: string,
    _tokenOut: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  enabledTrades(overrides?: CallOverrides): Promise<ITradeFactoryPositionsHandler.EnabledTradeStructOutput[]>;

  'execute((address,address,address,uint256,uint256),address,bytes)'(
    _tradeExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct,
    _swapper: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'execute((address,address,uint256,uint256),bytes)'(
    _tradeExecutionDetails: ITradeFactoryExecutor.SyncTradeExecutionDetailsStruct,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'execute((address,address,address,uint256,uint256)[],address,bytes)'(
    _tradesExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct[],
    _swapper: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    disable(_tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    disableByAdmin(_strategy: string, _tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    enable(_tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    enabledTrades(overrides?: CallOverrides): Promise<ITradeFactoryPositionsHandler.EnabledTradeStructOutput[]>;

    'execute((address,address,address,uint256,uint256),address,bytes)'(
      _tradeExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct,
      _swapper: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'execute((address,address,uint256,uint256),bytes)'(
      _tradeExecutionDetails: ITradeFactoryExecutor.SyncTradeExecutionDetailsStruct,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'execute((address,address,address,uint256,uint256)[],address,bytes)'(
      _tradesExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct[],
      _swapper: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'AsyncTradeExecuted(uint256,address)'(_receivedAmount?: null, _swapper?: null): AsyncTradeExecutedEventFilter;
    AsyncTradeExecuted(_receivedAmount?: null, _swapper?: null): AsyncTradeExecutedEventFilter;

    'MultipleAsyncTradeExecuted(uint256[],address)'(_receivedAmount?: null, _swapper?: null): MultipleAsyncTradeExecutedEventFilter;
    MultipleAsyncTradeExecuted(_receivedAmount?: null, _swapper?: null): MultipleAsyncTradeExecutedEventFilter;

    'SyncTradeExecuted(address,uint256,address)'(
      _strategy?: string | null,
      _receivedAmount?: null,
      _swapper?: string | null
    ): SyncTradeExecutedEventFilter;
    SyncTradeExecuted(_strategy?: string | null, _receivedAmount?: null, _swapper?: string | null): SyncTradeExecutedEventFilter;
  };

  estimateGas: {
    disable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    disableByAdmin(
      _strategy: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    enabledTrades(overrides?: CallOverrides): Promise<BigNumber>;

    'execute((address,address,address,uint256,uint256),address,bytes)'(
      _tradeExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct,
      _swapper: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'execute((address,address,uint256,uint256),bytes)'(
      _tradeExecutionDetails: ITradeFactoryExecutor.SyncTradeExecutionDetailsStruct,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'execute((address,address,address,uint256,uint256)[],address,bytes)'(
      _tradesExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct[],
      _swapper: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    disable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    disableByAdmin(
      _strategy: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    enabledTrades(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'execute((address,address,address,uint256,uint256),address,bytes)'(
      _tradeExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct,
      _swapper: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'execute((address,address,uint256,uint256),bytes)'(
      _tradeExecutionDetails: ITradeFactoryExecutor.SyncTradeExecutionDetailsStruct,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'execute((address,address,address,uint256,uint256)[],address,bytes)'(
      _tradesExecutionDetails: ITradeFactoryExecutor.AsyncTradeExecutionDetailsStruct[],
      _swapper: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
