export declare namespace Imports {
  interface LazyImport {
    (): Promise<{
      default: ComponentType<any>
    }>
  }
  interface BaseItem {
    /** 路由 */
    path: string
    /** 全匹配，默认为true */
    exact?: boolean
    /** 重定向 */
    redirect?: string
    /** 按需加载 */
    lazyImport?: LazyImport,
    /** 页面层级，配置动画效果，1:左右切换，需配置index 2:右侧进入 */
    level?: 1 | 2
    /** 同层级次序，配置动画效果 */
    index?: number
  }
  interface LayoutUserItem extends BaseItem {
  }
  interface LayoutPageItem extends BaseItem {
    /** 角色 */
    role: string[]
  }
  type LayoutUserConfig = Array<LayoutUserItem>
  type LayoutPageConfig = Array<LayoutPageItem>
  type Item = LayoutUserItem | LayoutPageItem
  type Config = LayoutPageConfig | LayoutUserConfig
}
