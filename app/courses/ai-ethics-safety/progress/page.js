import { getLessons } from '../../../../lib/sanity'
import ProgressDashboard from './ProgressDashboard'

export default async function ProgressPage() {
  const lessons = await getLessons('ai-ethics-safety-and-responsible-use')
  return <ProgressDashboard lessons={lessons} />
}
