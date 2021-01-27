const oddNumbers = (arrNumbers:number[]) => {
    let i = 0;
    let hayPar = false;
    while (i < arrNumbers.length && hayPar == false) {
         
          if (arrNumbers[i] % 2 == 0 ) {
            hayPar = true;
         }
           i++                 
        }
           return hayPar
    }
    console.log(oddNumbers([1,3,5,7,8,9]));





    
const arrayNames = (names:string[]) => {
    let i = 0;
    let mLetters = true;
    while (i < names.length && mLetters == true) {
          console.log(i)
         if ( names[i][0] != "M" ) {
             mLetters = false;
        }
         
            i++                  
    }
          return mLetters
}
    

console.log(arrayNames(["Pepe", "Muanito", "Manolito", "Muisito"]));