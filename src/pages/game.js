import React from 'react';
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Game = () => (
    <div>
        <Jumbotron>
            <h1 className='text-center'>Clicky Game!</h1>
            <h4 className='text-center'>Click on the images to score points!</h4>
            <h4 className='text-center'>Don't click on the same image or the game is over!</h4>
        </Jumbotron>
        <Container>
            <Row>
                <h1>Images Test Row</h1>

            </Row>
        </Container>
    </div>
);

export default Game;