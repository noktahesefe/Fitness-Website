const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".facility__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".facility__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".mentor__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__content h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 500,
});


// document.querySelector('.search-input').addEventListener('input', function() {
//   const searchTerm = this.value; // Arama çubuğundaki değeri al
//   const category = document.querySelector('.category-dropdown').value; // Dropdown'dan kategoriyi al

//   // AJAX isteği gönder
//   fetch(`/search?term=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(category)}`)
//     .then(response => response.json())
//     .then(data => {
//       updateGrid(data); // Gelen veri ile gridi güncelle
//     })
//     .catch(error => console.error('Error fetching the data:', error));
// });

// function updateGrid(data) {
//   const grid = document.querySelector('.search-results-grid');
//   grid.innerHTML = ''; // Mevcut içeriği temizle

//   // Veriyi kullanarak yeni içerikleri oluştur
//   data.forEach(item => {
//     const card = document.createElement('div');
//     card.className = 'service__card';
//     card.innerHTML = `
//       <h4>${item.title}</h4>
//       <p>${item.description}</p>
//     `;
//     grid.appendChild(card);
//   });
// }


document.querySelector('.search-input').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredData = mockData.filter(item => 
    item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)
  );
  updateGrid(filteredData);
});

function updateGrid(data) {
  const grid = document.querySelector('.search-results-grid');
  const container = document.querySelector('.section__container');
  grid.innerHTML = ''; // Mevcut içeriği temizle

  // Veriyi kullanarak yeni içerikleri oluştur
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'service__card';
    card.innerHTML = `
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    `;
    grid.appendChild(card);
  });

  // Konteynerin yüksekliğini içerik miktarına göre ayarla
  container.style.maxHeight = `${grid.scrollHeight + 150}px`; // 150px, padding ve potansiyel fazlalık için
}

// Pop-up'ı açma işlevi
document.querySelector('.search-results-grid').addEventListener('click', function(e) {
  debugger;
  const card = e.target.closest('.service__card');
  if (card) {
    const popupOverlay = document.querySelector('.popup-overlay');
    popupOverlay.classList.add('active');
    document.querySelector('.popup-title').textContent = card.querySelector('h4').textContent;
    document.querySelector('.popup-description').textContent = card.querySelector('p').textContent;
  }
});

// Pop-up'ı kapatma işlevi
document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.popup-overlay').classList.remove('active');
});


// Modal'ı açma işlevi
document.querySelector('.nav__btns .btn').addEventListener('click', function() {
  var modal = document.getElementById('loginModal');
  modal.style.display = 'flex';
  modal.style.opacity = '1';
  modal.style.visibility = 'visible';
});

// Kapatma işlevi
document.querySelector('.close').addEventListener('click', function() {
  var modal = document.getElementById('loginModal');
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  setTimeout(function() { modal.style.display = 'none'; }, 300);
});

// Ekranın herhangi bir yerine tıklandığında modal'ı kapat
window.onclick = function(event) {
  var modal = document.getElementById('loginModal');
  if (event.target == modal) {
      modal.style.opacity = '0';
      modal.style.visibility = 'hidden';
      setTimeout(function() { modal.style.display = 'none'; }, 300);
  }
}

// login modal yükleme değiştirme
document.addEventListener('DOMContentLoaded', function() {
  const switchLink = document.querySelector('.switch');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const modalTitle = document.getElementById('modalTitle');
  const loginPrompt = document.getElementById('loginPrompt');

  switchLink.addEventListener('click', function(event) {
      event.preventDefault();
      
      if (loginForm.classList.contains('active-form')) {
          loginForm.classList.remove('active-form');
          loginForm.style.display = 'none';  // CSS animasyonları olmadan
          registerForm.style.display = 'block';
          setTimeout(() => {
              registerForm.classList.add('active-form');
          }, 10); // Ver CSS bir miktar zaman
          modalTitle.textContent = 'Register';
          switchLink.textContent = 'Login now!';
          loginPrompt.textContent = 'Already registered?';
      } else {
          registerForm.classList.remove('active-form');
          registerForm.style.display = 'none';
          loginForm.style.display = 'block';
          setTimeout(() => {
              loginForm.classList.add('active-form');
          }, 10); // Ver CSS bir miktar zaman
          modalTitle.textContent = 'Login';
          switchLink.textContent = 'Register now!';
          loginPrompt.textContent = 'Not registered yet?';
      }
  });
});



