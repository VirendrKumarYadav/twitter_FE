import React, { useState,useMemo, useEffect } from "react";
import "../Profile/Profile.css";
import {AiOutlineClose} from "react-icons/ai"
import { editProfile, getCollectionDetails } from "../../../API/FireStore";

const ProfileEdit = (prop) => {
const [editInputs, setEditInputs] = useState({});
const [currentUserData, setCurrentUserData] = useState({});
  
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
       console.log(input);
    setEditInputs({ ...editInputs, ...input });
  };
  useEffect(() => {
    fetchCollectionData();
   }, [])

   const fetchCollectionData = async () => {
     try {
       const collectionName = "users";
       const collectionData = await getCollectionDetails(collectionName);
       setCurrentUserData(collectionData[0]);
       console.log(collectionData);
     } catch (error) {
       console.error("Error fetching collection data:", error);
     }
   };
  
  const updateProfileData = async () => { 
      await editProfile(currentUserData?.id, editInputs);
       prop.setEdit(false); 
  };

  return (
    <div className="profile-card w-full flex justify-center items-center my-4 ">
      <div className=" w-3/5 max-lg:w-4/5 bg-blue-300 px-4">
        <div className="edit-btn">
          <AiOutlineClose
            className="close-icon"
            onClick={() => prop.setEdit(false)}
            size={25}
          />
        </div>

        <div className="profile-edit-inputs ">
          <label>Name</label>
          <input
            onChange={(e) => { getInput(e,"name") }}
            className="common-input"
            placeholder="Name"
            name="name"
            value={editInputs.name}
          />
          <label>Headline</label>
          <input
            onChange={(e) => { getInput(e, "heading") }}
            className="common-input"
            placeholder="Headline"
            value={editInputs.headline}
            name="headline"
          />
          <label>Country</label>
          <input
            onChange={(e) => { getInput(e, "country") }}
            className="common-input"
            placeholder="Country"
            name="country"
            value={editInputs.country}
          />
          <label>City</label>
          <input
            onChange={(e) => { getInput(e,"city") }}
            className="common-input"
            placeholder="City"
            name="city"
            value={editInputs.city}
          />
          <label>Company</label>
          <input
            onChange={(e) => { getInput(e, "company")}}
            className="common-input"
            placeholder="Company"
            value={editInputs.company}
            name="company"
          />
          <label>Industry </label>
          <input
            onChange={(e) => { getInput(e, "industry") }}
            className="common-input"
            placeholder="Industry"
            name="industry"
            value={editInputs.industry}
          />
          <label>College</label>
          <input
            onChange={(e) => { getInput(e,"college") }}
            className="common-input"
            placeholder="College"
            name="college"
            value={editInputs.college}
          />
          <label>Website</label>
          <input
            onChange={(e) => { getInput(e, "website") }}
            className="common-input"
            placeholder="Website"
            name="website"
            value={editInputs.website}
          />
          <label>About</label>
          <textarea
            placeholder="About Me"
            className="common-textArea common-input"
            onChange={(e) => { getInput(e, "about") }}
            rows={5}
            name="aboutMe"
            value={editInputs.aboutMe}
          />
          <label>Skills</label>
          <input
            onChange={(e)=>getInput(e,"skills")}
            className="common-input"
            placeholder="Skill"
            name="skills"
            value={editInputs.skills}
          />
        </div>
        <div className="save-container">
          <button className="save-btn" onClick={updateProfileData}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
