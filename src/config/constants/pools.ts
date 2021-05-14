import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.lowb,
    earningToken: tokens.lowb,
    contractAddress: {
      97: '',
      56: '0x4b6080917a8333D5DB16345642D9899e9A870d9f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '300',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
