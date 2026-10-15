const r = require("raylib");
const windowWidth = 400;
const windowHeight = 400;
let squareXCoordinate = 200;
let squareYCoordinate = 200;
const sqaureSide = 50;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Mouse Movement");
    r.SetTargetFPS(60);
}
function getRandom() {
    squareXCoordinate = r.GetMouseX() - sqaureSide / 2;
    squareYCoordinate = r.GetMouseY() - sqaureSide / 2;
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        squareXCoordinate,
        squareYCoordinate,
        sqaureSide,
        sqaureSide,
        r.RED,
    );

    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        getRandom();
        draw();
    }
}
function main() {
    setup();
    loop();
}
main();
