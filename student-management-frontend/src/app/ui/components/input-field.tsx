type Props = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: "text" | "number" | "email" | "date";
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  helperText?: string;
  className?: string;
};

export default function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  min,
  max,
  helperText,
  className = "",  
}: Props) {
    return (
        <div className={`space-y-2 ${className}`}>
            <label className="text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <input 
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            min={min}
            max={max}
            className="w-full p-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-200 outline-none transition-shadow" />
            {helperText && (<p className="text-[12px] text-gray-400">
                {helperText}
            </p>
        )}
        </div>
    )
}
