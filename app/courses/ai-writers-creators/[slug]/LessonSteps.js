'use client'
import './animations.css'
import SharedLessonSteps from '../../../components/LessonSteps'

const CONFIG = {
  key: '_writers',
  courseType: 'ai-writers',
  courseUrl: '/courses/ai-writers-creators',
  backLabel: '← AI Writers',
  grad: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  light: '#6ee7b7',
  shadow: 'rgba(16,185,129,0.4)',
  sidebarBg: '#1a3a2e',
  dotColor: '#10b981',
  accentColor: '#10b981',
}

export default function LessonSteps({ lesson }) {
  return <SharedLessonSteps lesson={lesson} config={CONFIG} />
}
