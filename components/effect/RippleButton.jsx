import React from "react";
function RippleButton({ children }) {
    return <button className={"overflow-hidden relative w-full h-full"}>{children}</button>;
}

export default RippleButton;
