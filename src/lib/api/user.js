export class User {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async getMe() {
    const { data } = await this.axios.get("/provider/me");
    return data;
  }

  async getUserById(id){
    const {data} = await this.axios.get(`/user/${id}`)
    return data
  }

  async getSecurityById(id){
    const {data} = await this.axios.get(`/security/${id}`)
    return data
  }

  async getProviderById(id){
    const {data} = await this.axios.get(`/provider/${id}`)
    return data
  }
}
