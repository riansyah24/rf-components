import React from 'react';
type ToastType = 'success' | 'danger' | 'warning' | 'info';
interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
}
declare const Toast: React.FC<ToastProps>;
export default Toast;
