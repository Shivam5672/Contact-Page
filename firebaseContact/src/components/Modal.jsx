import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

export const Modal = ({onClose, isOpen, children}) => {
  return createPortal(
    <>
        {isOpen &&
        <div className='grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40'>
            <div className='m-auto z-50 relative min-h-[200px] min-w-[80%] bg-white p-4'>
                <div className='flex justify-end'>
                    <AiOutlineClose onClick={onClose} className='text-2xl self-end'/>
                </div>
                {children}
            </div>
            
        </div>
        }
    </>
  ,document.getElementById("modal-root"))
}
