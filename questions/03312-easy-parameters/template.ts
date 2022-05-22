type MyParameters<T extends (...args: any[]) => any> = T extends (...args:infer F)=>any?F:never

// infer 大法好