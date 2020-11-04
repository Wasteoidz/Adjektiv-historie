
        // model
        var bookindex = 1
        var adjectiver = ["hestpeis ", "Hestkuk", "Riv kjæft", "På fetthåret", "Ballhest ", "Jævles", "Tykjepelk ", "Fettoter ", "Baillhånka", "Bontjyv ", "Hæsblæsete ", "Håsslæsta ", "Jeggelaktig", "Søvvestpeising ", "Tøvkuk", "Vaklevoren ", 
                          "Brøllåpp", "fævlebikkje ", "fly-mævrær", "Sprettkønn ", "raukvilevippa ", "negativ", "stabil", "tørr", "tøff", "utrygg", "fraværende", "stressende", "stille", "stakkars", "forbauset", "forelsket",
                          "fornøyd", "forsinket	", "forvirret", "frustrert", "gravid", "komplisert", "konsentrert", "kraftig", "merkelig", "redd", "urelevant", "selvfølgelig", "sjokkert", "sykmeldt", "stresset", "sint"];

        // controller
        function doClick() {
            bookindex = 1 - bookindex;
            updateView();
        }

        function showBook(elem) {
            elem.parentNode.removeChild(elem);
            document.getElementById('wrapper').innerHTML = `
                                                    <div id="bookOpen">
                                                        <div id="left">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reiciendis aliquid corporis aspernatur incidunt voluptates quis, <div></div> expedita libero consectetur. Unde architecto voluptat a dolores facere excepturi dolorem consequatur accusantium?
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reiciendis aliquid corporis aspernatur incidunt voluptates quis, accusamus expedita libero consectetur. Unde architecto _____________ a dolores facere excepturi dolorem consequatur accusantium?
                                                        </div>
                                                        <div id="right">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reiciendis aliquid corporis aspernatur incidunt voluptates quis, accusamus expedita libero consectetur. Unde architecto voluptate a dolores facere excepturi dolorem ________- accusantium?
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut reiciendis aliquid corporis aspernatur incidunt voluptates quis, accusamus expedita _______ consectetur. Unde architecto voluptate a dolores facere excepturi dolorem consequatur accusantium?
                                                        </div>
                                                    </div>
    `;
        }

        // view
        updateView();

        function updateView() {
            var open = bookindex == 1;
            document.getElementById('app').innerHTML = `
    <div id="wrapper">
        <img id="bookClosed" onclick="showBook(this)" src="bilder/bookClosed.png"/>
    `;
        }