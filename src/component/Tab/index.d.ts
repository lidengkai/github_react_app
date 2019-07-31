import TabInternal from './Tab'
import ContentInternal from './Content'
import { TabNamespace, ContentNamespace } from './interface'

declare const Tab: typeof TabInternal & {
  Content: typeof ContentInternal
}
declare const Content: typeof ContentInternal

declare namespace Tab {
  type Props = TabNamespace.Props
  namespace Content {
    type Props = ContentNamespace.Props
  }
}
declare namespace Content {
  type Props = ContentNamespace.Props
}

export default Tab
export {
  Content
}
