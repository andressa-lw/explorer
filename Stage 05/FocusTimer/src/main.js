import * as FocusTimer from "./FocusTimer/index.js"
import { registerSounds } from "./Sounds/index.js"

import state from "./FocusTimer/state.js"

FocusTimer.start(state.minutes, state.seconds)

registerSounds()
