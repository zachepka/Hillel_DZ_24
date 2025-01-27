document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';

    const name = document.getElementById('name').value;
    if (!name) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required!';
    }

    const message = document.getElementById('message').value;
    if (message.length < 5) {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message must be at least 5 characters long!';
    }

    const phoneRegEx = /^\+380\d{9}$/;
    const phone = document.getElementById('phone').value;
    if (!phoneRegEx.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Phone number must start with +380 and be followed by 9 digits!';
    }

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById('email').value;
    if (!emailRegEx.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Invalid email format!';
    }

    if (isValid) {
        console.log('Name:', name);
        console.log('Message:', message);
        console.log('Phone:', phone);
        console.log('Email:', email);
        alert('Form submitted successfully!');
    }
});