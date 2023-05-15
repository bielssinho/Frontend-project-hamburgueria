import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    header{
        background-color: var(--color-grey-100);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        min-height: 50px;
        gap: 15px;
    }

    header > div{
        width: 100%;
        max-width: 1360px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div > img{
        width: 150px;
        height: 23px;
    }

    .options{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    div > div > div{
        position: relative;
        padding: 5px;
    }

    div > div > div > span{
        position: absolute;
        right: 0.2px;
        top: 0;
        font-size: 10px;
        background-color: var(--color-primary);
        border-radius: var(--radius);
        padding: 2px;
        color: var(--color-grey-0);
        font-weight: 700;
    }

    .styleSearch{
        font-size: 20px;
        cursor: pointer;
    }

    .styleCart{
        font-size: 15px;
        cursor: pointer;
    }

    .styleCart:hover{
        color: var(--color-primary);
    }

    .styleLogout{
        font-size: 20px;
        cursor: pointer;
    }

    .search{
        position: relative;
        display: flex;
        justify-content: center;
    }

    .search > input{
        width: 250px;
        height: 34px;
        border-radius: var(--radius);
        border: 1px solid var(--color-grey-300);
        padding: 10px;
    }

    .searchBtn{
        position: absolute;
        top: 2px;
        left: 215px;
        background-color: var(--color-primary);
        font-size: 30px;
        padding: 5px;
        color: var(--color-grey-0);
        border-radius: var(--radius);
        cursor: pointer;
    }

    
    @media(min-width: 700px){
        header{
            justify-content: center;
        }
    }
`

export const StyledList = styled.div`
    padding: 10px;
    width: 100%;

    ul{ 
        max-width: 1360px;
        list-style: none;
        display: flex;
        flex-wrap: nowrap;
        gap: 30px;
        overflow-x: auto;
    }

    li{
        border: 2.5px solid var(--color-grey-100);
        border-radius: var(--radius);
        height: 346px;
        display: flex;
        flex-direction: column;
    }

    li:hover{
        border: 2.5px solid var(--color-primary);
    }

    li > img{
        width: 280px;
        height: 230px;
        background-color: var(--color-grey-0);
        overflow: hidden;
    }

    li > h3{
        padding: 10px;
    }

    li > p{
        padding: 10px;
    }

    li > span{
        padding: 10px;
        color: var(--color-primary);
    }

    li > button{
        max-width: 106px;
        height: 40px;
        margin-left: 10px;
        margin-bottom: 10px;
        border-radius: var(--radius);
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: var(--body);
        cursor: pointer;
    }

    @media(min-width: 700px){
        display: flex;
        justify-content: center;

        ul{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 80px;
        }
    }
`