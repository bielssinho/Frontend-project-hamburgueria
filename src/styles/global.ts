import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        --color-primary: #27ae60;
        --color-primary-100: rgba(39, 174, 96, 0.1);
        --color-secundary: #eb5757;

        --black: #000000;
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #e0e0e0;
        --color-grey-0: #f5f5f5;

        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-sucess: #168821;
        --color-information: #155bcb;

        --radius: 4px;

        --font: 'inter';
        --title-1: 26px;
        --title-2: 22px;
        --title-3: 18px;

        --headline: 16px;
        --body: 14px;
        --caption: 12px;
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: var(--font);
    }
`
