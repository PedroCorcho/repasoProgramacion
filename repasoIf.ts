// realizar una funcion que dada una fecha de nacimiento te devuelva tu Zodiaco


function zodiaco(day:number,month:number) {
    if((day>=21&&month==3)||(day<=20&&month==4))
    console.log('Aries');
if((day>=24&&month==9)||(day<=23&&month==10))
    console.log('Libra');
if((day>=21&&month==4)||(day<=21&&month==5))
    console.log('Tauro');
if((day>=24&&month==10)||(day<=22&&month==11))
    console.log('Escorpio');
if((day>=22&&month==5)||(day<=21&&month==6))
    console.log('Geminis');
if((day>=23&&month==11)||(day<=21&&month==12))
    console.log('Sagitario');
if((day>=21&&month==6)||(day<=23&&month==7))
    console.log('Cancer');
if((day>=22&&month==12)||(day<=20&&month==1))
    console.log('Capricornio');
if((day>=24&&month==7)||(day<=23&&month==8))
    console.log('Leo');
if((day>=21&&month==1)||(day<=19&&month==2))
    console.log('Acuario');
if((day>=24&&month==8)||(day<=23&&month==9))
    console.log('Virgo');
if((day>=20&&month==2)||(day<=20&&month==3))
    console.log('Piscis');

}


zodiaco(8,8);



// ejercicio dado que un pais, te diga en que continente estas
const guessContinent = (country:string) => {
    if(country === "Spain" || "France" || "Poland" || "Germany" || "Italy" ) {
        console.log("Your choosen country is in Europe")
    }else if(country === "Colombia" || "Brazil" || "Argentina" || "Mexico" || "Venezuela") {
        console.log("Your choosen country is  in America")
    }else if(country === "Senegal" || "Morocco" || "Zambia" || "Congo" || "South Africa") {
        console.log("Your choosen country is in Africa")
    }else if(country === "China" || "Japan" || "Irak" || "India" || "Korea") {
        console.log("Your choosen country is in Asia")
    }else{
        console.log("Choose another country, Please!")
    }
    }
    
    
    guessContinent("Spain");