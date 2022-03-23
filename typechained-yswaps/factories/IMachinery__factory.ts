/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IMachinery, IMachineryInterface } from '../IMachinery';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'mechanic',
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
    inputs: [],
    name: 'mechanicsRegistry',
    outputs: [
      {
        internalType: 'address',
        name: '_mechanicsRegistry',
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
        name: '_mechanicsRegistry',
        type: 'address',
      },
    ],
    name: 'setMechanicsRegistry',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class IMachinery__factory {
  static readonly abi = _abi;
  static createInterface(): IMachineryInterface {
    return new utils.Interface(_abi) as IMachineryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMachinery {
    return new Contract(address, _abi, signerOrProvider) as IMachinery;
  }
}