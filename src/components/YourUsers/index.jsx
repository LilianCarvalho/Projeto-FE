import React from 'react'
import { Container } from '../../styled/styled-global'
import Img from './img/illustration-your-users.svg'
import {
    Title, Text, Image, ContainerImage, ContainerText
}
from './styled'

export default function YourUsers() {
    return(
        <Container>
            <ContainerText>
                <Title>
                Your Users 
                </Title>
                <Text>
                It Takes no time at all to integrate Hunddle with your app's
                authentication solution. This means, once signed in to
                you app, your users can start chatting immediately
                </Text>
            </ContainerText>
            <ContainerImage>
                <Image src={Img} alt="illustration your users" />
            </ContainerImage>

        </Container>
    )
}