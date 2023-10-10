console.log("¡INICIO DE CONSOLA!"); 

const parrafo = 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate delectus nulla reiciendis.';
const exp = /[A-Z]/g;
const fuente = parrafo.match(exp);
 console.log(fuente); 

//________//

const par = 'Las oraciones con hoy que te presentamos a continuación te ayudarán a entender cómo debes usar hoy en una frase. Se trata de ejemplos con hoy gramaticalmente correctos que fueron redactados por expertos. Para saber cómo usar hoy en una frase, lee los ejemplos que te sugerimos e intenta crear una oración.';
const expo = /(hoy)/g; 
const fue = par.match(expo);
 console.log(fue);

//________//

const ej = 'Las oraciones con mañana que te presentamos a continuación te ayudarán a entender cómo debes usar mañana en una frase. Se trata de ejemplos con mañana gramaticalmente correctos que fueron redactados por expertos. Para saber cómo usar mañana en una frase, lee los ejemplos que te sugerimos e intenta crear una oración.';
const em = /(mañana)[0]/g;
const mp = ej.match(em);
 console.log(mp); 