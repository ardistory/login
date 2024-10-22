export default function BoxGlass({ children, className }) {
    return (
        <div className={`${className} z-10 bg-zinc-50/[0.1] p-5 rounded-2xl backdrop-blur-[5px] border-t border-l border-r border-b border-t-white/15 border-l-white/15 border-r-white/5 border-b-white/5 text-black`}>
            {children}
        </div>
    );
}