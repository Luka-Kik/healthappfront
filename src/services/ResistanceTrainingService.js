import axios from 'axios'

const RESISTANCE_TRAINING_URL = "http://localhost:8080/resistancetraining"

let username = 'lukamail'
let password = 'luka'

class ResistanceTrainingService {

    getTrainings() {
        return axios.get(RESISTANCE_TRAINING_URL, {
            auth: {
                username: 'lukamail',
                password: 'luka'
            }
        });
    }

    addATraining(name, muscleGroup, repetitions) {
        return axios.post(RESISTANCE_TRAINING_URL, {
                "name": name,
                "muscleGroup": muscleGroup,
                "numberOfRepetitions": repetitions
            },
            {
                auth: {
                    username: username,
                    password: password
                }
            });
    }

    deleteTraining(index) {
        axios.delete(RESISTANCE_TRAINING_URL + "/" + index, {
                auth: {
                    username: 'lukamail',
                    password: 'luka'
                }
            }
        )
            .then((response) => {
                console.log("SVE OK -->" + response)
            }).catch((error) => {
            console.log("NE DELA -->" + error);
        })
    }
}

export default new ResistanceTrainingService();
