import React, { useEffect, useState } from "react";
import ProfileComponants from "../componants/ProfileComponant";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Loader from "../componants/LoadingConfig/Loader";

export default function ProfileNav () {
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if (!res?.accessToken) {
                navigate("/profile");
            } else {
                setLoading(false);
            }
        });
    }, []);
    return loading ? <Loader /> : <ProfileComponants />;
}
