import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function ShowComponents({ children }) {
    const { activeMenu, setActiveMenu } = useStateContext();
    const location = useLocation();
    const [showComponents, setShowComponents] = useState(false)

    useEffect(() => {
        console.log('this is location', location)
        if (location.pathname === "/login") {
            setShowComponents(false)
            setActiveMenu(false)
        } else {
            setShowComponents(true)
            setActiveMenu(true)
        }
    }, [location.pathname]); // <-- add a dependency array

    return (
        <div>{showComponents && children}</div>
    )
}

export default ShowComponents