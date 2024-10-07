import React, { useState } from 'react';

export const StorageRow = ({ order, handleChange }) => {
    const [ active , setActive ] = useState(false)


    const handleChangeAdd = (e) => {
        handleChange(order, e.target.checked)
    }

    const handleClick = (e) => {
        setActive(!active)
    }
    return (
        <tr className={active ? "active" : ""} onDoubleClick={handleClick} >
            <td>
                <input type="checkbox" onChange={handleChangeAdd}/>
            </td>
            {Object.keys(order)
                .filter(key => key != "action")
                .map((key) => {
                    if (key == "status") {
                        return (<td key={Math.random()*10000}>
                            <span className={`status ${order.status.toLowerCase()}`}>
                                {order.status}
                            </span>
                        </td>)
                    }
                    if (key == "precio") return (<td key={Math.random()*10000}>${order[key]}</td>)
                    return (<td key={Math.random()*10000}>{order[key]}</td>)
                })}
            <td>
                <button className="action-btn">⚙️</button>
            </td>
        </tr>
    );
};