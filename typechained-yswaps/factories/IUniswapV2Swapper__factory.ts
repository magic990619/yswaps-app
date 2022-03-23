/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IUniswapV2Swapper, IUniswapV2SwapperInterface } from '../IUniswapV2Swapper';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_tradeFactory',
        type: 'address',
      },
    ],
    name: 'TradeFactorySet',
    type: 'event',
  },
  {
    inputs: [],
    name: 'FACTORY',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ROUTER',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SWAPPER_TYPE',
    outputs: [
      {
        internalType: 'enum ISwapper.SwapperType',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tradeFactory',
        type: 'address',
      },
    ],
    name: 'setTradeFactory',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_receiver',
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
        name: '_amountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minAmountOut',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tradeFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IUniswapV2Swapper__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV2SwapperInterface {
    return new utils.Interface(_abi) as IUniswapV2SwapperInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV2Swapper {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV2Swapper;
  }
}
