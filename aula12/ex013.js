var agora = new Date()
var diaSen = agora.getDay()
switch(diaSen) {
    case 0:
        console.log('Domindo')
        break
    case 1: 
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}