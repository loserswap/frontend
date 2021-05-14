import React, { ChangeEventHandler, useEffect, useState } from 'react'
import {
  ArrowBackIcon,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Button,
  BinanceIcon,
  Text,
  BalanceInput,
  Slider,
  Box,
  AutoRenewIcon,
} from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useGetMinBetAmount } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import { usePredictionsContract } from 'hooks/useContract'
import { useGetBnbBalance } from 'hooks/useTokenBalance'
import useToast from 'hooks/useToast'
import { BetPosition } from 'state/types'
import { getDecimalAmount } from 'utils/formatBalance'
import UnlockButton from 'components/UnlockButton'
import PositionTag from '../PositionTag'
import { getBnbAmount } from '../../helpers'
import useSwiper from '../../hooks/useSwiper'
import FlexRow from '../FlexRow'
import Card from './Card'

interface SetPositionCardProps {
  position: BetPosition
  togglePosition: () => void
  onBack: () => void
  onSuccess: (decimalValue: BigNumber, hash: string) => Promise<void>
}

const dust = new BigNumber(0.01).times(new BigNumber(10).pow(18))
const percentShortcuts = [10, 25, 50, 75]

const getPercentDisplay = (percentage: number) => {
  if (Number.isNaN(percentage)) {
    return ''
  }

  if (percentage > 100) {
    return ''
  }

  if (percentage < 0) {
    return ''
  }

  return `${percentage.toLocaleString(undefined, { maximumFractionDigits: 1 })}%`
}

const getButtonProps = (value: BigNumber, bnbBalance: BigNumber, minBetAmountBalance: number) => {
  if (bnbBalance.eq(0)) {
    return { id: 999, fallback: 'Insufficient BNB balance', disabled: true }
  }

  if (value.eq(0) || value.isNaN()) {
    return { id: 999, fallback: 'Enter an amount', disabled: true }
  }
  return { id: 464, fallback: 'Confirm', disabled: value.lt(minBetAmountBalance) }
}

