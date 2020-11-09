function huevos(numeroPorcion){
    var porcionReal = (numeroPorcion/4);    
    var jitomate = 3;
    var ajo = 1;
    var cebolla =0.25;
    var agua =2.5;
    var aceite= 6.25;
    var cubo = 1;
    var chicharo=250;
    var tortilla=4;
    var huevo=4;
    var caldo=1;
    var frijol=250;
    var pechuga=1;
   //////////////////////////////
    var jitomateElement = document.getElementById('jitomate');
    var ajoElement= document.getElementById('ajo');
    var cebollaElement= document.getElementById('cebolla');
    var aguaElement = document.getElementById('agua');
    var aceiteElement = document.getElementById('aceite');
    var cuboElement = document.getElementById('cubo');
    var chicharoElement = document.getElementById('chicharo');
    var tortillaElement = document.getElementById('tortilla');
    var huevoElement = document.getElementById('huevo');
    var caldoElement = document.getElementById('caldo');
    var frijolElement = document.getElementById('frijol');
    var pechugaElement = document.getElementById('pechuga');

    jitomateElement.innerHTML=(jitomate*porcionReal);
    ajoElement.innerHTML = (ajo*porcionReal);
    cebollaElement.innerHTML=(cebolla*porcionReal);
    aguaElement.innerHTML=(agua*porcionReal);
    aceiteElement.innerHTML=(aceite*porcionReal);
    cuboElement.innerHTML=(cubo*porcionReal);
    chicharoElement.innerHTML=(chicharo*porcionReal);
    tortillaElement.innerHTML=(tortilla*porcionReal);
    huevoElement.innerHTML=(huevo*porcionReal);
    caldoElement.innerHTML=(caldo*porcionReal);
    frijolElement.innerHTML=(frijol*porcionReal);
    pechugaElement.innerHTML=(pechuga*porcionReal);
}


function chilaquiles(numeroPorcion){
    var porcionReal = (numeroPorcion/4);
    var pechuga = 80;
    var tomate = 2;
    var chileGuajillo=2;
    var chileArbol=1;
    var cebolla=1;
    var ajo=2;
    var tortilla=8;
    var crema=3;
    var epazote=1;
    var cilantro=1;
    var aceite=1.25;
    ////////////////////////////////////////
    var pechugaElement=document.getElementById('pechuga1');
    var tomateElement=document.getElementById('jitomate1');
    var chileGuajilloElement=document.getElementById('chileGuajillo');
    var chileArbolElement=document.getElementById('chileArbol');
    var cebollaElement=document.getElementById('cebolla1');
    var ajoElement=document.getElementById('ajo1');
    var tortillaElement=document.getElementById('tortillas1');
    var cremaElement=document.getElementById('crema');
    var epazoteElement=document.getElementById('epazote');
    var cilantroElement=document.getElementById('cilantro');
    var aceiteElement=document.getElementById('aceite1');
    ///////////////////////////////////////////////////
    
    pechugaElement.innerHTML=(pechuga*porcionReal);
    tomateElement.innerHTML=(tomate*porcionReal);
    chileGuajilloElement.innerHTML=(chileGuajillo*porcionReal);
    chileArbolElement.innerHTML=(chileArbol*porcionReal);
    cebollaElement.innerHTML=(cebolla*porcionReal);
    ajoElement.innerHTML=(ajo*porcionReal);
    tortillaElement.innerHTML=(tortilla*porcionReal);
    cremaElement.innerHTML=(crema*porcionReal);
    epazoteElement.innerHTML=(epazote*porcionReal);
    cilantroElement.innerHTML=(cilantro*porcionReal);
    aceiteElement.innerHTML=(aceite*porcionReal);
}

