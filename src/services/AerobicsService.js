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

    addAerobics(name, duration) {
        return axios.post(AEROBICS_URL, {
                "name": name,
                "duration": duration
            },
            {
                auth: {
                    username: 'lukamail',
                    password: 'luka'
                }
            });
    }

    deleteAerobics(index) {
        axios.delete(AEROBICS_URL + "/" + index, {
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

export default new

AerobicsService();