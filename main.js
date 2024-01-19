const personInput = document.querySelector("#personInput");
const urlInput = document.querySelector("#urlInput");
const textInput = document.querySelector("#textInput");
const sendBtn = document.querySelector("#sendBtn");
const messageContent = document.querySelector("#messageContent");
// const removeBtn = document.querySelector("#removeBtn");
// const editBtn = document.querySelector("#editBtn");
const editContent = document.querySelector("#editContent");
const editInputt = document.querySelector("#editInputt");
const editOK = document.querySelector("#editOK");

sendBtn.addEventListener("click", async function () {
  try {
    const fullname = personInput.value;
    const url = urlInput.value;
    const note = textInput.value;

    const newObj = {
      fullname,
      url,
      note,
    };

    // console.log(newObj);

    await createPost(newObj);
    renderCard();

    personInput.value = "";
    urlInput.value = "";
    textInput.value = "";
  } catch (err) {
    console.log(err);
  }
});

const renderCard = async () => {
  try {
    const data = await readPost();
    console.log(data);

    const content = data
      .reverse()
      .map((post) => {
        return `
      <div class="card">
          <img src="${
            post.url
              ? post.url
              : "https://bhuzz.com/wp-content/uploads/2022/11/Best-Time-to-Post-on-Instagram.jpg"
          }"
          alt="photo">
          <div class="text">
            <h6 style="font-weight: 700;">${
              post.fullname ? post.fullname : "Anonim"
            }</h6>
            <p style="text-align: justify;">${
              post.note
                ? post.note
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit Commodi sapiente architecto ducimus!"
            }</p>
            <div class="btn-group d-flex gap-3">
              <button onclick="removeBtn(${post.id})"  value="${
          post.id
        }" class="btn btn-danger">Remove</button>
              <button onclick="editBtn(${
                post.id
              })" id="editBtn" class="btn btn-warning">Edit</button>
            </div>
          </div>
        </div>`;
      })
      .join("");

    messageContent.innerHTML = content;
  } catch (err) {
    console.log(err);
  }
};

async function removeBtn(id) {
  try {
    // console.log(id);
    await removePost(id);
    renderCard();
  } catch (err) {
    console.log(err);
  }
}



// Edit yarimcicixdi ........
// async function editBtn(id) {
//   try {
//     // console.log(id);
//     editContent.classList.remove("d-none");

//     editOK.addEventListener("click", function () {
//       const editvalue = editInputt.value;
//       let editObj = {
//         editvalue,
//       };
//       return editObj;
//     });

//     await updatePost(id, editObj);
//     renderCard();
//   } catch (err) {
//     console.log(err);
//   }
// }
