var tekst = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurCased = dinosaur.toUpperCase();

console.log(dinosaurCased);

var tekstCharsAfter = tekst.replace('Velociraptor', dinosaurCased);

console.log(tekstCharsAfter);

console.log(tekstCharsAfter.slice(0, (tekstCharsAfter.length / 2)));