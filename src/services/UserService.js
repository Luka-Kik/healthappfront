import axios from 'axios'

const USERS_URL = "http://localhost:8080/users"

class UserService {
    getUsers() {
        return axios.get(USERS_URL, {
            auth: {
                username: 'lukamail',
                password: 'luka'
            }
        });
    }

    addUser(firstname, lastname, email, phonenumber, password) {
        return axios.post(USERS_URL, {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "phonenumber": phonenumber,
                "password": password
            },
            {
                auth: {
                    username: 'lukamail',
                    password: 'luka'
                }
            });
    }

}

export default new UserService();