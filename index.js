// template_zns0lbf
// service_sv36fer
// HTqTsoxXu_8N9-M5H

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs.sendForm(
    'service_sv36fer',
    'template_zns0lbf',
    event.target,
    'user_HTqTsoxXu_8N9-M5H'
	).then(() => {
		loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
	}).catch((error) => {
    loading.classList.remove("modal__overlay--visible");
	alert("There was an error sending the email. Please try again later at jradame@gmail.com");
	})
} 

let isModalOpen = false;
function toggleModal() {
	isModalOpen = !isModalOpen;
	if (modalOpen) {
		return document.body.classList.remove("modal--open");
	}
	// Toggle the modal visibility
	document.body.classList += " modal--open";
}
    
  
    
    


  
  
  


