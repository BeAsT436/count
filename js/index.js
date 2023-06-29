let counter = localStorage.getItem("counter")

const valueElement = document.querySelector(".value")
valueElement.textContent = counter

const btns = document.querySelectorAll(".btn")

const ACTIONS = {
    ADD: "add",
    SUB: "sub"
}

btns.forEach((btn) => {
    const classes = btn.classList
    btn.addEventListener("click", () => {
        if (classes.contains(ACTIONS.ADD)) {
            counter++
            valueElement.textContent = counter
            localStorage.setItem("counter", counter)
        } else if (classes.contains(ACTIONS.SUB)) {
            counter--
            valueElement.textContent = counter
            localStorage.setItem("counter", counter)
        } else {
            counter = 0
            valueElement.textContent = counter
            localStorage.setItem("counter", counter)
        }

    })
})