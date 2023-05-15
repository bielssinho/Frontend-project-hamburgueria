import styled from 'styled-components';

export const StyledFormLoginPage = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid var(--color-grey-100);
    border-radius: var(--radius);
    padding: 10px;
    overflow: hidden;
    max-width: 500px;
    max-height: 460px;

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
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-grey-100);
        height: 50px;
        border-radius: var(--radius);
        color: var(--color-grey-300);
        font-size: var(--headline);
        font-weight: 600;
        cursor: pointer;
    }

    @media(min-width:700px){
        gap: 20px;
    }
`