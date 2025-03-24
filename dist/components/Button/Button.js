import React from 'react';
var Button = function (_a) {
    var label = _a.label, func = _a.func, color = _a.color, background = _a.background, style = _a.style;
    return (React.createElement("button", { className: "bg-".concat(background, " text-").concat(color, " font-bold rounded ").concat(style), onClick: func }, label));
};
export default Button;
//# sourceMappingURL=Button.js.map