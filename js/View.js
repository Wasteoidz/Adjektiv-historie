// view

function updateView() {

    if (bookstate) {
        wrapper.innerHTML = `  
                                    <div id="background-video">
                                    <iframe style="width:100vw; height:100vh;" src="https://www.youtube.com/embed/UgHKb_7884o?autoplay=1&controls=0&showinfo=0&autohide=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div id="bookOpen">
                                    <div id="left">
                                    Etter en <span id="test" ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> sommer, kommer den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> høsten. Det ser ikke helt lyst ut.
                                    Den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> IS-gruppen blir stadig drøyere, mens selv våre <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> svenske brødre er skremt av den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> Putin.
                                    Men det stopper ikke der, listen er <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> og lang.
                                    Nordmenn plager hverandre med <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> netthets. Den tidligere så <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> villaksen er i ferd med å forsvinne fra <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> vassdrag.
                                    Våre <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> fotballspillere har sjelden vært dårligere representert i <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> Premier League, og landets <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> kornsiloer er ikke lenger trygge.
                                    Det rakner videre i landets <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> avishus, mens den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> PR-bransjen vokser.
                                    Ståle ble kastet ut av det <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> Big Brother-huset, kaffebarutvalget i Oslo blir stadig mer <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span>, og vinteren tør vi ikke engang tenke på.
                                    Orker du ikke mer?
                                    Fatt <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> mot, det finnes alltid et <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> botemiddel.
                                    Fortidens lykkeglimt driver oss fremover når vi vasser i sirup. Din venn i tristessen er den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span>, men likevel så <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> nostalgien.
                                    Så vi går på sopptur i <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> nikkers og snakker om tidligere tiders <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> fangstfelter, som dessverre ikke finnes lenger.
                                    Vi arrangerer pokerkvelder, topper hverandres <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> fyllehistorier og prater om den legendariske potten som Bønna dro inn i det <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> kollektivet i studietiden.
                                    Vi inviterer til middagsselskaper og diskuterer gamle, <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> venner, gjenopplever <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> fester, før noen nærmere midnatt setter på <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> Nik Kershaw-hits, som man danser til med <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> bevegelser.
                                    Slikt er likevel <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> amatørmimring.
                                    For de som virkelig kan sin nostalgi, drar tilbake til barndommens <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> bursdager, da lykken var pølse-i-lompe, bløtkake med banan og bringebær, Super-Ted, godteposer med rosinpakker og cola-Bugg – før bursdagsbarnmammaen hysjet på alle, der man samlet seg <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> og <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> i ring, og pønsket på <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >__________</span> nyord med promp
                                </div>          
                                <div id="right">
                                    <span id="ord1" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord2" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord3" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>   
                                    <span id="ord4" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord5" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord6" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord7" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord8" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord9" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord10" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord11" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord12" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>   
                                    <span id="ord13" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord14" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord15" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord16" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord17" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord18" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord19" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord20" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord21" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord22" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord23" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord24" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord25" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord26" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord27" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord28" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord29" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord30" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord31" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord32" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord33" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div id="ordKnapp" onclick="newWords()"><img id="knapp"src="bilder/bokKnapp.png"/></div>
                                <br/> <div id="random" onclick="randomWords()"><img id="randomBilde"  src="bilder/terning.png"/></div>
                            `;
    } else {
        wrapper.innerHTML = `
                                        <div id="wrapper">
                                            <img id="bookClosed" onclick="bookOpen();updateView();" src="bilder/bookClosed.png"/>
                                        `;
    }
}

function randomWords() {
    console.log("oi");
    return document.getElementById("bookOpen").innerHTML = `
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
                            `;
}

function newWords() {
  console.log("oi");
  return document.getElementById("right").innerHTML = `
                                    <span id="ord1" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord2" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord3" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>   
                                    <span id="ord4" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord5" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord6" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord7" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord8" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord9" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord10" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord11" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord12" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>   
                                    <span id="ord13" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord14" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord15" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord16" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord17" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord18" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord19" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord20" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord21" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord22" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord23" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord24" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord25" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord26" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord27" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord28" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord29" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord30" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span id="ord31" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord32" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span><span id="ord33" class="word" ondragstart="drag(event)" draggable="true">${ spawnWords() }</span>
                                   `;

}