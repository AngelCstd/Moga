import { useEffect, useState } from "react"
import "./Drawer.css"

export function Drawer(props) {
    let {onClose} = props
    const [isVisible, setIsVisible] = useState(false)
    let startY = 0;

    useEffect(() => {
        console.log(props)
        const timeoutID = setTimeout(() => {
            setIsVisible(true)
        }, 10);

        return () => clearTimeout(timeoutID)
    }, [])

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => { onClose(false) }, 500)
    }

    const handleTouchStart = (e) => {
        startY = e.touches[0].clientY;
    }

    const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;

        if (deltaY > 100) {
            handleClose();
        }
    }

    return (
        <div
            className={`dialogOverlay ${isVisible && "active"}`}
            onClick={handleClose}
        >
            <div className="dialogContent"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onClick={(e) => e.stopPropagation()}
                style={{ height: props.height, maxWidth:(props.maxWidth?  props.maxWidth:"")}}
            >
                <div className="dialogHandle">
                    <span></span>
                </div>
                {props.children}
            </div>
        </div>)
}