import styled from "styled-components";

const Button = styled.button`
    background: #c39951;
    color: white;
    line-height: 1;
    border: none;
    box-shadow: none;
    padding: 5px 10px;
    margin: 0 5px;
        &:hover {
        background: gray;
        color: black;
        }
`;
// 基於某個 styled-components 之上，創造新的元件
const CoolButton = styled(Button)`
    background: #bfac8b;
    color:;
        &:hover {
        background: pink;
        color: yellow;
        }
`;

export {Button, CoolButton}