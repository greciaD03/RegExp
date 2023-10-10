console.log("¡INICIO DE CONSOLA!"); 

const parrafo = 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate delectus nulla reiciendis.';
const exp = /[A-Z]/g;
const fuente = parrafo.match(exp);
 console.log(fuente); 

//____1____//

const par = 'Es hoy';
const expo = /(hoy)/g; 
const fue = par.match(expo);
 console.log(fue);

//____2____//

const ej = 'Es hoy';
const em = /(hoy)[0]/g;
const mp = ej.match(em);
 console.log(mp); 

 //____3____// 

const ja = 'Es hoy';
const ed = /(^hoy)/g;
const pa = ja.match(ed);
 console.log(pa);

 //____4____//

const de = 'Es hoy';
const ef = /(^ )/g;
const po = de.match(ef);
 console.log(po);

 //____5____//

const du = 'canciones';
const fa = /([aeiou])/g;
const pi = du.match(fa);
 console.log(pi);

 //____6____//

const we = 'canciones';
const qu = /(c[aeiou])/g;
const me = we.match(qu);
 console.log(me); 

 //____7____//

const tu = 'canciones';
const rv = /(n[aeiou])/g;
const kl = tu.match(rv);
 console.log(kl); 

 //____8____//

const rt = 'canciones';
const mn = /([u])/g;
const or = rt.match(mn);
 console.log(or); 

  //____9____//

