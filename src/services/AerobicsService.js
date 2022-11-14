import axios from 'axios'

const AEROBICS_URL = "http://localhost:8080/aerobics"

class AerobicsService {
    getAerobics() {
        return axios.get(AEROBICS_URL, {
            auth: {
                username: 'deepthi',
                password: 'deepthi'
            }
        });
    }
}

export default new AerobicsService();