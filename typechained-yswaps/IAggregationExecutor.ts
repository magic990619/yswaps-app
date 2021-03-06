/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface IAggregationExecutorInterface extends utils.Interface {
  contractName: 'IAggregationExecutor';
  functions: {
    'callBytes(bytes)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'callBytes', values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: 'callBytes', data: BytesLike): Result;

  events: {};
}

export interface IAggregationExecutor extends BaseContract {
  contractName: 'IAggregationExecutor';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAggregationExecutorInterface;

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
    callBytes(data: BytesLike, overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;
  };

  callBytes(data: BytesLike, overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    callBytes(data: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    callBytes(data: BytesLike, overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    callBytes(data: BytesLike, overrides?: PayableOverrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;
  };
}
