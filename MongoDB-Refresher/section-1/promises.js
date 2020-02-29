//ES5
// function startGame() {
//     let counter = 0;
//     document.querySelector('button').addEventListener('click', () => {
//         ++counter;
//     });
    
//     setTimeout(() => {
//         if (counter > 5) {
//             alert('You won! Your clicks: ' + counter)
//         } else {
//             alert('sorry you lost')
//         }
//     }, 2000)
// }

// startGame();

//ES6 PROMISES
function startGame() {
    let counter = 0;
    document.querySelector('button').addEventListener('click', () => {
        ++counter;
    });
 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( counter > 5) {
                resolve();
            } else {
                reject();
            }
        }, 2000)
    });
}

startGame()
.then(() => alert('You Win ' + counter))
.catch(() => alert('You lost'))