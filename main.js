let wordLength = 4
const newSymbol = document.querySelector("#addSymb")
      result = document.querySelector("#lastType")
      container = document.querySelector("#symContainer")
      selectWordLength = document.querySelector("#wordLength")
      copiedArr = document.querySelector("#copiedArr")
function countSymbols(){
  copiedArr.textContent = ''
  arrSymbContainer = container.querySelectorAll(".symbol")
  arrSymbContainer.forEach(symb => {
    copiedArr.textContent = copiedArr.textContent + symb.textContent
  });
}
newSymbol.addEventListener("input",(event)=>{
  if (container.children.length >= wordLength) {}
  else {
    let symbol = document.createElement('p')
    symbol.classList.add('symbol')
    symbol = container.appendChild(symbol)
    symbol.textContent = newSymbol.value 
    symbol.addEventListener("click", (event) => {
      if (event.shiftKey) {
        event.target.classList.toggle('s_green')
      }
      else {
        event.target.remove()
        countSymbols()
      }
    })
    newSymbol.value = ''
    countSymbols()
  }
})
selectWordLength.addEventListener("change", (event)=>{
  wordLength = event.target.value
  if(wordLength == 4){container.style.gridTemplateColumns = "1fr 1fr"}
  if(wordLength == 9){container.style.gridTemplateColumns = "1fr 1fr 1fr"}
  if(wordLength == 16){container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"}
})
