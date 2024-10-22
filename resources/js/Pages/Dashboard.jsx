import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Power } from '@phosphor-icons/react';

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />

            <AuthenticatedLayout>
                <div>
                    <ApplicationLogo />
                </div>
                <div className={'flex justify-between'}>
                    Hello {auth.user.name}
                    <Link method={'post'} href={route('logout')}>
                        <Button variant={'red'} className={'text-white'} icon={<Power />}>
                            Logout
                        </Button>
                    </Link>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
