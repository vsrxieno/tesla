import React from 'react'
import { Link } from "react-router-dom"

const MenuItem = ({ path, label }) => {
    return(
        <Link class="text-white rounded-xl inline-block mb-5 px-10 py-2 bg-blue-800 mx-3 hover:scale-110 ease-in duration-300" to={path}>{label}</Link>
    );
};

export default MenuItem;