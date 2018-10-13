import React, { Component } from 'react';
import Logo from "../sflogo.gif"

//Layouts.
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Scorebar from "../components/Scorebar";
import Modal from '../components/Modal';

//CSS sheet
import './game.css';



//Imports our shuffled images from our folder.
import Shuffled from "../utils/Shuffled";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            imagesArray: [],
            score: 0,
            highScore: 0,
            currentImage: "",

        };

    }


    showModal = () => {
        this.setState({ show: true });
    };
    hideModal = () => {
        this.setState({ show: false });
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
        return this.setState({ imagesArray: Images });
    }

    handleScore = event => {
        event.preventDefault();
        if (this.state.currentImage === event.target.src) {
            this.showModal();
            if (this.state.highScore > this.state.score) {
                this.setState({
                    score: 0,
                    currentImage: ""
                })
            }
            else {
                this.setState({
                    highScore: this.state.score,
                    score: 0,
                    currentImage: ""
                })
            }
        }
        else {
            this.setState({
                score: this.state.score + 1,
                currentImage: event.target.src
            });
            this.shuffleAgain()
        }
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <img className='logo' src={Logo} alt='logo' />
                    <h2 className='text-center'>Clicky Game!</h2>
                    <h4 className='text-center'>Click on the characters to score points!</h4>
                    <h4 className='text-center'>Don't click on the same character or the game is over!</h4>
                </Jumbotron>
                <Container>
                    <Row>
                        <Scorebar highScore={this.state.highScore} score={this.state.score} />
                        <div className='table'>
                            <ul id='horizontal-list'>
                                {this.state.imagesArray.map((result, index) => {
                                    let button = <button><img value={result} alt='character' src={result} className='img-fluid' onClick={this.handleScore} /></button>
                                    return <li key={index}>
                                        {button}
                                    </li>
                                })}
                            </ul>
                        </div>
                    </Row>

                    <Modal show={this.state.show}>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h3 className='modal-title'>YOU LOSE</h3>
                            </div>

                            <div className='modal-body'>
                                <p>TRY AGAIN BUDDY!</p>
                            </div>

                            <div className='modal-footer'>
                                <button className='btn btn-danger' onClick={this.hideModal}>Close</button>
                            </div>
                        </div>

                    </Modal>
                </Container>
            </div>
        )
    }

}
export default Game;