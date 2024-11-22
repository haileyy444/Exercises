$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // request a single card from a newly shuffled deck

    async function singleCard() {
        let data = await $.getJSON(`${baseURL}/new/draw/`);
        let {suit, value} = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }

    //part 1 + Once you have the card, make a request to get one more card
   // from the **same** deck. console.log the values and suits of both cards.

    async function manyCards() {
        let firstCard = await $.getJSON(`${baseURL}/new/draw`)
        let deckID = firstCard.deck_id;
        let secondCard = await $.getJSON(`${baseURL}/${deckID}/draw/`);
        [firstCard, secondCard].forEach(card => {
            let {suit, value} = card.cards[0];
            console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        });
    }

    // HTML page that lets you draw cards from a deck.
    // let deckID = null;
    // let $button = $('button');
    // let $cardsArea = $('#cards-area');

    //     // on start set up new deck and show shuffle button

    async function setup() {
        let $button = $('button');
        let $cardsArea = $('#cards-area');
        let deck = await $.getJSON(`${baseURL}/new/shuffle/`);
        $button.show().on('click', async function() {
            let card = await $.getJSON(`${baseURL}/${deck.deck_id}/draw/`);
            let cardImage = card.cards[0].image;
            let rotation = Math.random() * 90 - 45;
            let x = Math.random() * 40 - 20 ;
            let y = Math.random() * 40 - 20 ;
            $cardsArea.append($('<img>', {
                    src:cardImage, 
                    css:{
                        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,                  
                        position: 'absolute'
                    }
                }));
                if (card.remaining === 0) {
                    $button.remove();
                    alert("Deck Finished");
                };
        });
    }
    setup();

});