import React from 'react'
import styled from 'styled-components'
import Button from '../styled/Button';
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="dices.png" alt="" /></div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Start</Button>
        </div>
    </Container>
  )
};

export default StartGame
const Container = styled.div`
display: flex;
margin:0, auto;
max-width:1180px;
margin-top:130px;
margin-left: 130px;
justify-content:center;
align-items:center;

    .content{
        h1{
            font-size: 96px;
            white-space:nowrap;
        }
    }
`;
