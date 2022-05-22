type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any; // 2022/5/22
