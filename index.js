const profileEl = document.getElementById('profile-img'); // get profile img element
const descriptionEl = document.getElementById('about-me-descr'); // get description element
const upButtonEl = document.getElementById('up-btn'); // get up button element 
const downButtonEl = document.getElementById('down-btn'); // get down button element
const profileImagesArr = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"]
const descriptionArr = [
  "Lorem Ipsum is simply, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"];
let index = 0;

upButtonEl.onclick = () => {
  if (index === 0) {
    index += 1;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  } else if (index === 1) {
    index += 1;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  } else if (index === 2) {
    index = 0;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  }
};

downButtonEl.onclick = () => {
  if (index === 0) {
    index = 2;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  } else if (index === 2) {
    index -= 1;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  } else if (index === 1) {
    index -= 1;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  }
};



