import axios from "axios";

export default async function LoginService(user) {
  let url = "http://localhost:3002/login";
  await axios.post(`${url}`, user)
  .then(res => {
    return res.data.response
  })
  return res.data.response
}

