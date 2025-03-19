const images = [
    "https://img.freepik.com/free-psd/template-landing-page-website_24972-779.jpg?t=st=1742116674~exp=1742120274~hmac=02aec7045214b95ef29e04429f4e1954ce95d05676cde4368f0b9c99267291c4&w=1380",
    "https://img.freepik.com/free-psd/design-agency-web-template_23-2148975466.jpg?t=st=1742116372~exp=1742119972~hmac=2d3405259923a90e6583194052dcb4a112eeec9a15de81b931a91d1e2134f56d&w=1380",
    "https://img.freepik.com/free-psd/business-template-design_23-2150316187.jpg?t=st=1742116621~exp=1742120221~hmac=27a9f8698d365e7fbaf704ccca8ce8af17d9b79f9696a1ce4e75b5473cbecf90&w=1380",
    "https://img.freepik.com/free-psd/forests-day-landing-page-template-with-photo_23-2148881411.jpg?t=st=1742116643~exp=1742120243~hmac=e6c93153bf39d03632b6af21992265ce1d322f21df752c71472b9584fa5018a0&w=1380"
  ];
  
  let currentIndex = 0;
  const heroSection = document.querySelector('.hero');
  
  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  }
  
  // Initial background
  heroSection.style.backgroundImage = `url(${images[0]})`;
  
  // Change background every 10 seconds
  setInterval(changeBackground, 3000);
  