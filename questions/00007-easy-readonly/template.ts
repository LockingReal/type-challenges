type MyReadonly<T> = {
    readonly [key in keyof T]:T[key]
};

// in js
// function readonly(obj){
//     const result = {};
//     在 相当于 keyof
//     for(const key in obj){
//         result["readonly"+key] = obj[key];
//     }
//     return result;
// }
