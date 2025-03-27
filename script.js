// JavaScript functionality for contact form
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form data
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    // Simple validation (can be extended)
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Display success message
    alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you at ${email}.`);

    // Clear the form fields after submission
    document.querySelector("form").reset();
});

