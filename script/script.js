//ls pci-vvx
function enableSubmit(){
    let name_input = document.forms["booking_form"]["name_input"].value;
    let mail_input = document.forms["booking_form"]["mail_input"].value;
    let date_input = document.forms["booking_form"]["date_input"].value;
    let party_input = document.forms["booking_form"]["party_input"].value;
    let submit_btn = document.getElementById("submit_button");

    if(name_input != "" && mail_input != "" && date_input != "" && party_input != "")
        submit_btn.disabled = false;
    else
        submit_btn.disabled = true;
}

function eraseIcon(){
    let date_label = document.querySelector('#date_label');
    date_label.title = '';
}

// modal window handling

const trigger = document.getElementById('submit_button');
const modal = document.querySelector('.modal');
const close_button = document.querySelector('.modal_close_button');

function toggleModal(){
    modal.classList.toggle('show_modal');
}

function clickProcess(event){
    if(event.target === modal)
        toggleModal();
}

trigger.addEventListener('click', toggleModal);
close_button.addEventListener('click', toggleModal);
window.addEventListener('click', clickProcess);
console.log([] == ![]);