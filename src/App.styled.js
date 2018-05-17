import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    height: 100%;
    background-color: lightgray;
    
    text-align: ${props => props.center ? "center" : "left"};

    >div{
        margin: 20px 30px;
        text-align: left;
    }
`