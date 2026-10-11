
const buttons = document.querySelectorAll(".toggleButton");
const videos = document.querySelectorAll(".myVideo");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const video = videos[index]; // Get the corresponding video

        // Close all other videos
        videos.forEach((v, i) => {
            if (i !== index) {
                v.style.display = "none";
                v.pause();
                buttons[i].textContent = `Show Video `;
            }
        });

        // Toggle the current video
        if (video.style.display === "none" || video.style.display === "") {
            video.style.display = "block";
            video.currentTime = 0;
            video.play();
            button.textContent = `Hide Video `;        // this javascript code is show video and hide video//
        } else {
            video.style.display = "none";
            video.pause();
            button.textContent = `Show Video`;
        }
    });
});