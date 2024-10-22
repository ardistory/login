import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@/Components/Button';
import { SignIn } from '@phosphor-icons/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import toast from 'react-hot-toast';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />
            <GuestLayout>

                <ApplicationLogo />

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="nik" value="Nik" />

                        <TextInput
                            id="nik"
                            type="text"
                            name="nik"
                            value={data.nik}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            maxLength={10}
                            onChange={(e) => setData('nik', e.target.value)}
                        />

                        <InputError message={errors.nik} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-white">Remember me</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-white/20 hover:text-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <Button disabled={processing} className={'text-white ms-4'} icon={<SignIn />}>
                            Log in
                        </Button>
                    </div>
                </form>
            </GuestLayout>
        </>
    );
}
