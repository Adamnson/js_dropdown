import "./dropdown.css"

function Dropdown(){
  let dropdown_div = document.createElement("div")
  dropdown_div.setAttribute("class", "dropdown")

  let dd_btn = document.createElement("button")
  dd_btn.innerHTML = "Dropdown"
  dd_btn.addEventListener("click", ()=>{yolo()})
  dropdown_div.appendChild(dd_btn)

  let options = ["Home", "Account", "Logout"]
  options.forEach(op => {
    let btn = document.createElement('button')
    btn.setAttribute("class", "dropdown-item")
    btn.innerHTML = op
    dropdown_div.appendChild(btn)
  });

  return dropdown_div
}

function yolo(){
  let dd_items = [...document.querySelectorAll(".dropdown-item")]
  dd_items.forEach(item => {
    item.classList.toggle("visible")
  })
}

export {Dropdown}