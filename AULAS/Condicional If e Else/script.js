/*let idade =17
if(idade >=18){
   console.log(`Você é maior de idade`)
}else{
   console.log(`Você é menor de idade`)
}*/


// Condicional ==  ou ===
/*let idad = "20"
if(idad == 20){
  idad = idad + 15
    console.log(`Você tem ${idad}`)
}*/


/*let idadesIdentifico = "20"
if(idadesIdentifico === 20){
    console.log("Você tem 20 anos")
}else{
     console.log(`Você não tem 20 anos ${typeof idadesIdentifico} `)
}*/



// Muti- condicionais  && e ||
/*const idadeCond = 14
if(idadeCond >= 18){
    if(idadeCond < 60){
       console.log(`Você é adulto`)
    }
}*/
/*const idadeCond = 18
if(idadeCond >= 18 && idadeCond <60){ //As duas codições precisam ser satisfeita
   console.log(`Você é aduto`)
}*/

/*const idadeCond = 14
if(idadeCond >= 18 || idadeCond <60){ //Apenas uma precisa ser satisfeita pois 14 é menor que 60  "Errado"
   console.log(`Você é aduto`)
}*/

// Condicional dupla if e else

let  idadeMult =99
 if(idadeMult >= 60){
         console.log('Idoso')
 }else if(idadeMult >=18){
         console.log(`Adulto`)
 }else if(idadeMult >= 12){
         console.log('Adolecente')
 }else{
        console.log('Criança')
 }


 //Desmistificando o if
 let idadeBollean = 19
 let verificador = idadeBollean > 18
 if(verificador){
    console.log('Entrou no if')
 }else{
    console.log('Não entrou no if')
 }

 let idadeCondi = 17
 let idadeCondVer = idadeCondi > 18
 console.log(idadeCondVer )


