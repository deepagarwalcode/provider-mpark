export class Auth {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async login(input) {
    const { data } = await this.axios.post("/auth/login", input);
    return data;
  }

  async signup(input) {
    const { data } = await this.axios.post("/auth/signup", input);
    return data;
  }
}
