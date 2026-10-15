const r = require("raylib");
const windowWidth = 400;
const windowHeight = 400;
let frameCount = 0;
let nextColor = r.RED;
let speed = 140;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Screen Color");
    r.SetTargetFPS(60);
}
function changeColor() {
    if (nextColor === r.RED) nextColor = r.YELLOW;
    else if (nextColor === r.YELLOW) nextColor = r.BLUE;
    else if (nextColor === r.BLUE) nextColor = r.GREEN;
    else if (nextColor === r.GREEN) nextColor = r.GRAY;
    else if (nextColor === r.GRAY) nextColor = r.WHITE;
    else if (nextColor === r.WHITE) nextColor = r.BLACK;
    else if (nextColor === r.BLACK) nextColor = r.PINK;
    else if (nextColor === r.PINK) nextColor = r.PURPLE;
    else nextColor = r.RED;
}
function draw() {
    r.BeginDrawing();
    if (frameCount % speed === 0) {
        changeColor();
    }
    r.ClearBackground(nextColor);
    frameCount++;

    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        if (r.IsKeyPressed(r.KEY_DOWN)) {
            speed = speed + 10;
        } else if (r.IsKeyPressed(r.KEY_UP) && speed > 0) {
            speed = speed - 10;
        }
        draw();
    }
}

function main() {
    setup();
    loop();
}
main();
