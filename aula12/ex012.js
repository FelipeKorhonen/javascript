var agora = new Date()
var minu = new Date()
var hora = agora.getHours()
var min = minu.getMinutes()
console.log(`Agora são exatamente ${hora}h${min} minutos.`)
if (hora <12) {
    console.log('Bom dia!')
}else if (hora <=18) {
    console.log('Boa Tarde!')
}else {
    console.log('Boa Noite!')
}