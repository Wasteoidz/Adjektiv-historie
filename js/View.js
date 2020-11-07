// view

updateView();

function updateView() {
    if (bookstate) {
        wrapper.innerHTML = `
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
                            <div id="ordKnapp" onclick="updateView()"><img id="bokKnapp" src="bilder/bokKnapp.png"/></div>
                            <br/> <div id="random" onclick="randomWords(this)"><img id="randomBilde"  src="bilder/terning.png"/></div>
                            `;
    } else {
        wrapper.innerHTML = `
                                        <div id="wrapper">
                                            <img id="bookClosed" onclick="bookOpen();updateView();" src="bilder/bookClosed.png"/>
                                        `;
    }
}