function molePoblano(numeroPorcion){
    var porcionReal=(numeroPorcion/6);
    var canela=1.5;
    var canelaElement=document.getElementById('canela');
    canelaElement.innerHTML=(canela*porcionReal);
    var almendra=0.5;
    var almendraElement=document.getElementById('almendra');
    almendraElement.innerHTML=(almendra*porcionReal).toFixed(2);
    var cacahuate=0.25;
    var cacahuateElement=document.getElementById('cacahuate');
    cacahuateElement.innerHTML=(cacahuate*porcionReal).toFixed(2);
    var nuez=0.5;
    var nuezElement=document.getElementById('nuez');
    nuezElement.innerHTML=(nuez*porcionReal).toFixed(2);
    var pepita=0.25;
    var pepitaElement=document.getElementById('pepita');
    pepitaElement.innerHTML=(pepita*porcionReal).toFixed(2);
    
    var ajonjoli=0.25;
    var ajonjoliElement=document.getElementById('ajonjoli');
    ajonjoliElement.innerHTML=(ajonjoli*porcionReal).toFixed(2);
    
    var clavo=0.25;
    var clavoElement=document.getElementById('clavo');
    clavoElement.innerHTML=(clavo*porcionReal).toFixed(2);
    
    var pimienta=1;
    var pimientaElement=document.getElementById('pimienta');
    pimientaElement.innerHTML=(pimienta*porcionReal).toFixed(2);
    
    var comino=1;
    var cominoElement=document.getElementById('comino');
    cominoElement.innerHTML=(comino*porcionReal).toFixed(2);
    
    var anis=4;
    var anisElement=document.getElementById('anis');
    anisElement.innerHTML=(anis*porcionReal).toFixed(2);
    
    var ajo=6;
    var ajoElement=document.getElementById('ajo');
    ajoElement.innerHTML=(ajo*porcionReal);
    
    var cebolla=1;
    var cebollaElement=document.getElementById('cebolla');
    cebollaElement.innerHTML=(cebolla*porcionReal).toFixed(2);
    
    var manteca=0.5;
    var mantecaElement=document.getElementById('manteca');
    mantecaElement.innerHTML=(manteca*porcionReal).toFixed(2);
    
    var chileAncho=125;
    var chileAnchoElement=document.getElementById('chileAncho');
    chileAnchoElement.innerHTML=(chileAncho*porcionReal).toFixed(2);
    
    var chilePasilla=70;
    var chilePasillaElement=document.getElementById('chilePasilla');
    chilePasillaElement.innerHTML=(chilePasilla*porcionReal).toFixed(2);
    
    var chileGuajillo=70;
    var chileGuajilloElement=document.getElementById('chileGuajillo');
    chileGuajilloElement.innerHTML=(chileGuajillo*porcionReal).toFixed(2);
    
    var bolillo=1;
    var bolilloElement=document.getElementById('bolillo');
    bolilloElement.innerHTML=(bolillo*porcionReal).toFixed(2);
    
    var tortilla=2;
    var tortillaElement=document.getElementById('tortilla');
    tortillaElement.innerHTML=(tortilla*porcionReal).toFixed(2);

    var platano=2;
    var platanoElement=document.getElementById('platano');
    platanoElement.innerHTML=(platano*porcionReal).toFixed(2);
    
    var tomate=2;
    var tomateElement=document.getElementById('tomate');
    tomateElement.innerHTML=(tomate*porcionReal).toFixed(2);
    
    var pasa=1.5;
    var pasaElement=document.getElementById('pasa');
    pasaElement.innerHTML=(pasa*porcionReal).toFixed();
    
    var caldo=2;
    var caldoElement=document.getElementById('caldo');
    caldoElementinnerHTML=(caldo*porcionReal).toFixed(2);
    
    var tomillo=0.5;
    var tomilloElement=document.getElementById('tomillo');
    tomilloElement.innerHTML=(tomillo*porcionReal).toFixed(2);
    
    var oregano=1;
    var oreganoElement=document.getElementById('oregano');
    oreganoElement.innerHTML=(oregano*porcionReal).toFixed(2);
    
    var sal=1;
    var salElement=document.getElementById('sal');
    salElement.innerHTML=(sal*porcionReal).toFixed(2);
    
    var chocolate=1;
    var chocolateElement=document.getElementById('chocolate');
    chocolateElement.innerHTML=(chocolate*porcionReal).toFixed(2);
    
    var azucar=0.5;
    var azucarElement=document.getElementById('azucar');
    azucarElement.innerHTML=(azucar*porcionReal).toFixed(2);
    
    var pollo=6; 
    var polloElement=document.getElementById('pollo');
    polloElement.innerHTML=(pollo*porcionReal).toFixed();
}


