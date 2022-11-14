import axios from 'axios'

const ANAEROBICS_URL = "http://localhost:8080/anaerobics"

class AerobicsService {
    getAnaerobics() {
        return axios.get(ANAEROBICS_URL, {
            auth: {
                username: 'deepthi',
                password: 'deepthi'
            }
        });
    }
}

export default new AerobicsService();