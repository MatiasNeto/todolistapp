import React from 'react';
import developer_working from '../images/developer_working.svg'

const HomeApp = () => {
    return (
        <div className="container mt-4 text-center">
            <h3>Welcome to Todo website!</h3>

            <img src={developer_working} className="img-fluid" alt="Developer Learning" title="Developers Learning"></img>

        </div>
    );
}

export default HomeApp;