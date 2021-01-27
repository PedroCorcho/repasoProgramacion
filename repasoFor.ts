// Realizar funcion que imprima los numeros impares existentes hasta el numero indicado como parametro de entrada


const numImpares = (number:number) => {
    for (var i = 1; i < number; i++) { 
        if (i %2 != 0)
        console.log(i)
    }

}

// numImparesTypescript  (21)




// Realizar una funcion que como parametro de entrada reciva un array y devuelva un array invertido



const reverseNumber = (numbers:number[]) => {
    let result = [];
     

    for (let i = numbers.length -1; i >=0; i--) {
         result.push(numbers[i])
        
    };
    
   
 return result
}
console.log(reverseNumber([1,2,3,4,5,6]))

// MEDIANTE UN ARRAY CON COLORES MUESTRA CUALES SI O CUALES NO SON DEL ARCOIRIS 

const rainbowColorsTS = (colors:string[]) => {
    

    for (let i = 0 ; i < colors.length; i++) {
        if (colors[i].includes("yellow" || "blue" || "red" || "violet" || "green" || "orange"))  {
            console.log(`${colors[i]} is on the Rainbow.`)           
        }else if(colors[i].includes("red")) {
            console.log(`${colors[i]} is on the Rainbow.`)
        }else if(colors[i].includes("blue")) {
            console.log(`${colors[i]} is on the Rainbow.`) 
        }else if(colors[i].includes("violet")) {
            console.log(`${colors[i]} is on the Rainbow.`)
        }else if (colors[i].includes("green")) {
            console.log(`${colors[i]} is on the Rainbow.`) 
        }else if(colors[i].includes("orange"))  {
            console.log(`${colors[i]} is on the Rainbow.`) 
        }else {
            console.log(`${colors[i]} is NOT on the Rainbow!`)
        }
       
    }


}

console.log(rainbowColorsTS(["black", "red", "yellow", "violet", "white"]));








// -----------------------------------------------

const sumCaractersTS = (arraWords:string[] ) => {
    
    let suma = 0;

    for (let i = 0; i < arraWords.length ; i++) {
        suma = suma + arraWords[i].length

     }
     return suma
}



console.log(sumCaractersTS(["Hola","Adios"]))





// -----------------------------------------------


const messageTS = (numero:number) => {
    if (numero  % 2 == 0) {
        console.log(`${numero} es par`)
    } else {
        console.log(`${numero} es impar`)
    }
}


messageTS(7);


// ------------------------------------------------


const array11:string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
const array22:string[] = ["Barco", "Baca", "Bicicleta", "Balton", "Bisiesto", "Brasil"];
const array33:string[] = ["Venezuela", "Veneno", "Voltaje"];

const mergedArray = array11.concat(array22, array33);

console.log(mergedArray)


 messageTS(sumCaractersTS(mergedArray));


