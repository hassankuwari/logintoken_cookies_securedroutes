import { useCookies } from 'react-cookie';
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {

    const [cookies, setCookie] = useCookies(['accessToken']);

    console.log("profile cookie aaya?", cookies.accessToken);

    let auth = false;
    const receivedToken = cookies.accessToken;
    receivedToken ? auth = true : auth = false;


    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes