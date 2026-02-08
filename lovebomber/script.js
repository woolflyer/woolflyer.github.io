// Replace 'YOUR_PUBLIC_KEY' with the one from your EmailJS Account
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); 
})();

async function sendEmails() {
    const name = document.getElementById('to_name').value;
    const email = document.getElementById('to_email').value;
    const count = parseInt(document.getElementById('repeat_count').value);
    const status = document.getElementById('status-msg');

    if (!name || !email) {
        status.style.color = "red";
        status.innerText = "Please fill in all fields!";
        return;
    }

    status.style.color = "blue";
    status.innerText = `Preparing to send ${count} emails...`;

    // THE LOOP: This runs 'count' times
    for (let i = 1; i <= count; i++) {
        try {
            await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                to_name: name,
                to_email: email,
                message: `${name}, I love you!`
            });
            status.innerText = `Sent ${i} of ${count}...`;
        } catch (error) {
            console.log("Error:", error);
            status.innerText = "Failed to send. Check console.";
            break;
        }
    }

    status.style.color = "green";
    status.innerText = "Success! All love sent. ❤️";
}