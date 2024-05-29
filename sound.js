const sounds = ["luffy", "zahando", "zawarudo", "am-niam", "duck", "steve"];
const buttons = document.getElementById("buttons")

const stopSounds = () => {
    sounds.forEach((sound) => {
        const currentSound = document.getElementById(sound);
        currentSound.pause();
        currentSound.currentTime = 0;
    });
};

sounds.forEach((sound) => {
    const btn = document.createElement("buttons")
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener("click", () => {
        stopSounds();
        document.getElementById(sound).play();
    });
    buttons.appendChild(btn);
});
