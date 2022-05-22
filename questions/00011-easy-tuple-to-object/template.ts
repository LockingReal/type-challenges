type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [P in T[number]]:P
}


// in js
// function tupleToObject(array){
//     const obj = {};
//     array.forEach((val)=>{
//         obj[val] = val;
//     })
//     return obj;
// }