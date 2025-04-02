// script.js
document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const links = document.querySelectorAll(".nav-link");
    
    const pages = {
        home: createGrid(2, [
            { title: "Top Web Development Company", img: "images/home1.png", desc: "Learn more about our company values and vision." },
            { title: "Discover our innovations", img: "images/home2.png", desc: "Explore the cutting-edge innovations we bring to the industry." },
            { title: "Quality Services", img: "images/home.jpg", desc: "Providing top-notch services to meet your business needs." },
            { title: "Customer Satisfaction", img: "images/home4.jpg", desc: "We prioritize customer satisfaction with dedicated support." }
        ]),
        about: createGrid(2, [
            { title: "Our Story", img: "images/about.jpg", desc: "Discover our journey and how we started." },
            { title: "Our Vision", img: "images/portfolio2.png", desc: "Learn about our mission and future goals." },
            { title: "Our Team", img: "images/about3.jpg", desc: "Meet the professionals behind our success." },
            { title: "Our Achievements", img: "images/portfolio1.png", desc: "Explore our accomplishments over the years." }
        ]),
        contact: createContactPage(),
        services: createGrid(3, [
            { title: "Web Development", img: "images/service1.jpeg", desc: "Custom website development to enhance your business." },
            { title: "App Development", img: "images/services3.jpg", desc: "Building innovative mobile applications tailored for you." },
            { title: "SEO Optimization", img: "images/services2.png", desc: "Boost your online presence with our SEO strategies." },
            { title: "Marketing", img: "images/services4.jpg", desc: "Reach your target audience effectively with our marketing services." },
            { title: "Branding", img: "images/service5.jpg", desc: "Create a unique identity for your business with branding solutions." },
            { title: "Consulting", img: "images/service6.jpg", desc: "Get expert advice to grow and optimize your business." }
        ]),
        portfolio: createGrid(3, [
            { title: "Project One", img: "images/portfolio1.jpg", desc: "A successful project that delivered outstanding results." },
            { title: "Project Two", img: "images/portfolio2.jpg", desc: "Innovative design and development in action." },
            { title: "Project Three", img: "images/portfolio3.jpg", desc: "Strategic execution for maximum impact." },
            { title: "Project Four", img: "images/portfolio4.jpg", desc: "Delivering excellence in every aspect of the project." },
            { title: "Project Five", img: "images/portfolio5.jpg", desc: "Creative solutions for modern business challenges." },
            { title: "Project Six", img: "images/portfolio6.jpg", desc: "A top-tier project showcasing our expertise." }
        ]),
        pricing: createGrid(3, [
            { title: "Basic Plan", img: "images/pricing1.jpg", desc: "An affordable plan with essential features." },
            { title: "Standard Plan", img: "images/pricing2.jpg", desc: "A balanced plan for growing businesses." },
            { title: "Premium Plan", img: "images/pricing3.jpg", desc: "Advanced features for expanding enterprises." },
            { title: "Enterprise Plan", img: "images/pricing4.jpg", desc: "Comprehensive solutions for large businesses." },
            { title: "Custom Plan", img: "images/pricing5.jpg", desc: "Tailored plans to fit your unique needs." },
            { title: "One-Time Plan", img: "images/pricing6.jpg", desc: "A one-time package for specific projects." }
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




