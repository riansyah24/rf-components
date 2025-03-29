import React, { useState, useEffect } from 'react';
var Toast = function (_a) {
    var message = _a.message, _b = _a.type, type = _b === void 0 ? 'info' : _b, _c = _a.duration, duration = _c === void 0 ? 3000 : _c, onClose = _a.onClose;
    var _d = useState(true), visible = _d[0], setVisible = _d[1];
    var _e = useState(false), isExiting = _e[0], setIsExiting = _e[1];
    useEffect(function () {
        var timer = setTimeout(function () {
            setIsExiting(true);
            setTimeout(function () {
                setVisible(false);
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }, 300);
        }, duration);
        return function () { return clearTimeout(timer); };
    }, [duration, onClose]);
    if (!visible)
        return null;
    var bgColor = {
        success: 'bg-green-100 border-green-400 text-green-700',
        danger: 'bg-red-100 border-red-400 text-red-700',
        warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
        info: 'bg-blue-100 border-blue-400 text-blue-700',
    }[type];
    var animationClass = isExiting
        ? 'animate-toast-out'
        : 'animate-toast-in';
    return (React.createElement("div", { className: "fixed bottom-4 right-4 transform border-l-4 ".concat(bgColor, " px-4 py-3 rounded shadow-lg max-w-sm z-50 ").concat(animationClass) },
        React.createElement("div", { className: "flex items-center" },
            React.createElement("div", { className: "flex-1" },
                React.createElement("p", { className: "text-sm" }, message)),
            React.createElement("button", { onClick: function () {
                    setIsExiting(true);
                    setTimeout(function () {
                        setVisible(false);
                        onClose === null || onClose === void 0 ? void 0 : onClose();
                    }, 300);
                }, className: "ml-2 text-gray-500 hover:text-gray-700", "aria-label": "Close toast" }, "\u00D7"))));
};
export default Toast;
//# sourceMappingURL=Toast.js.map