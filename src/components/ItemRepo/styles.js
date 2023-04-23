import styled from "styled-components";

export const ItemContainer = styled.div `
    width:88%;

    h3{
        font-size:32px;
        color:#FAFAFA;

    }

    p {
        font-size:16px;
        color:#FAFAFA60;
        margin-bottom:10px
    }
    
    a.remover{
        color:#FF000D;
       
    }

    hr{
        color:#FAFAFA60;
        margin: 20px 0;
    }
`

export const Column = styled.div `
        display: flex;
        flex-direction: column;
`