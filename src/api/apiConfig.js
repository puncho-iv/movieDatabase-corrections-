
import axios from "axios";

export default axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers:{
        Accept: "application/json"
    },
    params:{
        api_key:'41467446ef4c8f2ffa78fc5c6692fbd5',
        append_to_response: 'videos'
    }

})