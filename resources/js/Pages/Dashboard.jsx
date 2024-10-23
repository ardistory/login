import BoxGlass from '@/Components/BoxGlass';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Storefront } from '@phosphor-icons/react';

export default function Dashboard({ auth, tokoLbk }) {
    return (
        <>
            <Head title="Dashboard" />

            <AuthenticatedLayout user={auth.user}>
                <div className={'px-5 py-4'}>
                    <InputLabel htmlFor="search" value="Search" />
                    <TextInput id={'search'} className={'mt-1'} />

                    <BoxGlass className={'mt-3 px-2 py-1 text-white flex items-center gap-5'}>
                        <div className={'flex items-center gap-2'}>
                            <Storefront size={32} />
                            <div>
                                <p className={'font-bold text-lg'}>
                                    TKBV
                                </p>
                                <p className={'font-semibold text-xs text-white/70'}>
                                    DC LEBAK
                                </p>
                            </div>
                        </div>
                        <div className={'flex items-center gap-2'}>
                            <img src={`storage/img/photo.jpg`} className={'w-10 h-10 rounded-full'} />
                            <div>
                                <p className={'font-bold text-lg'}>
                                    IRWANA
                                </p>
                                <p className={'font-semibold text-xs text-white/70'}>
                                    2015171331
                                </p>
                            </div>
                        </div>
                    </BoxGlass>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
