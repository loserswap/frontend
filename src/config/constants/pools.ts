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

  {
    sousId: 1,
    stakingToken: tokens.lowb,
    earningToken: tokens.poorb,
    contractAddress: {
      97: '',
      56: '0x2b3c0de82B436Be41929ae7fC927773b5c91D1d0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1388',
    sortOrder: 5,
    isFinished: true,
  },
  {
    sousId: 2,
    stakingToken: tokens.lowb,
    earningToken: tokens.saob,
    contractAddress: {
      97: '',
      56: '0x41B70e62cBe6Aabbe1c6f7b1C7691Bc2C789ac28',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '138888',
    sortOrder: 20,
    isFinished: true,
  },
  {
    sousId: 3,
    stakingToken: tokens.lowb,
    earningToken: tokens.airb,
    contractAddress: {
      97: '',
      56: '0xA50C3b75faB29d0A872eF53f9E5F54EeadfA1906',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '34722',
    sortOrder: 7,
    isFinished: true,
  },
  {
    sousId: 4,
    stakingToken: tokens.lowb,
    earningToken: tokens.rdc,
    contractAddress: {
      97: '',
      56: '0xf606EB135AA1f75A0215f8d4d30eB5D5A939F2f5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '520',
    sortOrder: 8,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.lowb,
    earningToken: tokens.ecare,
    contractAddress: {
      97: '',
      56: '0x04540FD447e100Cb556BAd024F836e9BdE538B04',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1736',
    sortOrder: 9,
    isFinished: true,
  },
  {
    sousId: 6,
    stakingToken: tokens.lowb,
    earningToken: tokens.musk,
    contractAddress: {
      97: '',
      56: '0x6038aD0E6fFDcaC33B15B559F869cBa8313eB003',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10416',
    sortOrder: 10,
    isFinished: false,
  },

  // {
  //   sousId: 6,
  //   stakingToken: tokens.lowb,
  //   earningToken: tokens.winb,
  //   contractAddress: {
  //     97: '',
  //     56: '0xcA092454f3dEb7657fAA88F1216988CAA1842C52',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '10.416',
  //   sortOrder: 11,
  //   isFinished: false,
  // },

  {
    sousId: 7,
    stakingToken: tokens.rbt,
    earningToken: tokens.lowb,
    contractAddress: {
      97: '',
      56: '0xd4637A8B8D3A4d0510f1e0e109B3af5F3eac93ea',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3.472222222222222222',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 8,
    stakingToken: tokens.lowb,
    earningToken: tokens.dsg,
    contractAddress: {
      97: '',
      56: '0xBa9E8BBB2EF84e4Bd2d63Cf6a64D6906399cDB1e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '127.3',
    sortOrder: 11,
    isFinished: false,
  },
  {
    sousId: 9,
    stakingToken: tokens.lowb,
    earningToken: tokens.game,
    contractAddress: {
      97: '',
      56: '0xb49036c84665DD97aC50D91894a1CBfDdd52A971',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000173611111111',
    sortOrder: 2,
    isFinished: false,
  },
  {
    sousId: 10,
    stakingToken: tokens.lowb,
    earningToken: tokens.fuck,
    contractAddress: {
      97: '',
      56: '0xa7585FA1020a70c5a680056ecc7B739140AD8Ba2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '34',
    sortOrder: 12,
    isFinished: false,
  },

  // {
  //   sousId: 10,
  //   stakingToken: tokens.lowb,
  //   earningToken: tokens.blowup,
  //   contractAddress: {
  //     97: '',
  //     56: '0xa6A320Aa0443B3fa96d40009C79aCDe430f3441A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '34',
  //   sortOrder: 10,
  //   isFinished: false,
  // },

]

export default pools
