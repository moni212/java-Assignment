let cards = [{
        image: "data:image/jpeg;base64,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",
        value: 1,
        status: "closed"
    },
    {
        image: "data:image/jpeg;base64,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",
        value: 1,
        status: "closed"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lt4byh5dnty8VOZb_vDOUJlVRgXwXAftgA&usqp=CAU",
        value: 2,
        status: "closed"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lt4byh5dnty8VOZb_vDOUJlVRgXwXAftgA&usqp=CAU",
        value: 2,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value: 3,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value: 3,
        status: "closed"
    },
    {
        image: "https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/headhuntersholosuite/images/6/68/Baby_Groot.jpg/revision/latest?cb=20170526164642",
        value: 5,
        status: "closed"
    },
    {
        image: "https://static.wikia.nocookie.net/headhuntersholosuite/images/6/68/Baby_Groot.jpg/revision/latest?cb=20170526164642",
        value: 5,
        status: "closed"
    },
]


// drunsten shuffling alogorithm

let temp;
for (let i = cards.length - 1; i >= 0; i--) {

    let j = Math.floor(Math.random() * (i + 1));

    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}


let cardsCopy = cards;

function displayCards(data) {

    let cardsString = "";



    data.forEach(function(card, index) {
        cardsString += `
        <div class="card" style="background-image:url('${card.image}')">
          <div class="overlay ${card.status}" onclick="openCard(${index},)"></div>
        </div>
        `;
    });

    document.getElementById('cards').innerHTML = cardsString;
}


displayCards(cards);

let cardCount = 1;
let val1 = null,
    val2 = null;
let score = 0;

function openCard(index) {

    console.log(cards);

    cards[index].status = "opened";
    if (cardCount === 1) {
        val1 = cards[index].value;
        cardCount++;
    } else if (cardCount === 2) {
        val2 = cards[index].value;

        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;

            // reste after one guess
            val1 = null;
            val2 = null;
            cardCount = 1;
        } else {

            alert("game over");
            location.reload();
        }
    }
    displayCards(cards);

}