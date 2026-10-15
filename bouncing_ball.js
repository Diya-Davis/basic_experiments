const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;
let circleXCoordinate = 60;
const circleYCoordinate = 60;
const circleRadius = 50;
let speed = 5;
r.InitWindow(windowWidth, windowHeight, "Bouncing Ball");
r.SetTargetFPS(100);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawCircle(circleXCoordinate, circleYCoordinate, circleRadius, r.RED);
    if (
        circleXCoordinate + circleRadius >= windowWidth ||
        circleXCoordinate - circleRadius <= 0
    ) {
        speed = -speed;
    }
    circleXCoordinate = circleXCoordinate + speed;
    r.EndDrawing();
}
