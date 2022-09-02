import React from "react";
function Button({ children }) {
    return <button className={"overflow-hidden relative w-full h-full"}>{children}</button>;
}

export default Button;
