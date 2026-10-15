const r = require("raylib");
const windowWidth = 600;
const windowHeight = 600;
const size = 40;
const sizeIncrement = 40;
let x = 280;
let y = 280;
let x1 = x - size;
let x2 = x1 - size;
let y1 = y;
let y2 = y;
let dx = 0;
let dy = 0;
let foodX = 400;
let foodY = 280;
let score = 0;
let gameOver = false;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "SnakeGame");
    r.SetTargetFPS(6);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(foodX, foodY, size, size, r.RED);
    r.DrawRectangle(x, y, size, size, r.GREEN);
    r.DrawRectangle(x1, y1, size, size, r.GREEN);
    r.DrawRectangle(x2, y2, size, size, r.GREEN);
    r.DrawText("Score: " + score, 20, 20, 25, r.WHITE);
    if (gameOver) {
        r.DrawText("GAME OVER", 200, 250, 40, r.RED);
        x = 280;
        y = 280;
    }
    r.EndDrawing();
}

function setFoodPosition() {
    foodX = r.GetRandomValue(0, 14) * 40;
    foodY = r.GetRandomValue(0, 14) * 40;
}

function getUserDirection() {
    if (r.IsKeyPressed(r.KEY_RIGHT)) {
        dx = 1;
        dy = 0;
    } else if (r.IsKeyPressed(r.KEY_LEFT)) {
        dx = -1;
        dy = 0;
    } else if (r.IsKeyPressed(r.KEY_DOWN)) {
        dx = 0;
        dy = 1;
    } else if (r.IsKeyPressed(r.KEY_UP)) {
        dx = 0;
        dy = -1;
    }
}

function setSnakePosition() {
    x2 = x1;
    y2 = y1;
    x1 = x;
    y1 = y;
    x = x + dx * size;
    y = y + dy * size;
}

function EatingFood() {
    if (x === foodX && y === foodY) {
        setFoodPosition();
        score = score + 1;
    }
}

function gameEnd() {
    let outsideLeftWindowX = x < 0;
    let outsideLeftWindowY = y < 0;
    let outsideRightWindowX = x + size > windowWidth;
    let outsideRightWindowY = y + size > windowHeight;

    if (
        outsideLeftWindowX ||
        outsideRightWindowX ||
        outsideLeftWindowY ||
        outsideRightWindowY
    ) {
        gameOver = true;
    }
}

function loop() {
    while (!r.WindowShouldClose()) {
        getUserDirection();
        setSnakePosition();
        EatingFood();
        draw();
        gameEnd();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
