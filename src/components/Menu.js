import React from 'react'
import MenuItem from './MenuItem'
import { Outlet } from "react-router-dom";

export default function Navigation(){
    return(
        <div class="bg-black flex flex-wrap justify-center w-full pt-5">
            <MenuItem path="/" label="Home Page"></MenuItem>
            <MenuItem path="/models" label="Inner Page"></MenuItem>
            <Outlet />
        </div>
    )
    }