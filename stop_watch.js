const r = require("raylib");
const windowWidth = 400;
const windowHeight = 400;
let second = 0;
let minute = 0;
let watchRunning = false;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Stop Watch⏰");
    r.SetTargetFPS(10);
}
function keyPressed() {
    if (r.IsKeyPressed(r.KEY_SPACE)) {
        watchRunning = !watchRunning;
    }
    if (watchRunning) {
        if (second === 60) {
            second = 0;
            minute = minute + 1;
        } else second++;
    }
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    keyPressed();
    r.DrawText(String(minute), 100, 150, 100, r.WHITE);
    r.DrawText(":", 180, 150, 100, r.WHITE);
    r.DrawText(String(second), 220, 150, 100, r.WHITE);
    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function main() {
    setup();
    loop();
}
main();
