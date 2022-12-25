const input = prompt('What operation do you want to do "+ - / *"?', '');

const res = +prompt('Enter of number', '')
const res2 = +prompt('Enter of number', '')
    if (Number.isNaN(res) && Number.isNaN(res2)){
        alert('Error')
    }else {
        alert('Valid a number')
        switch (input) {
            case '+':
            alert(`${res} + ${res2} = ${res + res2}`)
            break;
            case '-':
            alert(`${res} - ${res2} = ${res - res2}`)
            break;
            case '/':
            alert(`${res} / ${res2} = ${res / res2}`)
            break;
            case '*':
            alert(`${res} * ${res2} = ${res * res2}`)
            break;
            default:
                alert('Not walid')
        }
    }

