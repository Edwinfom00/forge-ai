import { cn } from '@/lib/utils';
import { type Organization } from '../../types/index';

type OrganizationCardProps = {
  organization: Organization;
  className?: string;
};

export const OrganizationCard = ({ organization, className }: OrganizationCardProps) => {
  return (
    <div className={cn('rounded-lg border bg-card p-6 shadow-sm', className)}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-card-foreground">{organization.name}</h3>
          {organization.description && (
            <p className="mt-1 text-sm text-muted-foreground">{organization.description}</p>
          )}
        </div>
        <span
          className={cn(
            'rounded-full px-2 py-1 text-xs font-medium',
            organization.status === 'active' && 'bg-green-100 text-green-700',
            organization.status === 'draft' && 'bg-yellow-100 text-yellow-700',
            organization.status === 'archived' && 'bg-gray-100 text-gray-700'
          )}
        >
          {organization.status}
        </span>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Created {organization.createdAt.toLocaleDateString()}
      </p>
    </div>
  );
};
