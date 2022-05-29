import React from 'react';
import { useForm } from "react-hook-form";
import NavBar from '../NavBar/NavBar';
const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://assignmentgf.herokuapp.com/bikes`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <h1 className='mt-5 text-primary'>Add New Item to Inventory</h1>
                <form className='d-flex flex-column w-50 mx-auto mt-3' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mt-2 p-1 border-primary' placeholder='Name' type="text" {...register("name")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Product Description' type="description" {...register("description")} required/>
                    <input className='mt-2 p-1 border-primary' placeholder='Price' type="number" {...register("price")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Quantity' type="number" {...register("quantity")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Suplier' type="text" {...register("seller")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Photo URL' type="text" {...register("img")} required />
                    <input className='mt-2 p-1 border-primary' placeholder='Sold' type="number" {...register("stock")} required />
                    <input className='btn btn-primary mt-2' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;