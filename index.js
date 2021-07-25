// Code your solutions in this file

// function writeCards(names, thing){
//     let result = []
//     for (let i = 0; i < names.length; i++) {
//         result.push(`Thank you, ${names[i]}, for the wonderful ${thing} gift!`)
//     }
//     return result
// }
// function writeCards(names, event) {
//     let cards = []
//     for (let i =0; i < names.length; i++) {
//         cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
//     }
//     return cards
// }
function writeCards(names, sth){
    let result = []
    for(let i = 0; i < names.length; i++){
        result.push(`Thank you, ${names[i]}, for the wonderful ${sth} gift!`)
    }
    return result
}

function countDown(num){
    while (num >= 0){
        console.log(num)
        num --
    }
    
}