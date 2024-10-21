import { WifiHigh } from '@phosphor-icons/react';

export default function ApplicationLogo() {
    return (
        <div className={'text-3xl md:text-6xl font-bold italic tracking-tight flex items-center justify-center gap-2 text-white mb-4'}>
            <WifiHigh className={'animate-pulse'} />
            Network Lebak
        </div>
    );
}