const SetPositionCard: React.FC<SetPositionCardProps> = ({ position, togglePosition, onBack, onSuccess }) => {
  const [value, setValue] = useState('')
  const [isTxPending, setIsTxPending] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const { account } = useWeb3React()
  const { swiper } = useSwiper()
  const { balance: bnbBalance } = useGetBnbBalance()
  const minBetAmount = useGetMinBetAmount()
  const TranslateString = useI18n()
  const { toastError } = useToast()
  const predictionsContract = usePredictionsContract()

  const balanceDisplay = getBnbAmount(bnbBalance).toNumber()
  const maxBalance = getBnbAmount(bnbBalance.minus(dust)).toNumber()
  const valueAsBn = new BigNumber(value)

  const percentageOfMaxBalance = valueAsBn.div(maxBalance).times(100).toNumber()
  const percentageDisplay = getPercentDisplay(percentageOfMaxBalance)
  const showFieldWarning = account && valueAsBn.gt(0) && errorMessage !== null
  const minBetAmountBalance = getBnbAmount(minBetAmount).toNumber()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newValue = evt.target.value
    setValue(newValue)
  }

  const handleSliderChange = (newValue: number) => {
    setValue(newValue.toString())
  }

  const setMax = () => {
    setValue(maxBalance.toString())
  }

  // Clear value
  const handleGoBack = () => {
    setValue('')
    onBack()
  }

  // Disable the swiper events to avoid conflicts
  const handleMouseOver = () => {
    swiper.keyboard.disable()
    swiper.mousewheel.disable()
    swiper.detachEvents()
  }

  const handleMouseOut = () => {
    swiper.keyboard.enable()
    swiper.mousewheel.enable()
    swiper.attachEvents()
  }

  const { id, fallback, disabled } = getButtonProps(valueAsBn, bnbBalance, minBetAmountBalance)

  const handleEnterPosition = () => {
    const betMethod = position === BetPosition.BULL ? 'betBull' : 'betBear'
    const decimalValue = getDecimalAmount(valueAsBn)

    predictionsContract.methods[betMethod]()
      .send({ from: account, value: decimalValue })
      .once('sending', () => {
        setIsTxPending(true)
      })
      .once('receipt', async (result) => {
        setIsTxPending(false)
        onSuccess(decimalValue, result.transactionHash as string)
      })
      .once('error', (error) => {
        const errorMsg = TranslateString(999, 'An error occurred, unable to enter your position')

        toastError('Error!', error?.message)
        setIsTxPending(false)
        console.error(errorMsg, error)
      })
  }

  // Warnings
  useEffect(() => {
    const bnValue = new BigNumber(value)
    const hasSufficientBalance = bnValue.gt(0) && bnValue.lte(maxBalance)

    if (!hasSufficientBalance) {
      setErrorMessage({ id: 999, fallback: 'Insufficient BNB balance' })
    } else if (bnValue.gt(0) && bnValue.lt(minBetAmountBalance)) {
      setErrorMessage({
        id: 999,
        fallback: `A minimum amount of ${minBetAmountBalance} BNB is required`,
        data: { num: minBetAmountBalance, token: 'BNB' },
      })
    } else {
      setErrorMessage(null)
    }
  }, [value, maxBalance, minBetAmountBalance, setErrorMessage])

  return (
    <Card onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardHeader p="16px">
        <Flex alignItems="center">
          <IconButton variant="text" scale="sm" onClick={handleGoBack} mr="8px">
            <ArrowBackIcon width="24px" />
          </IconButton>
          <FlexRow>
            <Heading size="md">{TranslateString(999, 'Set Position')}</Heading>
          </FlexRow>
          <PositionTag betPosition={position} onClick={togglePosition}>
            {position === BetPosition.BULL ? TranslateString(999, 'Up') : TranslateString(999, 'Down')}
          </PositionTag>
        </Flex>
      </CardHeader>
      <CardBody py="16px">
        <Flex alignItems="center" justifyContent="space-between" mb="8px">
          <Text textAlign="right" color="textSubtle">
            {TranslateString(999, 'Commit')}:
          </Text>
          <Flex alignItems="center">
            <BinanceIcon mr="4px  " />
            <Text bold textTransform="uppercase">
              BNB
            </Text>
          </Flex>
        </Flex>
        <BalanceInput
          value={value}
          onChange={handleChange}
          isWarning={showFieldWarning}
          inputProps={{ disabled: !account || isTxPending }}
        />
        {showFieldWarning && (
          <Text color="failure" fontSize="12px" mt="4px" textAlign="right">
            {TranslateString(errorMessage.id, errorMessage.fallback, errorMessage.data)}
          </Text>
        )}
        <Text textAlign="right" mb="16px" color="textSubtle" fontSize="12px" style={{ height: '18px' }}>
          {account && TranslateString(999, `Balance: ${balanceDisplay}`, { num: balanceDisplay })}
        </Text>
        <Slider
          name="balance"
          min={0}
          max={maxBalance}
          value={valueAsBn.lte(maxBalance) ? valueAsBn.toNumber() : 0}
          onValueChanged={handleSliderChange}
          step={0.000000000000001}
          valueLabel={account ? percentageDisplay : ''}
          disabled={!account || isTxPending}
          mb="4px"
        />
        <Flex alignItems="center" justifyContent="space-between" mb="16px">
          {percentShortcuts.map((percent) => {
            const handleClick = () => {
              setValue(((percent / 100) * maxBalance).toString())
            }

            return (
              <Button
                key={percent}
                scale="xs"
                variant="tertiary"
                onClick={handleClick}
                disabled={!account || isTxPending}
                style={{ flex: 1 }}
              >
                {`${percent}%`}
              </Button>
            )
          })}
          <Button scale="xs" variant="tertiary" onClick={setMax} disabled={!account || isTxPending}>
            {TranslateString(452, 'Max')}
          </Button>
        </Flex>
        <Box mb="8px">
          {account ? (
            <Button
              width="100%"
              disabled={!account || disabled}
              onClick={handleEnterPosition}
              isLoading={isTxPending}
              endIcon={isTxPending ? <AutoRenewIcon color="currentColor" spin /> : null}
            >
              {TranslateString(id, fallback)}
            </Button>
          ) : (
            <UnlockButton width="100%" />
          )}
        </Box>
        <Text as="p" fontSize="12px" lineHeight={1} color="textSubtle">
          {TranslateString(999, "You won't be able to remove or change your position once you enter it.")}
        </Text>
      </CardBody>
    </Card>
  )
}

export default SetPositionCard
