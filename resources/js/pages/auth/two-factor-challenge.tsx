import { Head } from '@inertiajs/react';

export default function TwoFactorChallenge() {
    return (
        <>
            <Head title="Two-factor authentication" />
            <div className="text-center text-sm text-muted-foreground">
                Two-factor authentication is disabled.
            </div>
        </>
    );
}
