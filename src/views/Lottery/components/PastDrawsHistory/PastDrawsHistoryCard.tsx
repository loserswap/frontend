import React, { useState } from 'react'
import { Heading, Card, CardBody, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import Select, { OptionProps } from 'components/Select/Select'
import HistoryChart from './HistoryChart'
import Legend from './Legend'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`

const LabelWrapper = styled.div`
  margin-top: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
  }

  > ${Text} {
    font-size: 12px;
  }
`

const PastDrawsHistoryCard: React.FC = () => {
  const TranslateString = useI18n()
  const [showLast, setShowLast] = useState<'max' | number>(50)
  const handleShowLastChange = (option: OptionProps): void => {
    setShowLast(option.value)
  }

  return (
    <Card>
      <CardBody>
        <Heading size="md">{TranslateString(746, 'History')}</Heading>
        <Wrapper>
          <Legend />
          <LabelWrapper>
            <Text textTransform="uppercase">{TranslateString(999, 'Show Last')}</Text>
            <Select
              options={[
                {
                  label: '50',
                  value: 50,
                },
                {
                  label: '100',
                  value: 100,
                },
                {
                  label: '200',
                  value: 200,
                },
                {
                  label: 'Max',
                  value: 'max',
                },
              ]}
              onChange={handleShowLastChange}
            />
          </LabelWrapper>
        </Wrapper>
        <HistoryChart showLast={showLast} />
      </CardBody>
    </Card>
  )
}

export default PastDrawsHistoryCard
