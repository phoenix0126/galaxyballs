import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '../../../components/wrapper'
import { RuleSectionContainer, MeteorImg1, MeteorImg2, Title, Description, CardList, CardWrapper, Card } from './styled'
import { useRouter } from 'next/router'
import { trans } from '../../../utils/i18n'

const RuleSection: React.FC<PageProps> = ({ language }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

  return (
    <Wrapper id="rules">
      <RuleSectionContainer>
        <MeteorImg1 />
        <MeteorImg2 />
        <Title>{trans(language, 'home', 'rules')}</Title>
        <Description>{trans(language, 'home', 'rules-text')}</Description>
        <CardList>
          <CardWrapper>
            <Card>
              <Image src="/assets/icons/key-circle.png" width={isMobile ? 23.38 : 42} height={isMobile ? 22.62 : 37} layout="fixed" alt="no img" />
              <p>{trans(language, 'home', 'rules-text-1')}</p>
            </Card>
          </CardWrapper>
          <CardWrapper style={{ background: '#3283FF11' }}>
            <Card style={{ background: '#3283FF33' }}>
              <Image src="/assets/icons/magic-circle.png" width={isMobile ? 29.46 : 42} height={isMobile ? 29.52 : 37} layout="fixed" alt="no img" />
              <p>{trans(language, 'home', 'rules-text-2')}</p>
            </Card>
          </CardWrapper>
        </CardList>
      </RuleSectionContainer>
    </Wrapper>
  )
}

export default RuleSection
