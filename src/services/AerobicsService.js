import axios from 'axios'

const AEROBICS_URL = "http://localhost:8080/aerobics"

class AerobicsService {
    getAerobics() {
        return axios.get(AEROBICS_URL, {
            auth: {
                username: 'lukamail',
                password: 'luka'
            }
        });
    }
}

export default new AerobicsService();