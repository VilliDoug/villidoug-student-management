interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    label: string;
    value: string;
    options: string[] | SelectOption[];
    onChange: (value: string) => void;
    required?: boolean;
}

export default function FormSelect({ label, value, options, onChange, required}: SelectProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">{label}</label>
            <select
             required={required}
             value={value}
             onChange={(e) => onChange(e.target.value)}
              className="border border-gray-300 p-2 rounded bg-white outline-none focus:ring-2 focus:ring-sky-200"
              >
                {options.map((opt) => {
                    const val = typeof opt === "string" ? opt : opt.value;
                    const lab = typeof opt === "string" ? opt : opt.label;
                    return <option key={val} value={val}>{lab}</option>
                })}
            </select>
        </div>
    )
}