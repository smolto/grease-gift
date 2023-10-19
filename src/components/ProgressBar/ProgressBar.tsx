import { useState } from 'react'
import './ProgressBar.css'
import Card from '../Card/Card.tsx'

const TOTAL_STEPS = 3

function CardManager({ step }: { step: number }) {
  if (step < 0 || step > 3) return null
  return <Card image={{ alt: "Gafas", url: `/clues/clue_${step}.png` }} message={`Pista ${step}`} />
}

function Bar({ step }: { step: number }) {
  return (
    <div className="progress-bar--total">
      <div className={`progress-bar--progress-${step}`} />
    </div>
  )
}

export default function ProgressHandler() {
  const [step, setCurrentStep] = useState(3);


  const increase = () => {
    setTimeout(function(){
      if (step < 3) setCurrentStep(step + 1)
    }, 500);
  }
  const decrease = () => {
    setTimeout(function(){
      if (step > 1) setCurrentStep(step - 1)
    }, 500);
  }

  return (
    <div>
      <div className="progress-bar--title">
        <h3>Pista {step} de {TOTAL_STEPS}</h3>
      </div>
      <Bar step={step} />
      <CardManager step={step} />
      <div className="progress-bar--buttons-container">
        <button className="progress-bar--button" onClick={decrease}>←</button>
        <button className="progress-bar--button" onClick={increase}>→</button>
      </div>
    </div>
  )
}