import BoxGlass from '@/Components/BoxGlass';
import Button from '@/Components/Button';
import GuestLayout from '@/Layouts/GuestLayout';
import HeadLayout from '@/Layouts/HeadLayout';
import { Link } from '@inertiajs/react';
import { Code, CodepenLogo, SignIn, Speedometer, WifiHigh } from '@phosphor-icons/react';

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
                        {auth.user ? (
                            <Link href={route('dashboard')}>
                                <Button variant={'orange'} className={'text-white'} icon={<Speedometer />}>
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <Link href={route('login')}>
                                <Button variant={'green'} className={'text-white'} icon={<SignIn />}>
                                    Login
                                </Button>
                            </Link>
                        )}
                        <div className={'flex gap-1'}>
                            <Button variant={'red'} className={'text-white'} icon={<CodepenLogo />}>
                                Laravel: {laravelVersion}
                            </Button>
                            <Button variant={'blue'} className={'text-white'} icon={<Code />}>
                                PHP: {phpVersion}
                            </Button>
                        </div>
                    </BoxGlass>
                </div>
            </GuestLayout >
        </>
    );
}
