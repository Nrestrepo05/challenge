import axios from "axios";

const reverseList = async (list) => {
  try {
    const response = await axios.post('http://localhost:8080/reverse', { list });
    if (response.status === 200) {
      return response.data.body
    }
  } catch (error) {
    console.error(error);
  }
}

export default reverseList;
