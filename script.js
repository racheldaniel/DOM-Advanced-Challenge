const messages = document.querySelector("#messages")
let messageText = ["what's up?", "nothing.", "where u at?", "school", "cool"]
let fragment = document.createDocumentFragment()


const createSection = (clName, array) => {
  array.forEach((phrase)=> {
    let element = document.createElement("section")
    element.className = clName
    element.textContent = phrase
    fragment.appendChild(element)
  })
  return fragment
}

messages.appendChild(createSection("messages", messageText))