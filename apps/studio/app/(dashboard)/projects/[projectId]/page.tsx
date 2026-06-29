import { ProjectDetailPage } from '@/modules/projects/ui/views/project-detail-page';

export default function Page({ params }: { params: { projectId: string } }) {
  return <ProjectDetailPage projectId={params.projectId} />;
}
