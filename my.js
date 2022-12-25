/*let x = +prompt ('Enter x')
let y = +prompt ('Enter y')

if (!Number.isNaN(x) && !Number.isNaN(y)) {
    
}
else {
    console.log('Error, x or y is not a number')
}

if (Number.isNaN(x)) {
    console.log('Error, x is not a number')
}
else if (Number.isNaN(y)){
    console.log('Error, y is not a number')
}
else {
    console.log( 'x + y =' + (x+y))
}

const fruit = prompt('Enter a fruit')
*/
/*if (fruit === 'apple') {
    console.log('Nice! I like apples!')
}
else if (fruit === 'orange') {
    console.log('How do you like to peel oranges?')
}
else if (fruit === 'peel'){
    console.log('Great with cream chees!')
}
else {
    console.log('Unknow')
}*/
/*
switch (fruit){
    case 'apple':
        console.log('Nice! I like apples!')  
        break;
    case 'orange':
        console.log('How do you like to peel oranges?')
        break;
    case 'peel':
        console.log('Great with cream chees!')
        break; 
    default:
        console.log('Unknow')
        break;
}
*/
result = confirm('Are you shure?') ? 'User is shure' : 'User is not shure'
    console.log(result)

let res = +prompt('Enter a number')
    if (Number.isNaN(res)) {
        alert('error')
    }else {
        alert('Valid number')
    }