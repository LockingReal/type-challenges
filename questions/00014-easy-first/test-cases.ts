import type { Equal, Expect } from '@type-challenges/utils'

// First
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]
type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

// First2
type cases2 = [
  Expect<Equal<First2<[3, 2, 1]>, 3>>,
  Expect<Equal<First2<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First2<[]>, never>>,
  Expect<Equal<First2<[undefined]>, undefined>>,
]
type errors2 = [
  // @ts-expect-error
  First2<'notArray'>,
  // @ts-expect-error
  First2<{ 0: 'arrayLike' }>,
]

// First3
type cases3 = [
  Expect<Equal<First3<[3, 2, 1]>, 3>>,
  Expect<Equal<First3<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First3<[]>, never>>,
  Expect<Equal<First3<[undefined]>, undefined>>,
]
type errors3 = [
  // @ts-expect-error
  First3<'notArray'>,
  // @ts-expect-error
  First3<{ 0: 'arrayLike' }>,
]

// First4
type cases4 = [
  Expect<Equal<First4<[3, 2, 1]>, 3>>,
  Expect<Equal<First4<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First4<[]>, never>>,
  Expect<Equal<First4<[undefined]>, undefined>>,
]
type errors4 = [
  // @ts-expect-error
  First3<'notArray'>,
  // @ts-expect-error
  First3<{ 0: 'arrayLike' }>,
]