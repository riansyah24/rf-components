import React from 'react';
var Form = function (_a) {
    var action = _a.action, theme = _a.theme, color = _a.color, label = _a.label, slot = _a.slot;
    return (React.createElement("div", null,
        React.createElement("form", { action: action, className: "flex flex-col gap-3" },
            slot,
            React.createElement("button", { type: "submit", className: "border-2 border-".concat(theme, " bg-").concat(theme, " ").concat(color, " rounded px-2 py-1 font-bold") }, label))));
};
export default Form;
//# sourceMappingURL=Form.js.map