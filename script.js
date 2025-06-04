


// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navItems = document.querySelectorAll('.nav-item');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
            if (window.innerWidth <= 900) {
                mobileMenu.classList.remove('active');
                menuBtn.querySelector('i').classList.add('fa-bars');
                menuBtn.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    renderBusinessUnits();
});

 
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider-wrapper');

  sliders.forEach((sliderWrapper) => {
    const carousel = sliderWrapper.querySelector('.cards-container');
    const cards = carousel.querySelectorAll('.card');
    const dotsContainer = sliderWrapper.querySelector('.dotsContainer');
    const prevBtn = sliderWrapper.querySelector('.prevBtn');
    const nextBtn = sliderWrapper.querySelector('.nextBtn');
    
    let currentIndex = 0;

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateActiveDot(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function scrollToCard(index) {
      if (index < 0 || index >= cards.length) return;
      currentIndex = index;
      const card = cards[index];
      carousel.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
      updateActiveDot(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        scrollToCard(currentIndex + 1);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      }
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        scrollToCard(parseInt(dot.dataset.index));
      });
    });

    carousel.addEventListener('scroll', () => {
      const scrollLeft = carousel.scrollLeft;
      let newIndex = 0;
      cards.forEach((card, index) => {
        if (scrollLeft >= card.offsetLeft - card.offsetWidth / 2) {
          newIndex = index;
        }
      });
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateActiveDot(currentIndex);
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider-wrapper');

  sliders.forEach((sliderWrapper) => {
    const carousel = sliderWrapper.querySelector('.cards-container');
    const cards = carousel.querySelectorAll('.card2');
    const dotsContainer = sliderWrapper.querySelector('.dotsContainer');
    const prevBtn = sliderWrapper.querySelector('.prevBtn');
    const nextBtn = sliderWrapper.querySelector('.nextBtn');
    
    let currentIndex = 0;

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateActiveDot(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function scrollToCard(index) {
      if (index < 0 || index >= cards.length) return;
      currentIndex = index;
      const card2 = cards[index];
      carousel.scrollTo({
        left: card2.offsetLeft,
        behavior: 'smooth'
      });
      updateActiveDot(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        scrollToCard(currentIndex + 1);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      }
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        scrollToCard(parseInt(dot.dataset.index));
      });
    });

    carousel.addEventListener('scroll', () => {
      const scrollLeft = carousel.scrollLeft;
      let newIndex = 0;
      cards.forEach((card2, index) => {
        if (scrollLeft >= card2.offsetLeft - card2.offsetWidth / 2) {
          newIndex = index;
        }
      });
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateActiveDot(currentIndex);
      }
    });
  });
});


  document.querySelectorAll('.has-dropdown .trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.has-dropdown');
      parent.classList.toggle('open');
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
  // Create dropdowns
  const servicesDropdown = document.createElement("div");
  servicesDropdown.className = "custom-dropdown";
  servicesDropdown.innerHTML = `
    <a href="#">Web/App Development</a>
    <a href="#">Digital Marketing</a>
    <a href="#">Tech Academy</a>
    <a href="#">Biomedical Engineering</a>
    <a href="#">Office Supplies</a>
  `;

  const businessDropdown = document.createElement("div");
  businessDropdown.className = "custom-dropdown";
  businessDropdown.innerHTML = `
    <a href="#">CliniquePlus</a>
    <a href="#">Netwalkers Tech Academy</a>
    <a href="#">Netwalkers Office Supplies</a>
  `;

  // Get nav items
  const navLinks = document.getElementById("navLinks");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navItems = navLinks.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const text = item.textContent.trim();

    if (text === "Services") {
      item.classList.add("has-dropdown");
      const container = document.createElement("div");
      container.className = "dropdown-container";
      item.parentNode.insertBefore(container, item);
      container.appendChild(item);
      container.appendChild(servicesDropdown.cloneNode(true));

    } else if (text === "Business Units") {
      item.classList.add("has-dropdown");
      const container = document.createElement("div");
      container.className = "dropdown-container";
      item.parentNode.insertBefore(container, item);
      container.appendChild(item);
      container.appendChild(businessDropdown.cloneNode(true));
    }
  });

  // Do same for mobile menu
  const mobileItems = mobileMenu.querySelectorAll(".nav-item");

  mobileItems.forEach((item) => {
    const text = item.textContent.trim();

    if (text === "Services") {
      item.classList.add("has-dropdown");
      const container = document.createElement("div");
      container.className = "dropdown-container";
      item.parentNode.insertBefore(container, item);
      container.appendChild(item);

      const clone = servicesDropdown.cloneNode(true);
      container.appendChild(clone);

      item.addEventListener("click", function (e) {
        e.preventDefault();
        clone.classList.toggle("show");
      });

    } else if (text === "Business Units") {
      item.classList.add("has-dropdown");
      const container = document.createElement("div");
      container.className = "dropdown-container";
      item.parentNode.insertBefore(container, item);
      container.appendChild(item);

      const clone = businessDropdown.cloneNode(true);
      container.appendChild(clone);

      item.addEventListener("click", function (e) {
        e.preventDefault();
        clone.classList.toggle("show");
      });
    }
  });
});



