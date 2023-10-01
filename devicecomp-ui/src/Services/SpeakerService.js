import axios from "axios";

const SPEAKER_API_BASE_URL = "http://localhost:8080/speaker/";

//code implements an http get request.
class SpeakerService {
  getSpeaker() {
    return axios.get(SPEAKER_API_BASE_URL + "getall");
  }

  createSpeaker(speaker) {
    return axios.post(SPEAKER_API_BASE_URL + "add", speaker);
  }

  getById(id) {
    return axios.get(`${SPEAKER_API_BASE_URL}getById/${id}`);
  }

  updateSpeaker(speaker, id) {
    return axios.put(`${SPEAKER_API_BASE_URL}update/${id}`, speaker);
  }

  deleteSpeaker(id) {
    return axios.delete(`${SPEAKER_API_BASE_URL}delete/${id}`);
  }

  recommendSpeaker(condition, batteryCapacity) {
    return axios.get(SPEAKER_API_BASE_URL + "getRec", {
      params: { condition, batteryCapacity },
    });
  }
}
const speakerService = new SpeakerService();

export default speakerService;
