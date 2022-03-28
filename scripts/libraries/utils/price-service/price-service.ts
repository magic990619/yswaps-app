import Coingecko from './coingecko';
import { PriceProvider } from './price-provider';
import { Network } from '@ethersproject/networks';

export default class PriceService {
  private static _singleton: PriceService;
  private _priceProviders: Array<PriceProvider> = new Array(new Coingecko());

  protected _network: Network;

  constructor({ network }: { network: Network }) {
    this._network = network;
  }

  static init({ network }: { network: Network }): PriceService {
    if (!this._singleton) {
      this._singleton = new PriceService({ network });
    }
    return this._singleton;
  }

  public async getPriceByContractAddress(tokenAddress: string): Promise<number> {
    let price = 0;
    for (let i = 0; i < this._priceProviders.length && price == 0; i++) {
      try {
        price = await this._priceProviders[i].getPriceByContractAddress({ tokenAddress, network: this._network });
      } catch (err: any) {
        console.error(`[PriceService] Price provider at ${i} failed to find price by contract address with error: ${err.message}`);
      }
    }
    // TODO: Should throw if price == 0?
    return price;
  }
}
