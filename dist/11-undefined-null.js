"use strict";
(() => {
    //TypeScript
    let myVar = null; //Tipo any
    let otherVar = undefined; //Tipo any
    let myNull = null; // Tipo null
    let myUndefined = undefined; //Tipo undefined
    let myNumber = null;
    myNumber = 50;
    let myString = undefined;
    myString = "Hola TypeScript";
    function hi(name) {
        let hello = "Hola ";
        if (name) {
            hello += name;
        }
        else {
            hello += "nobody";
        }
        console.log(hello);
    }
    hi('Fabio');
    hi(null);
    function hi2(name) {
        let hello = "Hola ";
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || "nobody";
    }
    hi2('Fabio');
    hi2(null);
})();
