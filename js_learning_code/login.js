let name = prompt('Input userName: ', 'userName');

if (name == 'Admin') {
    let passwd = prompt('Input passwd: ', 'passwd');
    if (passwd == 'TheMaster') {
        alert('Welcome!');
    } else if (passwd == '' || passwd == null) {
        alert('Canceled!');
    } else {
        alert('Wrong passwd!');
    }
} else if (name == '' || name == null){
    alert('Canceled!');
} else {
    alert('I don\'t know you!');
}
