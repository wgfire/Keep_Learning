function reverseString (str:string){
    return str.split(' ').map(char=>{
        return char.split('').reverse().join(' ')
    }).join(' ')
}