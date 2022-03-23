export type SUPPORTED_NETWORKS_IDS = 1 | 3 | 4 | 5 | 137 | 250 | 42161;
export type SUPPORTED_NETWORKS = 'ethereum' | 'rinkeby' | 'ropsten' | 'goerli' | 'polygon' | 'fantom' | 'arbitrumOne';

export const NETWORK_ID_NAMES: { [id in SUPPORTED_NETWORKS_IDS]: SUPPORTED_NETWORKS } = {
  1: 'ethereum',
  3: 'ropsten',
  4: 'rinkeby',
  5: 'goerli',
  137: 'polygon',
  250: 'fantom',
  42161: 'arbitrumOne',
};

export const NETWORK_NAME_IDS: { [network in SUPPORTED_NETWORKS]: SUPPORTED_NETWORKS_IDS } = {
  ethereum: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  polygon: 137,
  fantom: 250,
  arbitrumOne: 42161,
};

export const DEFAULT_NETWORK_RPC: { [network in SUPPORTED_NETWORKS]: string } = {
  ethereum: '',
  rinkeby: '',
  ropsten: '',
  goerli: '',
  polygon: 'https://polygon-rpc.com/',
  fantom: 'https://rpc.ftm.tools/',
  arbitrumOne: 'https://arb1.arbitrum.io/rpc',
};
