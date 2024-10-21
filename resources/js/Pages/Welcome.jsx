import BoxGlass from '@/Components/BoxGlass';
import Button from '@/Components/Button';
import GuestLayout from '@/Layouts/GuestLayout';
import HeadLayout from '@/Layouts/HeadLayout';
import { Link } from '@inertiajs/react';
import { Code, CodepenLogo, SignIn, WifiHigh } from '@phosphor-icons/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <HeadLayout title={'Welcome'} />

            <GuestLayout className={'mx-10'}>
                <div className={'space-y-5'}>
                    <div className={'text-3xl md:text-6xl font-bold italic tracking-tight flex items-center justify-center gap-2 text-white'}>
                        <WifiHigh className={'animate-pulse'} />
                        Network Lebak
                    </div>
                    <BoxGlass className={'px-1 py-1 flex justify-between gap-1'}>
                        <Link href={route('login')}>
                            <Button variant={'green'} className={'text-white'} icon={<SignIn />}>
                                Login
                            </Button>
                        </Link>
                        <div className={'flex gap-1'}>
                            <BoxGlass className={'px-2 py-1 text-sm font-semibold bg-red-500/30 hover:bg-red-500/60 cursor-pointer text-white flex items-center gap-1'}>
                                <CodepenLogo />
                                Laravel: {laravelVersion}
                            </BoxGlass>
                            <BoxGlass className={'px-2 py-1 text-sm font-semibold bg-blue-500/30 hover:bg-blue-500/60 cursor-pointer text-white flex items-center gap-1'}>
                                <Code />
                                PHP: {phpVersion}
                            </BoxGlass>
                        </div>
                    </BoxGlass>
                </div>
            </GuestLayout >
        </>
    );
}
