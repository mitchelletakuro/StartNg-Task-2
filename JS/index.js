const ifEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

const name = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const title = document.getElementById('form-title');
const msg = document.getElementById('form-message');

const contactForm = document.getElementById('contact').onsubmit = (event) => {
    event.preventDefault();
    if (name.value.length < 4) {
        alert('Name must exceed 4 characters');
        return false;
    } else if (ifEmail.test(formEmail.value) == false) {
        alert('Please enter a valid email address');
        return false;
    } else if (msg.value.length < 20) {
        alert('Message too small');
        return false;
    } else {
        location.reload()
    }

}

