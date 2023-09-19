export class Parking {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async createParking(input) {
    const { data } = await this.axios.post("/parking", input);
    return data;
  }

  async getMyParkings() {
    const { data } = await this.axios.get("/parking");
    return data;
  }

  async getParkingById(id) {
    const { data } = await this.axios.get(`/parking/${id}`);
    return data;
  }
}
