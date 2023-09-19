export class Parking {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async createParking(input) {
    const { data } = this.axios.post("/parking", input);
    return data;
  }

  async getMyParkings() {
    const { data } = this.axios.get("/parking");
    return data;
  }
}
