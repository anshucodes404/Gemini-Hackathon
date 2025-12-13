import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        {...props}
        required
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300
        focus:outline-none focus:border-orange-400
        focus:ring-2 focus:ring-orange-200 transition"
      />
    </div>
  );
};

export default Input;
