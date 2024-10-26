import Button from '@/Components/Button';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import FilteredStores from './partials/FilteredStores';
import { X } from '@phosphor-icons/react';

export default function Dashboard({ auth, tokoLbk }) {
    const [search, setSearch] = useState('');

    const filteredTokoLbk = tokoLbk.filter(toko => {
        return toko.kode_toko.toLowerCase().includes(search.toLowerCase()) || toko.nama_toko.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            <Head title="Dashboard" />

            <AuthenticatedLayout user={auth.user}>
                <div className={'w-full px-3 py-3 h-[10%] flex gap-2'}>
                    <TextInput placeholder={'Search'} value={search} id={'search'} className={' placeholder-white/50'} onChange={(e) => setSearch(e.target.value)} />
                    {search.trim() ? (<Button icon={<X size={15} />} variant={'red'} className={'text-white'} onClick={() => setSearch('')} />) : ''}
                </div>
                <FilteredStores filteredTokoLbk={filteredTokoLbk} />
            </AuthenticatedLayout>
        </>
    );
}
