import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import { IdentificationCard } from '@phosphor-icons/react';

export default function Register({ availableUsers }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    function handleChange(e) {
        const selectedNik = e.target.value;
        const selectedUser = availableUsers.find(user => user.nik == selectedNik);

        setData({
            ...data,
            nik: selectedUser.nik,
            name: selectedUser.name
        });
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />
            <GuestLayout>
                <ApplicationLogo />

                <form onSubmit={submit}>
                    <div>
                        <InputLabel value="Nik" />

                        <select onChange={handleChange} className={'w-full bg-zinc-50/[0.1] px-3 py-2 backdrop-blur-[2px] border-t border-l border-r border-b border-t-white/15 border-l-white/15 border-r-white/5 border-b-white/5 border-none focus:border-none ring-0 focus:ring-0 rounded-xl shadow-sm'}>
                            <option value={''} id={''} className={'bg-zinc-50/[0.1] px-3 py-2 backdrop-blur-[2px] border-t border-l border-r border-b border-t-white/15 border-l-white/15 border-r-white/5 border-b-white/5 border-none focus:border-none ring-0 focus:ring-0 rounded-xl shadow-sm'}>
                                Nik
                            </option>
                            {availableUsers.map(user => {
                                return (
                                    <option key={user.nik} value={user.nik} className={'bg-zinc-50/[0.1] px-3 py-2 backdrop-blur-[2px] border-t border-l border-r border-b border-t-white/15 border-l-white/15 border-r-white/5 border-b-white/5 border-none focus:border-none ring-0 focus:ring-0 rounded-xl shadow-sm'}>
                                        {user.name} - {user.nik}
                                    </option>
                                );
                            })}
                        </select>

                        <InputError message={errors.nik} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-white/20 hover:text-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <Button className={'ms-4 text-white'} icon={<IdentificationCard />} disabled={processing}>
                            Register
                        </Button>
                    </div>
                </form>
            </GuestLayout>
        </>
    );
}
