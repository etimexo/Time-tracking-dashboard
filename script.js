const daily = document.querySelector("#daily")
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")
daily.addEventListener("click", () => {
    document.getElementById("work-menu1").innerHTML = "5hrs"
    document.getElementById("work-menu2").innerHTML = "Yesterday - 7hrs" 
    document.getElementById("play-menu1").innerHTML = "1hr"
    document.getElementById("play-menu2").innerHTML = "Yesterday - 2hrs"
    document.getElementById("study-menu1").innerHTML = "0hr"
    document.getElementById("study-menu2").innerHTML = "Yesterday - 1hr"
    document.getElementById("exercise-menu1").innerHTML = "1hr"
    document.getElementById("exercise-menu2").innerHTML = "Yesterday - 1hr"
    document.getElementById("social-menu1").innerHTML = "1hr"
    document.getElementById("social-menu2").innerHTML = "Yesterday - 3hrs"
    document.getElementById("selfcare-menu1").innerHTML = "0hr"
    document.getElementById("selfcare-menu2").innerHTML = "Yesterday - 1hr"
})
weekly.addEventListener("click", () => {
    document.getElementById("work-menu1").innerHTML = "32hrs"
    document.getElementById("work-menu2").innerHTML = "Last week - 36hrs"
    document.getElementById("play-menu1").innerHTML = "10hrs"
    document.getElementById("play-menu2").innerHTML = "Last week - 8hrs"
    document.getElementById("study-menu1").innerHTML = "4hrs"
    document.getElementById("study-menu2").innerHTML = "Last week - 7hrs"
    document.getElementById("exercise-menu1").innerHTML = "4hrs"
    document.getElementById("exercise-menu2").innerHTML = "Last week - 5hrs"
    document.getElementById("social-menu1").innerHTML = "5hrs"
    document.getElementById("social-menu2").innerHTML = "Last week - 10hrs"
    document.getElementById("selfcare-menu1").innerHTML = "2hrs"
    document.getElementById("selfcare-menu2").innerHTML = "Last week - 2hrs"
})
monthly.addEventListener("click", () => {
    document.getElementById("work-menu1").innerHTML = "103hrs"
    document.getElementById("work-menu2").innerHTML = "Last month - 128hrs" 
    document.getElementById("play-menu1").innerHTML = "23hrs"
    document.getElementById("play-menu2").innerHTML = "Last month - 29hrs" 
    document.getElementById("study-menu1").innerHTML = "13hrs"
    document.getElementById("study-menu2").innerHTML = "Last month - 19hrs" 
    document.getElementById("exercise-menu1").innerHTML = "11hrs"
    document.getElementById("exercise-menu2").innerHTML = "Last month - 18hrs" 
    document.getElementById("social-menu1").innerHTML = "21hrs"
    document.getElementById("social-menu2").innerHTML = "Last month - 23hrs" 
    document.getElementById("selfcare-menu1").innerHTML = "7hrs"
    document.getElementById("selfcare-menu2").innerHTML = "Last month - 11hrs" 
})