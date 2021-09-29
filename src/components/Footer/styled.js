import styled from 'styled-components'

export const Container = styled.div`
    background-color: black;
    color: white;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    height: 10rem;
    padding: 3rem;
    
`

export const Image = styled.img`
    display: flex;
    justify-content: center;
`

export const List = styled.ul``

export const ListItem = styled.li``

export const ImageLogo = styled.section`
        display: flex;
    justify-content: center;
`

export const ContainerList = styled.div`
display: flex;
    justify-content: space-around;
    margin-left: 30px;
    max-width: 900px;
    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`