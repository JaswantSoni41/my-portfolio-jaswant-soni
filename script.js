

//Hamburger Functionality
function HamburgerMenu() {
  const togglebtn = document.querySelector('.hamburger-menu')
  const togglebtnImg = document.querySelector('.hamburger-menu img')
  const dropDownMenu = document.querySelector('.menu-nav')
  const offMenu = document.querySelectorAll('#disable');
  togglebtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
  }
  offMenu.forEach(link => {
    link.onclick = function () {
      dropDownMenu.classList.remove('open');
    }

  });
  return true;
}





//function for adding a new project cards
function projectCard(videoLink, title, description, link) {
  let projectCard = `<div class="project-card" data-aos="fade-right">
    <div class="project-image" id="video-section">
      <div class="laptop-img" >
        <img src="./assets/images/MSI-LAPTOP - removed background.png" alt="">
      </div>
      <video id="video" src="${videoLink}" autoplay muted loop controlsList="nodownload" >
    </div>
    <div class="project-info heading-5">
      <h5>${title}</h5>
      <p class="paragraph"><b>${title} </b>${description}</p>
      <div class="more-info-btn">
        <a href="${link}" class="btn-universal">More Info &longrightarrow; </a>
      </div>
    </div>
  </div>`;

  document.querySelector(".my-projects-body").innerHTML = document.querySelector(".my-projects-body").innerHTML + projectCard;

}

//video Play Pause function
const videoSection = document.getElementById('video-section');
const video = document.getElementById('video');
video.pause();
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function handleVideo() {
  if (isInViewport(videoSection)) {
    video.play();
  } else {
    video.pause();
    video.currentTime = 0;
  }
}

document.addEventListener('scroll', () => {
  handleVideo();
});


//Drive Mode

HamburgerMenu();
handleVideo();

projectCard("./assets/videos/real-time-chat-app.mp4", "Real Time Chat App", "is a Web Based Chat Application which was build during my Third Year of Engineering as a Mini-Project and here is my role to develop a frontend.", "real-time.html")


projectCard("./assets/videos/Aityl Games - App Development.mp4", "Aityl Games (Remastered)", "embodying the essence of an app development company, the remastered landing page unifies visual allure with functionality. It stands as a testament to the company's dedication to delivering a sophisticated and user-centric experience in the ever-evolving landscape of gaming applications.", "aityl-games.html")

projectCard("./assets/videos/SRC-movie-website.mp4", "SRC - Online Movie Watching Website", "Spearheading frontend development during my 3rd Year Engineering, I crafted a modern platform offering free movies with a non-intrusive Google AdSense integration for a seamless viewing experience.", "src.html")

