import Axios from "../api";

const signinUser = async ({password, email}) =>{
    try{
        const { data } = Axios.post(`${USER_URL}`);
        return data
    }
    catch(error){
        console.error(error.response.data.message)
    }
}
export default fetchExample;