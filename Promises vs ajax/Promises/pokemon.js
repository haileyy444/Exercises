$(function() {
    let baseURL = "https://pokeapi.co/api/v2";

    // request a single card from a newly shuffled deck
    $.getJSON(`${baseURL}/pokemon/?limit=1000`).then(data => {
        console.log(data);

    });

    //part 1 + Once you have the card, make a request to get one more card
   // from the **same** deck. console.log the values and suits of both cards.
    $.getJSON(`${baseURL}/pokemon/?limit=1000`).then(data => {
        let pokemonURLs = [];
        for (let i = 0; i < 3; i++) 
        {
            let randomIndex = Math.floor(Math.random() * data.results.length);
            let url = data.results.splice(randomIndex, 1)[0].url;
            pokemonURLs.push(url);
        }
        return Promise.all(pokemonURLs.map(url => $.getJSON(url))
        );
    }).then(pokemon => {
        pokemon.forEach(p=> console.log(p));
    });

    // HTML page that lets you draw cards from a deck.
    let names = null;
        // on start set up new deck and show shuffle button
    $.getJSON(`${baseURL}/pokemon/?limit=1000`).then(data => {
        let pokemonURLs = [];
        for (let i = 0; i < 3; i++) 
        {
            let randomIndex = Math.floor(Math.random() * data.results.length);
            let url = data.results.splice(randomIndex, 1)[0].url;
            pokemonURLs.push(url);
        }
        return Promise.all(pokemonURLs.map(url => $.getJSON(url)));
        }).then(data => {
            names = data.map(d => d.name);
            return Promise.all(data.map(d => $.getJSON(d.species.url)))
        }).then(data => {
            let description = data.map(d => {
                let descriptionObject = d.flavor_text_enteries.find(entry => entry.language.name === "en");
                return descriptionObject ? descriptionObject.flavor_text : "No description";

            });
            description.forEach((desc, i) => {
                console.log(`${names[i]}: ${desc}`);
            });
        });

    let $button = $('button');
    let $cardsArea = $('#cards-area');
    
    $button.on('click', function() {
        $cardsArea.empty();
        let cardData = [];
        $.getJSON(`${baseURL}/pokemon/?limit=1000`)
            .then(data => {
                let pokemonURLs = [];
                for (let i = 0; i < 3; i++) 
                {
                    let randomIndex = Math.floor(Math.random() * data.results.length);
                    let url = data.results.splice(randomIndex, 1)[0].url;
                    pokemonURLs.push(url);
                }
            return Promise.all(pokemonURLs.map(url => $.getJSON(url)));
            })
            .then(pokemonData => {
                cardData = pokemonData.map(p => ({
                    name: p.name.toUpperCase(), 
                    image:p.sprites.front_default
                }));
                return Promise.all(pokemonData.map(p => $.getJSON(p.species.url)));
            })
            .then(speciesData => {
                speciesData.forEach((d, i) => {
                    let descriptionObject = Array.isArray(d.flavor_text_entries) ? d.flavor_text_entries.find(entry => entry.language.name === "en") : null;
                      
                    let description = descriptionObject ? descriptionObject.flavor_text : "No Description";
                    let {name, image} = cardData[i];
                    $cardsArea.append(makePokemonCard(name, image, description));  

                });
            });
        });
                
 

    function makePokemonCard(name, image, description) {
        return `<div class="card" style="max-width: 100%; text-align: center; height: auto; display: block; margin: 5%; background-color: lightgrey; padding: 2%; border: 2px solid darkslategrey;" > 
            <h1>${name}</h1> 
            <img src=${image} style="max-width: 100%; height: auto; display: block; margin: 0 auto;" /> 
            <p>${description}</p> 
        </div>`;
    }
});