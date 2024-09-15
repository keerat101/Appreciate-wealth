document.getElementById("login-tab").addEventListener("click", function() {
    document.getElementById("login-tab").classList.add("active");
    document.getElementById("register-tab").classList.remove("active");
    document.getElementById("login-form").classList.add("active");
    document.getElementById("register-form").classList.remove("active");
});

document.getElementById("register-tab").addEventListener("click", function() {
    document.getElementById("register-tab").classList.add("active");
    document.getElementById("login-tab").classList.remove("active");
    document.getElementById("register-form").classList.add("active");
    document.getElementById("login-form").classList.remove("active");
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Assuming user login is successful, redirect to index.html
    window.location.href = './home_page.html'; // Redirect to the index page
});