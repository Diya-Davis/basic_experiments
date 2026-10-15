const r = require("raylib");

function setup(windowWidth, windowHeight) {
    let world = {};
    world.windowWidth = windowWidth;
    world.windowHeight = windowHeight;
    world.cf = 0;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "paint");
    r.SetTargetFPS(25);
    return world;
}

function drawStrip(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}

function getSquareColor() {
    const shade = {
        r: r.GetRandomValue(200, 255),
        g: r.GetRandomValue(0, 150),
        b: r.GetRandomValue(100, 150),
        a: r.GetRandomValue(50, 255),
    };
    return shade;
}

function drawFlag(world) {
    const rows = 10;
    const columns = 10;
    const height = world.windowWidth / columns;
    const width = world.windowWidth / rows;
    const thickness = 5;
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            color = getSquareColor();
            r.DrawRectangleLinesEx(
                {
                    x: j * width + thickness * 0,
                    y: i * height,
                    width,
                    height,
                },
                5,
                r.DARKBROWN,
            );

            r.DrawRectangleLinesEx(
                {
                    x: j * width + thickness * 1,
                    y: i * height + thickness * 1,
                    width: width - 10,
                    height: height - 10,
                },
                5,
                r.BROWN,
            );
            r.DrawRectangleLinesEx(
                {
                    x: j * width + thickness * 2,
                    y: i * height + thickness * 2,
                    width: width - 20,
                    height: height - 20,
                },
                5,
                r.MAROON,
            );
            r.DrawRectangleLinesEx(
                {
                    x: j * width + thickness * 3,
                    y: i * height + thickness * 3,
                    width: width - 30,
                    height: height - 30,
                },
                5,
                r.RED,
            );
        }
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    drawFlag(world);
    r.EndDrawing();
}

function loop(world) {
    let cf = 0;
    while (!r.WindowShouldClose()) {
        // no update!
        if (cf % 5 === 0) world.cf = world.cf + 5;
        draw(world);
    }
}

function main() {
    world = setup(800, 800);
    loop(world);
}
main();
