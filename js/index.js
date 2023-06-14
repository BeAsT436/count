let counter = localStorage.getItem("counter")

const valueElement = document.querySelector(".value")
valueElement.textContent = counter

const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
    const classes = btn.classList
    btn.addEventListener("click", () => {
        if (classes.contains("add")) {
            counter++
            valueElement.textContent = counter
            localStorage.setItem("counter", counter)
        } else if (classes.contains("sub")) {
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
