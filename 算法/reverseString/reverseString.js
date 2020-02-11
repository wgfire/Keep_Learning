module.exports =function reverseString(str) {
    return str.split(' ').map(function (char) {
        return char.split('').reverse().join('');
    }).join(' ');
}


