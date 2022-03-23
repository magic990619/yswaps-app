/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { ZRXSwapper, ZRXSwapperInterface } from '../ZRXSwapper';

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
      {
        internalType: 'address',
        name: '_ZRX',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'IncorrectSwapInformation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotAuthorized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TradeReverted',
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
    name: 'ZRX',
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
  '0x60a060405234801561001057600080fd5b5060405161119838038061119883398101604081905261002f91610128565b828280826001600160a01b0381166100a45760405162461bcd60e51b815260206004820152602e60248201527f676f7665726e61626c652f676f7665726e6f722d73686f756c642d6e6f742d6260448201526d652d7a65726f2d6164647265737360901b606482015260840160405180910390fd5b600080546001600160a01b0319166001600160a01b0392831617905581166100df5760405163d92e233d60e01b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b03928316179055929092166080525061016b92505050565b80516001600160a01b038116811461012357600080fd5b919050565b60008060006060848603121561013d57600080fd5b6101468461010c565b92506101546020850161010c565b91506101626040850161010c565b90509250925092565b608051610ffd61019b60003960008181610159015281816106830152818161072a01526107ba0152610ffd6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063d40fa8bf11610071578063d40fa8bf14610154578063e3056a341461017b578063e43581b81461018e578063e58bb639146101c0578063e5e19b4a146101c8578063f235757f146101db57600080fd5b80630c340a24146100b95780632db8c129146100e957806365210942146100fe578063a5d4096b14610111578063a734f06e14610124578063cd985af01461013f575b600080fd5b6000546100cc906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100fc6100f7366004610d6a565b6101ee565b005b6100fc61010c366004610da6565b610231565b6100fc61011f366004610dc1565b6102d7565b6100cc73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b610147600081565b6040516100e09190610e79565b6100cc7f000000000000000000000000000000000000000000000000000000000000000081565b6001546100cc906001600160a01b031681565b6101b061019c366004610da6565b6000546001600160a01b0391821691161490565b60405190151581526020016100e0565b6100fc610326565b6004546100cc906001600160a01b031681565b6100fc6101e9366004610da6565b61038a565b6000546001600160a01b031633146102215760405162461bcd60e51b815260040161021890610ea1565b60405180910390fd5b61022c8383836103c0565b505050565b6000546001600160a01b0316331461025b5760405162461bcd60e51b815260040161021890610ea1565b6001600160a01b0381166102825760405163d92e233d60e01b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527fbda986fea33634f76bd215bacd0d368610edf55143c3ca42bd0f55040ad870b5906020015b60405180910390a150565b6004546001600160a01b031633146103025760405163ea8e4eb560e01b815260040160405180910390fd5b61030f8787878787610562565b61031d8787878786866105f2565b50505050505050565b6001546001600160a01b031633146103805760405162461bcd60e51b815260206004820181905260248201527f676f7665726e61626c652f6f6e6c792d70656e64696e672d676f7665726e6f726044820152606401610218565b610388610992565b565b6000546001600160a01b031633146103b45760405162461bcd60e51b815260040161021890610ea1565b6103bd816109e2565b50565b6001600160a01b03831661042e5760405162461bcd60e51b815260206004820152602f60248201527f636f6c6c65637461626c652d647573742f63616e742d73656e642d647573742d60448201526e746f2d7a65726f2d6164647265737360881b6064820152608401610218565b610439600283610aa4565b1561049d5760405162461bcd60e51b815260206004820152602e60248201527f636f6c6c65637461626c652d647573742f746f6b656e2d69732d706172742d6f60448201526d198b5d1a194b5c1c9bdd1bd8dbdb60921b6064820152608401610218565b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156104fe576040516001600160a01b0384169082156108fc029083906000818181858888f193505050501580156104f8573d6000803e3d6000fd5b50610512565b6105126001600160a01b0383168483610ac9565b604080516001600160a01b038086168252841660208201529081018290527f1e34c1aee8e83c2dcc14c21bb4bfeea7f46c0c998cb797ac7cc4d7a18f5c656b9060600160405180910390a1505050565b6001600160a01b038516158061057f57506001600160a01b038416155b8061059157506001600160a01b038316155b156105af5760405163d92e233d60e01b815260040160405180910390fd5b816105cd57604051631f2a200560e01b815260040160405180910390fd5b806105eb57604051631f2a200560e01b815260040160405180910390fd5b5050505050565b6040516370a0823160e01b81523060048201526000906001600160a01b038716906370a082319060240160206040518083038186803b15801561063457600080fd5b505afa158015610648573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066c9190610ed8565b60405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152600060248301529192509087169063095ea7b390604401602060405180830381600087803b1580156106da57600080fd5b505af11580156106ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107129190610ef1565b5060405163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820186905287169063095ea7b390604401602060405180830381600087803b15801561077d57600080fd5b505af1158015610791573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b59190610ef1565b5060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316600085856040516107f4929190610f13565b60006040518083038185875af1925050503d8060008114610831576040519150601f19603f3d011682016040523d82523d6000602084013e610836565b606091505b5050905080610858576040516332e004e360e11b815260040160405180910390fd5b6040516370a0823160e01b815230600482015285906001600160a01b038916906370a082319060240160206040518083038186803b15801561089957600080fd5b505afa1580156108ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d19190610ed8565b6108db9084610f23565b10156108fa5760405163e625f81360e01b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526109889089906001600160a01b038916906370a082319060240160206040518083038186803b15801561093f57600080fd5b505afa158015610953573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109779190610ed8565b6001600160a01b0389169190610ac9565b5050505050505050565b60018054600080546001600160a01b03199081166001600160a01b0384161782559091169091556040517f7880f0fcc848e1f26e461654b100a69f8d0641e29aa29f6596c6afadbb36b5ea9190a1565b6001600160a01b038116610a565760405162461bcd60e51b815260206004820152603560248201527f676f7665726e61626c652f70656e64696e672d676f7665726e6f722d73686f756044820152746c642d6e6f742d62652d7a65726f2d61646472657360581b6064820152608401610218565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f56bddfa0cee9697cebddf9acd7f23dc6583663b05e007b877056d05017994def906020016102cc565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261022c92869291600091610b59918516908490610bd6565b80519091501561022c5780806020019051810190610b779190610ef1565b61022c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610218565b6060610be58484600085610bed565b949350505050565b606082471015610c4e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610218565b843b610c9c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610218565b600080866001600160a01b03168587604051610cb89190610f78565b60006040518083038185875af1925050503d8060008114610cf5576040519150601f19603f3d011682016040523d82523d6000602084013e610cfa565b606091505b5091509150610d0a828286610d15565b979650505050505050565b60608315610d24575081610ac2565b825115610d345782518084602001fd5b8160405162461bcd60e51b81526004016102189190610f94565b80356001600160a01b0381168114610d6557600080fd5b919050565b600080600060608486031215610d7f57600080fd5b610d8884610d4e565b9250610d9660208501610d4e565b9150604084013590509250925092565b600060208284031215610db857600080fd5b610ac282610d4e565b600080600080600080600060c0888a031215610ddc57600080fd5b610de588610d4e565b9650610df360208901610d4e565b9550610e0160408901610d4e565b9450606088013593506080880135925060a088013567ffffffffffffffff80821115610e2c57600080fd5b818a0191508a601f830112610e4057600080fd5b813581811115610e4f57600080fd5b8b6020828501011115610e6157600080fd5b60208301945080935050505092959891949750929550565b6020810160028310610e9b57634e487b7160e01b600052602160045260246000fd5b91905290565b60208082526018908201527f676f7665726e61626c652f6f6e6c792d676f7665726e6f720000000000000000604082015260600190565b600060208284031215610eea57600080fd5b5051919050565b600060208284031215610f0357600080fd5b81518015158114610ac257600080fd5b8183823760009101908152919050565b600082821015610f4357634e487b7160e01b600052601160045260246000fd5b500390565b60005b83811015610f63578181015183820152602001610f4b565b83811115610f72576000848401525b50505050565b60008251610f8a818460208701610f48565b9190910192915050565b6020815260008251806020840152610fb3816040850160208701610f48565b601f01601f1916919091016040019291505056fea2646970667358221220f2a68736fd78fc5cecaa38ddb188b6a50d3869e013da71e34b661573d8d30ef564736f6c63430008090033';

type ZRXSwapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: ZRXSwapperConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZRXSwapper__factory extends ContractFactory {
  constructor(...args: ZRXSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'ZRXSwapper';
  }

  deploy(
    _governor: string,
    _tradeFactory: string,
    _ZRX: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZRXSwapper> {
    return super.deploy(_governor, _tradeFactory, _ZRX, overrides || {}) as Promise<ZRXSwapper>;
  }
  getDeployTransaction(
    _governor: string,
    _tradeFactory: string,
    _ZRX: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_governor, _tradeFactory, _ZRX, overrides || {});
  }
  attach(address: string): ZRXSwapper {
    return super.attach(address) as ZRXSwapper;
  }
  connect(signer: Signer): ZRXSwapper__factory {
    return super.connect(signer) as ZRXSwapper__factory;
  }
  static readonly contractName: 'ZRXSwapper';
  public readonly contractName: 'ZRXSwapper';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZRXSwapperInterface {
    return new utils.Interface(_abi) as ZRXSwapperInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ZRXSwapper {
    return new Contract(address, _abi, signerOrProvider) as ZRXSwapper;
  }
}
