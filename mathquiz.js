player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML=player1_name+" : ";
document.getElementById("player2name").innerHTML=player2_name+" : ";
document.getElementById("player1score").innerHTML=player1_score+" : ";
document.getElementById("player2score").innerHTML=player2_score+" : ";
document.getElementById("questionturn").innerHTML="Question turn- "+player1_name;
document.getElementById("answerturn").innerHTML="Answer turn- "+player2_name;
function send(){
number1 = document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actual_answer=number1*number2;
    console.log(actual_answer);
    question_number = "<h4>" + number1+"X"+ number2 +"</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}
question_turn="player1";
 answer_turn="player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case "+answer);
    if(answer==word){
        if(answer_turn=="player1"){
            updatedplayer1_score=player1_score+1;
            document.getElementById("player1score").innerHTML=player1_score;
    
        }
        else{
            updatedplayer2_score=player2_score+1;
            document.getElementById("player2score").innerHTML=updatedplayer2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("questionturn").innerHTML="Question turn - "+player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("questionturn").innerHTML="Question turn - "+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("answerturn").innerHTML="Answer turn - "+player2_name;
    }
    else{
        answer_turn="player1"
        document.getElementById("answerturn").innerHTML="Answer turn - "+player1_name;
    }
}

