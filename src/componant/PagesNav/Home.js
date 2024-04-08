import React, { useEffect, useState } from "react";
import Home from "../home/Home"
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import Loader from "../LoadingConfig/Loader";

export default function HomeNav() {
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if (!res?.accessToken) {
                navigate("/"); 
            } else {
                setTimeout(2000)
                setLoading(false);
            }
        });
    }, []);
    return loading ? <Loader /> : <Home />;
}