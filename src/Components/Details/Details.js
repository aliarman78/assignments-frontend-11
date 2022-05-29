import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Details = () => {
    const { detailId } = useParams();
    const [bikes, setBike] = useState([]);

    useEffect(() => {
        const url = `https://assignmentgf.herokuapp.com/inventory/${detailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data));
    }, []);



    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const stock = event.target.stock.value;
        const result = parseInt(stock) + parseInt(bikes.stock);
        console.log(result);
        const data = { result };
        const url = `https://assignmentgf.herokuapp.com/bikes/${detailId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/myitem');
            })
            
    };
    
    
    const handleDelivery = event => {
        const stock = 1;
        const result = parseInt(bikes.stock) - parseInt(stock);
        console.log(result);
        const data = { result };
        const url = `https://assignmentgf.herokuapp.com/bikes/${detailId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate('/myitem');
            })
    };


    return (
        <div className='d-flex mt-5 mb-5 justify-content-center'>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={bikes.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Name: {bikes.name}</h5>
                    <h6>ID:{bikes._id}</h6>
                    <p className="card-text">Description:{bikes.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price:{bikes.price}Tk</li>
                    <li className="list-group-item">Quantity:{bikes.quantity}</li>
                    <li className="list-group-item">Suplier:{bikes.seller}</li>
                    <li className="list-group-item">Sold Item:{bikes.stock}</li>
                </ul>
                <div className="card-body">
                    <form className='d-flex flex-column w-50 mx-auto mt-3' onSubmit={handleSubmit}>
                        <input className='mt-2 p-1 border-primary' placeholder='Enter Amount' type="number" name='stock' required/>
                        <input className='btn btn-primary mt-2' type="submit" value="Restock" />
                    </form>
                    <button onClick={handleDelivery} className='btn btn-primary mt-2'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default Details;