import React from 'react'
import BigNumber from 'bignumber.js'
import { IconButton, useModal, CalculateIcon } from '@pancakeswap-libs/uikit'
import ApyCalculatorModal from 'components/ApyCalculatorModal'
import useI18n from 'hooks/useI18n'

export interface ApyButtonProps {
  lpLabel?: string
  cakePrice?: BigNumber
  apr?: number
  addLiquidityUrl?: string
}

const ApyButton: React.FC<ApyButtonProps> = ({ lpLabel, cakePrice, apr, addLiquidityUrl }) => {
  const TranslateString = useI18n()
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      linkLabel={`${TranslateString(999, 'Get')} ${lpLabel}`}
      tokenPrice={cakePrice.toNumber()}
      apr={apr}
      linkHref={addLiquidityUrl}
    />,
  )

  const handleClickButton = (event): void => {
    event.stopPropagation()
    onPresentApyModal()
  }

  return (
    <IconButton onClick={handleClickButton} variant="text" scale="sm" ml="4px">
      <CalculateIcon width="18px" />
    </IconButton>
  )
}

export default ApyButton
