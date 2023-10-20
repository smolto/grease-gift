import { useEffect, useState } from 'react'
import './GiftForm.css'
import JSConfetti from 'js-confetti'

const correctOption = 'grease'

export default function GiftForm() {
  const [value, setValue] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsChecking(true)
    const userInput = value.toLocaleLowerCase()

    if (userInput.includes(correctOption)) {
      setIsSuccess(true)
      setIsChecking(false)
      return
    }
  }

  useEffect(() => {
    if(!isSuccess) return;
    
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

  }, [isSuccess])

  return (
    <>
      <h3 className='gift-form--title'>¿Qué será? 🤭</h3>
      <form className='gift-form' onSubmit={handleSubmit}>
        <input type="text" className='gift-form--input' onChange={(e) => setValue(e.target.value)} value={value} />
        <button className='gift-form--button' disabled={isSuccess}>Probar</button>
      </form>
      {
        isSuccess && (
          <div className='success-container'>
            <div className='success-container--image-container'>
              <img src='/gift.png' width={200} />
            </div>
          </div>
        )
      }
    </>
  )
}