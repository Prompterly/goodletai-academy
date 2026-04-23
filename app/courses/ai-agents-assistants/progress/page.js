import { getLessons } from '../../../../lib/sanity'
import ProgressDashboard from './ProgressDashboard'

export default async function ProgressPage() {
  const lessons = await getLessons('building-ai-agents-and-assistants')
  return <ProgressDashboard lessons={lessons} />
}
