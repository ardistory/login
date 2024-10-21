import { Head } from '@inertiajs/react';

export default function HeadLayout({ title, children }) {
    return (
        <Head title={title}>
            <link rel="shortcut icon" href={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0xNDAsMjA0YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwyMDRaTTIzNy4wOCw4N0ExNzIsMTcyLDAsMCwwLDE4LjkyLDg3LDgsOCwwLDAsMCwyOS4wOCw5OS4zN2ExNTYsMTU2LDAsMCwxLDE5Ny44NCwwQTgsOCwwLDAsMCwyMzcuMDgsODdaTTIwNSwxMjIuNzdhMTI0LDEyNCwwLDAsMC0xNTMuOTQsMEE4LDgsMCwwLDAsNjEsMTM1LjMxYTEwOCwxMDgsMCwwLDEsMTM0LjA2LDAsOCw4LDAsMCwwLDExLjI0LTEuM0E4LDgsMCwwLDAsMjA1LDEyMi43N1ptLTMyLjI2LDM1Ljc2YTc2LjA1LDc2LjA1LDAsMCwwLTg5LjQyLDAsOCw4LDAsMCwwLDkuNDIsMTIuOTQsNjAsNjAsMCwwLDEsNzAuNTgsMCw4LDgsMCwxLDAsOS40Mi0xMi45NFoiPjwvcGF0aD48L3N2Zz4=`} type="image/x-icon" />
            {children}
        </Head>
    );
};