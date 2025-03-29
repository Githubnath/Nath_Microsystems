// Content for different pages
const pages = {
    home: `
        <h1>Welcome To Nath Microsystems</h1>
	<h2>Top Web Development Company: Elevating Your Digital Presence
</h2>
        <img src="images/home.jpg" alt="Home">
        <p>We build future-proof and innovative solutions to foster your startup’s growth.Speed up your business growth with our full range of customer-centric, high-performance web development services in the world.
Nath Microsystems transforms vision into seamless web experiences so your website can compete well within the current industry. As the best web development company in Nigeria, we guarantee to get you more customers and help you grow faster.

	What makes us a leading web development company in the Nigeria? It is a combination of technical expertise, hands-on experience, cutting-edge technology, and diverse web development services.
We thrive in the highly competitive digital landscape by following transparent, DevOps-based, client-centric approaches to deliver high-performing quality web apps and solutions. Partner with us to fulfill your digital aspirations and make a significant impact in the Nigeria’s digital arena.
</p>

<h2>Innovators, Not Just Problem Solvers</h2>

<p> We’re more than just a software development company — we’re your digital product development and system integration partner.
Our focus is to create digital products that generates lasting value for your business. Because we don’t just write code, we find the most innovative solutions to your unique problems, as well as your greatest dreams.</p>
    
<h3>Get Our High-Performing Web Application Development Solution to Scale Your Business</h3>
<p>As the top website development company in Nigeria & Africa, we create web solutions that are ready to RACE (Reach, Attract, Communicate, and Engage) your audience. We use the right tech stacks and focus on building fully functional web applications that help you achieve maximum growth. Our end goal is to create quality web apps at a low cost that aligns with your business objectives.</p>

about: `
        <h1>About Us</h1>
       <img src="images/service4.PNG" alt="About">
       <img src="images/about.jpg" alt="About Us">
        <p>Nath Microsystems is a tech firm; which offer a wide range of affordable web design, software development and marketing services. We  develop, design and deploy websites and software applications. Such as: Responsive websites, E - commerce websites, Block chain websites etc. Our services include; development and deployment of software applications, Testing and improving the design of websites, maintaining the appearance of websites by enforcing content standards, designing visual imagery for websites and ensuring that they are in line with branding for clients.

Nath Microsystems was  established in 2015 and managed by a team of dedicated professionals led by Engr Emenike Nathaniel (Founder/CEO). Over the years, the company has grown to become a high caliber website, Mobile Apps and Business Software Development power-house; serving both local and international clients. Our passion for technology and our expertise in harnessing the plethora of ways by which it can transform business has enable us to deliver incredible customer experiences. Start your next project with us today....A trial will convince you.</p>
    `,
    services: `
        <h1>Our Services</h1>
        <img src="images/service1.jpg" alt="Services">
        <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>SEO Optimization</li>
        </ul>
    `,
    portfolio: `
        <h1>Our Portfolio</h1>
        <img src="images/portfolio1.PNG" alt="Portfolio">
        <p>Check out some of our best projects.</p>
    `,
    pricing: `
        <h1>Pricing Plans</h1>
        <img src="images/service3.PNG" alt="Pricing">
        <p>We offer affordable pricing for all businesses.</p>
    `,
    blog: `
        <h1>Our Blog</h1>
        <img src="images/portfolio2.PNG" alt="Blog">
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

