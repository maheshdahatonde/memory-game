window.onload = init;

function init() {
    //card options
    var cardArray = [{
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]


    cardArray.sort(() => 0.5 - Math.random())

    var grid = document.querySelector('.grid')
    var resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.onclick = flipCard
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.getElementsByTagName('img')
        var idOne = cardsChosenId[0]
        var idTwo = cardsChosenId[1]

        if (idOne == idTwo) {
            cards[idOne].setAttribute('src', 'images/blank.png')
            cards[idTwo].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[idOne].setAttribute('src', 'images/white.png')
            cards[idTwo].setAttribute('src', 'images/white.png')
            cards[idOne].removeEventListener('click', flipCard)
            cards[idTwo].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[idOne].setAttribute('src', 'images/blank.png')
            cards[idTwo].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
}