var Res = document.getElementsByClassName('final-result')[0];
var moves = document.getElementsByClassName('moves')[0];
var goal = document.getElementsByClassName('goal')[0];
var t1 = moves.value;
var t2 = Res.value;
var lock = false;

function input(i) {
    if (!lock) {
       Res.value = Res.value + i;
        check(); 
    }
}

function update() {
    moves.value = moves.value - 1;
    Res.value = eval(Res.value);
}

function backspace() {
    if (!lock) {
       Res.value = Res.value.substring(0, Res.value.length - 1);
        check(); 
    }
}

function restart() {
    moves.value = t1;
    Res.value = t2;
    lock = false;
}

function check() {
    update();
    if (Res.value === goal.value) {
        lock = true;
        setTimeout(function(){Res.value = "WIN";}, 500);
        setTimeout("restart();", 1000);
    } else {
        if (moves.value == 0) {
            lock = true;
            setTimeout(function(){Res.value = "LOSE";}, 500);
            setTimeout("restart();", 1000);
        }

    }
}

/*Пасхалки*/