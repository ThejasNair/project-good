
var x = new Audio("award.mp3")

var y =  new Audio("Jeopardy.mp3");


function stopSound() {
x.pause();
    document.getElementById("BIG_ONE").innerHTML = "ok...Can you please reset the page or move to a different tab? This is getting really awkward";
y.play();
}
function addUser() {
player_1 = document.getElementById("inputtiest_1").value;
player_2 = document.getElementById("inputtiest_2").value;

localStorage.setItem("playur_1", player_1);
localStorage.setItem("playur_2", player_2);

window.location = "game_screen.html";
}


function youWin() {
   
document.getElementById("Player1_score").innerHTML = "5";

document.getElementById("BIG_ONE").innerHTML = "PLAYER ONE HAS....ONE!*get it? one? won?";
x.play();
setTimeout(stopSound, 5000);
}
question_turn = "player1"; 
answer_turn = "player2";

function send() {
get_word = document.getElementById("mr_input").value;
word = get_word.toLowerCase();

charAt1 = word.charAt(1);
console.log(charAt1);

length_divided_2 = Math.floor(word.length/2);
charAt2 = word.charAt(length_divided_2);
console.log(charAt2);

length_minus_1 = word.length - 1;
charAt3 = word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = charAt1.replace(charAt2, "_");
remove_charAt3 = charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='question_word_thingy'>Q." + remove_charAt3 +" </h4>";
guess_text = "<br> Answer: <input type='text' id='input_master'>";
check_button="<button id='check_it' onclick='check();'>Check</button>";
row = question_word + guess_text + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("mr_input").innerHTML= " ";


}

function check() {
    
    textVal = document.getElementById("mr_input").value;
    answerVal = textVal.toLowerCase();
    if(answerVal == word) {
        if(answer_turn == "player_1") {
            playerOneScored = document.getElementById("Player1_score").value + 1;
            document.getElementById("Player1_score").innerHTML = playerOneScored;
        }
        else {
            playerTwoScored = document.getElementById("Player2_score").value + 1;
            document.getElementById("Player2_score").innerHTML = playerTwoScored;
        }
    }
    if(answer_turn == "player_1") {
        answer_turn = "player_2";
        question_turn  = "player_1";
        document.getElementById("Answer_Turn").innerHTML = "Answer Turn -" + answer_turn;
        document.getElementById("Question_Turn").innerHTML = "Question Turn - " + question_turn;

    }
    else {
        answer_turn = "player_1";
        question_turn  = "player_2";
        document.getElementById("Answer_Turn").innerHTML = "Answer Turn -" + answer_turn;
        document.getElementById("Question_Turn").innerHTML = "Question Turn - " + question_turn;
    }
    document.getElementById("output").innerHTML = "";
}

function clicketyClick() {

    document.getElementById("getgud").style.backgroundColor = "green";
    document.getElementById("tabloon").style.color = "white";
    document.getElementById("tabloon").style.display = "block";
}

function imOuttaHere() {
    document.getElementById("tabloon").style.display = "none";
    document.getElementById("getgud").style.backgroundColor = "white";
}

function clicketyClick2() {

    document.getElementById("getgud2").style.backgroundColor = "green";
    document.getElementById("drpDn").style.color = "white";
    document.getElementById("drpDn").style.display = "block";
    document.getElementById("amWin2").style.display = "block";
    document.getElementById("amLos2").style.display = "block";
    document.getElementById("amWon2").style.display = "block";
}

function imOuttaHere2() {
    document.getElementById("drpDn").style.display = "none";
    
    document.getElementById("getgud2").style.backgroundColor = "white";
}

function Emoted_1() {
    document.getElementById("P1Says").style.borderStyle = "ridge";
    document.getElementById("P1Says").style.backgroundColor="white"
    document.getElementById("P1Says").innerHTML = "hahae! me winning :DDDDDDDD";

    document.getElementById("emote1").style.display ="none";
    document.getElementById("emote2").style.display ="none";
    document.getElementById("emote3").style.display ="none";
    document.getElementById("emote1").style.display = "block";
    setTimeout(ceaseMovement, 5000);
}


function Emoted_2() {
    document.getElementById("P1Says").style.borderStyle = "ridge";
    document.getElementById("P1Says").style.backgroundColor="white"
	document.getElementById("P1Says").innerHTML = "ono! ur in da leed! waaaaaah :("	
			    
   
    document.getElementById("emote1").style.display ="none";
    document.getElementById("emote2").style.display ="none";
    document.getElementById("emote3").style.display ="none";
    document.getElementById("emote2").style.display = "block";
    setTimeout(ceaseMovement, 5000);

}



function Emoted_3() {
    document.getElementById("P1Says").style.borderStyle = "ridge";
    document.getElementById("P1Says").style.backgroundColor="white"
    document.getElementById("P1Says").innerHTML = "O YEAHHHHHHHHHH I WONNNNNNNNNNN";
  
    document.getElementById("emote1").style.display ="none";
    document.getElementById("emote2").style.display ="none";
    document.getElementById("emote3").style.display ="none";
    document.getElementById("emote3").style.display = "block";
    setTimeout(ceaseMovement, 5000);

}


function ceaseMovement() {
    document.getElementById("P1Says").style.borderStyle = "none";
    document.getElementById("P1Says").style.backgroundColor = "blue";
    document.getElementById("P1Says").innerHTML = " ";
 
    document.getElementById("emote1").style.display ="none";
    document.getElementById("emote2").style.display ="none";
    document.getElementById("emote3").style.display ="none";
}

function ceaseMovement2() {
    document.getElementById("P2Says").style.borderStyle = "none";
    document.getElementById("P2Says").style.backgroundColor = "blue";
    document.getElementById("P2Says").innerHTML = " ";
    document.getElementById("emote4").style.display ="none";
    document.getElementById("emote5").style.display ="none";
    document.getElementById("emote6").style.display ="none";

}

function Emoted_4() {
    document.getElementById("P2Says").style.borderStyle = "ridge";
    document.getElementById("P2Says").style.backgroundColor="white";
    document.getElementById("P2Says").innerHTML = "hahae! me winning :DDDDDDDD";
    document.getElementById("emote4").style.display ="none";
    document.getElementById("emote5").style.display ="none";
    document.getElementById("emote6").style.display ="none";
    document.getElementById("emote4").style.display = "block";
    setTimeout(ceaseMovement, 5000);


}


function Emoted_5() {
    document.getElementById("P2Says").style.borderStyle = "ridge";
    document.getElementById("P2Says").style.backgroundColor="white"
	document.getElementById("P2Says").innerHTML = "ono! ur in da leed! waaaaaah :("	
			    
 
    document.getElementById("emote4").style.display ="none";
    document.getElementById("emote5").style.display ="none";
    document.getElementById("emote6").style.display ="none";
    document.getElementById("emote5").style.display = "block";
    setTimeout(ceaseMovement2, 5000);
}



function Emoted_6() {
    document.getElementById("P2Says").style.borderStyle = "ridge";
    document.getElementById("P2Says").style.backgroundColor="white"
    document.getElementById("P2Says").innerHTML = "O YEAHHHHHHHHHH I WONNNNNNNNNNN";
   
    document.getElementById("emote4").style.display ="none";
    document.getElementById("emote5").style.display ="none";
    document.getElementById("emote6").style.display ="none";
    document.getElementById("emote6").style.display = "block";
    setTimeout(ceaseMovement, 5000);
}

