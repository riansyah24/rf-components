import React, { ReactNode } from 'react';
interface ToastOptions {
    type?: 'success' | 'danger' | 'warning' | 'info';
    duration?: number;
}
interface ToastContextType {
    addToast: (message: string, options?: ToastOptions) => void;
}
interface ToastProviderProps {
    children: ReactNode;
    position?: 'bottom-left' | 'bottom-center' | 'bottom-right';
}
export declare const ToastProvider: React.FC<ToastProviderProps>;
export declare const useToast: () => ToastContextType;
export {};
