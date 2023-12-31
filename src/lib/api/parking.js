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

  async addImgToParking(id, data) {
    await this.axios.post(`/parking/img/${id}`, data);
  }
  async setAvailability(id, start, end) {
    await this.axios.post(`/parking/setAvailability/${id}`, { start, end });
  }
  async addSecurityToParking(id, security){
    await this.axios.post(`/parking/setSecurity/${id}`,{security})
  }
}
