$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // request a single card from a newly shuffled deck
    $.getJSON(`${baseURL}/new/draw/`).then(data => {
        let {suit, value} = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);

    });

    //part 1 + Once you have the card, make a request to get one more card
   // from the **same** deck. console.log the values and suits of both cards.
    let cardOne = null;
    $.getJSON(`${baseURL}/new/draw`).then(data => {
        firstCard = data.cards[0];
        let deckID = data.deck_id;
        return $.getJSON(`${baseURL}/${deckID}/draw/`);
    }).then(data => {
        let cardTwo = data.cards[0];
        [cardOne, cardTwo].forEach(function(card) {
            console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
        });
    });

    // HTML page that lets you draw cards from a deck.
    let deckID = null;
    let $button = $('button');
    let $cardsArea = $('#cards-area');

        // on start set up new deck and show shuffle button
        $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
            deckID = data.deck_id;
            $button.show();
        });

        $button.on('click', function() {
            $.getJSON(`${baseURL}/${deckID}/draw/`).then(data => {
                let cardImage = data.cards[0].image;
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
                if (data.remaining === 0) {
                    $button.remove();
                    alert("Deck Finished");
                };

            });
        });
});