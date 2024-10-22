import ApplicationLogo from '@/Components/ApplicationLogo';
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
                    <ApplicationLogo />
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
