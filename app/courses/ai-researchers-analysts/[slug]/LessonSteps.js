'use client'
import './animations.css'
import SharedLessonSteps from '../../../../components/LessonSteps'

const CONFIG = {
  key: '_researchers',
  courseUrl: '/courses/ai-researchers-analysts',
  backLabel: '← AI Researchers',
  grad: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  light: '#93c5fd',
  shadow: 'rgba(59,130,246,0.4)',
  sidebarBg: '#1a2a4e',
  dotColor: '#3b82f6',
  accentColor: '#3b82f6',
}

export default function LessonSteps({ lesson }) {
  return <SharedLessonSteps lesson={lesson} config={CONFIG} />
}
