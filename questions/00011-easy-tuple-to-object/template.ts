type TupleToObject<T extends readonly any[]> = {
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