import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Kukuma Test" />
            <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4">Kukuma Works!</h1>
                    <p className="text-xl">If you can see this, React and Tailwind are working.</p>
                </div>
            </div>
        </>
    );
}