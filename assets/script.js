// script.js
document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const links = document.querySelectorAll(".nav-link");
    
    const pages = {
        home: createGrid(2, [
            { title: "Top Web Development Company", img: "images/home1.png", desc: "Learn more about our company values and vision." },
            { title: "Discover our innovations", img: "images/home2.png", desc: "Explore the cutting-edge innovations we bring to the industry." },
            { title: "Quality Services", img: "images/home.jpg", desc: "Providing top-notch services to meet your business needs." },
            { title: "Customer Satisfaction", img: "images/home4.png", desc: "We prioritize customer satisfaction with dedicated support." }
        ]),
        about: createGrid(2, [
            { title: "Our Story", img: "images/about3.png", desc: "Discover our journey and how we started." },
            { title: "Our Vision", img: "images/about2.png", desc: "Looking ahead, we aim to expand our service offerings by integrating more advanced technologies such as AI-driven web components, scalable backend solutions, and cross-platform mobile applications. Our goal is to become a leading tech partner for businesses across Africa and globally, helping them achieve digital excellence through tailored software solutions, top-tier content, and continuous innovation." },
            { title: "Our Team", img: "images/about1.png", desc: "Meet the professionals behind our success." },
            { title: "Our Achievements", img: "images/about4.png", desc: "Explore our accomplishments over the years." }
        ]),
        contact: createContactPage(),
        services: createGrid(3, [
            { title: "Web Development", img: "images/service1.jpeg", desc: "Custom website development to enhance your business." },
            { title: "App Development", img: "images/services3.jpg", desc: "Building innovative mobile applications tailored for you." },
            { title: "SEO Optimization", img: "images/services2.png", desc: "Boost your online presence with our SEO strategies." },
            { title: "Marketing", img: "images/services4.png", desc: "Reach your target audience effectively with our marketing services." },
            { title: "Branding", img: "images/services5.png", desc: "Create a unique identity for your business with branding solutions." },
            { title: "Consulting", img: "images/services6.png", desc: "Get expert advice to grow and optimize your business." }
        ]),
        portfolio: createGrid(3, [
            { title: "Nath Microsystems Website", img: "images/portfolio8.png", desc: "Nath Microsystems is a cutting-edge tech solutions provider specializing in innovative software development, web and mobile app design, and digital transformation services. With a strong focus on creativity, functionality, and user experience, Nath Microsystems delivers tailored technology solutions that help businesses grow, streamline operations, and stay ahead in a digital world. This project showcases their commitment to quality, precision, and forward-thinking design." },
            { title: "Fitness Tracker", img: "images/portfolio9.png", desc: " Fitness Tracker is a user-friendly MERN stack (MongoDB, Express.js, React.js, Node.js) application designed to help individuals easily log, track, and manage their daily fitness routines. Developed by Nath Microsystems, the app allows users to record both cardio and resistance exercises, view their workout history, and delete exercises as needed. This project reflects a strong focus on functionality, simplicity, and effective personal fitness management through modern web technologies." },
            { title: "Personal Management Sysytem", img: "images/portfolio3.png", desc: " Personal Management System (PMS) is an open-source, web-based application developed by Nath Microsystems to help individuals efficiently manage personal data and daily activities in one centralized platform. Built using a robust tech stack that includes PHP 7.4.x, Symfony 5.x, MySQL, JavaScript, TypeScript, Node.js, Bootstrap, SCSS, and Webpack, this system offers a wide range of essential tools for organizing routines, notes, contacts, passwords, and digital files." },
            { title: "Fitness Tracker API Backend", img: "images/portfolio4.png", desc: " Fitness Tracker API Backend is a robust and secure backend system developed by Nath Microsystems as part of a full-featured MERN stack fitness tracking application. This backend serves as the core engine powering user interactions, data management, and authentication processes." },
            { title: "Project Five", img: "images/portfolio5.jpg", desc: "Creative solutions for modern business challenges." },
            { title: "Project Six", img: "images/portfolio6.jpg", desc: "A top-tier project showcasing our expertise." }
        ]),
        pricing: createGrid(3, [
            { title: "Basic Plan", img: "images/pricing1.png", desc: "An affordable plan with essential features." },
            { title: "Standard Plan", img: "images/pricing2.png", desc: "A balanced plan for growing businesses." },
            { title: "Premium Plan", img: "images/pricing3.png", desc: "Advanced features for expanding enterprises." },
            { title: "Enterprise Plan", img: "images/pricing4.png", desc: "Comprehensive solutions for large businesses." },
            { title: "Custom Plan", img: "images/pricing5.png", desc: "Tailored plans to fit your unique needs." },
            { title: "One-Time Plan", img: "images/pricing6.png", desc: "A one-time package for specific projects." }
        ]),
        blog: createGrid(3, [
            { title: "Latest News", img: "images/blog1.jpg", desc: "Stay updated with industry news and updates." },
            { title: "Tech Trends", img: "images/blog2.jpg", desc: "Explore the latest advancements in technology." },
            { title: "Industry Insights", img: "images/blog3.jpg", desc: "Gain insights into the evolving business landscape." },
            { title: "Interviews", img: "images/blog4.jpg", desc: "Read exclusive interviews with industry leaders." },
            { title: "Case Studies", img: "images/blog5.jpg", desc: "Analyze real-world success stories and strategies." },
            { title: "Success Stories", img: "images/blog6.jpg", desc: "Get inspired by the achievements of businesses like yours." }
        ])
    };
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            content.innerHTML = pages[page];
        });
    });
});

function createGrid(columns, items) {
    let gridHTML = `<div class='grid' style='grid-template-columns: repeat(${columns}, 1fr);'>`;
    items.forEach(item => {
        gridHTML += `
            <div class='box'>
                <h3>${item.title}</h3>
                <img src='${item.img}' alt='${item.title}'>
                <p>${item.desc}</p>
            </div>`;
    });
    gridHTML += "</div>";
    return gridHTML;
}

function createContactPage() {
    return `
        <div class='contact-form'>
            <h2>Contact Us</h2>
            <form id='contactForm'>
                <input type='text' id='name' placeholder='Your Name' required>
                <input type='email' id='email' placeholder='Your Email' required>
                <textarea id='message' placeholder='Your Message' required></textarea>
                <button type='submit'>Send</button>
            </form>
            <p id='formMessage'></p>
        </div>`;
}

document.addEventListener("submit", (e) => {
    if (e.target.id === "contactForm") {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        if (name && email && message) {
            document.getElementById("formMessage").textContent = "Thank you, " + name + ", for contacting us!";
        } else {
            document.getElementById("formMessage").textContent = "Please fill in all fields.";
        }
    }	
  });

// Learn More section on index.html
document.addEventListener("DOMContentLoaded", function () {
  const learnMoreBtn = document.getElementById("learn-more-btn");
  const learnMoreContent = document.getElementById("learn-more-content");

  if (learnMoreBtn && learnMoreContent) {
    learnMoreBtn.addEventListener("click", function () {
      if (learnMoreContent.classList.contains("hidden")) {
        learnMoreContent.classList.remove("hidden");
        learnMoreBtn.textContent = "Show Less";
      } else {
        learnMoreContent.classList.add("hidden");
        learnMoreBtn.textContent = "Learn More";
      }
    });
  }
});



