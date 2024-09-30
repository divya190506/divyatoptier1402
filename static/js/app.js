document.addEventListener('DOMContentLoaded', function () {
    // Handle form submissions for newsletter
    const newsLetterForm = document.getElementById('newsLetterForm');
    if (newsLetterForm) {
        newsLetterForm.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent the default form submission behavior
            // Get the form data
            const formData = new FormData(newsLetterForm);
            const email = formData.get('email');
            // Make an asynchronous request to send the data to the server
            try {
                const response = await fetch('/submit-newsletter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
                const result = await response.json();
                if (result.status === 'success') {
                    alert('You have successfully subscribed to the newsletter!');
                } else {
                    alert('Subscription failed. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('There was an error processing your request.')
            }
        });
    }
});