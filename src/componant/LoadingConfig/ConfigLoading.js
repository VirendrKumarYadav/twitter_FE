import React,{useEffect,useState} from 'react'
import Loader from "../LoadingConfig/Loader";
import Home from '../Home/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom';



export default function ConfigLoading ()  {
    const [Loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            console.log(res);
            if (!res?.accessToken) {
                console.log("Access token");
               navigate("/home")
            } else {
                setLoading(false)
           }
       }) 
    },[])

  return !Loading?<Loader/>:<Home />
}




