import Background from '@/Assets/img/Paint_Drip_Wallpaper_Final2.png';
import BoxGlass from '@/Components/BoxGlass';
import ProfileImage from '@/Assets/img/Griffith-red-blue.jpg';
import { Barcode, DotsThreeVertical, GearSix, Power, Speedometer } from '@phosphor-icons/react';
import { Link, router, usePage } from '@inertiajs/react';
import Button from '@/Components/Button';
import { Button as ButtonAria, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';
import toast from 'react-hot-toast';


export default function AuthenticatedLayout({ children, user }) {
    const { url } = usePage();

    function dynamicActive(routeName) {
        return route(routeName).endsWith(url) ? 'overflow-hidden before:w-36 before:h-36 before:bg-gradient-to-br before:from-blue-500/50 before:from-50% before:to-pink-500/50 before:to-50% before:absolute before:rounded-full before:blur-[30px] before:-z-10' : '';
    }

    return (
        <div className={'mx-[3%] h-dvh flex justify-center items-center'}>
            <img src={Background} className={'absolute w-full min-h-screen max-h-screen'} />

            <BoxGlass padding={'p-0'} className={'w-full h-[90%] rounded-3xl'}>
                <div className={'w-full h-full flex'}>
                    <div className={'w-[25%] h-full border-r border-white/20'}>
                        <div className={'flex items-center justify-between p-2 border-b border-white/20'}>
                            <div className={'flex items-center gap-2'}>
                                <div className={'before:w-10 before:h-10 before:bg-gradient-to-br before:from-sky-500 before:from-50% before:to-rose-500 before:to-50% before:absolute before:rounded-full before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:blur-md before:-z-10 before:animate-pulse relative'}>
                                    <img src={ProfileImage} className={'w-10 h-10 rounded-full border border-white/20'} />
                                </div>
                                <div className={'flex flex-col'}>
                                    <span className={'text-white font-semibold text-sm'}>
                                        {user.name}
                                    </span>
                                    <span className={'text-gray-400 font-semibold text-xs'}>
                                        {user.nik}
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
                                        <MenuItem className={'flex items-center gap-1 cursor-pointer hover:bg-red-500/50 px-2 py-1 rounded-lg'} onAction={() => router.visit(route('logout'), { method: 'post', onFinish: toast.success('Logout berhasil') })}>
                                            <Power size={20} />
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </Popover>
                            </MenuTrigger>
                        </div>
                        <Link href={route('dashboard')}>
                            <Button className={`text-white w-full px-4 py-3 rounded-none ${dynamicActive('dashboard')}`} icon={<Speedometer size={20} />}>
                                Dashboard
                            </Button>
                        </Link>
                        <Link href={route('mac-address')}>
                            <Button className={`text-white w-full px-4 py-3 rounded-none ${dynamicActive('mac-address')}`} icon={<Barcode size={20} />}>
                                Mac-Address
                            </Button>
                        </Link>
                    </div>
                    <div className={'w-[75%] h-full overflow-y-auto overflow-x-hidden'}>
                        {children}
                    </div>
                </div>
            </BoxGlass>
        </div >
    );
}
