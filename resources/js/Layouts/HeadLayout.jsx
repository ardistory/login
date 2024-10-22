import { Head } from '@inertiajs/react';
import Favicon from '@/Assets/img/wifi-high.png';

export default function HeadLayout({ title, children }) {
    return (
        <Head title={title}>
            <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
            {children}
        </Head>
    );
};