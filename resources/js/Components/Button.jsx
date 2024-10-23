import { ArrowsClockwise } from '@phosphor-icons/react';

export default function Button({ children, className, variant = 'zinc', disabled = false, icon = false, ...props }) {
    const variantClasses = {
        blue: 'bg-blue-500/30 hover:bg-blue-500/60',
        orange: 'bg-orange-500/30 hover:bg-orange-500/60',
        black: 'bg-black/70 hover:bg-black/90',
        pink: 'bg-pink-500/30 hover:bg-pink-500/60',
        rose: 'bg-rose-500/30 hover:bg-rose-500/60',
        purple: 'bg-purple-500/30 hover:bg-purple-500/60',
        yellow: 'bg-yellow-500/30 hover:bg-yellow-500/60',
        red: 'bg-red-500/30 hover:bg-red-500/60',
        green: 'bg-green-500/30 hover:bg-green-500/60',
        zinc: 'bg-zinc-500/30 hover:bg-zinc-500/60',
        gradient: 'before:w-16 before:h-5 before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-gradient-to-br before:from-sky-500 before:from-50% before:to-rose-500 before:to-50% before:rounded-full before:absolute before:-z-10 before:blur-[10px] hover:before:bg-gradient-to-br hover:before:from-blue-400 hover:before:from-50% hover:before:to-pink-400 hover:before:to-50% before:transition-all before:duration-200',
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