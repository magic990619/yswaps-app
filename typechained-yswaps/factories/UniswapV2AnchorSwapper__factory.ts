/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { UniswapV2AnchorSwapper, UniswapV2AnchorSwapperInterface } from '../UniswapV2AnchorSwapper';

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
        name: '_weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_wanchor',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
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
    name: 'SLIPPAGE_PRECISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
    name: 'WANCHOR',
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
    name: 'WETH',
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
        name: '_maxSlippage',
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
  '0x6101206040526127106080523480156200001857600080fd5b5060405162001ee638038062001ee68339810160408190526200003b9162000147565b858580826001600160a01b038116620000b15760405162461bcd60e51b815260206004820152602e60248201527f676f7665726e61626c652f676f7665726e6f722d73686f756c642d6e6f742d6260448201526d652d7a65726f2d6164647265737360901b606482015260840160405180910390fd5b600080546001600160a01b0319166001600160a01b039283161790558116620000ed5760405163d92e233d60e01b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0392831617905595861660a052505091831660c052821660e052166101005250620001c89050565b80516001600160a01b03811681146200014257600080fd5b919050565b60008060008060008060c087890312156200016157600080fd5b6200016c876200012a565b95506200017c602088016200012a565b94506200018c604088016200012a565b93506200019c606088016200012a565b9250620001ac608088016200012a565b9150620001bc60a088016200012a565b90509295509295509295565b60805160a05160c05160e05161010051611c546200029260003960008181610176015281816106fb015281816107f9015281816108bb0152818161095201528181610d260152818161106601526113a601526000818161014f01528181610c0f01528181610e1f01528181610ef70152818161115f015261123701526000818161023a0152818161112f01528181611204015261131b01526000818161021301528181610def01528181610ec40152610fdb01526000818161019d015261097c0152611c546000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063ad5c464811610097578063e43581b811610066578063e43581b814610284578063e58bb639146102b6578063e5e19b4a146102be578063f235757f146102d157600080fd5b8063ad5c46481461020e578063ae3ac16914610235578063cd985af01461025c578063e3056a341461027157600080fd5b8063453943f0116100d3578063453943f01461019857806365210942146101cd578063a5d4096b146101e0578063a734f06e146101f357600080fd5b80630c340a24146101055780632db8c129146101355780632dd310001461014a57806332fe7b2614610171575b600080fd5b600054610118906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61014861014336600461172b565b6102e4565b005b6101187f000000000000000000000000000000000000000000000000000000000000000081565b6101187f000000000000000000000000000000000000000000000000000000000000000081565b6101bf7f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161012c565b6101486101db36600461176c565b610327565b6101486101ee366004611789565b6103cd565b61011873eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6101187f000000000000000000000000000000000000000000000000000000000000000081565b6101187f000000000000000000000000000000000000000000000000000000000000000081565b610264600181565b60405161012c9190611847565b600154610118906001600160a01b031681565b6102a661029236600461176c565b6000546001600160a01b0391821691161490565b604051901515815260200161012c565b61014861041d565b600454610118906001600160a01b031681565b6101486102df36600461176c565b610481565b6000546001600160a01b031633146103175760405162461bcd60e51b815260040161030e9061186f565b60405180910390fd5b6103228383836104b7565b505050565b6000546001600160a01b031633146103515760405162461bcd60e51b815260040161030e9061186f565b6001600160a01b0381166103785760405163d92e233d60e01b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527fbda986fea33634f76bd215bacd0d368610edf55143c3ca42bd0f55040ad870b5906020015b60405180910390a150565b6004546001600160a01b031633146103f85760405163ea8e4eb560e01b815260040160405180910390fd5b6104058787878787610659565b610414878787878787876106cb565b50505050505050565b6001546001600160a01b031633146104775760405162461bcd60e51b815260206004820181905260248201527f676f7665726e61626c652f6f6e6c792d70656e64696e672d676f7665726e6f72604482015260640161030e565b61047f610a53565b565b6000546001600160a01b031633146104ab5760405162461bcd60e51b815260040161030e9061186f565b6104b481610aa3565b50565b6001600160a01b0383166105255760405162461bcd60e51b815260206004820152602f60248201527f636f6c6c65637461626c652d647573742f63616e742d73656e642d647573742d60448201526e746f2d7a65726f2d6164647265737360881b606482015260840161030e565b610530600283610b65565b156105945760405162461bcd60e51b815260206004820152602e60248201527f636f6c6c65637461626c652d647573742f746f6b656e2d69732d706172742d6f60448201526d198b5d1a194b5c1c9bdd1bd8dbdb60921b606482015260840161030e565b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156105f5576040516001600160a01b0384169082156108fc029083906000818181858888f193505050501580156105ef573d6000803e3d6000fd5b50610609565b6106096001600160a01b0383168483610b8a565b604080516001600160a01b038086168252841660208201529081018290527f1e34c1aee8e83c2dcc14c21bb4bfeea7f46c0c998cb797ac7cc4d7a18f5c656b9060600160405180910390a1505050565b6001600160a01b038516158061067657506001600160a01b038416155b8061068857506001600160a01b038316155b156106a65760405163d92e233d60e01b815260040160405180910390fd5b816106c457604051631f2a200560e01b815260040160405180910390fd5b5050505050565b6060600082156107b3576106e183850185611911565b60405163d06ca61f60e01b81529092506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d06ca61f9061073290899086906004016119e9565b60006040518083038186803b15801561074a57600080fd5b505afa15801561075e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107869190810190611a02565b600183516107949190611a9e565b815181106107a4576107a4611ab5565b602002602001015190506107c4565b6107be888888610bdc565b90925090505b816000815181106107d7576107d7611ab5565b602090810291909101015160405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152600060248301529091169063095ea7b390604401602060405180830381600087803b15801561084d57600080fd5b505af1158015610861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108859190611acb565b508160008151811061089957610899611ab5565b602090810291909101015160405163095ea7b360e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018990529091169063095ea7b390604401602060405180830381600087803b15801561090f57600080fd5b505af1158015610923573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109479190611acb565b506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166338ed17398760647f00000000000000000000000000000000000000000000000000000000000000006109a58a87611aed565b6109af9190611b0c565b6109b99190611b0c565b6109c39085611a9e565b858d6109d142610708611b2e565b6040518663ffffffff1660e01b81526004016109f1959493929190611b46565b600060405180830381600087803b158015610a0b57600080fd5b505af1158015610a1f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a479190810190611a02565b50505050505050505050565b60018054600080546001600160a01b03199081166001600160a01b0384161782559091169091556040517f7880f0fcc848e1f26e461654b100a69f8d0641e29aa29f6596c6afadbb36b5ea9190a1565b6001600160a01b038116610b175760405162461bcd60e51b815260206004820152603560248201527f676f7665726e61626c652f70656e64696e672d676f7665726e6f722d73686f756044820152746c642d6e6f742d62652d7a65726f2d61646472657360581b606482015260840161030e565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f56bddfa0cee9697cebddf9acd7f23dc6583663b05e007b877056d05017994def906020016103c2565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526103229084906114b5565b60405163e6a4390560e01b81526001600160a01b03848116600483015283811660248301526060916000918291849183917f00000000000000000000000000000000000000000000000000000000000000009091169063e6a439059060440160206040518083038186803b158015610c5357600080fd5b505afa158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8b9190611b82565b6001600160a01b031614610dd05760408051600280825260608201835290916020830190803683370190505090508681600081518110610ccd57610ccd611ab5565b60200260200101906001600160a01b031690816001600160a01b0316815250508581600181518110610d0157610d01611ab5565b6001600160a01b03928316602091820292909201015260405163d06ca61f60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063d06ca61f90610d5f90889085906004016119e9565b60006040518083038186803b158015610d7757600080fd5b505afa158015610d8b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610db39190810190611a02565b600181518110610dc557610dc5611ab5565b602002602001015191505b60405163e6a4390560e01b81526001600160a01b0388811660048301527f00000000000000000000000000000000000000000000000000000000000000008116602483015260009160609183917f00000000000000000000000000000000000000000000000000000000000000009091169063e6a439059060440160206040518083038186803b158015610e6357600080fd5b505afa158015610e77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9b9190611b82565b6001600160a01b031614158015610f7f575060405163e6a4390560e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015289811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063e6a439059060440160206040518083038186803b158015610f3b57600080fd5b505afa158015610f4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f739190611b82565b6001600160a01b031614155b15611110576040805160038082526080820190925290602082016060803683370190505090508881600081518110610fb957610fb9611ab5565b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061100d5761100d611ab5565b60200260200101906001600160a01b031690816001600160a01b031681525050878160028151811061104157611041611ab5565b6001600160a01b03928316602091820292909201015260405163d06ca61f60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063d06ca61f9061109f908a9085906004016119e9565b60006040518083038186803b1580156110b757600080fd5b505afa1580156110cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110f39190810190611a02565b60028151811061110557611105611ab5565b602002602001015191505b60405163e6a4390560e01b81526001600160a01b038a811660048301527f00000000000000000000000000000000000000000000000000000000000000008116602483015260009160609183917f00000000000000000000000000000000000000000000000000000000000000009091169063e6a439059060440160206040518083038186803b1580156111a357600080fd5b505afa1580156111b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111db9190611b82565b6001600160a01b0316141580156112bf575060405163e6a4390560e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301528b811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063e6a439059060440160206040518083038186803b15801561127b57600080fd5b505afa15801561128f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b39190611b82565b6001600160a01b031614155b15611450576040805160038082526080820190925290602082016060803683370190505090508a816000815181106112f9576112f9611ab5565b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000008160018151811061134d5761134d611ab5565b60200260200101906001600160a01b031690816001600160a01b031681525050898160028151811061138157611381611ab5565b6001600160a01b03928316602091820292909201015260405163d06ca61f60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063d06ca61f906113df908c9085906004016119e9565b60006040518083038186803b1580156113f757600080fd5b505afa15801561140b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114339190810190611a02565b60028151811061144557611445611ab5565b602002602001015191505b8561146d61145e8887611587565b6114688986611587565b611587565b141561148357509295509293506114ad92505050565b8361148e8584611587565b14156114a457509095509093506114ad92505050565b96509450505050505b935093915050565b600061150a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661159e9092919063ffffffff16565b80519091501561032257808060200190518101906115289190611acb565b6103225760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161030e565b6000818310156115975781610b83565b5090919050565b60606115ad84846000856115b5565b949350505050565b6060824710156116165760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161030e565b843b6116645760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161030e565b600080866001600160a01b031685876040516116809190611bcf565b60006040518083038185875af1925050503d80600081146116bd576040519150601f19603f3d011682016040523d82523d6000602084013e6116c2565b606091505b50915091506116d28282866116dd565b979650505050505050565b606083156116ec575081610b83565b8251156116fc5782518084602001fd5b8160405162461bcd60e51b815260040161030e9190611beb565b6001600160a01b03811681146104b457600080fd5b60008060006060848603121561174057600080fd5b833561174b81611716565b9250602084013561175b81611716565b929592945050506040919091013590565b60006020828403121561177e57600080fd5b8135610b8381611716565b600080600080600080600060c0888a0312156117a457600080fd5b87356117af81611716565b965060208801356117bf81611716565b955060408801356117cf81611716565b9450606088013593506080880135925060a088013567ffffffffffffffff808211156117fa57600080fd5b818a0191508a601f83011261180e57600080fd5b81358181111561181d57600080fd5b8b602082850101111561182f57600080fd5b60208301945080935050505092959891949750929550565b602081016002831061186957634e487b7160e01b600052602160045260246000fd5b91905290565b60208082526018908201527f676f7665726e61626c652f6f6e6c792d676f7665726e6f720000000000000000604082015260600190565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156118e5576118e56118a6565b604052919050565b600067ffffffffffffffff821115611907576119076118a6565b5060051b60200190565b6000602080838503121561192457600080fd5b823567ffffffffffffffff81111561193b57600080fd5b8301601f8101851361194c57600080fd5b803561195f61195a826118ed565b6118bc565b81815260059190911b8201830190838101908783111561197e57600080fd5b928401925b828410156116d257833561199681611716565b82529284019290840190611983565b600081518084526020808501945080840160005b838110156119de5781516001600160a01b0316875295820195908201906001016119b9565b509495945050505050565b8281526040602082015260006115ad60408301846119a5565b60006020808385031215611a1557600080fd5b825167ffffffffffffffff811115611a2c57600080fd5b8301601f81018513611a3d57600080fd5b8051611a4b61195a826118ed565b81815260059190911b82018301908381019087831115611a6a57600080fd5b928401925b828410156116d257835182529284019290840190611a6f565b634e487b7160e01b600052601160045260246000fd5b600082821015611ab057611ab0611a88565b500390565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611add57600080fd5b81518015158114610b8357600080fd5b6000816000190483118215151615611b0757611b07611a88565b500290565b600082611b2957634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611b4157611b41611a88565b500190565b85815284602082015260a060408201526000611b6560a08301866119a5565b6001600160a01b0394909416606083015250608001529392505050565b600060208284031215611b9457600080fd5b8151610b8381611716565b60005b83811015611bba578181015183820152602001611ba2565b83811115611bc9576000848401525b50505050565b60008251611be1818460208701611b9f565b9190910192915050565b6020815260008251806020840152611c0a816040850160208701611b9f565b601f01601f1916919091016040019291505056fea264697066735822122052a867fdcd58e1041cc25dda530286cf77e3fcf4d298f224a3f792ebaa00b9d764736f6c63430008090033';

