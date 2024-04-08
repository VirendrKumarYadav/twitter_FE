import axios from "axios";

export const API_Base = async (url, params) => {
    try {
        const response = await axios.get(url, {
          params,
          headers: {
            'X-RapidAPI-Key': '468d505f92msh622c8304e993a8ap1403bdjsn61141f902744',
            'X-RapidAPI-Host': 'fresh-linkedin-profile-data.p.rapidapi.com',
          }
        });
          return response.data;
    } catch (e) {
        return e;
    }
    


};

