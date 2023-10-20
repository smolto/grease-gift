import { Fragment, useEffect, useState } from 'react'
import './ProgressBar.css'
import Card from '../Card/Card.tsx'

const TOTAL_STEPS = 3

function CardManager({ step, clickCard, unclickCard }: { step: number; clickCard: () => void; unclickCard: () => void }) {
  if (step < 0 || step > 3) return null
  return (
    <div onMouseOver={clickCard} onMouseLeave={unclickCard}>
      <Card image={{ alt: "Gafas", url: `/clues/clue_${step}.png` }} message={`Pista ${step}`} />
    </div>
  )
}

function Bar({ step }: { step: number;  }) {
  return (
    <div className="progress-bar--total">
      <div className={`progress-bar--progress-${step}`} />
    </div>
  )
}

export default function ProgressHandler() {
  const [step, setCurrentStep] = useState(1);
  const [isClicked, setIsClicked] = useState(false)


  const increase = () => {
    if(!isClicked) {
      if (step < 3) setCurrentStep(step + 1)
      return
    }
    setTimeout(function () {
      if (step < 3) setCurrentStep(step + 1)
    }, 500);
  }

  const decrease = () => {
    if(!isClicked) {
      if (step > 1) setCurrentStep(step - 1)
      return
    }

    setTimeout(function () {
      if (step > 1) setCurrentStep(step - 1)
    }, 500);
  }

  const clickCard = () => setIsClicked(true)
  const unclickCard = () => setIsClicked(false)

  useEffect(() => {
    unclickCard()
  }, [step])

  return (
    <div>
      <div className="progress-bar--title">
        <h3>Pista {step} de {TOTAL_STEPS}</h3>
      </div>
      <Bar step={step} />
      <CardManager step={step} clickCard={clickCard} unclickCard={unclickCard}/>
      <div className="progress-bar--buttons-container">
        <button className="progress-bar--button" onClick={decrease}>←</button>
        {
          step === 3 ? <a href='/guess' className="progress-bar--button">¿Lo sabes?</a> : <button className="progress-bar--button" onClick={increase}>→</button>
        }
      </div>
    </div>
  )
}