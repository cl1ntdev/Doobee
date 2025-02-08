




document.querySelector('.play-button').addEventListener('click',()=>{
    toggleAudio(bubbleClick,false)
    _toggleMainPage();
    _toggleGameChoice()

})

document.querySelectorAll(".game-choice-button").forEach(but=>{
    but.addEventListener('click',(e)=>{
        var baseVal = e.target.getAttribute("val")
        _toggleGameChoice()
        _toggleGameUi();
         toggleAudio(bubbleClick,false)
        _gameState(baseVal) // startgame here //gamelogic.js
        //loading here might be

    })
})

// *                  * \\
// game functions
// *                  * \\
