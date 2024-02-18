(()=>{
  let myDynamicVar: any;

  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';

  const rta = (myDynamicVar as string).toLowerCase();

  console.log(rta);


  myDynamicVar = 2123;

  const rta2 = (<number>myDynamicVar).toFixed();






})();
