import axios from "axios";

const PHONES_API_BASE_URL = "http://localhost:8080/phone/";

//code implements an http get request.
class PhoneService {
  getPhones() {
    return axios.get(PHONES_API_BASE_URL + "getall");
  }

  createPhones(laptop) {
    return axios.post(PHONES_API_BASE_URL + "add", laptop);
  }

  getById(id) {
    return axios.get(`${PHONES_API_BASE_URL}getById/${id}`);
  }

  updatePhones(laptop, id) {
    return axios.put(`${PHONES_API_BASE_URL}update/${id}`, laptop);
  }

  deletePhones(id) {
    return axios.delete(`${PHONES_API_BASE_URL}delete/${id}`);
  }

  recommendPhones(condition, price, storage) {
    return axios.get(PHONES_API_BASE_URL + "getRec", {
      params: { condition, price, storage },
    });
  }
}
const phoneService = new PhoneService();

export default phoneService;
