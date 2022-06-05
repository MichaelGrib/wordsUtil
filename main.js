const newSymbol = document.querySelector("#addSymb")
      result = document.querySelector("#lastType")
      container = document.querySelector("#symContainer")
newSymbol.addEventListener("input",(event)=>{
  if (container.children.length == 9) {}
  else {
    let symbol = document.createElement('p')
    symbol.classList.add('symbol')
    symbol = container.appendChild(symbol)
    symbol.textContent = newSymbol.value 
    symbol.addEventListener('click', (event) => event.target.remove())
    newSymbol.value = ''
  }
})

