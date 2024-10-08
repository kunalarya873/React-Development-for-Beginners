import Axios from "../api";
const USER_URL = '/user';

const signinUser = async ({password, email}) =>{
    try{
        const { data } = await Axios.post(`${USER_URL}/signin`,
        {
            password,
            email
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        return data
    }
    catch(error){
        console.error(error.response.data.message)
    }
}
export default signinUser;