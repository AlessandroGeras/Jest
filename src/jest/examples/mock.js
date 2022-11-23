import axios from "axios";

async function jedi(){
    try {
        const res = await axios
            .get('https://swapi.dev/api/people/${id}/');
        return res.data;
    } catch (err) {
        return "error";
    }
}

export default jedi;