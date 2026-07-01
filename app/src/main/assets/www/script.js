const button = document.getElementById('loadButton');
const buttonTextSpan = button.querySelector('.text');
const spinnerSpan = button.querySelector('.spinner');

button.addEventListener('click', () => {
    // Prevent multiple clicks if button is already in loading state
    if (button.classList.contains('loading')) {
        return;
    }

    // Add loading state
    button.classList.add('loading');
    button.disabled = true; // Disable interaction to prevent rapid clicks
    buttonTextSpan.textContent = 'Processing...';
    // Spinner visibility is controlled by CSS based on '.loading .spinner'

    // Simulate an asynchronous operation (e.g., fetching data, submitting a form)
    setTimeout(() => {
        // Operation complete
        button.classList.remove('loading');
        button.disabled = false; // Re-enable interaction

        // Show a success message briefly
        buttonTextSpan.textContent = 'Complete!';
        
        // Revert to original text after a short delay
        setTimeout(() => {
            buttonTextSpan.textContent = 'Faizan Engine'; 
        }, 1500);

    }, 2000); // Simulate a 2-second loading process
});
