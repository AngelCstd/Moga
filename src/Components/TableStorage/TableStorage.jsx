import { StorageRow } from "../StorageRow/StorageRow.jsx";
import { Drawer } from "../Drawer/Drawer.jsx";
import { Todo } from "../Todo/Todo.jsx";
import React, { useState } from 'react';
import "./TableStorage.css"

export const TableStorage = () => {
    const [orders] = useState([
        {
            id: 1,
            nombre: "Pan de hamburguesa",
            categoria: "Panadería",
            cantidad: 100,  // en unidades
            precio: 0.5,    // precio por unidad
            action: true
        },
        {
            id: 2,
            nombre: "Carne de res",
            categoria: "Carnes",
            cantidad: 50,   // en kilos
            precio: 5,    // precio por kilo
            action: true
        },
        {
            id: 3,
            nombre: "Queso cheddar",
            categoria: "Lácteos",
            cantidad: 200,  // en rebanadas
            precio: 0.2,    // precio por rebanada
            action: true
        },
        {
            id: 4,
            nombre: "Lechuga",
            categoria: "Verduras",
            cantidad: 30,   // en kilos
            precio: 2,    // precio por kilo
            action: true
        },
        {
            id: 5,
            nombre: "Tomate",
            categoria: "Verduras",
            cantidad: 25,   // en kilos
            precio: 1.8,    // precio por kilo
            action: true
        },
        {
            id: 6,
            nombre: "Pepinillos",
            categoria: "Conservas",
            cantidad: 15,   // en frascos
            precio: 3.5,    // precio por frasco
            action: true
        },
        {
            id: 7,
            nombre: "Papas fritas congeladas",
            categoria: "Congelados",
            cantidad: 40,   // en kilos
            precio: 3,    // precio por kilo
            action: true
        },
        {
            id: 8,
            nombre: "Mayonesa",
            categoria: "Salsas",
            cantidad: 25,   // en frascos
            precio: 2.5,    // precio por frasco
            action: true
        },
        {
            id: 9,
            nombre: "Mostaza",
            categoria: "Salsas",
            cantidad: 20,   // en frascos
            precio: 2,    // precio por frasco
            action: true
        },
        {
            id: 10,
            nombre: "Kétchup",
            categoria: "Salsas",
            cantidad: 20,   // en frascos
            precio: 2,    // precio por frasco
            action: true
        }
    ]);
    const [wishList, setWishList] = useState([])
    const [drawerShow, setDrawerShow] = useState(false)

    const handleChangeWishList = (obj, isAdd) => {
        let listaNueva
        if (isAdd) {
            listaNueva = [obj, ...wishList]
        } else {
            listaNueva = [...wishList].filter(inventario => inventario.id != obj.id)
        }

        setWishList(listaNueva)
    }

    const showDrawer = () =>{
        setDrawerShow(!drawerShow)
    }

    const handleClose = (value) => {
        setDrawerShow(value)
    }

    return (
        <section className="order-table">
            <h2>Order</h2>
            <div className="table-container">
                <div className="btn-container">
                    <button disabled={wishList.length === 0} className="btn" onClick={showDrawer} >
                        Wish list
                    </button>
                    <button className="btn">
                        Agregar lote
                    </button>
                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    ✔
                                </th>
                                {Object.keys(orders[0])
                                    .map((key) => <th key={key + "" + Math.random() * 100} >{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <StorageRow key={order.id} order={order} handleChange={handleChangeWishList} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {drawerShow &&
                <Drawer height="90vh" maxWidth="350px" onClose={handleClose}>
                    <Todo list={wishList} />
                </Drawer>
            }
        </section>
    );
};