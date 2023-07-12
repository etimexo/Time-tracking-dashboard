const daily = document.querySelector("#daily")
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")
daily.addEventListener("click", () => {
    document.getElementById("panel-menu1").innerHTML = "5hrs"
    document.getElementById("panel-menu2").innerHTML = "Yesterday - 7hrs" 
})
weekly.addEventListener("click", () => {
    document.getElementById("panel-menu1").innerHTML = "32hrs"
    document.getElementById("panel-menu2").innerHTML = "Last week - 36hrs" 
})
monthly.addEventListener("click", () => {
    document.getElementById("panel-menu1").innerHTML = "103hrs"
    document.getElementById("panel-menu2").innerHTML = "Last month - 128hrs" 
})