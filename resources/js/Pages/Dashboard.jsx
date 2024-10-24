import BoxGlass from '@/Components/BoxGlass';
import Button from '@/Components/Button';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { CellSignalHigh, CopySimple, Desktop, Eye, GlobeSimple, Scan, Storefront, TelevisionSimple, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { Button as ButtonAria, Dialog, DialogTrigger, Modal } from 'react-aria-components';

export default function Dashboard({ auth, tokoLbk }) {
    const [search, setSearch] = useState('');

    const filteredTokoLbk = tokoLbk.filter(toko => {
        return toko.kode_toko.toLowerCase().includes(search.toLowerCase()) || toko.nama_toko.toLowerCase().includes(search.toLowerCase());
    });



    return (
        <>
            <Head title="Dashboard" />

            <AuthenticatedLayout user={auth.user}>
                <div className={'px-5 py-4'}>
                    <InputLabel htmlFor="search" value="Search" />
                    <TextInput value={search} id={'search'} className={'mt-1'} onChange={(e) => setSearch(e.target.value)} />

                    {filteredTokoLbk.map(toko => {
                        return (
                            <BoxGlass key={toko.kode_toko} className={'mt-3 px-2 py-1 text-white flex items-center justify-between'}>
                                <div className={'flex items-center gap-2'}>
                                    <Storefront size={32} />
                                    <div>
                                        <p className={'font-bold text-lg'}>
                                            {toko.kode_toko}
                                        </p>
                                        <p className={'font-semibold text-xs text-white/70'}>
                                            {toko.nama_toko}
                                        </p>
                                    </div>
                                </div>
                                <div className={'w-[60%] flex justify-between items-center'}>
                                    <div className={'flex items-center gap-2'}>
                                        <img src={`storage/img/photo.jpg`} className={'w-10 h-10 rounded-full'} />
                                        <div>
                                            <p className={'font-bold text-lg'}>
                                                {toko.area}
                                            </p>
                                            <p className={'font-semibold text-xs text-white/70'}>
                                                {toko.nik}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={'flex gap-2'}>
                                        <DialogTrigger>
                                            <ButtonAria className={'flex items-center gap-1 text-xs'}>
                                                <Eye size={18} />
                                                Show
                                            </ButtonAria>
                                            <Modal>
                                                <Dialog>
                                                    {({ close }) => (
                                                        <div className={'absolute w-full h-screen top-0 left-0 flex items-center justify-center'}>
                                                            <BoxGlass className={'px-2 py-2 rounded text-white space-y-2'}>
                                                                <div className={'flex justify-between items-center gap-2'}>
                                                                    <div>
                                                                        {toko.kode_toko} - {toko.nama_toko}
                                                                    </div>
                                                                    <X size={20} className={'cursor-pointer'} onClick={close} />
                                                                </div>
                                                                <div className={'font-semibold text-sm flex items-center gap-1'}>
                                                                    <GlobeSimple size={20} />
                                                                    Gateway
                                                                </div>
                                                                <BoxGlass className={'px-2 py-1 text-white flex items-center justify-between gap-2'}>
                                                                    <div className={'font-medium text-sm'}>
                                                                        {toko.ip_gateway}
                                                                    </div>
                                                                    <div className={'flex items-center gap-2'}>
                                                                        <Button>
                                                                            <CopySimple size={15} />
                                                                        </Button>
                                                                        <Button>
                                                                            <CellSignalHigh size={15} />
                                                                        </Button>
                                                                    </div>
                                                                </BoxGlass>
                                                                <div className={'font-semibold text-sm flex items-center gap-1'}>
                                                                    <Desktop size={20} />
                                                                    Station 1
                                                                </div>
                                                                <BoxGlass className={'px-2 py-1 text-white flex items-center justify-between gap-2'}>
                                                                    <div className={'font-medium text-sm'}>
                                                                        {toko.ip_induk}
                                                                    </div>
                                                                    <div className={'flex items-center gap-2'}>
                                                                        <Button>
                                                                            <CopySimple size={15} />
                                                                        </Button>
                                                                        <Button>
                                                                            <CellSignalHigh size={15} />
                                                                        </Button>
                                                                    </div>
                                                                </BoxGlass>
                                                                <div className={'font-semibold text-sm flex items-center gap-1'}>
                                                                    <Desktop size={20} />
                                                                    Station 2
                                                                </div>
                                                                <BoxGlass className={'px-2 py-1 text-white flex items-center justify-between gap-2'}>
                                                                    <div className={'font-medium text-sm'}>
                                                                        {toko.ip_anak}
                                                                    </div>
                                                                    <div className={'flex items-center gap-2'}>
                                                                        <Button>
                                                                            <CopySimple size={15} />
                                                                        </Button>
                                                                        <Button>
                                                                            <CellSignalHigh size={15} />
                                                                        </Button>
                                                                    </div>
                                                                </BoxGlass>
                                                                <div className={'font-semibold text-sm flex items-center gap-1'}>
                                                                    <TelevisionSimple size={20} />
                                                                    STB
                                                                </div>
                                                                <BoxGlass className={'px-2 py-1 text-white flex items-center justify-between gap-2'}>
                                                                    <div className={'font-medium text-sm'}>
                                                                        {toko.ip_stb}
                                                                    </div>
                                                                    <div className={'flex items-center gap-2'}>
                                                                        <Button>
                                                                            <CopySimple size={15} />
                                                                        </Button>
                                                                        <Button>
                                                                            <CellSignalHigh size={15} />
                                                                        </Button>
                                                                    </div>
                                                                </BoxGlass>
                                                                <div className={'font-semibold text-sm flex items-center gap-1'}>
                                                                    <Scan size={20} />
                                                                    WDCP
                                                                </div>
                                                                <BoxGlass className={'px-2 py-1 text-white flex items-center justify-between gap-2'}>
                                                                    <div className={'font-medium text-sm'}>
                                                                        {toko.ip_wdcp}
                                                                    </div>
                                                                    <div className={'flex items-center gap-2'}>
                                                                        <Button>
                                                                            <CopySimple size={15} />
                                                                        </Button>
                                                                        <Button>
                                                                            <CellSignalHigh size={15} />
                                                                        </Button>
                                                                    </div>
                                                                </BoxGlass>
                                                            </BoxGlass>
                                                        </div>
                                                    )}
                                                </Dialog>
                                            </Modal>
                                        </DialogTrigger>
                                    </div>
                                </div>
                            </BoxGlass>
                        );
                    })}
                </div>
            </AuthenticatedLayout>
        </>
    );
}
