import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@/Components/Button';
import { Power } from '@phosphor-icons/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            <Head title="Email Verification" />

            <GuestLayout className={'mx-10'}>

                <div className="mb-4 text-sm text-white">
                    Terima kasih telah mendaftar! Sebelum memulai, dapatkah Anda memverifikasi alamat email Anda dengan mengeklik tautan yang baru saja kami kirimkan kepada Anda? Jika Anda tidak menerima email tersebut, kami akan dengan senang hati mengirimkan email lain kepada Anda.
                </div>

                {status === 'verification-link-sent' && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        Tautan verifikasi baru telah dikirim ke alamat email yang Anda berikan saat pendaftaran.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mt-4 flex items-center justify-between">
                        <Button disabled={processing}>Kirim Ulang Email Verifikasi</Button>

                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                        >
                            <Button variant={'red'} className={'text-white'} icon={<Power />}>
                                Logout
                            </Button>
                        </Link>

                    </div>
                </form>
            </GuestLayout>
        </>
    );
}
