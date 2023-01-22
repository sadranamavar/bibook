import Header from "./header/header"
import { Outlet } from "react-router-dom"

const Index = () => {
    return (<>
    <Header />
    <Outlet />
    </>)
}

export default Index