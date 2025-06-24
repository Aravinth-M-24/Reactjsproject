import React from "react";
import MainMenu from "./mainmenu";
import { Outlet } from "react-router-dom";
import Footer from "./footer";



function Clayout(){
    return(<>
    <MainMenu/>
      <section>
        <Outlet/>
        </section>  
    </>
        
    )
}
export default Clayout