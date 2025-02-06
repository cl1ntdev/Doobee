
const glb = new Global(); //global in class because i want to
var isGameOver = false;
// timer, health, level
//easy = 5 levels , medium 7 levels, hard 8 levels
const mediumCharLimit = 15
const hardCharLimit = 25
var image_clue = document.querySelector('.image-clue')//img element
var letters_clue = document.querySelector('.letters-clue')//div element
var answer = document.querySelector('.answer')//div element
var fun_fact = document.querySelector('.fun-fact-clue')
var baseProps = props.sort(()=>Math.random() - 0.5) //randomize props

// var randomNum = Math.floor(Math.random() * (baseProps[glb.level]["fun-fact"].length)) // use this to randomize fun fact in hard level

var isAnswerCorrect = false;

var isTurnOnTimer = false;




const _gameState = (val) =>{ // main shit
    loading_assets()
    baseProps = props.sort(()=>Math.random() - 0.5)
    glb.defineGame(val) // passs the mode type
    _show_statistics()
    _togglePointerEvents()

    //start timer as soon as the game startsz
    switch(val){ // 5levels
        case 'easy':
            image_clue.src = baseProps[glb.level]["image-source"] // set image source type shiw
            _createLetterClues(baseProps[glb.level].name.toUpperCase().replace(/\s/g, ''))
            glb.setLevelAnswer((baseProps[glb.level].name.toUpperCase()).replace(/\s/g, ''))
            break;
        case 'medium':
            image_clue.src = baseProps[glb.level]["image-source"] // set image source type shiw
            var cluesForMedium = _mediumClues(baseProps[glb.level].name.toUpperCase().replace(/\s/g, ''),mediumCharLimit)
            _createLetterClues(cluesForMedium)
            glb.setLevelAnswer((baseProps[glb.level].name.toUpperCase()).replace(/\s/g, ''))
            break;
        case 'hard':
            image_clue.src = baseProps[glb.level]["none"] // set image source type shiw
            var randomNum = Math.floor(Math.random() * (baseProps[glb.level]["fun-fact"].length)) // use this to randomize fun fact in hard level
            _fnFactHard(baseProps[glb.level]["fun-fact"][randomNum]) // show the funfact in dom

            var cluesForMedium = _mediumClues(baseProps[glb.level].name.toUpperCase().replace(/\s/g, ''),hardCharLimit)
            _createLetterClues(cluesForMedium,)
            glb.setLevelAnswer((baseProps[glb.level].name.toUpperCase()).replace(/\s/g, ''))
            break;
    }    
}

const _mediumClues = (answer,limit)=>{
    var result = answer
    for(var i = 0;i<baseProps.length;i++){
        result+=baseProps[i].name.toUpperCase().replace(/\s/g, '')
    }
    var char_limit = result.slice(0,limit)
    result = glb.shuffleString(char_limit)
    return result
}

const _createLetterClues =  (name) =>{

    isTurnOnTimer = true;
    var i = 0;
    var clue =  glb.shuffleString(name)
    letters_clue.innerHTML = ' '
    var clueCreator = setInterval(()=>{
        var letter = document.createElement('button')
        letter.className = 'letter-clue-base'
        
        letter.setAttribute('val',clue[i])
        letter.innerText = clue[i]
        letter.onclick = (e) =>{
            glb.appendAnswer(e.target.getAttribute("val"))
            e.target.disabled = true
            //update answer area here
            _updateAnswer()
        }
        i++;
        letters_clue.appendChild(letter)
        if(i>=clue.length){
            clearInterval(clueCreator)
            _togglePointerEvents()
            _startTimer(glb.timer) // start the timer type shit after animation type shi

        }
    },300)
}

const _fnFactHard = (ffact)=>{
    //letters clue
    fun_fact.innerHTML = `Clue: ${ffact}`
}


//only basing on glb.answer not actually modifying
const _updateAnswer = () => {
    answer.innerHTML = ' '
    for(var i = 0;i<glb.answer.length;i++){
        var letter = document.createElement('h1')
        letter.className = 'current-answer'
        letter.setAttribute('val',glb.answer[i])
        letter.innerText = glb.answer[i];
        answer.appendChild(letter)
    }
}

const _undisableButton = (letter_to_remove) => {
    var allAnswerLetters = document.querySelectorAll('.letter-clue-base')
    for(var i = allAnswerLetters.length;i>0;i--){
        if(allAnswerLetters[i-1].getAttribute("val") == letter_to_remove && allAnswerLetters[i-1].disabled == true  ){
            allAnswerLetters[i-1].disabled = false;
            return
        }
    }
    // console.log(allAnswerLetters[allAnswerLetters.length-1].getAttribute("val"))
}

document.querySelector('.delete-answer-button').addEventListener('click',()=>{
    _undisableButton(glb.getLastLetter())
    glb.removeLastLetter()
    _updateAnswer()
})

document.querySelector('.check-answer').addEventListener('click',()=>{
    if(glb.checkGameAnswer()){
        if(!glb.checkLevelNext()){// comapres current level to max level of the mode
            //back to main menu
            menu()
            return;
        }
        isAnswerCorrect = true
    }else{
        glb.updateTries(-1)
        _update_statistics()
        _wrongAnswerReset()
        console.log('wrong answer') // reset everything if wrong, input and undisable button
    }
})

const menu = () =>{
    glb.reset()
    glb.finishedMode.push(glb.mode_type)
    isTurnOnTimer = false
    _modePicker()
}

const _update_statistics = ()=>{
    if(!glb.isValidTries()){
        console.log('game over')
        menu()
    }
    document.querySelector('.player-tries').innerText = `Health: ${glb.tries}x`
}
const _show_statistics = ()=>{
    document.querySelector('.player-tries').innerText = `Health: ${glb.tries}x`
    document.querySelector('.player-level').innerText = `Level ${glb.level}/${glb.level_max}`
}

const _wrongAnswerReset = ()=>{
    answer.innerHTML = ''
    glb.resetAnswer()
    var clues = document.querySelectorAll('.letter-clue-base')
    if(clues){
        clues.forEach(clue=>{
            clue.disabled = false
        })
    }
}

const _startTimer = (timerStart) =>{
    var init = timerStart

    const timerFunct = setInterval(()=>{

        if(!isTurnOnTimer){
            clearInterval(timerFunct)
            return
        }


        document.querySelector('.player-timer').innerText = `Timer: ${init}s`
        init--
        if(init<0 && !isAnswerCorrect){
            console.log('game over')
            menu()
            clearInterval(timerFunct)
        }else if(isAnswerCorrect){
            isAnswerCorrect = false
            clearInterval(timerFunct)
            glb.level +=1
            glb.resetAnswer()
            answer.innerHTML = ' '


            _gameState(glb.mode_type)
        }
    },1000)
}


const _modePicker = () =>{
    _toggleGameUi()
    _toggleGameChoice()
}



