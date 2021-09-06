const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
//Criar a função show results 
//chamar ela dentro de cada função, 
//Ela devera criar um novo elemento e escreve-lo na tela do html.

const page = document.getElementById('contador')

let soma = 0 // A variável soma é usada para informar o numero do kata.
let myarray = []

function showresults(value){

    const paragrafo = document.createElement('p');
    paragrafo.innerText = 'O resultado do kata '+soma+' é: ' +value;
    page.appendChild(paragrafo);
   
    
}
//KATA 1
function kata1(parametro) {
    myarray = []
    soma=1
    for(let i = 0; i<=parametro; i++){
     myarray.push(i);
        
    }
    
   showresults(myarray)
}


//KATA2  
function kata2(parametro) {
    myarray = []
    soma = 2
    for(let i = parametro; i>0; i--){
        myarray.push(i)
    }
    showresults(myarray)
}

//KATA3
function kata3(parametro) {
    myarray = []
    soma = 3
    for(let i = 1; i<=parametro; i++){
        myarray.push(-i);    
       }
    showresults(myarray)
}

//KATA4
function kata4(parametro) {
    myarray = []
    soma = 4
    for(let i = parametro; i>0; i--){
        myarray.push(-i)
    }
    showresults(myarray)
}
   

function kata5(parametro) {
    soma = 5
    myarray=[]
    for(let i = - parametro; i<=parametro; i++){
        if( i%2 !==0){
             myarray.push(i)
        }
    }
    showresults(myarray)
}

function kata6(parametro) {
    soma = 6;
    myarray = []
    for(let i = 1; i<parametro; i++){
        if(i%3 == 0){
            myarray.push(i)
        }
    }
    showresults(myarray)
}

function kata7(parametro) {
    soma = 7;
    myarray = []
    for(let i = 1; i<parametro; i++){
        if(i%7 == 0){
            myarray.push(i)
        }
    }
    showresults(myarray)
}
function kata8(parametro) {
    myarray=[]
    soma = 8;
    for(let i = parametro; i>0; i--){
        if(i%3 === 0 || i%7 === 0 ){
            myarray.push(i)
        }
    }
    showresults(myarray)
    
}

function kata9(parametro) {
    soma = 9
    myarray = []
    for(let i = 1; i<parametro; i++){
      if(i%2 !== 0 & i%5 ==0 ){
            myarray.push(i)
        }
    }
    showresults(myarray) 
}

function kata10(parametro ) {
    soma = 10;
    
    showresults(parametro)
}

function kata11(parametro) {
    soma = 11;
    myarray = []
    
    for(let i = 0; i<parametro.length; i++){
        if( parametro[i]%2 === 0){
            myarray.push(parametro[i])
        }
    }
    showresults(myarray)

}

function kata12(parametro) {
    soma = 12;
    myarray = []
    
    for(let i = 0; i<parametro.length; i++){
        if( parametro[i]%2 !== 0){
            myarray.push(parametro[i])
        }
    }
    showresults(myarray)
}

function kata13(parametro) {
    soma = 13;
    myarray = []
    
    for(let i = 0; i<parametro.length; i++){
        if( parametro[i]%8 === 0){
            myarray.push(parametro[i])
        }
    }
    showresults(myarray)
}
function kata14(parametro) {
    soma = 14;
    myarray= []
    for( let i = 0; i<parametro.length; i++){
        myarray.push(parametro[i]*parametro[i])
    }
    showresults(myarray)
}

let somaR = 0 ; //variável para fazer ass soma dos valores
function kata15(parametro) {
    soma = 15
     somaR = 0
    for(let i = 1; i<=parametro;i++){
        somaR+=i;
    }
    showresults(somaR)


}

function kata16(parametro) {
   soma = 16;
   
   somaR = 0;
   for(let i = 0; i<parametro.length; i++){
     somaR+= parametro[i]
    }
    showresults(somaR)  
}




function kata17(parametro) {
    soma = 17;
    somaR = parametro[0]
    for(let i = 0; i<parametro.length;i++){
        if(parametro[i]<somaR){
            somaR = parametro[i]
        }
            
    }
 showresults(somaR) 
}

function kata18(parametro) {
    soma = 18;
    somaR = parametro[0]
    for(let i = 0; i<parametro.length;i++){
        if(parametro[i]>somaR){
            somaR = parametro[i]
        }
    }
    showresults(somaR)
}


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}


//----------------CHAMADAS DAS FUNÇÕES-------------------------
kata1(25)
kata2(25)
kata3(25)
kata4(25)
kata5(25)
kata6(100)
kata7(100)
kata8(100)
kata9(100)
kata10(sampleArray)
kata11(sampleArray)
kata12(sampleArray)
kata13(sampleArray)
kata14(sampleArray)
kata15(20)
kata16(sampleArray)
kata17(sampleArray)
kata18(sampleArray)