import React, { Component } from 'react';
import Logo from "../sflogo.gif"

//Layouts.
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ImageRow from "../components/ImageRow"
import Navbar from "../components/Navbar";

//CSS sheet
import './game.css';



//Imports our shuffled images from our folder.
import Shuffled from "../utils/Shuffled";

class Game extends Component {

    state = {
        imagesArray: [],
        score: 0,
    };

    //Once the page loads it goes and puts in our images.
    componentDidMount() {
        this.setState({
            imagesArray: Shuffled
        })
    }


    //Once item is clicked, resets the state
    shuffleAgain(Images) {
        Images = this.state.imagesArray
        for (let i = Images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [Images[i], Images[j]] = [Images[j], Images[i]];
        }
        return this.setState({imagesArray: Images});
    }

    handleScore = () => {
        this.setState({
            score: this.state.score + 1
        });
        this.shuffleAgain()
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <img className='logo' src={Logo} alt='logo'/>
                    <h2 className='text-center'>Clicky Game!</h2>
                    <h4 className='text-center'>Click on the characters to score points!</h4>
                    <h4 className='text-center'>Don't click on the same character or the game is over!</h4>
                </Jumbotron>
                <Navbar score={this.state.score} />
                <Container>
                    <Row>
                        <ImageRow onClick={this.handleScore} images={this.state.imagesArray} />
                    </Row>
                </Container>
            </div>
        )
    }

}
export default Game;