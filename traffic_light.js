const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;
const rectangleWidth = 100;
const rectangleHeight = 300;
const rectangleXPosition = 250;
const rectangleYPosition = 50;
const circle1XCoordinate = 300;
const circle1YCoordinate = 100;
const circle1Radius = 40;
const circle2XCoordinate = 300;
const circle2YCoordinate = 200;
const circle2Radius = 40;
const circle3XCoordinate = 300;
const circle3YCoordinate = 300;
const circle3Radius = 40;
let currentSignal = "Green";
const RED = "Red";
const YELLOW = "Yellow";
const GREEN = "Green";
let frameCount = 0;
r.InitWindow(windowWidth, windowHeight, "Traffic Light");
r.SetTargetFPS(1);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(
        rectangleXPosition,
        rectangleYPosition,
        rectangleWidth,
        rectangleHeight,
        r.BLACK,
    );
    if (currentSignal === RED) {
        colorRed = r.GRAY;
        colorYellow = r.YELLOW;
        colorGreen = r.GRAY;
        currentSignal = YELLOW;
    } else if (currentSignal === YELLOW) {
        colorRed = r.GRAY;
        colorYellow = r.GRAY;
        colorGreen = r.GREEN;
        currentSignal = GREEN;
    } else {
        colorRed = r.RED;
        colorYellow = r.GRAY;
        colorGreen = r.GRAY;
        currentSignal = RED;
    }
    r.DrawCircle(
        circle1XCoordinate,
        circle1YCoordinate,
        circle1Radius,
        colorRed,
    );
    r.DrawCircle(
        circle2XCoordinate,
        circle2YCoordinate,
        circle2Radius,
        colorYellow,
    );
    r.DrawCircle(
        circle3XCoordinate,
        circle3YCoordinate,
        circle3Radius,
        colorGreen,
    );

    r.EndDrawing();
}
