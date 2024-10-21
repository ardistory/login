import { ArrowsClockwise } from '@phosphor-icons/react';

export default function Button({ children, className, variant = 'zinc', disabled = false, icon = false, ...props }) {
    const variantClasses = {
        blue: 'bg-blue-500/30 hover:bg-blue-500/60',
        black: 'bg-black/70 hover:bg-black/90',
        pink: 'bg-pink-500/30 hover:bg-pink-500/60',
        rose: 'bg-rose-500/30 hover:bg-rose-500/60',
        purple: 'bg-purple-500/30 hover:bg-purple-500/60',
        yellow: 'bg-yellow-500/30 hover:bg-yellow-500/60',
        red: 'bg-red-500/30 hover:bg-red-500/60',
        green: 'bg-green-500/30 hover:bg-green-500/60',
        zinc: 'bg-zinc-500/30 hover:bg-zinc-500/60',
    };

    return (
        <>
            <button {...props} className={`${className} ${variantClasses[variant]} transition-all duration-200 px-2 py-1 rounded-2xl backdrop-blur-[2px] border border-white/5 text-sm font-semibold flex items-center gap-1`}>
                {disabled ? (<ArrowsClockwise className={'animate-spin'} />) : icon}
                {children}
            </button>
        </>
    );
}