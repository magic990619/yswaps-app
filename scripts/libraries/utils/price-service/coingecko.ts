import { Address } from '@libraries/types';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { PriceProvider } from './price-provider';
import { Network } from '@ethersproject/networks';
import qs from 'qs';

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

type SimpleResponse = {
  [tokenAddress: string]: {
    usd: number;
  };
};

export default class Coingecko implements PriceProvider {
  private static _baseUrl: string = 'https://api.coingecko.com/api/v3/';
  // Assets platform ref.: https://api.coingecko.com/api/v3/asset_platforms
  private static _assetsPlatform: Map<number, string> = new Map([
    [1, 'ethereum'],
    [137, 'polygon-pos'],
    [250, 'fantom'],
  ]);

  async getPriceByContractAddress({ tokenAddress, network }: { tokenAddress: Address; network: Network }): Promise<number> {
    const params = {
      contract_addresses: tokenAddress,
      vs_currencies: 'usd',
    };
    const response = await axios.get(
      `${Coingecko._baseUrl}/simple/token_price/${Coingecko._assetsPlatform.get(network.chainId)}?${qs.stringify(params)}`
    );
    const pricesByTokenAddress = response.data as SimpleResponse;
    return pricesByTokenAddress[tokenAddress].usd;
  }
}
