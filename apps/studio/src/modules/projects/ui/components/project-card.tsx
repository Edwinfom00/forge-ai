import { cn } from '@/lib/utils';
import { type Project } from '../../types/index';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div className={cn('rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-card-foreground">{project.name}</h3>
          {project.description && (
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
          )}
        </div>
        <span className={cn(
          'ml-3 shrink-0 rounded-full px-2 py-1 text-xs font-medium',
          project.status === 'active' && 'bg-green-100 text-green-700',
          project.status === 'compiling' && 'bg-blue-100 text-blue-700',
          project.status === 'draft' && 'bg-yellow-100 text-yellow-700',
          project.status === 'archived' && 'bg-gray-100 text-gray-700',
        )}>
          {project.status}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="rounded bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground">
          {project.runtimeTarget}
        </span>
        <span className="text-xs text-muted-foreground">
          {project.createdAt.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};
