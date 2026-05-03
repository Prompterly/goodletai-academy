'use client'
import './animations.css'
import SharedLessonSteps from '../../../components/LessonSteps'

const CONFIG = {
  key: '_agents',
  courseType: 'ai-agents',
  courseUrl: '/courses/ai-agents-assistants',
  backLabel: '← AI Agents',
  grad: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
  light: '#fdba74',
  shadow: 'rgba(249,115,22,0.4)',
  sidebarBg: '#2a1a0e',
  dotColor: '#f97316',
  accentColor: '#f97316',
}

export default function LessonSteps({ lesson }) {
  return <SharedLessonSteps lesson={lesson} config={CONFIG} />
}
