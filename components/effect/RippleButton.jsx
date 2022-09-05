import React from "react";
function RippleButton({ children }) {
    return <button
        aria-label={"Ripple Button"}
        className={"overflow-hidden relative cursor-crosshair w-full h-full"}>{children}</button>;
}

export default RippleButton;
