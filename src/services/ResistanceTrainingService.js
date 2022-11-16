import axios from 'axios'

const RESISTANCE_TRAINING_URL = "http://localhost:8080/resistancetraining"

class ResistanceTrainingService {
    getAnaerobics() {
        return axios.get(RESISTANCE_TRAINING_URL, {
            auth: {
                username: 'lukamail',
                password: 'luka'
            }
        });
    }
}

export default new ResistanceTrainingService();
