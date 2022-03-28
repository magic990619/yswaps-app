import { then, when } from '@test-utils/bdd';

describe('Price Service', () => {
  describe('init', () => {
    when('it was not yet initialized', () => {
      then('creates instance and sets singleton');
    });
    when('it was already initialized', () => {
      then('returns singleton');
    });
  });

  describe('getPriceByContractAddress', () => {
    when('all price providers fail to get price', () => {
      then('returns 0');
    });
    when('one price provider fails to get price', () => {
      then('queries next one');
    });
    when('price provider returns value', () => {
      then('returns price provider value');
    });
  });
});
