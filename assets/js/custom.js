const images = [
    "https://img.freepik.com/free-psd/flat-design-plant-care-landing-page_23-2150291375.jpg?t=st=1742572872~exp=1742576472~hmac=c9957c5a83ea02453d1202e3598c702adf33879fa79dc111c3463cfc28e859fc&w=996",
    "https://img.freepik.com/free-psd/design-agency-web-template_23-2148975466.jpg?t=st=1742116372~exp=1742119972~hmac=2d3405259923a90e6583194052dcb4a112eeec9a15de81b931a91d1e2134f56d&w=1380",
    "https://img.freepik.com/free-psd/business-template-design_23-2150316187.jpg?t=st=1742116621~exp=1742120221~hmac=27a9f8698d365e7fbaf704ccca8ce8af17d9b79f9696a1ce4e75b5473cbecf90&w=1380",
    "https://img.freepik.com/free-vector/travel-sale-landing-page-design_52683-46355.jpg?t=st=1742572915~exp=1742576515~hmac=5e201a0d499d2a5e754f57c052f4c2da87a74839295f968c6c3d3a058b6f7726&w=996"
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
  