import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { clearMessages } from '../redux/messageSlice';
import { clearUser } from '../redux/userSlice';
import toast from 'react-hot-toast';
import apiClient from '../utils/apiClient';

const LogoutHandler = () => {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            const res = await apiClient.get("/user/logout");
            dispatch(clearMessages());
            dispatch(clearUser(null));
            toast.success(res.data.message);

            window.location.replace("/login")
        } catch (error: any) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    };
    useEffect(() => {
        handleLogout()
    }, [])
    return (
        <></>
    )
}

export default LogoutHandler