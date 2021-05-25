import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'LoserSwap',
  description:
    'The most popular AMM on BSC by user count! Earn LOWB through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | LoserSwap',
  },
  '/competition': {
    title: 'Trading Battle | LoserSwap',
  },
  '/prediction': {
    title: 'Prediction | PancakeSwap',
  },
  '/farms': {
    title: 'Farms | LoserSwap',
  },
  '/pools': {
    title: 'Pools | LoserSwap',
  },
  '/lottery': {
    title: 'Lottery | PancakeSwap',
  },
  '/collectibles': {
    title: 'Collectibles | PancakeSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | PancakeSwap',
  },
  '/teams': {
    title: 'Leaderboard | PancakeSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | PancakeSwap',
  },
  '/profile': {
    title: 'Your Profile | PancakeSwap',
  },
}
