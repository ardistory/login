import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'bg-zinc-50/[0.1] px-3 py-2 backdrop-blur-[2px] border-t border-l border-r border-b border-t-white/15 border-l-white/15 border-r-white/5 border-b-white/5 border-none focus:border-none ring-0 focus:ring-0 rounded-xl shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
