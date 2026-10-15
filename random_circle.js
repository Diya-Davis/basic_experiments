const r = require("raylib");
const windowWidth = 400;
const windowHeight = 400;
let circleXCoordinate = 200;
let circleYCoordinate = 200;
const circleRadius = 50;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Random Circle");
    r.SetTargetFPS(60);
}
function getRandom() {
    circleXCoordinate = r.GetRandomValue(50, 350);
    circleYCoordinate = r.GetRandomValue(50, 350);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawCircle(circleXCoordinate, circleYCoordinate, circleRadius, r.RED);

    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        if (r.IsKeyPressed(r.KEY_DOWN)) {
            getRandom();
        }
        draw();
    }
}

function main() {
    setup();
    loop();
}
main();
