import React from 'react';
import { useNavigate } from 'react-router-dom';
const Items = (props) => {
    const {_id, name, description, price, stock, quantity, seller, img} = props.product
    const navigate = useNavigate();

    const navigateToDetails = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div className="card mt-3" style={{ width: '18rem' }}>
                <img style={{height:'200px'}} className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <p className='btn btn-primary'>Price: {price}</p>
                        <p className='btn btn-primary ms-4'>Quantity: {quantity}</p>
                        <p className='btn btn-primary ms-4'>Sold: {stock}</p>
                    </div>
                    <h5 className=''>Suplier Name: {seller}</h5><br />
                    <p onClick={() => navigateToDetails(_id)} className='btn btn-secondary'>Update</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Items;