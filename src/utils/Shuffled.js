import Images from './Images.js'

//Shuffles our images. Don't ask me how it works.
function shuffle(Images) {
    for (let i = Images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Images[i], Images[j]] = [Images[j], Images[i]];
    }
    return Images;
}

const Shuffled = shuffle(Images);

export default Shuffled
