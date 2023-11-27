import * as actions from "./actions.js"

export function registerSounds() {
  const sounds = document.getElementById("sounds")

  sounds.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    actions.ResetSound()

    event.target.classList.toggle("activeSound")

    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}
