import axios from "axios";

const LAPTOPS_API_BASE_URL = "http://localhost:8080/laptop/getall";

//code implements an http get request.
class LaptopService {
  getLaptops() {
    return axios.get(LAPTOPS_API_BASE_URL);
  }
}

const laptopService = new LaptopService(); // Create an instance of LaptopService

export default laptopService;
