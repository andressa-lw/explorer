const natureSound = new Audio("./assets/floresta.wav")
const rainSound = new Audio("./assets/chuva.wav")
const coffeeShopSound = new Audio("./assets/cafeteria.wav")
const fireplaceSound = new Audio("./assets/lareira.wav")

export function toggleNature() {
  playSound(natureSound)
}

export function toggleRain() {
  playSound(rainSound)
}

export function toggleCoffee() {
  playSound(coffeeShopSound)
}

export function toggleFire() {
  playSound(fireplaceSound)
}

function playSound(sound) {
  sound.loop = true
  sound.play()
}

function StopSound() {
  natureSound.pause()
  rainSound.pause()
  coffeeShopSound.pause()
  fireplaceSound.pause()
}

export function ResetSound() {
  const soundsI = document.querySelectorAll("#sounds i")
  soundsI.forEach((sound) => {
    sound.classList.remove("activeSound")
  })
  StopSound()
}
