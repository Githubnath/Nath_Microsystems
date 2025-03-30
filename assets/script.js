document.addEventListener("DOMContentLoaded", function () {
    function loadPage(page) {
        const content = document.getElementById("content");
        content.classList.remove("fade-in");

        setTimeout(() => {
            let html = `<h2>${page.charAt(0).toUpperCase() + page.slice(1)}</h2><div class='grid ${page}'>`;

            if (page === 'contact') {
                html += `
                    <form id='contactForm'>
                        <label for='name'>Name:</label>
                        <input type='text' id='name' name='name' required>

                        <label for='email'>Email:</label>
                        <input type='email' id='email' name='email' required>

                        <label for='message'>Message:</label>
                        <textarea id='message' name='message' required></textarea>

                        <button type='submit'>Send Message</button>
                        <p id='formMessage'></p>
                    </form>`;
            } else {
                for (let i = 1; i <= (page === 'home' || page === 'about' || page === 'contact' ? 4 : 6); i++) {
                    html += `
                        <div class='box'>
                            <h3>${page} ${i}</h3>
                            <div class='image-container'>
                                <img class='slide-image' src='https://via.placeholder.com/150' alt='${page} ${i}'>
                            </div>
                            <p>Description for ${page} ${i}.</p>
                        </div>`;
                }
            }
            html += `</div>`;
            content.innerHTML = html;
            content.classList.add("fade-in");

            if (page === 'contact') {
                setupContactForm();
            } else {
                initiateSlideshow();
            }
        }, 300);
    }

    function initiateSlideshow() {
        const images = document.querySelectorAll('.slide-image');
        let index = 0;
        setInterval(() => {
            images.forEach(img => img.style.opacity = '0');
            images[index].style.opacity = '1';
            index = (index + 1) % images.length;
        }, 2000);
    }

    function setupContactForm() {
        document.getElementById('contactForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let name = document.getElementById('name').value.trim();
            let email = document.getElementById('email').value.trim();
            let message = document.getElementById('message').value.trim();
            let formMessage = document.getElementById('formMessage');

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill out all fields!';
                formMessage.style.color = 'red';
            } else {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.style.color = 'green';
                document.getElementById('contactForm').reset();
            }
        });
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            loadPage(this.getAttribute("data-page"));
        });
    });

    loadPage("home");
});

