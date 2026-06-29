export const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome to ForgeAI</h1>
        <p className="mt-2 text-muted-foreground">
          The Operating System for AI Software Engineering. Compile any idea into a complete AI organization.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STAT_CARDS.map(card => (
          <div key={card.title} className="rounded-lg border bg-card p-6 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
            <p className="mt-2 text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const STAT_CARDS = [
  { title: 'Active Projects', value: '0' },
  { title: 'AI Organizations', value: '0' },
  { title: 'Workflow Executions', value: '0' },
] as const;
