let count = 0
let ClockShower = document.getElementById("clock")
const StartButton = document.getElementById("start-button")
ClockShower.textContent = count

// add 1
StartButton.addEventListener("click", () => {
    const Timer = setInterval(() => {
        ClockShower.textContent = count += 1
    }, 1000); 

    // delete 1
    document.getElementById("stop-button").addEventListener("click", () => {
        clearInterval(Timer)
    })
    
    // reset
    document.getElementById("clear-button").addEventListener("click", () => {
        ClockShower.textContent = count -= count
        clearInterval(Timer)
    })
})    




