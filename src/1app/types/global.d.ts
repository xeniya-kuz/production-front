declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classnames: IClassNames
  export = classnames
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// переменная окружения
// не смогла избавиться от ошибки
// eslint-disable-next-line
declare const __IS_DEV__: boolean
// eslint-disable-next-line
declare const __API__: string

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T
