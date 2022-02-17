console.log("Hello")

document.querySelector(`.backend ul`).style.display = "none"
document.querySelector(`.app ul`).style.display = "none"
document.querySelector(`.config ul`).style.display = "none"
document.querySelector(`.frontend ul`).style.display = "none"
document.querySelector(`.public ul`).style.display = "none"

function hideShow(past) {
    const pasta = document.querySelector(`.${past} ul`)

    if(pasta.style.display != "none") {
        pasta.style.display = "none"
    } else {
        pasta.style.display = "block"
    }
}