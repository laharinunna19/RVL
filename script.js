const progress = document.getElementById("progress");


// ===============================
// SCROLL PROGRESS
// ===============================

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        totalHeight > 0
            ? (window.scrollY / totalHeight) * 100
            : 0;

    progress.style.width = percentage + "%";

});


// ===============================
// SMOOTH BUTTON SCROLL
// ===============================

document
    .querySelectorAll("[data-scroll]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const target =
                document.getElementById(
                    button.dataset.scroll
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


// ===============================
// MUSIC BUTTON
// ===============================

const musicBtn =
    document.getElementById("musicBtn");

const musicNote =
    document.getElementById("musicNote");

let musicActive = false;

musicBtn.addEventListener("click", () => {

    musicActive = !musicActive;

    musicBtn.textContent =
        musicActive ? "❚❚" : "♪";

    musicNote.textContent =
        musicActive
            ? "Music placeholder — add your chosen audio files to enable playback."
            : "Add your song files later if you want music.";

    musicNote.style.opacity = "1";

    setTimeout(() => {

        musicNote.style.opacity = "0";

    }, 2500);

});


// ===============================
// SECTION REVEAL ANIMATION
// ===============================

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".section")
    .forEach(section => {

        section.classList.add("reveal");

        observer.observe(section);

    });
