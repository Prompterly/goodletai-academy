import { getLessons } from '../../../../lib/sanity'
import ProgressDashboard from './ProgressDashboard'

export default async function ProgressPage() {
  const lessons = await getLessons('ai-for-marketers-and-strategists')
  return <ProgressDashboard lessons={lessons} />
}
