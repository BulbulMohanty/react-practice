import React, {useEffect, useRef, useState, useLayoutEffect, use} from "react";

export default function ChangeToggleUsingUseLayoutEffect() {
    const [toggle, setToggle] = useState(false)
    const h1Ref = useRef(null);

    // useEffect(() => {
    //     const object = h1Ref.current.getBoundingClientRect()
    //     h1Ref.current.style.paddingTop = `${object.height}px`
    // }, [toggle])

    useLayoutEffect(() => {
        if (!h1Ref.current) return;
        const object = h1Ref.current.getBoundingClientRect()
        h1Ref.current.style.paddingTop = `${object.height}px`
    }, [toggle])

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <h1 ref={h1Ref}>{toggle && "Toggle is ON"}</h1>
        </div>
    )
}
