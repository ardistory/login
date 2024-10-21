import Background from '@/Assets/img/Paint_Drip_Wallpaper_Final2.png';
import BoxGlass from '@/Components/BoxGlass';

export default function GuestLayout({ children }) {
    return (
        <div className={'mx-10 md:mx-0 min-h-screen flex flex-col justify-center items-center'}>
            <img src={Background} className={'absolute w-full min-h-screen max-h-screen'} />

            <BoxGlass>
                {children}
            </BoxGlass>
        </div >
    );
}
