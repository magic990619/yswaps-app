/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
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

export interface TradeFactoryPositionsHandlerInterface extends utils.Interface {
  contractName: 'TradeFactoryPositionsHandler';
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment;
    'MASTER_ADMIN()': FunctionFragment;
    'STRATEGY()': FunctionFragment;
    'STRATEGY_MANAGER()': FunctionFragment;
    'SWAPPER_ADDER()': FunctionFragment;
    'SWAPPER_SETTER()': FunctionFragment;
    'addSwappers(address[])': FunctionFragment;
    'disable(address,address)': FunctionFragment;
    'disableByAdmin(address,address,address)': FunctionFragment;
    'enable(address,address)': FunctionFragment;
    'enabledTrades()': FunctionFragment;
    'getRoleAdmin(bytes32)': FunctionFragment;
    'grantRole(bytes32,address)': FunctionFragment;
    'hasRole(bytes32,address)': FunctionFragment;
    'isSwapper(address)': FunctionFragment;
    'removeSwappers(address[])': FunctionFragment;
    'renounceRole(bytes32,address)': FunctionFragment;
    'revokeRole(bytes32,address)': FunctionFragment;
    'setStrategySyncSwapper(address,address)': FunctionFragment;
    'strategySyncSwapper(address)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'swapperStrategies(address)': FunctionFragment;
    'swappers()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MASTER_ADMIN', values?: undefined): string;
  encodeFunctionData(functionFragment: 'STRATEGY', values?: undefined): string;
  encodeFunctionData(functionFragment: 'STRATEGY_MANAGER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SWAPPER_ADDER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SWAPPER_SETTER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addSwappers', values: [string[]]): string;
  encodeFunctionData(functionFragment: 'disable', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'disableByAdmin', values: [string, string, string]): string;
  encodeFunctionData(functionFragment: 'enable', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'enabledTrades', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'isSwapper', values: [string]): string;
  encodeFunctionData(functionFragment: 'removeSwappers', values: [string[]]): string;
  encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, string]): string;
  encodeFunctionData(functionFragment: 'setStrategySyncSwapper', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'strategySyncSwapper', values: [string]): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'swapperStrategies', values: [string]): string;
  encodeFunctionData(functionFragment: 'swappers', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MASTER_ADMIN', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'STRATEGY', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'STRATEGY_MANAGER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SWAPPER_ADDER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SWAPPER_SETTER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addSwappers', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'disableByAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enabledTrades', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isSwapper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeSwappers', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setStrategySyncSwapper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'strategySyncSwapper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapperStrategies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swappers', data: BytesLike): Result;

  events: {
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment;
    'RoleGranted(bytes32,address,address)': EventFragment;
    'RoleRevoked(bytes32,address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment;
}

export type RoleAdminChangedEvent = TypedEvent<[string, string, string], { role: string; previousAdminRole: string; newAdminRole: string }>;

