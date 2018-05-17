import { injectGlobal } from "styled-components";

injectGlobal`
 @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

    body, html {
        font-family: 'Roboto Mono', monospace;
        font-size: 12px;
        padding: 0;
        margin: 0;
        min-height: 100% !important;
        height: 100%;
    };
`