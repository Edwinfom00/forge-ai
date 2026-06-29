import Link from 'next/link';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/projects', label: 'Projects' },
  { href: '/organizations', label: 'Organizations' },
  { href: '/compiler', label: 'Compiler' },
  { href: '/workflows', label: 'Workflows' },
  { href: '/agents', label: 'Agents' },
  { href: '/settings', label: 'Settings' },
] as const;

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 shrink-0 border-r bg-muted/40">
        <div className="flex h-16 items-center border-b px-6">
          <span className="font-bold tracking-tight">ForgeAI</span>
          <span className="ml-1 text-xs text-muted-foreground">OS</span>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-7xl p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
