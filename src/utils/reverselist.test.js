import axios from 'axios';
import reverseList from './reverseList';

jest.mock('axios');

const initialList = [1, 2, 3, 4, 5]
const reversedList = initialList.reverse();

describe("ReverseList", () => {
  it("Axios is called", async () => {
    axios.post.mockResolvedValueOnce(reversedList)
    reverseList(initialList);
    expect(axios.post).toBeCalled();
  })
})