export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<[string, string, string], { role: string; account: string; sender: string }>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<[string, string, string], { role: string; account: string; sender: string }>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface TradeFactoryPositionsHandler extends BaseContract {
  contractName: 'TradeFactoryPositionsHandler';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TradeFactoryPositionsHandlerInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MASTER_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    STRATEGY(overrides?: CallOverrides): Promise<[string]>;

    STRATEGY_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    SWAPPER_ADDER(overrides?: CallOverrides): Promise<[string]>;

    SWAPPER_SETTER(overrides?: CallOverrides): Promise<[string]>;

    addSwappers(__swappers: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

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

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;

    isSwapper(_swapper: string, overrides?: CallOverrides): Promise<[boolean] & { _isSwapper: boolean }>;

    removeSwappers(__swappers: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    renounceRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    revokeRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setStrategySyncSwapper(
      _strategy: string,
      _swapper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    strategySyncSwapper(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    swapperStrategies(_swapper: string, overrides?: CallOverrides): Promise<[string[]] & { _strategies: string[] }>;

    swappers(overrides?: CallOverrides): Promise<[string[]] & { _swappersList: string[] }>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MASTER_ADMIN(overrides?: CallOverrides): Promise<string>;

  STRATEGY(overrides?: CallOverrides): Promise<string>;

  STRATEGY_MANAGER(overrides?: CallOverrides): Promise<string>;

  SWAPPER_ADDER(overrides?: CallOverrides): Promise<string>;

  SWAPPER_SETTER(overrides?: CallOverrides): Promise<string>;

  addSwappers(__swappers: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  disable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  disableByAdmin(
    _strategy: string,
    _tokenIn: string,
    _tokenOut: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  enabledTrades(overrides?: CallOverrides): Promise<ITradeFactoryPositionsHandler.EnabledTradeStructOutput[]>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

  isSwapper(_swapper: string, overrides?: CallOverrides): Promise<boolean>;

  removeSwappers(__swappers: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  renounceRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  revokeRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setStrategySyncSwapper(
    _strategy: string,
    _swapper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  strategySyncSwapper(arg0: string, overrides?: CallOverrides): Promise<string>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  swapperStrategies(_swapper: string, overrides?: CallOverrides): Promise<string[]>;

  swappers(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MASTER_ADMIN(overrides?: CallOverrides): Promise<string>;

    STRATEGY(overrides?: CallOverrides): Promise<string>;

    STRATEGY_MANAGER(overrides?: CallOverrides): Promise<string>;

    SWAPPER_ADDER(overrides?: CallOverrides): Promise<string>;

    SWAPPER_SETTER(overrides?: CallOverrides): Promise<string>;

    addSwappers(__swappers: string[], overrides?: CallOverrides): Promise<void>;

    disable(_tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    disableByAdmin(_strategy: string, _tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    enable(_tokenIn: string, _tokenOut: string, overrides?: CallOverrides): Promise<void>;

    enabledTrades(overrides?: CallOverrides): Promise<ITradeFactoryPositionsHandler.EnabledTradeStructOutput[]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;

    isSwapper(_swapper: string, overrides?: CallOverrides): Promise<boolean>;

    removeSwappers(__swappers: string[], overrides?: CallOverrides): Promise<void>;

    renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;

    setStrategySyncSwapper(_strategy: string, _swapper: string, overrides?: CallOverrides): Promise<void>;

    strategySyncSwapper(arg0: string, overrides?: CallOverrides): Promise<string>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    swapperStrategies(_swapper: string, overrides?: CallOverrides): Promise<string[]>;

    swappers(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    'RoleAdminChanged(bytes32,bytes32,bytes32)'(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    'RoleGranted(bytes32,address,address)'(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
    RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;

    'RoleRevoked(bytes32,address,address)'(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MASTER_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    STRATEGY(overrides?: CallOverrides): Promise<BigNumber>;

    STRATEGY_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    SWAPPER_ADDER(overrides?: CallOverrides): Promise<BigNumber>;

    SWAPPER_SETTER(overrides?: CallOverrides): Promise<BigNumber>;

    addSwappers(__swappers: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    disable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    disableByAdmin(
      _strategy: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    enabledTrades(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;

    isSwapper(_swapper: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeSwappers(__swappers: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    renounceRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    revokeRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setStrategySyncSwapper(_strategy: string, _swapper: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    strategySyncSwapper(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    swapperStrategies(_swapper: string, overrides?: CallOverrides): Promise<BigNumber>;

    swappers(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MASTER_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STRATEGY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STRATEGY_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SWAPPER_ADDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SWAPPER_SETTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addSwappers(__swappers: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    disable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    disableByAdmin(
      _strategy: string,
      _tokenIn: string,
      _tokenOut: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enable(_tokenIn: string, _tokenOut: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    enabledTrades(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSwapper(_swapper: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeSwappers(__swappers: string[], overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    renounceRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    revokeRole(role: BytesLike, account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setStrategySyncSwapper(
      _strategy: string,
      _swapper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    strategySyncSwapper(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapperStrategies(_swapper: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swappers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
