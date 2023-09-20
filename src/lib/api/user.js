export class User {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async getMe() {
    const { data } = await this.axios.get("/user/me");
    return data;
  }

  async getUserById(id){
    const {data} = await this.axios.get(`/user/${id}`)
    return data
  }
}
