/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ITradeFactoryExecutor, ITradeFactoryExecutorInterface } from '../ITradeFactoryExecutor';

const _abi = [
  {
    inputs: [],
    name: 'InvalidAmountOut',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_receivedAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_swapper',
        type: 'address',
      },
    ],
    name: 'AsyncTradeExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256[]',
        name: '_receivedAmount',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_swapper',
        type: 'address',
      },
    ],
    name: 'MultipleAsyncTradeExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_strategy',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_receivedAmount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_swapper',
        type: 'address',
      },
    ],
    name: 'SyncTradeExecuted',
    type: 'event',
  },
  {
    inputs: [
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
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
          },
        ],
        internalType: 'struct ITradeFactoryExecutor.AsyncTradeExecutionDetails',
        name: '_tradeExecutionDetails',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: '_swapper',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'execute',
    outputs: [
      {
        internalType: 'uint256',
        name: '_receivedAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
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
          {
            internalType: 'uint256',
            name: '_amountIn',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_maxSlippage',
            type: 'uint256',
          },
        ],
        internalType: 'struct ITradeFactoryExecutor.SyncTradeExecutionDetails',
        name: '_tradeExecutionDetails',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'execute',
    outputs: [
      {
        internalType: 'uint256',
        name: '_receivedAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
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
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_minAmountOut',
            type: 'uint256',
          },
        ],
        internalType: 'struct ITradeFactoryExecutor.AsyncTradeExecutionDetails[]',
        name: '_tradesExecutionDetails',
        type: 'tuple[]',
      },
      {
        internalType: 'address',
        name: '_swapper',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class ITradeFactoryExecutor__factory {
  static readonly abi = _abi;
  static createInterface(): ITradeFactoryExecutorInterface {
    return new utils.Interface(_abi) as ITradeFactoryExecutorInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ITradeFactoryExecutor {
    return new Contract(address, _abi, signerOrProvider) as ITradeFactoryExecutor;
  }
}