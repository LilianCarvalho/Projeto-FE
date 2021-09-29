import styled from 'styled-components'
import img from "./img/background.svg"

export const Container = styled.div`
    background-image: url(${img});
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Text = styled.div`
    display: flex;
`

export const ImgLogo = styled.img``

export const Title = styled.h1`
    font-family: system-ui;
`

export const WrittenBox = styled.p`    
    padding: 10px;
`

export const ImgConversations = styled.img`
    width: 35rem;
    padding: 2rem;
`

export const ContainerText = styled.section`
    margin-top: 5rem;
    padding: 2rem;
`
export const SubmitButton = styled.button`
    background-color: deeppink;
    color: white;
    border-radius: 30px;
    width: 10rem;
    padding: 0.6rem;
    margin-top: 0.9rem;
    border-bottom-color: darkcyan;
`
export const ContainerImg = styled.div``