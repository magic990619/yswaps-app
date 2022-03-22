import { defineConfig } from '@dethcrypto/eth-sdk';

export default defineConfig({
  contracts: {
    mainnet: {
      curveFi: '0x98638FAcf9a3865cd033F36548713183f6996122',
      yvBoostVault: '0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a',
    },
  },
});
