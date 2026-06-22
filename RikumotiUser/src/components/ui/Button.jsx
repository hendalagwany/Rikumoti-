import React from "react";

function Button ({children, variant="primary"}){
    return(
        <button className={`btn btn-${variant}`}>
            {children}
        </button>
    )
}

export default Button;