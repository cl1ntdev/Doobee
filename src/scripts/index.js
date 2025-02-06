




document.querySelector('.play-button').addEventListener('click',()=>{
    _toggleMainPage();
    _toggleGameChoice()

})

document.querySelectorAll(".game-choice-button").forEach(but=>{
    but.addEventListener('click',(e)=>{
        var baseVal = e.target.getAttribute("val")
        _toggleGameChoice()
        _toggleGameUi();
        _gameState(baseVal) // startgame here //gamelogic.js
        //loading here might be

    })
})

// *                  * \\
// game functions
// *                  * \\
