type MyPick<T, K extends keyof T> = {
    [key in  K]:T[key]
};
// 2022/5/22