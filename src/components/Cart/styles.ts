import styled from 'styled-components';

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0,0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal{
        background-color: var(--color-grey-0);
        min-width: 300px;
        width: 95%;
        max-width: 600px;
        border-radius: var(--radius);
    }

    .modal h5{
        cursor: pointer;
    }

    .modalHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        background-color: var(--color-primary);
        color: var(--color-grey-0);
        border-radius: 4px 4px 0px 0px;
    }

    .modalHeader h2{
        font-size: var(--title-3);
    }

    ul{
        min-height: 200px;
        max-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        padding: 5px;
        overflow-y: auto;
    }

    ul > h2{
        margin-top: 100px;
        font-size: var(--title-3);
    }

    li{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        border-bottom: 2px solid var(--color-grey-300);
    }

    .item{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
    }

    .item img{
        width: 100px;
        height: 100px;
    }

    .itemInfo{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .delete{
        cursor: pointer;
    }

    .delete:hover{
        color: var(--color-negative);
    }

    .count{
        display: flex;
        flex-direction: row;
        max-width: 100px;
    }

    .count p{
        text-align: center;
        border: 0.5px solid var(--color-grey-600);
        width: 30px;
    } 

    .count button{
        width: 20px;
    }
`

export const StyledTotal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .tot{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .tot p{
        font-size: var(--title-3);
        font-weight: 700;
    }

    .totValue{
        background-color: transparent;
        color: var(--black);
        font-size: var(--headline);
        position: relative
    }

    button{
        height: 32px;
        border-radius: var(--radius);
        border: 1px solid var(--color-grey-100);
        background-color: var(--color-grey-100);
        font-size: var(--headline);
        font-weight: 700;
        color: var(--color-grey-300);
        cursor: pointer;
    }
`