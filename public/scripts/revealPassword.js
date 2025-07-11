const revealPasswordIcon = document.querySelectorAll(".reveal-password-icon");

revealPasswordIcon.forEach((icon) => 
    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            icon.src = "/assets/hide.png";
        }
        else {
            input.type = "password";
            icon.src = "/assets/show.png";
        }
    }
));