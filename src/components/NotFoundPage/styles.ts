import styled from 'styled-components';


interface iStyledNotFoundPage{
    fontSize: number;
}

export const StyleNotFoundPage = styled.h1<iStyledNotFoundPage>`
    font-size: ${({ fontSize }) => fontSize + 'px'};
    color: var(--color-negative);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`