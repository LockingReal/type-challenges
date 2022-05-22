import { Equal } from "@type-challenges/utils"

export type Includes<T extends any[], U> = T extends [infer First,...infer Rest]?Equal<First,U> extends true?true:Includes<Rest,U>:false;

// 递归
// T extends [infer First,...infer Rest]? // 去除当前的这一项
// Equal<First,U> extends true?true:Includes<Rest,U>:false;// 这次 First 这一项 相等为true了吗？是就返回，不是就 继续递归,递归结束,返回false