//login modal kapama
document.querySelector('.close').addEventListener('click', function() {
  var modal = document.getElementById('loginModal');
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  setTimeout(function() {
      modal.style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('modalTitle').textContent = 'Login';
      document.querySelector('.switch').textContent = 'Register now!';
      document.getElementById('loginPrompt').textContent = 'Not registered yet?'; // Varsayılan metni geri yükle
  }, 300);
});

// Document yüklenmeye hazır olduğunda
document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('chatbot-button');
  button.addEventListener('click', toggleChatbot);
});

function toggleChatbot() {
  var chatWindow = document.getElementById('chatbot-window');
  if (chatWindow.classList.contains('active')) {
    chatWindow.classList.remove('active');
  } else {
    chatWindow.classList.add('active');
  }
}


async function sendMessage() {
  var input = document.getElementById('chatbot-input');
  var message = input.value;
  if (message.trim() !== '') {
      addMessage(message, 'user'); // Kullanıcı mesajı
      input.value = ''; // Mesaj gönderildikten sonra input alanı temizleniyor

      // Groq API'sine istek atıyoruz
      const botResponse = await getBotResponse(message);

      addMessage(botResponse, 'bot'); // Chatbot cevabı
  }
}

async function getBotResponse(userMessage) {
  const apiKey = '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'; // Groq API anahtarınızı buraya ekleyin
  const apiUrl = 'https://api.groq.com/v1/chat'; // Groq API endpoint'i

  const requestData = {
    message: userMessage,
    user: "User", // İsteğe bağlı: API'ye gönderilecek kullanıcı adı
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}` // API anahtarınızı kullanarak kimlik doğrulaması
      },
      body: JSON.stringify(requestData) // Gönderilecek veri
    });

    const data = await response.json();

        // Gelen yanıtı console'a yazdırın
        console.log(data); // API'den gelen yanıtı görmek için konsolu kontrol edin
    return data.response; // API'den gelen yanıt
  } catch (error) {
    console.error('API isteğinde bir hata oluştu:', error);
    return 'Bir hata oluştu. Lütfen tekrar deneyin.'; // Hata durumunda gösterilecek mesaj
  }
}

function addMessage(message, sender) {
  var messagesContainer = document.getElementById('chatbot-messages');
  var newMessage = document.createElement('div');
  newMessage.classList.add('chatbot-msg', sender === 'user' ? 'chatbot-msg-user' : 'chatbot-msg-bot');
  
  if (sender === 'bot') {
    newMessage.innerHTML = `
    <img src="assets/bot-icon.png" class="bot-icon" alt="Bot Icon" /> 
      <div class="chatbot-bubble">
        ${message}
      </div>
    `;
  } else {
    newMessage.innerHTML = `<div class="chatbot-bubble">${message}</div>`;
  }

  messagesContainer.appendChild(newMessage);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Otomatik kaydırma
}


const mockData = [
  {
    title: "Bench Press",
    description: "A great exercise for chest development.",
    category: "upper body"
  },
  {
    title: "Squat",
    description: "Essential for building lower body strength.",
    category: "legs"
  },
  {
    title: "Bicep Curl",
    description: "Targets the biceps for arm strengthening.",
    category: "arms"
  },
  {
    title: "Shoulder Press",
    description: "Effective for shoulder muscle development.",
    category: "shoulders"
  },
  {
    title: "Deadlift",
    description: "Works the back and lower body.",
    category: "back"
  }
];
