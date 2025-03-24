import React from "react";
var InputSearch = function (_a) {
    var buttonStyle = _a.buttonStyle, name = _a.name, styleInputSearch = _a.styleInputSearch, search = _a.search, placeholder = _a.placeholder;
    return (React.createElement("form", { className: "rounded px-3 py-1 flex justify-between items-center ".concat(styleInputSearch), action: search },
        React.createElement("input", { type: "search", className: "outline-0", name: name, placeholder: placeholder }),
        React.createElement("button", { type: "submit", className: "rounded ".concat(buttonStyle) }, "\uD83D\uDD0D")));
};
export default InputSearch;
//# sourceMappingURL=InputSearch.js.map