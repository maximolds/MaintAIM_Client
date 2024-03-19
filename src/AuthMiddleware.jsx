import { useNavigate } from 'react-router-dom';

const AuthMiddleware = ({ children }) => {

let navigate = useNavigate()
 const accessToken = sessionStorage.getItem('accessToken');

 if (!accessToken) {
    return navigate('/login') ;
 }

 return children;
};



export default AuthMiddleware;