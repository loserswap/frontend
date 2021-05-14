import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'LOWB',
    lpAddresses: {
      97: '',
      56: '0x843d4a358471547f51534e3e51fae91cb4dc3f28',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'LOWB_USDT',
    lpAddresses: {
      97: '',
      56: '0x7de838B7bc818B128bd435C80E21E4Fd2962C92f',
    },
    token: tokens.lowb,
    quoteToken: tokens.usdt,
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
 
  
]

export default farms
