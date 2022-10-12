import ReactDOM  from "react-dom/client";
import './index.css'
import App from "./App";

//1. ReactDOM renderiza (Componete App, y utiliza query selector con el id #root)
// ReactDOM.render(<App/>, document.querySelector("#root"))

//2. ReactDOM crea Root(en el documento con el id #root) y rendeiza el componete App
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)

//3. asigna en la constante root = ReactDOM crea Root( en el documento con el id #root);
//renderiza en la constante root(el componete App)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
















//1. ejercicio 1
function imc(peso, altura) { 
  let indice = peso/(Math.pow(altura, 2))
  let resultado
  if(indice<=18.5){
    resultado = 'Bajo peso';
  }
  else if(indice>18.5 && indice<=25  ){
    resultado = 'Normal';    
  } 
  else if(indice >25)
    resultado = 'Sobrepeso';
  else{
    resultado = 'No valido';
  }
  return resultado
}

console.log(imc(100, 1.6))
//2. Ejercicio 2
// Completa la función siglo que recibe un año (un número) y retorna en qué siglo se encuentra dicho año (un número). Ten en cuenta que el siglo 1 va desde el año 1 hasta el año 100 mientras que el siglo 2 va desde el año 101 hasta el año 200. Siguiendo esta lógica, el año 1821 se encuentra en el siglo 19 y el año 1490 se encuentra en el siglo 15.

function centuryFromYear(year) {
  return Math.ceil(year/100);
}

  // function centuryFromYear(year) {
  // 	if( isNaN(Number(year)) ){
  // 		return undefined;
  // 	}else{
  // 		return Math.floor((year-1)/100) + 1;
  // 	}
  // }
console.log(centuryFromYear(1490))

// 3. Ejercicio 
// Pedro esta intentado crear la función filterNames que recibe un arreglo de nombres (names) y un tamaño máximo (maxLength). La función debe retornar un arreglo con los nombres cuya cantidad total de letras sea menor o igual al tamaño máximo indicado. Corrige el código de Pedro para que cumpla con el requerimiento.

// function filterNames(names, maxLength) {
//   let result = [];

//   for (let name in names) {
//     if (name.length < maxLength) {
//       result.push(name)
//     }
//   }

//   return result;
// }

// No modifiques la siguiente linea:
// console.log(filterNames(['Juan', 'Ana', 'Fernando', 'Magnanimo'], 3))

const gente = ['Juan', 'Ana', 'Fernando', 'Magnanimo']
let result

for (let name in gente) {
  result = gente.filter(persona => persona.length <= 3)
  // if (name.length < 3) {
    // result.push(name)
  // }
}


console.log(result);


// 4. Ejercicio 4 
// Completa la función inverso que recibe una palabra y retorna dicha palabra con sus letras en orden inverso. Si pasamos la palabra 'codeable' la función retornaría 'elbaedoc', si pasamos la palabra 'reconocer' la función retornaría 'reconocer' (que curioso). La palabra consistirá siempre de letras en minúscula.


function invertirCadena(cad) {
  // Paso 1. Usa el método split() para devolver un nuevo arreglo
  const  separarCadena = cad.split(''); // var separarCadena = "hola".split("");
  // ["h", "o", "l", "a"]

  // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
  const invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
  // ["a", "l", "o", "h"]

  // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
  const unirArreglo = invertirArreglo.join(''); // var unirArreglo = ["a", "l", "o", "h"].join("");
  // "aloh"
  
  //Paso 4. Devolver la cadena invertida
  return unirArreglo; // "aloh"
}

console.log(invertirCadena("hola"))

// function invertirCadena(cad) {
//   return cad.split("").reverse().join("");
// }
// invertirCadena("hola");