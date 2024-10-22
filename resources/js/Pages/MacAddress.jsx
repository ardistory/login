import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function MacAddress({ auth }) {
    return (
        <>
            <Head title="MacAddress" />

            <AuthenticatedLayout user={auth.user}>
                MacAddress
            </AuthenticatedLayout>
        </>
    );
}
