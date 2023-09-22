export class Car{
    axios
    constructor(axios){
        this.axios = axios;
    }

    async getCarById(id){
        const {data} = await this.axios.get(`/car/${id}`)
        return data
    }
}