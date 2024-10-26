import { Button as ButtonAria, Dialog, DialogTrigger, Modal } from 'react-aria-components';
import { Desktop, GlobeSimple, Scan, Storefront, TelevisionSimple, X } from '@phosphor-icons/react';
import BoxGlass from '@/Components/BoxGlass';
import Button from '@/Components/Button';
import { useEffect } from 'react';

export default function FilteredStores({ filteredTokoLbk }) {
    useEffect(() => {


        return () => {
        };
    }, []);

    return (
        <div className={'w-full h-[90%] space-y-3 px-3 pb-2 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-white/5'}>
            {filteredTokoLbk.map(toko => {
                const ipSections = [
                    {
                        label: 'Gateway', icon: <GlobeSimple size={20} />, ip: toko.ip_gateway
                    },
                    {
                        label: 'Station 1', icon: <Desktop size={20} />, ip: toko.ip_induk,

                    },
                    {
                        label: 'Station 2', icon: <Desktop size={20} />, ip: toko.ip_anak,
                    },
                    {
                        label: 'STB', icon: <TelevisionSimple size={20} />, ip: toko.ip_stb,
                    },
                    {
                        label: 'WDCP', icon: <Scan size={20} />, ip: toko.ip_wdcp,
                    }
                ];

                return (
                    <DialogTrigger key={toko.kode_toko}>
                        <ButtonAria className={'flex w-full'}>
                            <BoxGlass key={toko.kode_toko} className={'w-full px-2 py-1 text-white flex items-center justify-between'}>
                                <div className={'flex items-center gap-2'}>
                                    <Storefront size={32} />
                                    <div className={'flex flex-col items-start'}>
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
                                        <div className={'flex flex-col items-start'}>
                                            <p className={'font-bold text-lg'}>
                                                {toko.area}
                                            </p>
                                            <p className={'font-semibold text-xs text-white/70'}>
                                                {toko.nik}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </BoxGlass>
                        </ButtonAria>
                        <Modal>
                            <Dialog>
                                {({ close }) => (
                                    <div className={'absolute w-full h-screen top-0 left-0 flex items-center justify-center backdrop-blur-[2px] z-10'}>
                                        <BoxGlass className={'px-5 py-4 rounded text-white space-y-2'}>
                                            <div className={'flex justify-between items-center gap-2'}>
                                                <div className={'font-semibold'}>
                                                    {toko.kode_toko} - {toko.nama_toko}
                                                </div>
                                                <X size={20} className={'cursor-pointer hover:text-red-400'} onClick={close} />
                                            </div>
                                            {ipSections.map(ipSection => {
                                                return (
                                                    <div key={ipSection.ip}>
                                                        <div className={'font-semibold text-sm flex items-center gap-1'}>
                                                            {ipSection.icon}
                                                            {ipSection.label}
                                                        </div>
                                                        <BoxGlass className={'px-2 py-1 text-white flex items-center justify-between gap-2'}>
                                                            <div className={'font-medium text-sm'}>
                                                                {ipSection.ip}
                                                            </div>
                                                            <div className={'flex items-center gap-2'}>
                                                                <Button>
                                                                    Copy IP
                                                                </Button>
                                                                <Button>
                                                                    Ping
                                                                </Button>
                                                            </div>
                                                        </BoxGlass >
                                                    </div>
                                                );
                                            })}
                                        </BoxGlass>
                                    </div>
                                )}
                            </Dialog>
                        </Modal>
                    </DialogTrigger>
                );
            })}
        </div >
    );
}