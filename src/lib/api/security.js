export class Security {
  axios;

  constructor(axios) {
    this.axios = axios;
  }

  async findSecurityByPhoneNo(phoneNo) {
    const { data } = await this.axios.get(`/security/phoneNo/${phoneNo}`);
    return data;
  }

  async updateProfileImg(data){
    await this.axios.put('/security/profileImg', data)
  }

}