class Booking {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async createBooking(input) {
    const { data } = axios.post("/booking", input);
    return data;
  }

  async getBookingsByParking(parkingId) {
    const { data } = axios.get(`/booking/parking/${parkingId}`);
    return data;
  }
}
