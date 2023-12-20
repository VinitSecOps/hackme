let keyloggerActive = false;
let log = "";

function startKeylogger() {
    keyloggerActive = true;
    log = "";
    document.getElementById("output").innerText = "Keylogger started...\n";
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;

    // Simulating keylogger activity (replace this with your actual keylogger logic)
    document.addEventListener("keydown", logKeyPress);
}

function stopKeylogger() {
    keyloggerActive = false;
    document.getElementById("output").innerText += "\nKeylogger stopped.";
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;

    // Stop keylogger activity (replace this with your actual keylogger logic)
    document.removeEventListener("keydown", logKeyPress);

    // Display the collected log (for demonstration purposes)
    alert("Collected Log:\n" + log);
}

function logKeyPress(event) {
    if (keyloggerActive) {
        const key = event.key;
        log += key;
        document.getElementById("output").innerText += key;
    }
}
