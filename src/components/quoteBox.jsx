import React, { Component } from 'react';
import '../quoteBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


let quotes = [
    {quote: 'Inch by inch the dream is actually gaining ground. There will be a second hearing. There will be an appeal from the absolute judgment of 20 years ago. Well then, in that case, it evolves upon all of us to embody this thing. And not to cut corners and to just ––you know–– try just a little bit harder, just a little bit more.',
    author: 'Terence McKenna'},
    {quote: 'Todo hombre debe ser capaz de todas las ideas y entiendo que en el porvenir lo será.',
    author: 'Jorge Luis Borges'},
    {quote: 'Even by hopping lamely and limply in that direction thou wilt be freed from all lameness and limpness.',
    author: 'Rumi'},
    {quote: 'All conditioned things are impermanent. Work out your own salvation with diligence.',
    author: 'Buddha'},
    {quote: 'History was an incredibly damaging experience, and now it’s over, in a sense, and we are like the victims of a very long and prolonged bombardment of some sort, and now it’s over and we can begin to pick up the pieces and say well: what Christianity did to our sexuality, what monotheism did to our gender relations, so forth and so on, now we can fix all of this. But it is this paradoxical enterprise of a Neo-archaism taking place in a cyberdelic hyper global society.',
    author: 'Terence McKenna'},
    {quote: 'Play becomes the engine of human growth.',
    author: 'Richard Powers'},
    {quote: 'And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about.',
    author: 'Haruki Murakami'},
    {quote: 'One has to give up one\'s mind, in surrender; after that mind is given away, there will be no duality of any kind. He who remains separate from God has thus not surrendered.',
    author: 'Ramana Maharshi'},
    {quote: 'One must take the journey unburdened, sweetly, without any effort, never stopping at any shrine, at any monument, or for any hero, social or religious –– alone with beauty and love.',
    author: 'Jiddu Krishnamurti'},
    {quote: 'In solitude there grows what anyone brings into it, the inner beast too. Therefore solitude is inadvisable to many.',
    author: 'Friedrich Nietzsche'},
    {quote: 'Confronting fear is the destiny of a Jedi.',
    author: 'Luke Skywalker'},
    {quote: 'I learnt the Truth last November—on the 3rd of November to be precise, and I remember every instant since.',
    author: 'Fyodor Dostoevsky'},
    {quote: 'Have patience with everything that remains unsolved in your heart.',
    author: 'Rainer Maria Rilke'},
    {quote: 'The reason people awaken is because they have finally stopped agreeing to things that insult their soul.',
    author: 'Terence McKenna'},
    {quote: '—Nos hemos mentido —me dijo— porque nos sentimos dos y no uno. La verdad es que somos dos y somos uno.',
    author: 'Jorge Luis Borges'},
    {quote: 'Yo sé (todos lo saben) que la derrota tiene una dignidad que la ruidosa victoria no merece.',
    author: 'Jorge Luis Borges'},
    {quote: 'The future is here. The question is: have you arrived? Have I arrived? The future is here in the sense of a mysterious dimension of infinite depth that as it is learned it changes the person who is doing the learning. For example I could spend all my time, every waking minute of my time, doing nothing but learning software and implementing various tools. I don’t do that. Nobody does that. But to the degree that I am incompetent in a world where tools that would confer competency exist, my inadequacy is self-chosen.',
    author: 'Terence McKenna'},
    {quote: '… only one who has risked the fight with the dragon and is not overcome by it wins the hoard, the “treasure hard to attain.” He alone has a genuine claim to self-confidence, for he has faced the dark ground of his self and thereby has gained himself. This experience gives some faith and trust….in the ability of the self to sustain him, for everything that menaced him from inside he has made his own. He has acquired the right to believe that he will be able to overcome all future threats by the same means. He has arrived at an inner certainty which makes him capable of self-reliance.',
    author: 'Carl Jung'},
    {quote: 'It is time to do what you’ve always wanted. It may be the best or worst thing but it will no doubt be the bravest. You are young enough to build your life from the ground up, old enough to know how to do it. So close your eyes and listen to the drumming of your heart, the ringing of your soul whispering, now is the time, it is now your time. Do what you must, what you must do. For those who act out of love needn’t ever be afraid. I am all love, and you have nothing to fear.',
    author: 'Lang Leav'},
    {quote: 'Cualquier destino, por largo y complicado que sea, consta en realidad de un solo momento: el momento en que el hombre sabe para siempre quién es.',
    author: 'Jorge Luis Borges'},
    {quote: 'La quiso con el triste amor que inspiran las personas que no nos quieren, los fracasos, las enfermedades, las manías; esencialmente no es mentira decir que no se alejó nunca de ella.',
    author: 'Jorge Luis Borges'},
    {quote: 'The way nature has blended you into the compound whole does not prevent you drawing a boundary around yourself and keeping what is in your own control. Always remember this: remember too that the happy life depends on very little. And do not think, just because you have given up hope of becoming a philosopher or a scientist, you should therefore despair of a free spirit, integrity, social conscience, obedience to god. It is wholly possible to become a ‘divine man’ without anybody’s recognition.',
    author: 'Marcus Aurelius'},
    {quote: 'He who enters into his own must grope through what lies at hand, he must sense his way from stone to stone. He must embrace the worthless and worthy with the same love.',
    author: 'Carl Jung'},
    {quote: 'Si el honor y la sabiduría y la felicidad no son para mí, que sean para otros. Que el cielo exista, aunque mi lugar sea el infierno. Que yo sea ultrajado y aniquilado, pero que en un instante, en un ser, Tu enorme Biblioteca se justifique.',
    author: 'Jorge Luis Borges'}
]

let random = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}
let index = () =>  (random(quotes.length));

library.add(fab); //Font Awesome Brands
class QuoteBox extends Component {
    state = { 
        index: index(),
     }
    
    // Event handlers are written inside the class Component before render()
    newQuote = () => {
     this.setState({index: index()})
    };

componentDidUpdate(){
    console.log("Component Updated");
    // $("#text").fadeIn(1000);
}
 
    render() {
        let i  = this.state.index;
        let entry = quotes[i];
        const tweet = <FontAwesomeIcon icon={['fab', 'twitter']} />;
        return ( 
            <div id="quote-box">
            <p className="quote" id="text">{entry.quote}</p>
            <p className="author" id="author">{entry.author}</p>
            <button id="new-quote" onClick={this.newQuote} className="newQuote">New Quote</button>
            <a href={`https://twitter.com/intent/tweet?text='${entry.quote}'%0A%0A${entry.author}`} rel="noopener noreferrer" target="_blank" id="tweet-quote">{tweet}</a>
            <span className="number">Quote {i + 1} of {quotes.length}</span>
            </div>
         );
    }
}
 
export default QuoteBox;

