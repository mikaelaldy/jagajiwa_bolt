import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  label,
  placeholder = '',
  error,
  required = false,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={className}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full rounded-lg border px-4 py-2 transition duration-200 focus:outline-none focus:ring-2 ${
          error
            ? 'border-error-300 focus:border-error-500 focus:ring-error-200'
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      />
      {error && (
        <p className="mt-1 text-sm text-error-500">{error}</p>
      )}
    </div>
  );
};

interface TextAreaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  value,
  onChange,
  label,
  placeholder = '',
  error,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
}) => {
  return (
    <div className={className}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`w-full rounded-lg border px-4 py-2 transition duration-200 focus:outline-none focus:ring-2 ${
          error
            ? 'border-error-300 focus:border-error-500 focus:ring-error-200'
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      />
      {error && (
        <p className="mt-1 text-sm text-error-500">{error}</p>
      )}
    </div>
  );
};

interface RadioProps {
  id: string;
  name: string;
  value: string | number;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  disabled?: boolean;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={id}
        name={name}
        type="radio"
        value={value.toString()}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
      />
      <label 
        htmlFor={id}
        className={`ml-2 block text-sm font-medium ${
          disabled ? 'text-gray-400' : 'text-gray-700'
        }`}
      >
        {label}
      </label>
    </div>
  );
};