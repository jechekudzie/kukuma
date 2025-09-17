import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Kukuma - Engineering Intelligence. Delivering Excellence." />

            <div className="min-h-screen bg-slate-900 text-white">
                {/* Simple Navigation */}
                <header className="p-4 bg-slate-800">
                    <div className="flex justify-between items-center max-w-7xl mx-auto">
                        <h1 className="text-xl font-bold text-cyan-400">Kukuma</h1>
                        <div className="flex gap-4">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="px-4 py-2 text-white hover:text-cyan-400"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                {/* Simple Hero */}
                <main className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center max-w-4xl">
                        <h1 className="text-6xl font-bold mb-6">
                            <span className="text-white">Engineering</span>
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Intelligence</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            We transform African businesses with proven AI systems that deliver measurable results.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transition-transform">
                                Start Your AI Transformation
                            </button>
                            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}