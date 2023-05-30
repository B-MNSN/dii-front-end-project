import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Kanit', sans-serif;
        font-family: 'Noto Sans Thai', sans-serif;
    }

    main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .buttonLogin, .buttonSignup, .bg-blue, .bgInform, .cardHeader  {
        background-color: #02457A;

    }

    .btnCabinClass, .btnFlight {
        border: none;
        color: black;
    }

    .btnCabinClass:hover, .btnFlight:hover, .btnChangeFlight,.btnConDelete{
        border: none;
        background: #02457A;
        color: #ffffff;
    }
    .btnCabinClass,.btnFlight {
        border: none;
        color: black;
    }

    .btnCabinClass:hover,
    .btnFlight:hover,
    .btnChangeFlight, .btnSelectFlight, .btnConfirm, .btnbooking {
        border: none;
        background: #02457A;
        color: #ffffff;
    }

    .active {
        background-color: #02457A;
        color: #fff;
    }
`
export default GlobalStyle;