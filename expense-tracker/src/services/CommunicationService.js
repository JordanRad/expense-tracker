import axios from 'axios';
const URL ='http://localhost:8000/'
class CommunicationService {
    static async register(user) {
        let result = [];
        await axios.post(URL+'users/register', user)
            .then((res) => {
                result = res.data ? res.data : ["empty"]
            })
            .catch(error => console.log(error));
        return result;
    }

    static async login(email, password) {
        let result = "";
        let user = {
            email: email,
            password: password
        }
        await axios.post(URL+'users/login', user)
            .then((res) => {
                result = res.data ? res.data : ["empty"]
            })
            .catch(error => console.log(error));
        return result;
    }

    static async logout(){
        sessionStorage.clear();
        window.location.reload();
        return true
    }
    static async updateUser(user) {
        let token = user.token;
        let result
        await axios.put(`https://jordan-proxy-gateway.herokuapp.com/account-service/api/users/${user.id}`, user, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res => result = res.data)
            .catch(e => console.log(e))

        return result;
    }

}


export default CommunicationService;