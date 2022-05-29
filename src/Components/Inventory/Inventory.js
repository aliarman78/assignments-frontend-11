import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';
import NavBar from '../NavBar/NavBar';
const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('https://assignmentgf.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <NavBar></NavBar>
            <div className='d-flex flex-wrap justify-content-center justify-content-sm-around mt-3'>
            {
                products.map(product => <Items
                    
                    key={product._id} product={product}></Items>)
            }
            </div>
            <Link to={'/manageitem'} className='btn btn-primary mt-3 w-100 mb-5 p-3'>Manage Item</Link>
        </div>
    );
};

export default Inventory;