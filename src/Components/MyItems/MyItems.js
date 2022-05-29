import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import NavBar from '../NavBar/NavBar';

const MyItems = () => {
    const [products, setProducts] = useItems();
    const navigate = useNavigate();


    const navigateToDetails = id => {
        navigate(`/inventory/${id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://assignmentgf.herokuapp.com/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className='d-flex flex-wrap justify-content-center justify-content-sm-around mt-3'>
                {
                    products.map(product => <div key={product._id} className="card mt-3" style={{ width: '18rem' }}>
                        <img style={{ height: '200px' }} className="card-img-top" src={product.img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Name: {product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <div className='d-flex justify-content-center'>
                                <p className='btn btn-primary'>Price: {product.price}</p>
                                <p className='btn btn-primary ms-4'>Quantity: {product.quantity}</p>
                            </div>
                            <h5 className=''>Suplier Name: {product.seller}</h5><br />
                            <h5 className=''>Sold Item: {product.stock}</h5><br />
                            <p onClick={() => navigateToDetails(product._id)} className='btn btn-secondary mt-3'>Update</p>
                            <button onClick={() => handleDelete(product._id)} className='btn btn-danger ms-3'>Delete Item</button>
                        </div>
                    </div>)
                }
            </div>
            <Link to={'/additem'} className='btn btn-primary mt-3 w-100 mb-5 p-3'>Add More Item</Link>
        </div>
    );
};

export default MyItems;