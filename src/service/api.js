import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.bcb.gov.br/dados/serie/bcdata.sgs.7384/dados?formato=json",
});

export default api;