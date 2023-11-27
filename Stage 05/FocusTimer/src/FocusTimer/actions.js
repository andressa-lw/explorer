import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js"
import { ResetSound } from "../Sounds/actions.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
  ResetSound()
}

export function addTime() {
  if (state.isRunning) {
    timer.updateDisplay()
    ResetSound()
  }

  state.isRunning = false
  document.documentElement.classList.remove("running")

  let minutes = Number(el.minutes.textContent)

  let moreFiveMinutes = minutes + 5
  updateDisplay(moreFiveMinutes, 0)
}

export function removeTime() {
  if (state.isRunning) {
    timer.updateDisplay()
    ResetSound()
  }

  state.isRunning = false
  document.documentElement.classList.remove("running")

  let minutes = Number(el.minutes.textContent)

  let minusFiveMinutes = minutes - 5

  if (minusFiveMinutes < 5) {
    const alertError = document.querySelector(".alert")
    alertError.classList.add("show")
    alertError.innerText = "O valor minímo é de 5 minutos!"

    setTimeout(() => {
      alertError.classList.remove("show")
    }, 3000)

    return
  }

  updateDisplay(minusFiveMinutes, 0)
}
