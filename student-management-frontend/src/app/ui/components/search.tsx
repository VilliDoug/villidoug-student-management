'use client'

import { XMarkIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { useDebouncedCallback } from 'use-debounce';

export default function Search ({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';            
        }
        const params = new URLSearchParams(searchParams);
        params.delete('query');
        replace(`${pathname}?${params.toString()}`);
    };

    const hasQuery = !!searchParams.get('query');

    return (
        <div className="relative w-80 max-w-sm">
            <label htmlFor="search" className="sr-only">検索</label>
            <input id="search"
            type="text"
            ref={inputRef}
            className="peer block w-full rounded-lg outline-none border border-gray-200 focus:ring-2 focus:ring-sky-300 py-[9px] pl-10 text-sm placeholder:text-gray-400 transition-colors " 
            placeholder={placeholder}
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get('query')?.toString()} />
            {/* Search icon */}
                <MagnifyingGlassCircleIcon className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400 peer-focus:text-sky-500" />
                {/* Clear button */}
                <button onClick={handleClear} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0 5 hover:bg-sky-100 text-gray-400 hover:text-sky-600 transition-colors">
                <XMarkIcon className="h-5 w-5" />
                </button>
        </div>
        
        
    )
}