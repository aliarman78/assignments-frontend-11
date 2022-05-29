import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('https://assignmentgf.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const size = 6;
    const result = products.slice(0, size);
    
    return (
        <div className=''>
            <div className='d-flex flex-wrap justify-content-center justify-content-sm-around mt-3'>
            {
                result.map(product => <Items
                    
                    key={product._id} product={product}></Items>)
            }
            </div>
            <Link className='btn btn-primary w-100 mt-4' to='/inventory'>See All Items</Link>
        </div>
    );
};

export default Products;