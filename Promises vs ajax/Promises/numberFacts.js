let baseURL = "http://numbersapi.com";
// defaults to trivia by default if omitted type
let number = 42;



// to get a fact about your favorite number.
$.getJSON(`${baseURL}/${number}/trivia?json`)
.then(data => {$("#fact-1").append(`Number ${number}: <li style="margin-left: 5%;"> ${data.text}</li>`);
});

// data on multiple numbers in a single request. 
// Make that request and when you get the data back, 
// put all of the number facts on the page.
let numbers = [2, 4, 24];
$.getJSON(`${baseURL}/${numbers}?json`)
.then(data => {
    let $list = $("#fact-2");
    Object.entries(data).forEach(([num, fact]) => {
        $list.append(`<ul>Number ${num}:<li style="margin-left: 5%;"> ${fact}</li></ul>`);
    });
});

// to get 4 facts on your favorite number.
Promise.all(
    Array.from({length: 4}, () => $.getJSON(`${baseURL}/${number}?json`))
).then(facts => {
    let $fourFactsList = $("#fact-3");
    facts.forEach((data, idx) => {
        $fourFactsList.append(`<ul> Fact ${idx +1} for Number ${number}: <li style="margin-left: 5%;">${data.text}</li></ul>`);
    });
});

