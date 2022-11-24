var snakedir = "n"
var snake = document.getElementById("snake")
var score = 0
var snakex = []
var snakey = []
var moving = false

function Randint(min, max) {
    return min + Math.round(Math.random() * (max - min))
}

document.onkeydown = function(event) {
    if (event.key == "w") {
        snakedir = "n"
    } else if (event.key == "a") {
        snakedir = "w"
    } else if (event.key == "s") {
        snakedir = "s"
    } else if (event.key == "d") {
        snakedir = "e"
    } else if (event.key == "f") {
        score += 1
    }
}

function GetTop() {
    return parseInt(snake.style.top.replace("px", ""))
}

function GetLeft() {
    return parseInt(snake.style.left.replace("px", ""))
}

setInterval(function() {
    console.clear()
    console.log(snakedir)
    Update2()
    moving = true
    console.log(moving)
    if (snakedir == "n") {
        snake.style.top = (GetTop() - 20) + "px"
    }
    if (snakedir == "n" && GetTop() == -20) {
        snake.style.top = 280 + "px"
        }
    if (snakedir == "s") {
        snake.style.top = (GetTop() + 20) + "px"
    }
    if (snakedir == "s" && GetTop() == 300) {
        snake.style.top = 0 + "px"
    }
    if (snakedir == "w") {
        snake.style.left = (GetLeft() - 20) + "px"
    }
    if (snakedir == "w" && GetLeft() == -20) {
        snake.style.left = 280 + "px"
    }
    
    if (snakedir == "e") {
        snake.style.left = (GetLeft() + 20) + "px"
    }
    if (snakedir == "e" && GetLeft() == 300) {
        snake.style.left = 0 + "px"
    }
    document.getElementById("s").innerHTML = score
    moving = false
}, 150)


var active1 = 1
while (true) {
    active1 += 1
    snakex.push(document.getElementById("snake" + active1).style.left.replace("px", ""))
    snakey.push(document.getElementById("snake" + active1).style.top.replace("px", ""))
    if (active1 == 32) {
        break
    }
}

setInterval(function() {
    var active2 = 1
    while (true) {
        active2 += 1
        snakex[active2 - 1] = document.getElementById("snake" + active2).style.left.replace("px", "")
        snakey[active2 - 1] = document.getElementById("snake" + active2).style.top.replace("px", "")
        if (active2 == 32) {
            break
        }
    }
}, 10)

setInterval(function() {
    var active3 = 1
    while (true) {
        active3 += 1
        if (score == active3 * 2) {
            document.getElementById("snake" + active3.toString()).style.display = ""
        }
        if (active3 == 32) {
            break
        }
    }
}, 10)

document.getElementById("apple").style.top = (Randint(0, 14) * 20) + "px"
document.getElementById("apple").style.left = (Randint(0, 14) * 20) + "px"

setInterval(function() {
    if (document.getElementById("apple").style.top == document.getElementById("snake").style.top && document.getElementById("apple").style.left == document.getElementById("snake").style.left) {
        while (true) {
            var s1 = (Randint(0, 14) * 20) + "px"
            var s2 = (Randint(0, 14) * 20) + "px"
            if (s1 != document.getElementById("apple").style.top && s2 != document.getElementById("apple").style.left) {
                break
            }
        }
        document.getElementById("apple").style.top = s1
        document.getElementById("apple").style.left = s2
        score += 1
    }
}, 150)

function Update2() {
    Update3()
    document.getElementById("snake2").style.top = GetTop() + "px"
    document.getElementById("snake2").style.left = GetLeft() + "px"
}

function Update3() {
    Update4()
    document.getElementById("snake3").style.top = document.getElementById("snake2").style.top
    document.getElementById("snake3").style.left = document.getElementById("snake2").style.left
}

function Update4() {
    Update5()
    document.getElementById("snake4").style.top = document.getElementById("snake3").style.top
    document.getElementById("snake4").style.left = document.getElementById("snake3").style.left
}

function Update5() {
    Update6()
    document.getElementById("snake5").style.top = document.getElementById("snake4").style.top
    document.getElementById("snake5").style.left = document.getElementById("snake4").style.left
}

function Update6() {
    Update7()
    document.getElementById("snake6").style.top = document.getElementById("snake5").style.top
    document.getElementById("snake6").style.left = document.getElementById("snake5").style.left
}

function Update7() {
    Update8()
    document.getElementById("snake7").style.top = document.getElementById("snake6").style.top
    document.getElementById("snake7").style.left = document.getElementById("snake6").style.left
}

function Update8() {
    Update9()
    document.getElementById("snake8").style.top = document.getElementById("snake7").style.top
    document.getElementById("snake8").style.left = document.getElementById("snake7").style.left
}

