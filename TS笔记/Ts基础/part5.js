// 泛型
function renumber(arg) {
    return arg;
}
function reArray(arg) {
    return arg;
}
function indefit(arg) {
    console.log(arg);
    return arg;
}
// indefit<String>('X')
// indefit<Array<any>>([1, '2'])
// reArray<string>(["1"])
function moreType(arg) {
    console.log(arg);
    return [arg[1], arg[0]];
}
moreType([1, '123']);
