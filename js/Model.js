// model
let wrapper = document.getElementById('wrapper');
let bokWhole = document.getElementById('bookOpen');
let bookLeft = document.getElementById('left');
let bookRight = document.getElementById('right');   
let bookstate = false;
let adjectiver = ["hestpeis", "riv kjæft", "ballhest ", "fettoter", "tykjepelk ", "baillhånka", "bontjyv ", "hæsblæsete ", "håsslæsta ", "jeggelaktig", "søvvestpeising ", "tøvkuk",
    "fævlebikkje ", "fly-mævrær", "sprettkønn ", "raukvilevippa ", "negativ", "stabil", "tørr", "tøff", "utrygg", "fraværende", "stressende", "stille", "stakkars", "forbauset", "forelsket", "vaklevoren ",
    "fornøyde", "forsinket", "forvirret", "frustrert", "gravid", "komplisert", "konsentrert", "kraftig", "merkelig", "redd", "urelevant", "selvfølgelig", "sjokkert", "sykmeldt", "stresset", "sint"
];


let emptyWordSpaces = document.querySelectorAll('empty');