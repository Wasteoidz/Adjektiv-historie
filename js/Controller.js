// controller
function spawnWords() {
    let numberOfBooks = adjectiver.length;
    let randomBookPosition = Math.floor(Math.random() * numberOfBooks);
    let randomBook = adjectiver[randomBookPosition];
    return randomBook;
}

function bookOpen() { return bookstate = true; }



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.innerHTML = "";
    ev.currentTarget.append(document.getElementById(data));
  }
