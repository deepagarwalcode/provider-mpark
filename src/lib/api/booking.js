export class Booking {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async createBooking(input) {
    const { data } = await this.axios.post("/booking", input);
    return data;
  }

  async getBookingsByParking(parkingId) {
    const { data } = await this.axios.get(`/booking/parking/${parkingId}`);
    return data;
  }
}
