import React from 'react';
var Navbar = function (_a) {
    var title = _a.title, background = _a.background, color = _a.color, style = _a.style, slot = _a.slot;
    return (React.createElement("nav", { className: "p-3 bg-".concat(background, " ").concat(style) },
        React.createElement("a", { href: "/", className: "font-bold text-2xl text-".concat(color) }, title),
        React.createElement("div", null, slot)));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map