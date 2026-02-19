import { motion } from 'motion/react'
import './App.css'

function App() {
  return (
    <div className="comingsoon-bg">
      <motion.div
        className="comingsoon-container"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="comingsoon-title"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
        >
          <span className="comingsoon-pop">Coming Soon</span>
        </motion.h1>
      </motion.div>
      <div className="comingsoon-bubbles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`bubble bubble-${i + 1}`}></div>
        ))}
      </div>
    </div>
  )
}

export default App
