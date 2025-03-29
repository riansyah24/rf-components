var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, createContext, useContext } from 'react';
import Toast from './Toast';
var ToastContext = createContext(undefined);
export var ToastProvider = function (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? "bottom-right" : _b;
    var _c = useState([]), toasts = _c[0], setToasts = _c[1];
    var positionClasses = {
        'bottom-left': 'left-4 bottom-4 items-start',
        'bottom-center': 'left-1/2 bottom-4 transform -translate-x-1/2 items-center',
        'bottom-right': 'right-4 bottom-4 items-end',
    };
    var addToast = function (message, options) {
        if (options === void 0) { options = {}; }
        var id = Date.now();
        var toast = __assign({ id: id, message: message }, options);
        setToasts(function (prev) { return __spreadArray(__spreadArray([], prev, true), [toast], false); });
    };
    var removeToast = function (id) {
        setToasts(function (prev) { return prev.filter(function (toast) { return toast.id !== id; }); });
    };
    return (React.createElement(ToastContext.Provider, { value: { addToast: addToast } },
        children,
        React.createElement("div", { className: "fixed flex flex-col space-y-2 z-50 right-4 bottom-4" }, toasts.map(function (toast) { return (React.createElement(Toast, { key: toast.id, message: toast.message, type: toast.type, duration: toast.duration, onClose: function () { return removeToast(toast.id); } })); }))));
};
export var useToast = function () {
    var context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
//# sourceMappingURL=ToastProvider.js.map