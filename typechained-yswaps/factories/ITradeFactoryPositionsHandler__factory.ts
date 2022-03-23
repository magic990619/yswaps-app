/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ITradeFactoryPositionsHandler, ITradeFactoryPositionsHandlerInterface } from '../ITradeFactoryPositionsHandler';

const _abi = [
  {
    inputs: [],
    name: 'AllowanceShouldBeZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTrade',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenIn',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenOut',
        type: 'address',
      },
    ],
    name: 'disable',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_strategy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenIn',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenOut',
        type: 'address',
      },
    ],
    name: 'disableByAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenIn',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenOut',
        type: 'address',
      },
    ],
    name: 'enable',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'enabledTrades',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: '_strategy',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_tokenIn',
            type: 'address',
          },
          {
            internalType: 'address',
            name: '_tokenOut',
            type: 'address',
          },
        ],
        internalType: 'struct ITradeFactoryPositionsHandler.EnabledTrade[]',
        name: '_enabledTrades',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class ITradeFactoryPositionsHandler__factory {
  static readonly abi = _abi;
  static createInterface(): ITradeFactoryPositionsHandlerInterface {
    return new utils.Interface(_abi) as ITradeFactoryPositionsHandlerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ITradeFactoryPositionsHandler {
    return new Contract(address, _abi, signerOrProvider) as ITradeFactoryPositionsHandler;
  }
}