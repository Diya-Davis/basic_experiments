const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;
let squareXCoordinate = 10;
const squareYCoordinate = 10;
const sideOfSquare = 50;
r.InitWindow(windowWidth, windowHeight, "Moving a Square");
r.SetTargetFPS(10);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        squareXCoordinate,
        squareYCoordinate,
        sideOfSquare,
        sideOfSquare,
        r.WHITE,
    );
    squareXCoordinate = squareXCoordinate + 5;
    if (squareXCoordinate > windowWidth) {
        squareXCoordinate = -sideOfSquare;
    }
    r.EndDrawing();
}
