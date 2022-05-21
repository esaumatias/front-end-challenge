export const requestToken = async (email, password) => {
  const URL = `https://navedex-api.herokuapp.com/v1/users/signup`;
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
          email: email,
          password: password,
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
