    "use client";

    import { useTheme } from 'next-themes';

    export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
        
    return (
    <label
    htmlFor="AcceptConditions"
    className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-green-500 dark:bg-gray-600 dark:has-checked:bg-green-600"
    >
    <input type="checkbox" id="AcceptConditions"  className="peer sr-only" onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} checked={theme==='dark'?true:false}/>

    <span
        className="absolute inset-y-0 start-0 m-1 grid size-6 place-content-center rounded-full bg-white text-gray-700 transition-[inset-inline-start] peer-checked:start-6 peer-checked:*:first:hidden *:last:hidden peer-checked:*:last:block dark:bg-gray-900 dark:text-gray-200"
    >
        {/* أيقونة الشمس */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v1.5m0 12v1.5m7.5-7.5h-1.5m-12 0H4.5m15.364-5.364l-1.06 1.06m-12.728 0L5.136 6.136m12.728 12.728l-1.06-1.06m-12.728 0l1.06-1.06M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
        </svg>

        {/* أيقونة القمر */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
    </span>
    </label>

    );
    }
