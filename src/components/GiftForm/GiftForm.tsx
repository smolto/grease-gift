import { useEffect, useState } from 'react'
import './GiftForm.css'
import JSConfetti from 'js-confetti'
import Spinner from '../Spinner/Spinner'

const correctOption = 'grease'

export default function GiftForm() {
  const [value, setValue] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [isSuccess, setIsSuccess] = useState<undefined | boolean>(undefined)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsChecking(true)
    setIsSuccess(undefined)
    const userInput = value.toLocaleLowerCase()

    setTimeout(() => {
      if (userInput.includes(correctOption)) {
        setIsSuccess(true)
        setIsChecking(false)
        return
      }

      setIsSuccess(false)
      setIsChecking(false)
    }, 2000)
  }

  useEffect(() => {
    if (!isSuccess) return;

    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

  }, [isSuccess])

  return (
    <>
      <h3 className='gift-form--title'>¿Qué será? 🤭</h3>
      <form className='gift-form' onSubmit={handleSubmit}>
        <input type="text" className='gift-form--input' onChange={(e) => setValue(e.target.value)} value={value} />
        <button className='gift-form--button' disabled={isSuccess || !value}>
          {
            isChecking ? <Spinner /> : <>Probar</>
          }
        </button>
      </form>
      {
        isSuccess && (
          <div className='success-container'>
            <h2>Lo has adividano! 🥳</h2>
            <div className='success-container--image-container'>
              <img src='/gift.png' width={200} />
            </div>
          </div>
        )
      }
      {
        isSuccess !== undefined && isSuccess !== true && value && (
          <div className='success-container'>
            <h3>Ups, parece que te has equivocado 🙄</h3>
          </div>
        )
      }
    </>
  )
}