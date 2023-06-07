const subBtn = document.querySelector(".sub")
const addBtn = document.querySelector(".add")
const resBtn = document.querySelector(".res")
let counter = 0
const valueElement = document.querySelector(".value")
valueElement.textContent = counter
subBtn.addEventListener("click", () => {
    counter--
    valueElement.textContent = counter
    console.log(counter)
})
valueElement.textContent = counter
addBtn.addEventListener("click", () => {
    counter++
    valueElement.textContent = counter
    console.log(counter)
})
valueElement.textContent = counter
resBtn.addEventListener("click", () => {
    counter = 0
    valueElement.textContent = counter
    console.log(counter)
})