import { XMarkIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

 interface Props {
        value: string;
        onChange: (val: string) => void;
        placeholder: string;
    }

export default function Search ({ value, onChange, placeholder }: Props) {
  
       
      return ( 
        <div className="flex justify-end mb-4">      
          <div className="relative w-80 max-w-sm">
            <label htmlFor="search" className="sr-only">検索</label>
            <input
              type="text"
              placeholder={placeholder || "検索..."}
              className="peer block w-full rounded-lg outline-none border border-gray-200 focus:ring-2 focus:ring-sky-300 py-[9px] pl-10 text-sm placeholder:text-gray-400 transition-colors "
              value={value}
              onChange={(e) => onChange(e.target.value)} />
              <MagnifyingGlassCircleIcon className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400 peer-focus:text-sky-500" />
              {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
          </div>
        </div>

    )
}