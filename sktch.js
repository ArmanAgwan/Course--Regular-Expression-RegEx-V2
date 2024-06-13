var textfield;
var output;
var submit;

function setup() {
    noCanvas();
    textfield = select("#input");
    // textfield.changed(newText);
    output = select('#output');
    submit = select("#submit");
    submit.mousePressed(newText);
}
/*
function newText() {
    var s = textfield.value();

    // var r = /\w+@\w+\.(net|com|org)/;
    var r = /(\d{3})[-.]\d{4}/g;
    // var matches = s.match(r);

    // var result = r.exec(s);
    var results;
    while (result = r.exec(s)) {
        createP(result[1]);
        // result = r.exec(s);
    }

    for (var i = 0; i < matches.length; i++) {}
    // createP(r.test(s));
    createP(matches[i]);
}*/


/*
function newText(){
    var s = textfield.value();
    // var r = /[.,!?\s]+/g;
    var r = /(\w+)/g;
    var word = s.split(r);
    console.log(word);
    for(var i =0 ;i<word.length;i++){
        createP(word[i] );
    }
}*/


function newText() {
    var s = textfield.value();
    var r = /\b\w+\b/g;

    var newstring = s.replace(r, replacer);
    console.log(newstring);
    createP(newstring);
}

function replacer(match) {
    // console.log(match);
    if (match.length ==4) {
        return match.toUpperCase();
    } else {
        return match;
    }

}

//---console---//
// var r = /\d{3}/;

// r // /\d{3}/
// r.test("hello"); // false
// r.test("123"); // true
// r.test("123ABC"); // true

// var r = /^\d{3}$/;
