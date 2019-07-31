declare namespace AppModule {
  const Styles: {
    [x: string]: string
  }
  const FilePath: string
}

declare module '*.css' {
  export = AppModule.Styles
}
declare module '*.less' {
  export = AppModule.Styles
}

declare module '*.png' {
  export = AppModule.FilePath
}
declare module '*.svg' {
  export = AppModule.FilePath
}
declare module '*.jpg' {
  export = AppModule.FilePath
}
declare module '*.jpeg' {
  export = AppModule.FilePath
}
declare module '*.gif' {
  export = AppModule.FilePath
}

declare module '*.mp4' {
  export = AppModule.FilePath
}
declare module '*.webm' {
  export = AppModule.FilePath
}
declare module '*.ogg' {
  export = AppModule.FilePath
}
declare module '*.mp3' {
  export = AppModule.FilePath
}
declare module '*.wav' {
  export = AppModule.FilePath
}
declare module '*.flac' {
  export = AppModule.FilePath
}
declare module '*.aac' {
  export = AppModule.FilePath
}

declare namespace React {
}

declare module 'react' {
  export = React
}

declare type FC<T> = React.FC<T>
declare type ReactNode = React.ReactNode
declare type CSSProperties = React.CSSProperties
declare type ComponentType<T> = React.ComponentType<T>

declare const memo: typeof React.memo
declare const useState: typeof React.useState
declare const useMemo: typeof React.useMemo
declare const useCallback: typeof React.useCallback
declare const useEffect: typeof React.useEffect
declare const useRef: typeof React.useRef
declare const useContext: typeof React.useContext
declare const useReducer: typeof React.useReducer

declare const BASE_API: string

declare const WEBPACK_MODE: string
declare const WEBPACK_ENV: string

declare interface GetState<T extends string, U> {
  (key?: T): U
  (key: string): any
}

declare interface MapStateToProps<T extends string, U> {
  (store: {
    [x in T]: U
  } & {
    [x: string]: any
  }): U
}

declare interface Ajax<Request = void, Return = void> {
  (params: Request): Promise<false | Return>
}

declare interface AjaxResponse<T = void> {
  status: number
  message: string
  data: T
}
