// template_zns0lbf
// service_sv36fer
// HTqTsoxXu_8N9-M5H

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

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  } 
  else {
    isModalOpen = true;
    document.body.classList += " modal--open";
  }
}




    
  
    
    


  
  
  


