import { Outlet } from "react-router-dom"

import { Content, Header} from "../components"

const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  )
}

export { Layout }