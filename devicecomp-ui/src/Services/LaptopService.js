import axios from "axios";

const LAPTOPS_API_BASE_URL = "http://localhost:8080/laptop/";

//code implements an http get request.
class LaptopService {
  getLaptops() {
    return axios.get(LAPTOPS_API_BASE_URL + "getall");
  }

  createLaptops(laptop) {
    return axios.post(LAPTOPS_API_BASE_URL + "add", laptop);
  }

  getById(id) {
    return axios.get(`${LAPTOPS_API_BASE_URL}getById/${id}`);
  }

  updateLaptop(laptop, id) {
    return axios.put(`${LAPTOPS_API_BASE_URL}update/${id}`, laptop);
  }

  deleteLaptop(id) {
    return axios.delete(`${LAPTOPS_API_BASE_URL}delete/${id}`);
  }
}

const laptopService = new LaptopService(); // Create an instance of LaptopService

export default laptopService;
