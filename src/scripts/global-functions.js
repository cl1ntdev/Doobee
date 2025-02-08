var main_page_pane = document.querySelector('.main-page-container')
var game_choice_pane = document.querySelector('.game-choice')
var game_ui_pane = document.querySelector('.game-ui')
var game_container = document.querySelector('.game-container')

const correctSfx = document.querySelector('.correct-sfx');
const wrongSfx = document.querySelector('.wrong-sfx');
const gameBgMusic = document.querySelector('.game-bg-music');
const introBgMusic = document.querySelector('.intro-bg-music');
const bubbleClick = document.querySelector('.bubble-click-sfx')

const stat = document.querySelector('.stats')
const game = document.querySelector('.game')

// main_page_pane.style.display = 'none';    
game_choice_pane.style.display = 'none'
game_ui_pane.style.display = 'none' 

//default

const _toggleMainPage = () =>{
    if(main_page_pane.style.display == 'none'){
        main_page_pane.style.display = 'block';
    }else{
        main_page_pane.style.display = 'none';
    }
}

const _toggleGameChoice = () => {
    if(game_choice_pane.style.display == "none"){
        game_choice_pane.style.display = "block";
    }else{
        game_choice_pane.style.display = "none";
    }
    if(game.style.display == 'none' && stat.style.display == 'none'){
        _toggleStat_Game() // in the previous game and stat is displayed none to show congrats
        
    }
}

const _toggleGameUi = ()=>{ //parent div (game-ui)
    if(game_ui_pane.style.display == 'none'){
        game_ui_pane.style.display = 'flex'
    }else{
        game_ui_pane.style.display = 'none'
    }

    
}

const _togglePointerEvents = () =>{
    if(game_ui_pane.style.pointerEvents == 'none'){
        game_ui_pane.style.pointerEvents = 'auto'
    }else{
        game_ui_pane.style.pointerEvents = 'none'
    }
}
const loading_assets = () =>{
      document.querySelector('.player-tries').innerText = `Health: loading :D`
      document.querySelector('.player-timer').innerText = `Timer: loading :D`
    document.querySelector('.player-level').innerText = `Level loading :D`
}

const _toggleStat_Game = ()=>{
    if(game.style.display == 'none' && stat.style.display == 'none'){
        game.style.display = 'block'
        stat.style.display = 'block'
    }else{
        game.style.display = 'none'
        stat.style.display = 'none'
    }
}

function toggleAudio(audioElement, loop = false) {
    if (audioElement.paused) {
      audioElement.loop = loop; // Enable or disable looping
      audioElement.play(); // Play the audio
    } else {
      audioElement.pause(); // Pause the audio
      audioElement.currentTime = 0; // Reset to the beginning
    }
}

function playAudio(audioElement) {
    audioElement.currentTime = 0; // Reset to the beginning
    audioElement.play(); // Play the audio
}




const loading = () => { 
    // loading type shi
}
