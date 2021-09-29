import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

export default createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	outline: none;
	box-sizing: border-box;
}

    body{

    }

    html, body #root {
        height: 100%;
    }
    button {
    cursor: pointer;
    }
    a {
        text-decoration: none;
        color: white;
    }
    ul {
        list-style: none;
    }
    p {
        font-family: 'Yaldevi', sans-serif;
        margin: 0.5rem;  

    }
`

export const Container = styled.div`
    max-width: 90%;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    padding: 3rem;
    margin-top: 5rem;
    margin-left: 3rem;    
    height: 20rem;
`