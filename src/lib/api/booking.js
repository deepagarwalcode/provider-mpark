export class Booking {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async createBooking(input) {
    const { data } = await axios.post("/booking", input);
    return data;
  }

  async getBookingsByParking(parkingId) {
    const { data } = await axios.get(`/booking/parking/${parkingId}`);
    return data;
  }
}
