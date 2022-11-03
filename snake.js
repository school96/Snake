var snakedir = "n"
var snake = document.getElementById("snake")

document.onkeydown = function(event) {
    if (event.key == "w") {
        snakedir = "n"
    } else if (event.key == "a") {
        snakedir = "w"
    } else if (event.key == "s") {
        snakedir = "s"
    } else if (event.key == "d") {
        snakedir = "e"
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
    if (snakedir == "n") {
        snake.style.top = (GetTop() - 20) + "px"
    }
    if (snakedir == "n" && GetTop() == -20) {
        snake.style.top = 780 + "px"
        }
    if (snakedir == "s") {
        snake.style.top = (GetTop() + 20) + "px"
    }
    if (snakedir == "s" && GetTop() == 800) {
        snake.style.top = 0 + "px"
    }
    if (snakedir == "w") {
        snake.style.left = (GetLeft() - 20) + "px"
    }
    if (snakedir == "w" && GetLeft() == -20) {
        snake.style.left = 780 + "px"
    }
    
    if (snakedir == "e") {
        snake.style.left = (GetLeft() + 20) + "px"
    }
    if (snakedir == "e" && GetLeft() == 800) {
        snake.style.left = 0 + "px"
    }
}, 100)

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
    document.getElementById("snake6").style.top = document.getElementById("snake5").style.top
    document.getElementById("snake6").style.left = document.getElementById("snake5").style.left
}