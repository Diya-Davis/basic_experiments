const r = require("raylib");
const windowWidth = 400;
const windowHeight = 400;
const circleXCoordinate = 200;
const circleYCoordinate = 200;
let circleRadius = 50;
let speed = 1;
function setup() {
    r.InitWindow(windowWidth, windowHeight, "Growing Circle");
    r.SetTargetFPS(60);
}
function update() {
    if (
        windowHeight <= circleRadius * 2 ||
        windowWidth <= circleRadius * 2 ||
        circleRadius <= 0
    ) {
        speed = -speed;
    }
    circleRadius = circleRadius + speed;
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawCircle(circleXCoordinate, circleYCoordinate, circleRadius, r.RED);
    r.DrawCircle(
        circleXCoordinate,
        circleYCoordinate,
        0.8 * circleRadius,
        r.RED,
    );
    r.DrawCircle(
        circleXCoordinate,
        circleYCoordinate,
        0.6 * circleRadius,
        r.BLACK,
    );
    r.DrawCircle(
        circleXCoordinate,
        circleYCoordinate,
        0.4 * circleRadius,
        r.WHITE,
    );
    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        update();
    }
}

function main() {
    setup();
    loop();
}
main();
