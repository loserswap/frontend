import React from 'react'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/hooks'
import { Text } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
`

interface CakeWinningsProps {
  claimAmount: BigNumber
}

const CakeWinnings: React.FC<CakeWinningsProps> = ({ claimAmount }) => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const cakeAmount = getBalanceNumber(claimAmount)
  const cakePriceBusd = usePriceCakeBusd()
  const claimAmountBusd = new BigNumber(cakeAmount).multipliedBy(cakePriceBusd).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={cakeAmount} lineHeight="1.5" />
      {!cakePriceBusd.eq(0) && <CardBusdValue value={claimAmountBusd} decimals={2} />}
    </Block>
  )
}

export default CakeWinnings
