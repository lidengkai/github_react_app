export declare namespace ListNamespace {
  interface RequestRef {
    page: number
    hasMore: boolean
    loading: boolean
  }
  interface MoveRef {
    startY: number
  }
  interface Deal {
    <T extends Array<any> = any>(old: T, data: T): T
  }
  interface Props {
    className?: string
    style?: CSSProperties
    getData?(page: number, deal: Deal): boolean | Promise<boolean>
    /** 初始化数据 */
    page?: number
    /** 初始化数据 */
    hasMore?: boolean
    /** 初始化数据 */
    scrollTop?: number
    /** 组件移除时保存数据 */
    beforeUnmount?(data: {
      page: number
      hasMore: boolean
      scrollTop: number
    }): void
  }
}
