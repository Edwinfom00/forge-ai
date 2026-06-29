import Link from 'next/link';

export const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          ForgeAI
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          The Operating System for AI Software Engineering
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
          Compile any raw software idea into a complete, fully functioning AI software engineering organization.
          One idea. One prompt. One architecture. Infinite AI teams.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Open Studio
          </Link>
        </div>
      </div>
    </main>
  );
};
