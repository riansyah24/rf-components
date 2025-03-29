import React, { useState, createContext, useContext, ReactNode } from 'react';
import Toast from './Toast';

interface ToastOptions {
  type?: 'success' | 'danger' | 'warning' | 'info';
  duration?: number;
}

interface ToastItem extends ToastOptions {
  id: number;
  message: string;
}

interface ToastContextType {
  addToast: (message: string, options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
  position?: 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ 
  children, 
  position = "bottom-right"
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const positionClasses = {
    'bottom-left': 'left-4 bottom-4 items-start',
    'bottom-center': 'left-1/2 bottom-4 transform -translate-x-1/2 items-center',
    'bottom-right': 'right-4 bottom-4 items-end',
  };

  const addToast = (message: string, options: ToastOptions = {}) => {
    const id = Date.now();
    const toast = { id, message, ...options };
    setToasts((prev) => [...prev, toast]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className={`fixed flex flex-col space-y-2 z-50 right-4 bottom-4`}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};