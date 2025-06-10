import { Application } from "@hotwired/stimulus"
import SwipeController from "./swipe_controller"

window.Stimulus = Application.start()
Stimulus.register("swipe", SwipeController)
