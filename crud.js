const baseUrl = "https://blog-api-t6u0.onrender.com";

const readPost = async () => {
  try {
    const response = await fetch(baseUrl + "/posts", {
      method: "GET",
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// readPost();

const createPost = async (form) => {
  try {
    const response = await fetch(baseUrl + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// createPost({
//   title: "Salam Aleykum",
//   body: "met777777777",
// });

const updatePost = async (id, form) => {
  try {
    const response = await fetch(baseUrl + "/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// updatePost(90, {
//   title: "SalamMM Aleykum",
//   body: "met777777777",
// });

const removePost = async (id) => {
  try {
    const response = await fetch(baseUrl + "/posts/" + id, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};


// removePost(89)