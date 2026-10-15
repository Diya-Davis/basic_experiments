const r = require("raylib");

function setup(windowWidth, windowHeight) {
    let world = {};
    world.windowWidth = windowWidth;
    world.windowHeight = windowHeight;
    world.pallete = {
        0: r.RED,
        1: r.GOLD,
        2: r.WHITE,
        3: r.SKYBLUE,
        4: r.GREEN,
    };
    world.cf = 0;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "brazil");
    r.SetTargetFPS(5);
    return world;
}

function drawStrip(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}

function getSquareColor(row, col, world) {
    const k = col > row ? row + col : row * col;
    return world.pallete[((world.cf + k) % 5) % 3];
}

function drawFlag(world) {
    const rows = 12;
    const columns = 12;
    const height = world.windowWidth / columns;
    const width = world.windowWidth / rows;
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            color = getSquareColor(i, j, world);
            drawStrip(j * width, i * height, width, height, color);
        }
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawFlag(world);
    r.EndDrawing();
}

function loop(world) {
    let cf = 0;
    while (!r.WindowShouldClose()) {
        // no update!
        if (cf % 5 === 0) world.cf++;
        draw(world);
    }
}

function main() {
    world = setup(840, 840);
    loop(world);
}
main();
