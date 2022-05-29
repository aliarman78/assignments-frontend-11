import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../FirebaseInit';



const auth = getAuth(app);

const NavBar = () => {


    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home">LOGO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inventory">Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            {
                                user ?
                                <Link className="nav-link" to="/manageitem">Manage Item</Link>
                                :
                                ''
                            }
                        </li>
                        <li className="nav-item">
                            {
                                user ?
                                <Link className="nav-link" to="/additem">Add Item</Link>
                                :
                                ''
                            }
                        </li>
                        <li className="nav-item">
                            {
                                user ?
                                <Link className="nav-link" to="/myitem">My Item</Link>
                                :
                                ''
                            }
                        </li>
                        <li className="nav-item">

                            {
                                user ?

                                    <Link onClick={handleSignOut} className="nav-link " to="/login">Logout</Link>
                                    :
                                    <Link className="nav-link" to="/login">Login</Link>
                            }
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;