function Update9() {
    Update10()
    document.getElementById("snake9").style.top = document.getElementById("snake8").style.top
    document.getElementById("snake9").style.left = document.getElementById("snake8").style.left
}

function Update10() {
    Update11()
    document.getElementById("snake10").style.top = document.getElementById("snake9").style.top
    document.getElementById("snake10").style.left = document.getElementById("snake9").style.left
}

function Update11() {
    Update12()
    document.getElementById("snake11").style.top = document.getElementById("snake10").style.top
    document.getElementById("snake11").style.left = document.getElementById("snake10").style.left
}

function Update12() {
    Update13()
    document.getElementById("snake12").style.top = document.getElementById("snake11").style.top
    document.getElementById("snake12").style.left = document.getElementById("snake11").style.left
}

function Update13() {
    Update14()
    document.getElementById("snake13").style.top = document.getElementById("snake12").style.top
    document.getElementById("snake13").style.left = document.getElementById("snake12").style.left
}

function Update14() {
    Update15()
    document.getElementById("snake14").style.top = document.getElementById("snake13").style.top
    document.getElementById("snake14").style.left = document.getElementById("snake13").style.left
}

function Update15() {
    Update16()
    document.getElementById("snake15").style.top = document.getElementById("snake14").style.top
    document.getElementById("snake15").style.left = document.getElementById("snake14").style.left
}

function Update16() {
    Update17()
    document.getElementById("snake16").style.top = document.getElementById("snake15").style.top
    document.getElementById("snake16").style.left = document.getElementById("snake15").style.left
}

function Update17() {
    Update18()
    document.getElementById("snake17").style.top = document.getElementById("snake16").style.top
    document.getElementById("snake17").style.left = document.getElementById("snake16").style.left
}

function Update18() {
    Update19()
    document.getElementById("snake18").style.top = document.getElementById("snake17").style.top
    document.getElementById("snake18").style.left = document.getElementById("snake17").style.left
}

function Update19() {
    Update20()
    document.getElementById("snake19").style.top = document.getElementById("snake18").style.top
    document.getElementById("snake19").style.left = document.getElementById("snake18").style.left
}

function Update20() {
    Update21()
    document.getElementById("snake20").style.top = document.getElementById("snake19").style.top
    document.getElementById("snake20").style.left = document.getElementById("snake19").style.left
}

function Update21() {
    Update22()
    document.getElementById("snake21").style.top = document.getElementById("snake20").style.top
    document.getElementById("snake21").style.left = document.getElementById("snake20").style.left
}

function Update22() {
    Update23()
    document.getElementById("snake22").style.top = document.getElementById("snake21").style.top
    document.getElementById("snake22").style.left = document.getElementById("snake21").style.left
}

function Update23() {
    Update24()
    document.getElementById("snake23").style.top = document.getElementById("snake22").style.top
    document.getElementById("snake23").style.left = document.getElementById("snake22").style.left
}

function Update24() {
    Update25()
    document.getElementById("snake24").style.top = document.getElementById("snake23").style.top
    document.getElementById("snake24").style.left = document.getElementById("snake23").style.left
}

function Update25() {
    Update26()
    document.getElementById("snake25").style.top = document.getElementById("snake24").style.top
    document.getElementById("snake25").style.left = document.getElementById("snake24").style.left
}

function Update26() {
    Update27()
    document.getElementById("snake26").style.top = document.getElementById("snake25").style.top
    document.getElementById("snake26").style.left = document.getElementById("snake25").style.left
}

function Update27() {
    Update28()
    document.getElementById("snake27").style.top = document.getElementById("snake26").style.top
    document.getElementById("snake27").style.left = document.getElementById("snake26").style.left
}

function Update28() {
    Update29()
    document.getElementById("snake28").style.top = document.getElementById("snake27").style.top
    document.getElementById("snake28").style.left = document.getElementById("snake27").style.left
}

function Update29() {
    Update30()
    document.getElementById("snake29").style.top = document.getElementById("snake28").style.top
    document.getElementById("snake29").style.left = document.getElementById("snake28").style.left
}

function Update30() {
    Update31()
    document.getElementById("snake30").style.top = document.getElementById("snake29").style.top
    document.getElementById("snake30").style.left = document.getElementById("snake29").style.left
}

function Update31() {
    Update32()
    document.getElementById("snake31").style.top = document.getElementById("snake30").style.top
    document.getElementById("snake31").style.left = document.getElementById("snake30").style.left
}

function Update32() {
    document.getElementById("snake32").style.top = document.getElementById("snake31").style.top
    document.getElementById("snake32").style.left = document.getElementById("snake31").style.left
}

