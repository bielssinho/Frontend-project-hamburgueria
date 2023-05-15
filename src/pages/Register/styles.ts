import styled from 'styled-components';

export const StyledFormRegisterPage = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid var(--color-grey-100);
    border-radius: var(--radius);
    padding: 10px;
    overflow: hidden;
    max-width: 500px;
    

    h2{
        font-size: var(--title-2);
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    label{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    input{
        height: 50px;
        border: 2px solid var(--color-grey-600);
        border-radius: var(--radius);
        padding: 10px;
    }

    button{
        height: 50px;
        border: 1px solid var(--color-primary);
        border-radius: var(--radius);
        background-color: var(--color-primary);
        color: var(--color-grey-0);
        font-size: var(--headline);
        font-weight: 600;
        cursor: pointer;
    }

    span{
        font-size: var(--body);
        font-weight: 400;
        line-height: 18px;
        text-align: center;
        color: var(--color-grey-300);
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-grey-300);
        font-size: var(--headline);
        font-weight: 600;
        cursor: pointer;
    }

    @media(min-width:700px){
        width: 500px;
        gap: 20px;
    }
`