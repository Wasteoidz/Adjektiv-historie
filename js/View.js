// view

updateView();

function updateView() {
    if (bookstate) {
        wrapper.innerHTML = `
                                                 <div id="bookOpen">
                                <div id="left">
                                    Etter en <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> sommer, kommer den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> høsten. Det ser ikke helt lyst ut.
                                    Den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> IS-gruppen blir stadig drøyere, mens selv våre <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> svenske brødre er skremt av den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> Putin.
                                    Men det stopper ikke der, listen er <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> og lang.
                                    Nordmenn plager hverandre med <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> netthets. Den tidligere så <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> villaksen er i ferd med å forsvinne fra <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> vassdrag.
                                    Våre <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> fotballspillere har sjelden vært dårligere representert i <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> Premier League, og landets <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> kornsiloer er ikke lenger trygge.
                                    Det rakner videre i landets <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> avishus, mens den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> PR-bransjen vokser.
                                    Ståle ble kastet ut av det <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> Big Brother-huset, kaffebarutvalget i Oslo blir stadig mer <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span>, og vinteren tør vi ikke engang tenke på.
                                    Orker du ikke mer?
                                    Fatt <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> mot, det finnes alltid et <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> botemiddel.
                                    Fortidens lykkeglimt driver oss fremover når vi vasser i sirup. Din venn i tristessen er den <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span>, men likevel så <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> nostalgien.
                                    Så vi går på sopptur i <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> nikkers og snakker om tidligere tiders <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> fangstfelter, som dessverre ikke finnes lenger.
                                    Vi arrangerer pokerkvelder, topper hverandres <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> fyllehistorier og prater om den legendariske potten som Bønna dro inn i det <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> kollektivet i studietiden.
                                    Vi inviterer til middagsselskaper og diskuterer gamle, <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> venner, gjenopplever <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> fester, før noen nærmere midnatt setter på <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> Nik Kershaw-hits, som man danser til med <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> bevegelser.
                                    Slikt er likevel <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> amatørmimring.
                                    For de som virkelig kan sin nostalgi, drar tilbake til barndommens <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> bursdager, da lykken var pølse-i-lompe, bløtkake med banan og bringebær, Super-Ted, godteposer med rosinpakker og cola-Bugg – før bursdagsbarnmammaen hysjet på alle, der man samlet seg <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> og <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> i ring, og pønsket på <span ondrop="drop(event)" ondragover="allowDrop(event)" class="empty" >_________</span> nyord med promp
                                </div>          
                                <div id="right">
                                    <span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span>   
                                    <span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span>   
                                    <span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span>
                                    <span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span><span class="word" ondrag="drag(event)" draggable="true">${ spawnWords() }</span>
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