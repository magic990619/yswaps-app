/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { TradeFactoryExecutor, TradeFactoryExecutorInterface } from '../TradeFactoryExecutor';

const _abi = [
  {
    inputs: [],
    name: 'AllowanceShouldBeZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAmountOut',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSwapper',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTrade',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotAsyncSwapper',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotSyncSwapper',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SwapperInUse',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroSlippage',
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
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
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
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MASTER_ADMIN',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'STRATEGY',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'STRATEGY_MANAGER',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SWAPPER_ADDER',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SWAPPER_SETTER',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '__swappers',
        type: 'address[]',
      },
    ],
    name: 'addSwappers',
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
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_mechanic',
        type: 'address',
      },
    ],
    name: 'isMechanic',
    outputs: [
      {
        internalType: 'bool',
        name: '_isMechanic',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_swapper',
        type: 'address',
      },
    ],
    name: 'isSwapper',
    outputs: [
      {
        internalType: 'bool',
        name: '_isSwapper',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mechanicsRegistry',
    outputs: [
      {
        internalType: 'address',
        name: '_mechanicRegistry',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '__swappers',
        type: 'address[]',
      },
    ],
    name: 'removeSwappers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '__mechanicsRegistry',
        type: 'address',
      },
    ],
    name: 'setMechanicsRegistry',
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
        name: '_swapper',
        type: 'address',
      },
    ],
    name: 'setStrategySyncSwapper',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'strategySyncSwapper',
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
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_swapper',
        type: 'address',
      },
    ],
    name: 'swapperStrategies',
    outputs: [
      {
        internalType: 'address[]',
        name: '_strategies',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'swappers',
    outputs: [
      {
        internalType: 'address[]',
        name: '_swappersList',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class TradeFactoryExecutor__factory {
  static readonly abi = _abi;
  static createInterface(): TradeFactoryExecutorInterface {
    return new utils.Interface(_abi) as TradeFactoryExecutorInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TradeFactoryExecutor {
    return new Contract(address, _abi, signerOrProvider) as TradeFactoryExecutor;
  }
}
