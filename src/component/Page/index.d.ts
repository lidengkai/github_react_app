import PageInternal from './Page'
import MenuInternal from './Menu'
import HeaderInternal from './Header'
import { PageNamespace, MenuNamespace, HeaderNamespace } from './interface'

declare const Page: typeof PageInternal & {
  Menu: typeof MenuInternal
  Header: typeof HeaderInternal
}
declare const Menu: typeof MenuInternal
declare const Header: typeof HeaderInternal

declare namespace Page {
  type Props = PageNamespace.Props
  namespace Menu {
    type Props = MenuNamespace.Props
  }
  namespace Header {
    type Props = HeaderNamespace.Props
  }
}
declare namespace Menu {
  type Props = MenuNamespace.Props
}
declare namespace Header {
  type Props = HeaderNamespace.Props
}

export default Page
export {
  Menu,
  Header
}
