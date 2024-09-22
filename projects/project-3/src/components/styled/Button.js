import styled from "styled-components";


const Button = styled.button`
/* BUTTON/Default */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 18px;
gap: 10px;

width: 220px;
height: 44px;

background: #000000;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

/* Text/White */
color: #FFFFFF;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

min-width:220px;
border: None;

border: 1px solid transparent;

&:hover{
    background:white;
    color:black;
    border: 1px solid black;
    cursor:pointer;
    transition: 0.3s, background ease-in;
}
`;


export default Button;