import React from "react"

export function filhosComProps(props) {
    return React.Children.map(props.children, callback => {
        return React.cloneElement(callback, { ...props })
    })
}