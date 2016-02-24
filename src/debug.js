var colors = {
    red: { red: 255, green: 0, blue: 0 },
    green: { red: 0, green: 255, blue: 0 },
    blue: { red: 0, green: 0, blue: 255 }
};
exports.colors = colors;

function vec3ToString(vec, places) {
    places = places == undefined ? 4 : places;
    return "(" + vec.x.toFixed(places) + ", " + vec.y.toFixed(places) + ", " + vec.z.toFixed(places) + ")";
}

var debugLines = [];
exports.drawLine = function(start, end, color, duration) {
    color = color | colors.red;
    duration = duration | 500;

    console.log("Drawing line from " + vec3ToString(start) + " to " + vec3ToString(end));

    var overlayID = Overlays.addOverlay('line3d', {
        color: color,
        start: start,
        end: end
    });

    debugLines.push({
        elapsed: 0,
        duration: duration,
        overlayID: overlayID
    });

    if (debugLines.length == 1) {
        Script.update.connect(updateLines);
    }
};

function updateLines(dt) {
    for (var i = 0; i < debugLines.length; ++i) {
        var line = debugLines[i];
        line.elapsed += dt * 1000;
        if (line.elapsed >= line.duration) {
            Overlays.deleteOverlay(line.overlayID);
            debugLines.splice(i, 1);
            --i;
        }
    }

    if (debugLines.length == 0) {
        Script.update.disconnect(updateLines);
    }
}
