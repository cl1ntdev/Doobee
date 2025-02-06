var main_page_pane = document.querySelector('.main-page-container')
var game_choice_pane = document.querySelector('.game-choice')
var game_ui_pane = document.querySelector('.game-ui')


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
}

const _toggleGameUi = ()=>{
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
const loading = () => { 
    // loading type shi
}
