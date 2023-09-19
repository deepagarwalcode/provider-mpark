export class User {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async getMe() {
    const { data } = await this.axios.get("/user/me");
    return data;
  }
}
