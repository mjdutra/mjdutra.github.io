function goBack() {
    window.location.href = "index.html?scrollTo=typesSushi";
  }
  
  function scrollToSection() {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("scrollTo");
  
    if (section === "typesSushi") {
      const sushiSection = document.getElementById("typesSushi");
      if (sushiSection) {
        sushiSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
  window.onload = scrollToSection;


  document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const sushiType = params.get('sushiType');
    
    if (sushiType) {
      document.getElementById('sushiTitle').textContent = sushiType;
      document.title = sushiType;
      
      const sushiImage = document.getElementById('sushiImage');
      let imageSrc = '';
    
      switch(sushiType.toLowerCase()) {
        case 'nigiri':
          imageSrc = '/assets/svg/grabNigiri.svg';
          break;
        case 'uramaki':
          imageSrc = '/assets/svg/grabUramaki.svg';
          break;
          case 'maki':
            imageSrc = '/assets/svg/grabMaki.svg';
            break;
        case 'temaki':
          imageSrc = '/assets/svg/grabTemaki.svg';
          break;
        default:
          imageSrc = '🍣';
          break;
      }
  
      if (imageSrc) {
        sushiImage.src = imageSrc;
        sushiImage.style.display = 'block';
      } else {
        sushiImage.style.display = 'none'; 
      }
    }
  });