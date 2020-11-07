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


  // ev.preventDefault();
  // ev.currentTarget.innerHTML = "";
  // var data=ev.dataTransfer.getData("text");
  // var nodeCopy = document.getElementById(data).cloneNode(true);
  // nodeCopy.id = "newId" + Math.floor(Math.random() * 33);
  // ev.target.append(nodeCopy);


function randomWords() {
    return wrapper.innerHTML = `
                                <div id="bookOpen">
                                    <div id="left">
                                        Etter en ${ spawnWords() } sommer, kommer den ${ spawnWords() } høsten. Det ser ikke helt lyst ut.
                                        Den ${ spawnWords() } IS-gruppen blir stadig drøyere, mens selv våre ${ spawnWords() } svenske brødre er skremt av den ${ spawnWords() } Putin.
                                        Men det stopper ikke der, listen er ${ spawnWords() } og lang.
                                        Nordmenn plager hverandre med ${ spawnWords() } netthets. Den tidligere så ${ spawnWords() } villaksen er i ferd med å forsvinne fra ${ spawnWords() } vassdrag.
                                        Våre ${ spawnWords() } fotballspillere har sjelden vært dårligere representert i ${ spawnWords() } Premier League, og landets ${ spawnWords() } kornsiloer er ikke lenger trygge.
                                        Det rakner videre i landets ${ spawnWords() } avishus, mens den ${ spawnWords() } PR-bransjen vokser.
                                        Ståle ble kastet ut av det ${ spawnWords() } Big Brother-huset, kaffebarutvalget i Oslo blir stadig mer ${ spawnWords() }, og vinteren tør vi ikke engang tenke på. Orker du ikke mer?
                                        Fatt ${ spawnWords() } mot, det finnes alltid et ${ spawnWords() } botemiddel.
                                        Fortidens lykkeglimt driver oss fremover når vi vasser i sirup. Din venn i tristessen er den ${ spawnWords() }, men likevel så ${ spawnWords() } nostalgien.
                                        Så vi går på sopptur i ${ spawnWords() } nikkers og snakker om tidligere tiders ${ spawnWords() } fangstfelter, som dessverre ikke finnes lenger.
                                        Vi arrangerer pokerkvelder, topper hverandres ${ spawnWords() } fyllehistorier og prater om den legendariske potten som Bønna dro inn i det ${ spawnWords() } kollektivet i studietiden.
                                        Vi inviterer til middagsselskaper og diskuterer gamle, ${ spawnWords() } venner, gjenopplever ${ spawnWords() } fester, før noen nærmere midnatt setter på ${ spawnWords() } Nik Kershaw-hits, som man danser til med ${ spawnWords() } bevegelser.
                                        Slikt er likevel ${ spawnWords() } amatørmimring.
                                        For de som virkelig kan sin nostalgi, drar tilbake til barndommens ${ spawnWords() } bursdager, da lykken var pølse-i-lompe, bløtkake med banan og bringebær, Super-Ted, godteposer med rosinpakker og cola-Bugg – før bursdagsbarnmammaen hysjet på alle, der man samlet seg ${ spawnWords() } og ${ spawnWords() } i ring, og pønsket på ${ spawnWords() } nyord med promp
                                    </div>          
                                    <div id="right"> 
                                        <img id="oluf1" src="bilder/oluf.jpg"/>                                
                                    </div>
                                </div>
                                <div id="ordKnapp" onclick="updateView()"><img id="bokKnapp" src="bilder/bokKnapp.png"/></div>
                                <br/> <div id="random" onclick="randomWords()"><img id="randomBilde"  src="bilder/terning.png"/></div>
                            `;
}
//Drag + drop secion
// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.querySelectorAll('.word'));
//     console.log(ev + "drag");
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     console.log(data);
//     if (ev.currentTarget5('empty').length > 0) {
//         //   console.log(ev.currentTarget + ' | ev current target')
//         //   console.log(ev.target + ' | ev target ')
//         console.log(data);
//     } else {
//         // console.log(ev.currentTarget + ' | event. current target')
//         // console.log(ev.target + ' | event.target ')

//         // console.log(ev.target.id)
//         ev.target.append(document.getElementById(data));
//         console.log(data);
//     }
// }
