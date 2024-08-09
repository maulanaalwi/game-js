let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    let userGuess = document.getElementById("guessInput").value;
    attempts++;
    
    if (userGuess == randomNumber) {
        document.getElementById("result").textContent = `Selamat! Kamu berhasil menebak angka ${randomNumber} dalam ${attempts} kali percobaan.`;
        document.getElementById("result").style.color = "green";
    } else if (userGuess < randomNumber) {
        document.getElementById("result").textContent = "Terlalu kecil! Coba lagi.";
        document.getElementById("result").style.color = "red";
    } else {
        document.getElementById("result").textContent = "Terlalu besar! Coba lagi.";
        document.getElementById("result").style.color = "red";
    }
}
