type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer Z>? Z extends Promise<unknown>?MyAwaited<Z>:Z:T;
//2022/5/22