import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="spinner-border mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;