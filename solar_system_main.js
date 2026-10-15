const sketch = require("./solar_system");

function loop() {
    while (sketch.running()) {
        sketch.draw();
        sketch.update();
    }
}
function main() {
    sketch.setup();
    loop();
    sketch.teardown();
}
main();
