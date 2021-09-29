import React from 'react'
import { Container } from '../../styled/styled-global'
import Img from './img/illustration-flowing-conversation.svg'
import {
    Title, Text, Image, ContainerImage, ContainerText
}
from './styled'

export default function FlowingConversations () {
    return(
        <Container>
            <ContainerImage>
                <Image src={Img} alt="illustration flowing conversation" />
            </ContainerImage>
            <ContainerText>
                <Title>
                    Flowing Conversations 
                </Title>
                <Text>
                You wouldn't paginate a conversation in real life, so why do
                it online? Our threads have just-in-time loading for a more
                natural flow.
                </Text>
            </ContainerText>          

        </Container>
    )
}