// Content for different pages
const pages = {
    home: `
        <h1>Welcome to Nath Microsystems, your ultimate Web development company in Nigeria</h1>
        <img src="https://github.com/Githubnath/Nath_Microsystems/blob/main/images/home.jpg" alt="home" width="500">
        <p>We provide top-notch services to our clients worldwide.</p>
    `,
    about: `
        <h1>About Us</h1>
        <img src="images/about.jpg" alt="About Us">
        <p>We have been in the industry for over 10 years.</p>
    `,
    services: `
        <h1>Our Services</h1>
        <img src="images/services.jpg" alt="Services">
        <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>SEO Optimization</li>
        </ul>
    `,
    portfolio: `
        <h1>Our Portfolio</h1>
        <img src="images/portfolio.jpg" alt="Portfolio">
        <p>Check out some of our best projects.</p>
    `,
    pricing: `
        <h1>Pricing Plans</h1>
        <img src="images/pricing.jpg" alt="Pricing">
        <p>We offer affordable pricing for all businesses.</p>
    `,
    blog: `
        <h1>Our Blog</h1>
        <img src="images/blog.jpg" alt="Blog">
        <p>Read our latest industry insights.</p>
    `,
    contact: `
        <h1>Contact Us</h1>
        <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name">
            <input type="email" id="email" placeholder="Your Email">
            <textarea id="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
            <p id="formMessage"></p>
        </form>
    `
};

// Function to Load Pages Dynamically
function loadPage(page) {
    document.getElementById('content').innerHTML = pages[page];

    // Attach form validation if contact page is loaded
    if (page === 'contact') {
        document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
    }
}

// Form Handling & Validation
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Validate fields
    if (!name || !email || !message) {
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required!";
        return;
    }

    // Simple email validation
    if (!email.includes("@") || !email.includes(".")) {
        formMessage.style.color = "red";
        formMessage.textContent = "Enter a valid email!";
        return;
    }

    // Simulate form submission
    setTimeout(() => {
        formMessage.style.color = "green";
        formMessage.textContent = "Message sent successfully!";
        document.getElementById('contactForm').reset();
    }, 1000);
}

// Load home page initially
window.onload = () => loadPage('home');

