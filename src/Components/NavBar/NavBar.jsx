import React, { useState } from 'react';
import { Drawer } from "../Drawer/Drawer.jsx";
import { Link } from "wouter";
import "./NavBar.css";

const links = [
  {
    ref: "/",
    title: "Dashboard"
  },
  {
    ref: "/Inventario",
    title: "Inventario"
  },
  {
    ref: "/Ordenes",
    title: "Ordenes"
  }
]

export const NavBar = () => {
  const [drawer, setDrawer] = useState(false)

  function handleDrawer(abrir) {
    setDrawer(abrir)
  }

  return (
    <>
      <nav className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Order</li>
          <li>Statistic</li>
          <li>Product</li>
          <li>Stock</li>
          <li>Offer</li>
        </ul>
        <h1>Dashboard</h1>
        <button className="btn" onClick={handleDrawer}>
          Menu
        </button>
      </nav>
      {drawer &&
        <Drawer height="40vh" onClose={handleDrawer}>
          <ul className="drawer__ul" id="menu">
            {links.map(obj => {
              return (<li key={obj.ref + Math.random() * 100} className="drawer__li">
                <Link className="drawer__a" onClick={handleDrawer} to={obj.ref} >{obj.title}</Link>
              </li>)
            })}
          </ul>
        </Drawer>}
    </>
  );
};