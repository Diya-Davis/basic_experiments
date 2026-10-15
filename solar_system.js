const r = require("raylib");
const windowSize = 800;
const sunCenterX = 400;
const sunRadius = 30;

const mercury = {
    radius: 75,
    size: 15,
    angle: 0,
    x: 0,
    y: 0,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowSize, windowSize, "Solar system");
    r.SetTargetFPS(10);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawOrbits();
    drawPlanet();
    r.DrawCircle(sunCenterX, sunCenterX, sunRadius, r.ORANGE);
    r.EndDrawing();
}

function drawPlanet() {
    calculateXYCoord();
    r.DrawCircle(mercury.x, mercury.y, mercury.size, r.GRAY);
}

function calculateXYCoord() {
    mercury.x = sunCenterX + mercury.radius * Math.cos(mercury.angle);
    mercury.y = sunCenterX + mercury.radius * Math.sin(mercury.angle);
}

function drawOrbits() {
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.9, r.WHITE);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.89, r.BLACK);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.8, r.WHITE);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.79, r.BLACK);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.7, r.WHITE);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.69, r.BLACK);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.6, r.WHITE);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.59, r.BLACK);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.5, r.WHITE);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.49, r.BLACK);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.4, r.WHITE);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.39, r.BLACK);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.3, r.WHITE);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.29, r.BLACK);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.2, r.WHITE);
    r.DrawCircle(sunCenterX, sunCenterX, (windowSize / 2) * 0.19, r.BLACK);
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

function update() {
    mercury.angle = mercury.angle + 0.05;
}

module.exports = {
    setup,
    running,
    draw,
    teardown,
    update,
};
