type MyOmit<T, K extends keyof T> = {
    [key in Exclude<keyof T,K>]:T[key]
}
// 将不在 T中的K添加至返回集合