import React, { useState, useEffect } from 'react';

type ToastType = 'success' | 'danger' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const bgColor = {
    success: 'bg-green-100 border-green-400 text-green-700',
    danger: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700',
  }[type];

  const animationClass = isExiting 
    ? 'animate-toast-out' 
    : 'animate-toast-in';

  return (
    <div className={`fixed bottom-4 right-4 transform border-l-4 ${bgColor} px-4 py-3 rounded shadow-lg max-w-sm z-50 ${animationClass}`}>
      <div className="flex items-center">
        <div className="flex-1">
          <p className="text-sm">{message}</p>
        </div>
        <button 
          onClick={() => {
            setIsExiting(true);
            setTimeout(() => {
              setVisible(false);
              onClose?.();
            }, 300);
          }}
          className="ml-2 text-gray-500 hover:text-gray-700"
          aria-label="Close toast"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;