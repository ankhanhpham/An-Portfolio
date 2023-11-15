document.querySelector('.myButton').addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'css/style.css'; // Replace with the path to your about page
    }, 1000);
});