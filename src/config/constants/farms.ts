import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x843d4a358471547f51534e3e51fae91cb4dc3f28',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  
  {
    pid: 2,
    lpSymbol: 'LOWB_USDT',
    lpAddresses: {
      97: '',
      56: '0x3642b52519ba81fd8a204b306d2369a0cc1bc612',
    },
    token: tokens.lowb,
    quoteToken: tokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
]

export default farms
