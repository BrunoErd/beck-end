let pessoa = {
    nome: 'Bruno',
    idade: 18,
    cartMotor: false,
    autori: true
}

if (pessoa.idade >= 18 && pessoa.catMotor == true && pessoa.autori == true){
    console.log('autorizado')
}else if (pessoa.idade >= 18 && pessoa.cartMotor == false && pessoa.autori == true ||
pessoa.idade < 18 && pessoa.autori == true){
    console.log('autorizao, não pode dirigir')
} else if (pessoa.idade >= 18 && pessoa.cartMotor == true && pessoa.autori == false){
    console.log('não autorizado, pode dirigir')
} else{
    console.log('não autorizado, não pode dirigir, ou tem - que 18')
}