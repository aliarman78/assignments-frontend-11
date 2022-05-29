import React from 'react';
import bajaj from '../../images/bajaj.jpg';
import honda from '../../images/Honda.jpg';
import huawei from '../../images/huawei.jpg';
import kawasaki from '../../images/kawasaki.jpg';
import nokia from '../../images/nokia.jpg';
import samsung from '../../images/samsung.jpg';
import suzuki from '../../images/Suzuki.png';

const ExtraSection = () => {
    return (
        <div>
            <h1 className='text-primary'>Our Clients</h1>
            <div className='d-sm-flex justify-content-around mt-5 mb-5'>
                <img style={{width:'100px', height:'60px'}} src={bajaj} alt="" />
                <img style={{width:'100px', height:'60px'}} src={honda} alt="" />
                <img style={{width:'100px', height:'60px'}} src={huawei} alt="" />
                <img style={{width:'100px', height:'60px'}} src={kawasaki} alt="" />
                <img style={{width:'100px', height:'60px'}} src={nokia} alt="" />
                <img style={{width:'100px', height:'60px'}} src={samsung} alt="" />
                <img style={{width:'100px', height:'60px'}} src={suzuki} alt="" />
            </div>
        </div>
    );
};

export default ExtraSection;