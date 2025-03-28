import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    
    const login = async ({ username, password }) => {
        const success = handleInputErrors({ username, password });
        if (!success) return;
        setLoading(true);

        try {
            const res = await fetch("api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json();
            if (data.error) {
                toast.error(data.error);
                return;
            }

            // add to localStorage
            localStorage.setItem('chat-user', JSON.stringify(data));
            toast.success("Logged in successfully");

            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, login }

}

export default useLogin

const handleInputErrors = ({ username, password }) => {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;

}