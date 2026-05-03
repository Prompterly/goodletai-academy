'use client'
import './animations.css'
import SharedLessonSteps from '../../../components/LessonSteps'

const CONFIG = {
  key: '_marketers',
  courseType: 'ai-marketers',
  courseUrl: '/courses/ai-marketers-strategists',
  backLabel: '← AI Marketers',
  grad: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  light: '#a78bfa',
  shadow: 'rgba(102,126,234,0.4)',
  sidebarBg: '#2d2a5e',
  dotColor: '#667eea',
  accentColor: '#f59e0b',
}

export default function LessonSteps({ lesson }) {
  return <SharedLessonSteps lesson={lesson} config={CONFIG} />
}
