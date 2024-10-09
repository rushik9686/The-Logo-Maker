// Select elements
const logoInput = document.getElementById('logo_input');
const logoDisplay = document.getElementById('logo_display');
const createLogoBtn = document.getElementById('create_logo_btn');
const downloadLogo = document.getElementById('download_logo');
const hamburger = document.getElementById('hamburger');
const sidebarMenu = document.querySelector('.sidebar_menu');
const closeMenuBtn = document.getElementById('close_menu_btn');
const signupBtn = document.getElementById('signup_btn');
const loginBtn = document.getElementById('login_btn');
const modal = document.getElementById('form_modal');
const formArea = document.getElementById('form_area');
const closeModalBtn = document.querySelector('.close_modal_btn');

// Event listener for logo creation
createLogoBtn.addEventListener('click', function() {
    const logoText = logoInput.value;
    if (logoText) {
        logoDisplay.textContent = logoText;
        const logoImageData = createLogoImage(logoText);
        downloadLogo.href = logoImageData;
    }
});

// Event listener to open menu
hamburger.addEventListener('click', function() {
    sidebarMenu.classList.toggle('show');
});

// Event listener to close menu
closeMenuBtn.addEventListener('click', function() {
    sidebarMenu.classList.remove('show');
});

// Function to create a downloadable logo image
function createLogoImage(text) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 150;

    // Fill background and set text styles
    ctx.fillStyle = '#202123';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#10a37f';
    ctx.font = 'bold 24px Poppins';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL('image/png');
}

// Modal functionality for signup and login
signupBtn.addEventListener('click', function() {
    formArea.innerHTML = `
        <h2>Sign Up</h2>
        <input type="text" placeholder="Enter your username" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button>Submit</button>
    `;
    modal.style.display = 'block';
});

loginBtn.addEventListener('click', function() {
    formArea.innerHTML = `
        <h2>Login</h2>
        <input type="text" placeholder="Enter your username or email" />
        <input type="password" placeholder="Enter your password" />
        <button>Login</button>
    `;
    modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal if clicked outside of modal content
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
