"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
    myDynamicVar = 'Hola';
    const rta = myDynamicVar.toLowerCase();
    console.log(rta);
    myDynamicVar = 2123;
    const rta2 = myDynamicVar.toFixed();
})();
