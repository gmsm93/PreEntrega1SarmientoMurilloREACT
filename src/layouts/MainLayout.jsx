import React from "react";
import { NavBarComponent } from "../components/NavBarComponent";

export const MainLayout = ({children}) =>{
    const styles = {
        backgroundColor: "black",
        color: "white",
    }
    return(
        <div style={styles}>
            <NavBarComponent/>
            {children}
        </div>
    )
}
