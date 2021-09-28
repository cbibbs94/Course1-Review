//this code turns the class animal into something i can access as an array
let animals = document.querySelectorAll('.animal')
console.log(animals)


// this code is for the dog category
let dogVotesCell = document.querySelector('#doggo-votes')
let dogVotesCount = 0

// dog storage pull
let dogVotes = localStorage.getItem('dog-votes')
if (dogVotes) {
    dogVotesCell.textContent = dogVotes; 
}

// dog button
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = 'Vote for Doggo'
animals[0].append(dogVoteBtn) 

// dog button event
dogVoteBtn.addEventListener('click', function(e){
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem('dog-votes', dogVotesCount);
});


//this code is for the cat category
let catVotesCell = document.querySelector('#catto-votes')
let catVotesCount = 0

//cat storage pull
let catVotes = localStorage.getItem('cat-votes')
if (catVotes) {
    catVotesCell.textContent= catVotes;
}

// cat button
let catVoteBtn = document.createElement('button')
catVoteBtn.textContent = 'Support the Kitties'
animals[1].append(catVoteBtn)

//cat button event
catVoteBtn.addEventListener('click', function(e){ 
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount;
    localStorage.setItem('cat-votes', catVotesCount);
});

// this code is for the fish category
let fishVotesCell = document.querySelector('#fish-votes')
let fishVotesCount = 0

// fish localstorage pull
//let fishVotes = locatStorage.getItem('fish-votes')
//if (fishVotes) {
//    fishVotesCell.textContent = fishVotes;
//}

//fish button
let fishVoteBtn = document.createElement('button')
fishVoteBtn.textContent = 'Just keep Swimming!'
animals[2].append(fishVoteBtn)

//fish button event
fishVoteBtn.addEventListener('click', function(e){
    fishVotesCount = fishVotesCount + 1;
    fishVotesCell.textContent = fishVotesCount;
    localStorage.setItem('fish-votes', fishVotesCount);
});
