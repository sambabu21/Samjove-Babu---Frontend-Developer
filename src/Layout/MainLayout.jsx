import Header from "./Header"
import { Outlet } from "react-router-dom"

export default function MainLayout(){
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}