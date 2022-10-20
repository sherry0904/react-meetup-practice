import styled from "styled-components";

const Header = styled.header `
    width: 100%;
    height: 5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${prop=>prop.color?prop.color:'#ebccd8'};
    padding: 0 10%;
    .logo {
        font-size: 1rem;
        color: #fff;
        font-weight: bold;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: baseline;
        overflow-y: hidden;
        overflow-x: auto;
    }
    li {
        margin-left: 3rem;
    }
    a {
        text-decoration: none;
        font-size: 1rem;
        color: #fff;
        &:hover,
        &:active,
        &.active {
            color: #fff;
        }
    }
    .badge {
        background-color: #cc2062;
        color: #fff;
        border-radius: 12px;
        padding: 0 1rem;
        margin-left: 0.5rem;
    }
`

export default Header;