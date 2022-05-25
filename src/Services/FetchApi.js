export const requestSignup = async (user) => {
  const URL = `https://navedex-api.herokuapp.com/v1/users/signup`;
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
          email: user.email,
          password: user.password,
      }),

      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const requestLogin = async (user) => {
  const URL = `https://navedex-api.herokuapp.com/v1/users/login`;
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
          email: user.email,
          password: user.password,
      }),

      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const getList = async (token) => {
  const URL = `https://navedex-api.herokuapp.com/v1/navers/`;
  try {
    const response = await fetch(URL, {
      method: "get",
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const createNaver = async (user, token) => {
  const URL = `https://navedex-api.herokuapp.com/v1/navers/`;
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { 'Authorization': 'Bearer ' + token,
      "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: user.name,
        admission_date: user.admission,
        job_role: user.job,
        project: user.project,
        birthdate: user.birthdate,
        url: user.url,
      }),

      // headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      // }
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNaver = async (id, token) => {
  const URL = `https://navedex-api.herokuapp.com/v1/navers/${id}`;
  try {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: { 'Authorization': 'Bearer ' + token,
      "Content-type": "application/json; charset=UTF-8" },
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};


export const edit = async (user, token, id) => {
  const URL = `https://navedex-api.herokuapp.com/v1/navers/${id}`;
  try {
    const response = await fetch(URL, {
      method: "PUT",
      headers: { 'Authorization': 'Bearer ' + token,
      "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: user.name,
        admission_date: user.admission,
        job_role: user.job,
        project: user.project,
        birthdate: user.birthdate,
        url: user.url,
      }),

      // headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      // }
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

