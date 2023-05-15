import styled from "styled-components";

interface iStyledContainer{
    flexDirection: string
}

export const Container = styled.div<iStyledContainer>`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 20px;

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div img{
        width: 230px;
        height: 35px;
    }

    div div{
        max-width: 378px;
        max-height: 95px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid var(--color-grey-100);
        border-radius: var(--radius);
        padding: 5px;
        overflow: hidden;
    }

    div div img{
        background-color: var(--color-primary-100);
        height: 80px;
        padding: 25px 10px 25px 10px;
        border-radius: var(--radius);
    }

    p{
        color: var(--color-grey-300);
        font-size: var(--headline);
        font-weight: 400;
    }

    p span{
        color: var(--color-grey-600);
        font-weight: 600;
    }

    @media(min-width:700px){
        width: 100vw;
        height: 100vh;
        flex-direction: ${({flexDirection}) => flexDirection};
        justify-content: center;
        align-items: center;
        gap: 40px;
    }
`