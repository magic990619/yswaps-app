/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { AsyncSwapperForTest, AsyncSwapperForTestInterface } from '../AsyncSwapperForTest';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_governor',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tradeFactory',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'NotAuthorized',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'DustSent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'GovernorAccepted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_tokenIn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_tokenOut',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amountIn',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'MyInternalExecuteSwap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'pendingGovernor',
        type: 'address',
      },
    ],
    name: 'PendingGovernorSet',
    type: 'event',
  },
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
    name: 'ETH_ADDRESS',
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
    inputs: [],
    name: 'acceptGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'governor',
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
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'isGovernor',
    outputs: [
      {
        internalType: 'bool',
        name: '_isGovernor',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingGovernor',
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
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'sendDust',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pendingGovernor',
        type: 'address',
      },
    ],
    name: 'setPendingGovernor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '__receivedAmount',
        type: 'uint256',
      },
    ],
    name: 'setReceivedAmount',
    outputs: [],
    stateMutability: 'nonpayable',
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

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051610e21380380610e2183398101604081905261002f91610125565b818180826001600160a01b0381166100a45760405162461bcd60e51b815260206004820152602e60248201527f676f7665726e61626c652f676f7665726e6f722d73686f756c642d6e6f742d6260448201526d652d7a65726f2d6164647265737360901b606482015260840160405180910390fd5b600080546001600160a01b0319166001600160a01b0392831617905581166100df5760405163d92e233d60e01b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b03929092169190911790555061015892505050565b80516001600160a01b038116811461012057600080fd5b919050565b6000806040838503121561013857600080fd5b61014183610109565b915061014f60208401610109565b90509250929050565b610cba806101676000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063cd985af011610071578063cd985af014610152578063e3056a3414610167578063e43581b81461017a578063e58bb639146101ac578063e5e19b4a146101b4578063f235757f146101c757600080fd5b80630c340a24146100b95780632db8c129146100e95780633e9cc88d146100fe5780636521094214610111578063a5d4096b14610124578063a734f06e14610137575b600080fd5b6000546100cc906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100fc6100f73660046109ff565b6101da565b005b6100fc61010c366004610a3b565b600555565b6100fc61011f366004610a54565b61021d565b6100fc610132366004610a6f565b6102c3565b6100cc73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b61015a600081565b6040516100e09190610b27565b6001546100cc906001600160a01b031681565b61019c610188366004610a54565b6000546001600160a01b0391821691161490565b60405190151581526020016100e0565b6100fc610312565b6004546100cc906001600160a01b031681565b6100fc6101d5366004610a54565b610376565b6000546001600160a01b0316331461020d5760405162461bcd60e51b815260040161020490610b4f565b60405180910390fd5b6102188383836103ac565b505050565b6000546001600160a01b031633146102475760405162461bcd60e51b815260040161020490610b4f565b6001600160a01b03811661026e5760405163d92e233d60e01b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527fbda986fea33634f76bd215bacd0d368610edf55143c3ca42bd0f55040ad870b5906020015b60405180910390a150565b6004546001600160a01b031633146102ee5760405163ea8e4eb560e01b815260040160405180910390fd5b6102fb878787878761054e565b6103098787878786866105de565b50505050505050565b6001546001600160a01b0316331461036c5760405162461bcd60e51b815260206004820181905260248201527f676f7665726e61626c652f6f6e6c792d70656e64696e672d676f7665726e6f726044820152606401610204565b610374610627565b565b6000546001600160a01b031633146103a05760405162461bcd60e51b815260040161020490610b4f565b6103a981610677565b50565b6001600160a01b03831661041a5760405162461bcd60e51b815260206004820152602f60248201527f636f6c6c65637461626c652d647573742f63616e742d73656e642d647573742d60448201526e746f2d7a65726f2d6164647265737360881b6064820152608401610204565b610425600283610739565b156104895760405162461bcd60e51b815260206004820152602e60248201527f636f6c6c65637461626c652d647573742f746f6b656e2d69732d706172742d6f60448201526d198b5d1a194b5c1c9bdd1bd8dbdb60921b6064820152608401610204565b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156104ea576040516001600160a01b0384169082156108fc029083906000818181858888f193505050501580156104e4573d6000803e3d6000fd5b506104fe565b6104fe6001600160a01b038316848361075e565b604080516001600160a01b038086168252841660208201529081018290527f1e34c1aee8e83c2dcc14c21bb4bfeea7f46c0c998cb797ac7cc4d7a18f5c656b9060600160405180910390a1505050565b6001600160a01b038516158061056b57506001600160a01b038416155b8061057d57506001600160a01b038316155b1561059b5760405163d92e233d60e01b815260040160405180910390fd5b816105b957604051631f2a200560e01b815260040160405180910390fd5b806105d757604051631f2a200560e01b815260040160405180910390fd5b5050505050565b7f7a6e60fa34ac064c5b674886381f693b664629111c48d6e7a5cef7258f6e3ec486868686868660405161061796959493929190610b86565b60405180910390a1505050505050565b60018054600080546001600160a01b03199081166001600160a01b0384161782559091169091556040517f7880f0fcc848e1f26e461654b100a69f8d0641e29aa29f6596c6afadbb36b5ea9190a1565b6001600160a01b0381166106eb5760405162461bcd60e51b815260206004820152603560248201527f676f7665726e61626c652f70656e64696e672d676f7665726e6f722d73686f756044820152746c642d6e6f742d62652d7a65726f2d61646472657360581b6064820152608401610204565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f56bddfa0cee9697cebddf9acd7f23dc6583663b05e007b877056d05017994def906020016102b8565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610218928692916000916107ee91851690849061086b565b805190915015610218578080602001905181019061080c9190610be3565b6102185760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610204565b606061087a8484600085610882565b949350505050565b6060824710156108e35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610204565b843b6109315760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610204565b600080866001600160a01b0316858760405161094d9190610c35565b60006040518083038185875af1925050503d806000811461098a576040519150601f19603f3d011682016040523d82523d6000602084013e61098f565b606091505b509150915061099f8282866109aa565b979650505050505050565b606083156109b9575081610757565b8251156109c95782518084602001fd5b8160405162461bcd60e51b81526004016102049190610c51565b80356001600160a01b03811681146109fa57600080fd5b919050565b600080600060608486031215610a1457600080fd5b610a1d846109e3565b9250610a2b602085016109e3565b9150604084013590509250925092565b600060208284031215610a4d57600080fd5b5035919050565b600060208284031215610a6657600080fd5b610757826109e3565b600080600080600080600060c0888a031215610a8a57600080fd5b610a93886109e3565b9650610aa1602089016109e3565b9550610aaf604089016109e3565b9450606088013593506080880135925060a088013567ffffffffffffffff80821115610ada57600080fd5b818a0191508a601f830112610aee57600080fd5b813581811115610afd57600080fd5b8b6020828501011115610b0f57600080fd5b60208301945080935050505092959891949750929550565b6020810160028310610b4957634e487b7160e01b600052602160045260246000fd5b91905290565b60208082526018908201527f676f7665726e61626c652f6f6e6c792d676f7665726e6f720000000000000000604082015260600190565b6001600160a01b0387811682528681166020830152851660408201526060810184905260a06080820181905281018290526000828460c0840137600060c0848401015260c0601f19601f8501168301019050979650505050505050565b600060208284031215610bf557600080fd5b8151801515811461075757600080fd5b60005b83811015610c20578181015183820152602001610c08565b83811115610c2f576000848401525b50505050565b60008251610c47818460208701610c05565b9190910192915050565b6020815260008251806020840152610c70816040850160208701610c05565b601f01601f1916919091016040019291505056fea2646970667358221220283c78eb174c252c8e4cb968a720062454494ab349bd45473ddf60a4995e975d64736f6c63430008090033';

type AsyncSwapperForTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: AsyncSwapperForTestConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AsyncSwapperForTest__factory extends ContractFactory {
  constructor(...args: AsyncSwapperForTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'AsyncSwapperForTest';
  }

  deploy(_governor: string, _tradeFactory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<AsyncSwapperForTest> {
    return super.deploy(_governor, _tradeFactory, overrides || {}) as Promise<AsyncSwapperForTest>;
  }
  getDeployTransaction(
    _governor: string,
    _tradeFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_governor, _tradeFactory, overrides || {});
  }
  attach(address: string): AsyncSwapperForTest {
    return super.attach(address) as AsyncSwapperForTest;
  }
  connect(signer: Signer): AsyncSwapperForTest__factory {
    return super.connect(signer) as AsyncSwapperForTest__factory;
  }
  static readonly contractName: 'AsyncSwapperForTest';
  public readonly contractName: 'AsyncSwapperForTest';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AsyncSwapperForTestInterface {
    return new utils.Interface(_abi) as AsyncSwapperForTestInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AsyncSwapperForTest {
    return new Contract(address, _abi, signerOrProvider) as AsyncSwapperForTest;
  }
}
