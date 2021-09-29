import React from 'react'
import { Container } from '../../styled/styled-global'
import Img from './img/illustration-grow-together.svg'
import {
    Title, Text, Image, ContainerImage, ContainerText
}
from './styled'

export default function GrowTogether() {
    return(
        <Container>
            <ContainerText>
                <Title>
                    Grow Together 
                </Title>
                <Text>
                Generate meaningul discussions with you audience and 
                build a strong, loyal community. Think of the insightful 
                conversations you miss out on with a feedback form.
                </Text>
            </ContainerText>
            <ContainerImage>
                <Image src={Img} alt="" />
            </ContainerImage>

        </Container>
    )
}