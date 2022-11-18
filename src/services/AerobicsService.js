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

    addAerobics() {
        return axios.post(AEROBICS_URL, {
                "name": "Walking TEST",
                "duration": 22
            },
            {
                auth: {
                    username: 'lukamail',
                    password: 'luka'
                }
            });
    }

    deleteAerobics(index) {
        console.log("DELETE");
        console.log(index);

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