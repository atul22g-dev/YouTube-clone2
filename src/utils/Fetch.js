import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";

const defaultParams = {
  hl: 'hi',
  gl: 'IN',
  maxResults: "100"
};

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_SECRET_KEY,
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export const createOptions = (customParams = {}) => ({
  params: {
    ...defaultParams,
    ...customParams
  },
  headers
});

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, createOptions());
    return data;
  } catch (error) {
    // console.log("error in fetch api");
  }
};
export default fetchApi;
