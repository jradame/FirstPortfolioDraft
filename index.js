let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

// function moveBackground(event) {
//   const shapes = document.querySelectorAll(".shape");
//   const x = event.clientX * scaleFactor; 
//   const y = event.clientY * scaleFactor;

//   for (let i = 0; i < shapes.length; ++i) {
//     const isOdd = i % 2 !== 0;
//     const oddInteger = isOdd ? -1 : 1;
//     shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`;
//   }
// }

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList.add("modal__overlay--visible");

  emailjs
    .sendForm(
      'service_sv36fer',
      'template_zns0lbf',
      event.target,
      'user_HTqTsoxXu_8N9-M5H'
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is temporarily unavailable. Please contact me directly at email@email.com");
    });
}

function toggleModal() {
  isModalOpen = !isModalOpen;
  if (isModalOpen) {
    document.body.classList.add("modal--open");
  } else {
    document.body.classList.remove("modal--open");
  }
}




    
  
    
    


  
  
  


