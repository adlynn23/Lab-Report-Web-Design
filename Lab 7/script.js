document.addEventListener("DOMContentLoaded", () => {
    
    // --- SLIDESHOW ---
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        if (slides.length === 0) return;
        slides.forEach(s => s.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();

    // --- PROGRESS BAR ---
    const checkboxes = document.querySelectorAll(".state");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    function updateProgress() {
        const checked = document.querySelectorAll(".state:checked").length;
        const total = checkboxes.length;
        const percentage = (checked / total) * 100;

        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${checked} / ${total} states visited`;

        if (checked === total) {
            alert("Amazing! You've explored all listed states in Malaysia!");
        }
    }

    checkboxes.forEach(box => box.addEventListener("change", updateProgress));

    // --- COLLAPSIBLE (ACCORDION) ---
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(btn => {
        btn.addEventListener("click", function() {
            // Toggle active class for icon rotation or styling
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            const icon = this.querySelector("i");

            if (content.style.display === "block") {
                content.style.display = "none";
                if(icon) icon.className = "fa fa-chevron-down";
            } else {
                content.style.display = "block";
                if(icon) icon.className = "fa fa-chevron-up";
            }
        });
    });
});
