import React from "react";
var CardImage = function (_a) {
    var img = _a.img, border = _a.border, style = _a.style, slot = _a.slot;
    return (React.createElement("div", { className: "rounded border-2 border-".concat(border, " p-2 ").concat(style) },
        React.createElement("div", null,
            React.createElement("img", { src: img, className: "object-contain aspect-square rounded" })),
        React.createElement("div", null, slot)));
};
export default CardImage;
//# sourceMappingURL=CardImage.js.map