document.addEventListener('DOMContentLoaded', () =>{

	const cardArray = [
	{
		name: 'jasmin',
		img: 'images/jasmin.jpg'
	},
	{
		name: 'lotus',
		img: 'images/lotus.jpg'
	},
	{
		name: 'orange',
		img: 'images/orange.jpg'
	},
	{
		name: 'orchid',
		img: 'images/orchid.jpg'
	},
	{
		name: 'redRose',
		img: 'images/jasmin.jpg'
	},
	{
		name: 'rsz',
		img: 'images/rsz_images.jpg'
	},
	{
		name: 'sunflower',
		img: 'images/sunflower.jpg'
	},
	{
		name: 'tulip',
		img: 'images/tulip.jpg'
	},
  ]

  cardArray.sort(() => 0.5 - Math.random())

  // create game board

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result') 
  var cardsChosen = []
  var cardsChosenId = [] 
  var cardsWon = []

  function createBoard(){
  	for (let i=0; i < cardArray.length; i++){
  		var card = document.createElement('img')
  		card.setAttribute('src','images/blankCard.png')
  		card.setAttribute('data-id',i)
  		//card.addEventListener('click',flipCard)
  		grid.appendChild(card)

  	}
  }

//Check for match

function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]
	if (cardsChosen[0] === cardsChosen[1]){
		alert('You found a match')
		cards[optionOneId].setAttribute('src','images/blankCard.png')
		cards[optionTwoId].setAttribute('src','images/blankCard.png')
		cardsWon.push(cardsChosen)

	} else {
		cards[optionOneId].setAttribute('src','images/blank.png')
		cards[optionTwoId].setAttribute('src','images/blank.png')
		alert('sorry, try again')
	}
	cardsChosen = []
	cardsChosenId = []
	resultDisplay.textContent = cardsWon.length
	if(cardsWon.length === cardArray.length/2){
		resultDisplay.textContent = 'Congratulations! You found them all'
	}

}


//flip card

function flipCard(){
	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src',cardArray[cardId].img)
	if (cardsChosen.length == 2){
		setTimeout(checkForMatch,500)

	}
}



createBoard()


})