// script.js
document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const links = document.querySelectorAll(".nav-link");
    
    const pages = {
        home: createGrid(2, [
            { title: "Welcome to Our Company", img: "images/home1.jpg" },
            { title: "Discover our innovations", img: "images/home2.jpg" },
            { title: "Quality Services", img: "images/home3.jpg" },
            { title: "Customer Satisfaction", img: "images/home4.jpg" }
        ]),
        about: createGrid(2, [
            { title: "Our Story", img: "images/about1.jpg" },
            { title: "Our Vision", img: "images/about2.jpg" },
            { title: "Our Team", img: "images/about3.jpg" },
            { title: "Our Achievements", img: "images/about4.jpg" }
        ]),
        contact: createContactPage(),
        services: createGrid(3, [
            { title: "Web Development", img: "images/service1.jpg" },
            { title: "App Development", img: "images/service2.jpg" },
            { title: "SEO Optimization", img: "images/service3.jpg" },
            { title: "Marketing", img: "images/service4.jpg" },
            { title: "Branding", img: "images/service5.jpg" },
            { title: "Consulting", img: "images/service6.jpg" }
        ]),
        portfolio: createGrid(3, [
            { title: "Project One", img: "images/portfolio1.jpg" },
            { title: "Project Two", img: "images/portfolio2.jpg" },
            { title: "Project Three", img: "images/portfolio3.jpg" },
            { title: "Project Four", img: "images/portfolio4.jpg" },
            { title: "Project Five", img: "images/portfolio5.jpg" },
            { title: "Project Six", img: "images/portfolio6.jpg" }
        ]),
        pricing: createGrid(3, [
            { title: "Basic Plan", img: "images/pricing1.jpg" },
            { title: "Standard Plan", img: "images/pricing2.jpg" },
            { title: "Premium Plan", img: "images/pricing3.jpg" },
            { title: "Enterprise Plan", img: "images/pricing4.jpg" },
            { title: "Custom Plan", img: "images/pricing5.jpg" },
            { title: "One-Time Plan", img: "images/pricing6.jpg" }
        ]),
        blog: createGrid(3, [
            { title: "Latest News", img: "images/blog1.jpg" },
            { title: "Tech Trends", img: "images/blog2.jpg" },
            { title: "Industry Insights", img: "images/blog3.jpg" },
            { title: "Interviews", img: "images/blog4.jpg" },
            { title: "Case Studies", img: "images/blog5.jpg" },
            { title: "Success Stories", img: "images/blog6.jpg" }
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
                <p>Description for ${item.title}.</p>
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

