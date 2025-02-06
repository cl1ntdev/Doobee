
class Global {
    
    timer = 0;
    tries = 4;
    level = 1; // first level of the game
    level_max = 0; // max level of the game
    mode_type = ""
    answer = "";
    level_answer = ""
    finishedMode = []
    shuffleString(str) {
        const charArray = str.split('');
        for (let i = charArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
        }
        return charArray.join('');
    }


    defineGame(modetype){
        this.mode_type = modetype;
        switch(modetype){
            case 'easy':
                this.level_max = 2
                this.timer = 30
                break
            case 'medium':
                this.level_max = 7
                this.timer = 26
                break
            case 'hard':
                this.level_max = 10
                this.timer = 19
                break
        }
    }
    appendAnswer(letter){
        this.answer+=letter;

    }

    getLastLetter(){
        return this.answer.slice(-1)
    }

    removeLastLetter(){
        this.answer = this.answer.slice(0,-1)
    }

    setLevelAnswer(val){
        this.level_answer = val
    }

    checkGameAnswer(){
        return (this.answer == this.level_answer ? true : false)
    }

    checkLevelNext(){
        return (this.level == this.level_max ? false : true) //if on max level end game
    }

    resetAnswer(){
        this.answer = "";
    }

    reset(){
        this.answer = ""
        this.level = 1;
        this.level_answer = ""
        this.tries = 4
    }

    updateTries(val){
        this.tries += val
    }

    isValidTries(){
        return (this.tries>0 ? true : false)
    }

}