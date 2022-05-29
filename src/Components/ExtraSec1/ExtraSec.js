import React from 'react';
import best from '../../images/bestBrand.png';
import insta from '../../images/Instagram.jpg';
const ExtraSec = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-6 mt-5 mb-5'>
                    <h1 className='text-primary'>follow up on Instagram</h1>
                    <img className='img-fluid' src={insta} alt="insta" />
                </div>
                <div className='col-sm-6 mt-5 mb-5'>
                    <h1 className='text-primary'>Best Brands</h1>
                    <img className='img-fluid'  src={best} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default ExtraSec;