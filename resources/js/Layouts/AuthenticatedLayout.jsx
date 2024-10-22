import Background from '@/Assets/img/Paint_Drip_Wallpaper_Final2.png';
import BoxGlass from '@/Components/BoxGlass';
import ProfileImage from '@/Assets/img/Griffith-red-blue.jpg';
import { Barcode, DotsThreeVertical, GearSix, Power, Speedometer } from '@phosphor-icons/react';
import { Link, router, usePage } from '@inertiajs/react';
import Button from '@/Components/Button';
import { Button as ButtonAria, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';

export default function AuthenticatedLayout({ children, user }) {
    const { url } = usePage();

    return (
        <div className={'mx-[3%] h-dvh flex justify-center items-center'}>
            <img src={Background} className={'absolute w-full min-h-screen max-h-screen'} />

            <BoxGlass padding={'p-0'} className={'w-full h-[90%]'}>
                <div className={'w-full h-full flex'}>
                    <div className={'w-[25%] h-full border-r border-white/20'}>
                        <div className={'flex items-center justify-between p-2 border-b border-white/20'}>
                            <div className={'flex items-center gap-2'}>
                                <img src={ProfileImage} className={'w-10 h-10 rounded-full'} />
                                <div className={'flex flex-col'}>
                                    <span className={'text-white font-semibold text-sm'}>
                                        {user.name}
                                    </span>
                                    <span className={'text-gray-400 font-semibold text-xs'}>
                                        {user.email}
                                    </span>
                                </div>
                            </div>
                            <MenuTrigger>
                                <ButtonAria aria-label="Menu">
                                    <DotsThreeVertical size={25} className={'text-white'} />
                                </ButtonAria>
                                <Popover>
                                    <Menu className={'text-white bg-zinc-50/[0.1] px-2 py-2 backdrop-blur-[2px] border-t border-l border-r border-b border-t-white/15 border-l-white/15 border-r-white/5 border-b-white/5 border-none focus:border-none ring-0 focus:ring-0 rounded-xl shadow-sm'}>
                                        <MenuItem className={'flex items-center gap-1 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-lg'} onAction={() => router.visit(route('profile.edit'))}>
                                            <GearSix size={20} />
                                            Setting
                                        </MenuItem>
                                        <MenuItem className={'flex items-center gap-1 cursor-pointer hover:bg-red-500/50 px-2 py-1 rounded-lg'} onAction={() => router.visit(route('logout'), { method: 'post' })}>
                                            <Power size={20} />
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </Popover>
                            </MenuTrigger>
                        </div>
                        <Link href={route('dashboard')}>
                            <Button variant={(url === '/dashboard' ? 'blue' : 'zinc')} className={'text-white w-full px-4 py-3 rounded-none'} icon={<Speedometer size={20} />}>
                                Dashboard
                            </Button>
                        </Link>
                        <Link href={route('mac-address')}>
                            <Button variant={(url === '/mac-address' ? 'blue' : 'zinc')} className={'text-white w-full px-4 py-3 rounded-none'} icon={<Barcode size={20} />}>
                                Mac-Address
                            </Button>
                        </Link>
                    </div>
                    <div className={'w-[75%] h-full overflow-auto'}>
                        {children}
                    </div>
                </div>
            </BoxGlass>
        </div >
    );
}
