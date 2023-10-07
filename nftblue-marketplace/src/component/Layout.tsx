// import { ReactNode } from "react";

import { ReactNode } from "react"
import Navbar from "./Navbar"

// type LayoutProps = {
//     children: ReactNode;
// }

// const Layout = ({children}: LayoutProps) => {
//     return (
//         <div className="w-[100vw] h-[100vh]">
//             {children}
//         </div>
//     )
// }

// export default Layout;

export interface LayoutProps  {
    children: React.ReactNode;
}

const Layout = ( props: LayoutProps ) =>  {
    return (
        <>
                {props.children}
        </>
    )
  }


  export default Layout