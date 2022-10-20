import { useEffect } from 'react';
import Footer from '../components/Footer';
import useToken from '../components/useToken';
import { logoutUser } from '../core/Auth';

function Logout() {
    const { token, setToken } = useToken();
    useEffect(() => {
        logoutUser({"token": token}).then((data) => {
            setToken(data); // clear token
        });
    });

    setTimeout(() => {
        window.location.href = "/";
    }, 2000);

    return (
    <div className='row'>
        <h1>Logout</h1>
        <img src="http://www.reactiongifs.com/r/2012/06/homer_lurking.gif" alt="logout" />
        <Footer />
    </div>
    );
}

export default Logout;