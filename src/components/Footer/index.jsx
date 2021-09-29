import React from 'react'
import Logo from './img/logo.svg'
import {
    Container, List, Image, ListItem, ImageLogo, ContainerList
}
from './styled'


export default function Footer(){
    return(
        <Container>
            <ImageLogo>
                 <Image src={Logo} alt="logo" />
            </ImageLogo>
            
            <ContainerList>
                <List>
                    
                    <ListItem><a href="#"> About Us</a></ListItem>
                    <ListItem><a href="#">What We Do</a></ListItem>
                    <ListItem><a href="#">FAQ</a></ListItem>               

                </List>
                
                <List>
                    <ListItem><a href="#">Career</a></ListItem>
                    <ListItem><a href="#">Blog</a></ListItem>
                    <ListItem><a href="#">Contact Us</a></ListItem>
                </List>
            </ContainerList>
        </Container>
    )
}