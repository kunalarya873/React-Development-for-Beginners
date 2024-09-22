import Button from "./Button";
import styled from "styled-components";


const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
    }
`;
export default OutlineButton;