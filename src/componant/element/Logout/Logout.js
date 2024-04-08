import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../firebase/AuthProvider";
import { getCurrentUserData } from "../../../API/FireStore";
import { toast } from "react-toastify";

export default function ProfilePopup(prop) {
  const auth = useAuthContext();
  let navigate = useNavigate();
  const [currentUserData, setCurrentUser] = useState({});
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    fetchUserdat();
  }, [prop]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await auth.sign_out(auth);
    toast.success("Logout successfully");
    navigate("/");
  };

  const fetchUserdat = (async () => {
    const userData = await getCurrentUserData()
      .then((currentUser) => {
        setCurrentUser(currentUser);
        return currentUser;
      })
      .catch((error) => {
        console.log(error);
      });
 
    //  setCurrentUser(userData);
  });

  return (
    <div
      className={`fixed inset-0 flex items-center z-30 justify-center ${
        prop.isOpen ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-0 z-20 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-50">
        <h2 className="text-lg font-semibold mb-4">Logout Confirmation</h2>
        <h1 className="text-xl mb-1 text-blue-500 font-thin">
          {currentUserData?.name}
        </h1>
        <h1 className="text-xs mb-4 text-black font-thin">
          {currentUserData?.userEmail}
        </h1>
        
        <p className="text-gray-700 mb-4">Are you sure you want to log out?</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
            onClick={() => prop.setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded ${
              isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Logging Out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
}