function calabacitas(numeroPorcion){
    var porcionReal=(numeroPorcion/4);
    var pollo=1;
    var chile=1;
    var crema=0.5;
    var agua=2;
    var calabaza=2;
    var aceite=1;
    var ajo=2;
    var cebolla=0.5;
    var elote=1;
    var caldo=1;
    var crema1=0.5;
    var perejil=3;
    
     var polloElement=document.getElementById('pollo1');
     var chileElement=document.getElementById('chile1');
     var cremaElement=document.getElementById('crema1');
     var aguaElement=document.getElementById('agua1');
     var calabazaElement=document.getElementById('calabaza1');
     var aceiteElement=document.getElementById('aceite1');
     var ajoElement=document.getElementById('ajo1');
     var cebollaElement=document.getElementById('cebolla1');
     var eloteElement=document.getElementById('elote1');
     var caldoElement=document.getElementById('caldo1');
     var crema1Element=document.getElementById('crema2');
     var perejilElement=document.getElementById('perejil1');
    
    
    polloElement.innerHTML=(pollo*porcionReal);
    chileElement.innerHTML=(chile*porcionReal);
    cremaElement.innerHTML=(crema*porcionReal);
    aguaElement.innerHTML=(agua*porcionReal);
    calabazaElement.innerHTML=(calabaza*porcionReal);
    aceiteElement.innerHTML=(aceite*porcionReal);
    ajoElement.innerHTML=(ajo*porcionReal);
    cebollaElement.innerHTML=(cebolla*porcionReal);
    eloteElement.innerHTML=(elote*porcionReal);
    caldoElement.innerHTML=(caldo*porcionReal);
    crema1Element.innerHTML=(crema1*porcionReal);
    perejilElement.innerHTML=(perejil*porcionReal);

}


function aguacate(numeroPorcion){
    var porcionReal=(numeroPorcion/4);
    var jitomate=1;
    var perejil=1;
    var cebolla=0.5;
    var atun=2;
    var aguacate=2;
    var limon=2;
    var vinagre=3;
    var aceite=3;
    var sal=1;
    var pimienta=0.5;
     var jitomateElement=document.getElementById('jitomate1');
     var perejilElement=document.getElementById('perejil1');
     var cebollaElement=document.getElementById('cebolla1');
     var atunElement=document.getElementById('atun1');
     var aguacateElement=document.getElementById('aguacate1');
     var limonElement=document.getElementById('limon1');
     var vinagreElement=document.getElementById('vinagre1');
     var aceiteElement=document.getElementById('aceite1');
     var salElement=document.getElementById('sal1');
     var pimientaElement=document.getElementById('pimienta1');
    jitomateElement.innerHTML=(jitomate*porcionReal);
    perejilElement.innerHTML=(perejil*porcionReal);
    cebollaElement.innerHTML=(cebolla*porcionReal);
    atunElement.innerHTML=(atun*porcionReal);
    aguacateElement.innerHTML=(aguacate*porcionReal);
    limonElement.innerHTML=(limon*porcionReal);
    vinagreElement.innerHTML=(vinagre*porcionReal);
    aceiteElement.innerHTML=(aceite*porcionReal);
    salElement.innerHTML=(sal*porcionReal);
    pimientaElement.innerHTML=(pimienta*porcionReal);
    
    
    
    
}


function panini(numeroPorcion){
 
    var porcionReal=(numeroPorcion/4);
    var aceite=0.5;
    var vinagre=3;
    var ajo=1;
    var jamon=4;
    var queso=12;
    var jitomate=4;
    var pan=1;
    
    var aceiteElement=document.getElementById('aceite');
    var vinagreElement=document.getElementById('vinagre');
    var ajoElement=document.getElementById('ajo');
    var jamonElement=document.getElementById('jamon');
    var quesoElement=document.getElementById('queso');
    var jitomateElement=document.getElementById('jitomate');
    var panElement=document.getElementById('pan');
    
    aceiteElement.innerHTML=(aceite*porcionReal);
    vinagreElement.innerHTML=(vinagre*porcionReal);
    ajoElement.innerHTML=(ajo*porcionReal);
    jamonElement.innerHTML=(jamon*porcionReal);
    quesoElement.innerHTML=(queso*porcionReal);
    jitomateElement.innerHTML=(jitomate*porcionReal);
    panElement.innerHTML=(pan*porcionReal);
}


