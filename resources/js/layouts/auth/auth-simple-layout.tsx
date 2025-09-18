import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-8 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-6">
                        <Link href={home()} className="flex flex-col items-center gap-3 font-medium group">
                            <div className="mb-2">
                                <img
                                    src="/images/kukuma logo landscape.svg"
                                    alt="Kukuma Advanced Technologies"
                                    className="h-16 w-auto group-hover:opacity-80 transition-opacity duration-300"
                                />
                            </div>
                            <span className="sr-only">Kukuma Advanced Technologies</span>
                        </Link>

                        <div className="space-y-3 text-center">
                            <h1 className="text-2xl font-bold">{title}</h1>
                            <p className="text-muted-foreground leading-relaxed">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>

            {/* Back to Website Link */}
            <div>
                <Link
                    href={home()}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Website
                </Link>
            </div>
        </div>
    );
}
