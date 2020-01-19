import axios from "axios"

export const addForm = newForm => {
    return axios
      .post(`http://localhost:5000/forms/add`, newForm)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };