const profileEl = document.getElementById('profile-img'); // get profile img element
const descriptionEl = document.getElementById('about-me-descr'); // get description element
const upButtonEl = document.getElementById('up-btn'); // get up button element 
const downButtonEl = document.getElementById('down-btn'); // get down button element
const profileImagesArr = ["images/myProfileImg.jpg", "images/hobbiesimg.png"]
const descriptionArr = [
  "Hi, I'm " + '<span class="proj-span">Luis Munguia Salas</span>' + "; I'm 27 and love engineering. I hold a B.S. in " + '<span class="proj-span" > computer science</span>' + " and am experienced with " + '<span class="proj-span">Python, JavaScript, and Java</span>' + ", among other languages and technologies. I enjoy the task and mental journey of solving problems and collaborating with others toward a common goal." + "<br /><br /> Outside of my education, I've gained and refined essential skills in my career in QA, including communication and critical thinking, that have been essential in my education and engineering journey.",
  "When I'm not working on projects, I enjoy being around family and friends, watching Anime, being outdoors and working out, reading, and refining my programming skills."];
let index = 0;
// "When I'm not working on projects, I enjoy solving leetcode challenges (I'ts become like a game to me) and further educating myself in the computer science field by reading great books like 'Designing Data Intensive Applications' by Martin Kleppmann"
// "images/leetcodeimg.png"
upButtonEl.onclick = () => {
  if (index === 0) {
    index += 1;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  } else if (index === 1) {
    index = 0;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  } else if (index === 2) {
    // index = 0;
    // profileEl.src = profileImagesArr[index];
    // descriptionEl.innerHTML = descriptionArr[index]; // 0 start
  }
};

downButtonEl.onclick = () => {
  if (index === 0) {
    index = 1;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  } else if (index === 2) {
    index -= 1;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerText = descriptionArr[index];
  } else if (index === 1) {
    index -= 1;
    profileEl.src = profileImagesArr[index];
    descriptionEl.innerHTML = descriptionArr[index]; // 0 start
    // descriptionEl.innerHTML = "Hi, I'm " + '<span class="proj-span">Luis Munguia Salas</span>' + "; I'm 27 and love engineering. I hold a B.S. in " + '<span class="proj-span" > computer science</span>' + " and am experienced with " + '<span class="proj-span">Python, JavaScript, and Java</span>' + ", among other languages and technologies. I enjoy the task and mental journey of solving problems and collaborating with others toward a common goal";
  }
};



