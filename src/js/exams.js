let score=0;
function displayScore() {
    if (document.getElementById("correct1").checked){
        document.getElementById("correct1").style.backgroundColor="green";
        document.getElementById("c_text").style.Color="green";
        score+=1;
    }
    if (document.getElementById("correct2").checked){

        score+=1;
    }
    if (document.getElementById("correct3").checked){
        score+=1;
    }
    if (document.getElementById("correct4").checked){
        score+=1;
    }
    if (document.getElementById("correct5").checked){
        score+=1;
    }
    alert("Correct result is " + score);
    score=0;
}