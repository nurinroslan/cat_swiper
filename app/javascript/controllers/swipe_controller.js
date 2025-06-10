import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"]

  connect() {
    console.log("SwipeController connected")
    this.index = 0
    this.liked = []
  }

  like() {
    console.log("Like clicked")
    this.recordChoice("like")
  }

  dislike() {
    console.log("Dislike clicked")
    this.recordChoice("dislike")
  }

  recordChoice(type) {
    const card = this.cardTargets[this.index]
    if (!card) return

    card.classList.add(type === "like" ? "translate-x-full" : "-translate-x-full", "opacity-0")
    const url = card.dataset.url
    if (type === "like") {
      this.liked.push(url)
    }

    this.index++

    if (this.index === this.cardTargets.length) {
      const form = document.createElement("form")
      form.action = "/summary"
      form.method = "get"
      this.liked.forEach((catUrl) => {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = `liked_cats[]`
        input.value = catUrl
        form.appendChild(input)
      })
      document.body.appendChild(form)
      form.submit()
    }
  }
}