type UniswapV2AnchorSwapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: UniswapV2AnchorSwapperConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2AnchorSwapper__factory extends ContractFactory {
  constructor(...args: UniswapV2AnchorSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'UniswapV2AnchorSwapper';
  }

  deploy(
    _governor: string,
    _tradeFactory: string,
    _weth: string,
    _wanchor: string,
    _factory: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2AnchorSwapper> {
    return super.deploy(_governor, _tradeFactory, _weth, _wanchor, _factory, _router, overrides || {}) as Promise<UniswapV2AnchorSwapper>;
  }
  getDeployTransaction(
    _governor: string,
    _tradeFactory: string,
    _weth: string,
    _wanchor: string,
    _factory: string,
    _router: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_governor, _tradeFactory, _weth, _wanchor, _factory, _router, overrides || {});
  }
  attach(address: string): UniswapV2AnchorSwapper {
    return super.attach(address) as UniswapV2AnchorSwapper;
  }
  connect(signer: Signer): UniswapV2AnchorSwapper__factory {
    return super.connect(signer) as UniswapV2AnchorSwapper__factory;
  }
  static readonly contractName: 'UniswapV2AnchorSwapper';
  public readonly contractName: 'UniswapV2AnchorSwapper';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2AnchorSwapperInterface {
    return new utils.Interface(_abi) as UniswapV2AnchorSwapperInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): UniswapV2AnchorSwapper {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2AnchorSwapper;
  }
}
