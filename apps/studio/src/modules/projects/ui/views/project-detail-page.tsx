type ProjectDetailPageProps = {
  projectId: string;
};

export const ProjectDetailPage = ({ projectId: _projectId }: ProjectDetailPageProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Project</h1>
    </div>
  );
};
