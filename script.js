document.addEventListener('DOMContentLoaded', function() {
    
    const headerHTML = `
        <header>
            <nav>
                <a href="index.html">
                    <img src="src/labhkosh1.jpeg" alt="Logo Image" class="header-image">
                </a>
            
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="labor-profile.html">For Service Providers</a></li>
                    <li><a href="job-posting.html">Post a Job/Hire Talent</a></li>
                    <li><a href="job-posting.html#listings">Job Listings</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    `;

    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <h4>About Us</h4>
                    <p>Connecting skilled professionals with users in need of services.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="labor-profile.html">For Service Providers</a></li>
                        <li><a href="job-posting.html">Post a Job/Hire Talent</a></li>
                        <li><a href="job-posting.html#listings">Job Listings</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: aera.park@gmail.com</p>
                    <p>Phone: +91-7789642456</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Labhkosh. All rights reserved.</p>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    document.body.insertAdjacentHTML('beforeend', footerHTML);
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});