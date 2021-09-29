import React from "react"
import Logo from "./img/logo.svg"
import Img from "./img/img.svg"
import Button from '@material-ui/core/Button'
import {
    Container, Header, Text, ImgLogo, Title, WrittenBox, ImgConversations, ContainerText, SubmitButton, ContainerImg
} from "./styled"

export default function Hundlle() {
    return (
        <Container>  
            <Header>
                <ImgLogo src={Logo} alt="" />
                <Button variant="outlined">Try It Free</Button>               
            </Header>
            <Text>
                <ContainerText>
                <Title>Build The Community <br />
                    Your Fans Will Love
                </Title>
                <WrittenBox>Hundlle re-imagines the way we build communities. You have <br />
                    a voice, but so does your audience. Create connections with <br />
                    your users as you engage in genuine discussion 
                </WrittenBox>
                <SubmitButton variant="outlined">Get Startted For Free </SubmitButton>
                </ContainerText>
                <ContainerImg>
                    <ImgConversations src={Img} alt="conversations" />
                </ContainerImg>
            </Text>
        </Container>
    )
}