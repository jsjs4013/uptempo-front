import CategoryChoose from './CategoryChoose'

import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function CategoryModals(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isDevOs, setIsDevOs] = useState(1)

    function closeModal() {
        setIsOpen(false)
      }
    
    function openModal() {
        setIsOpen(true)
    }
  
    return (
        <>
            <div className="flex justify-around tracking-widest">
                <div className='inline-flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                    <button
                        type="button"
                        onClick={() => {
                            openModal();
                            setIsDevOs(1);
                        }}
                        className="text-white font-bold mt-2 mb-2 w-full h-full"
                    >
                        제조사
                    </button>
                </div>
                
                <div className='inline-flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                    <button
                        type="button"
                        onClick={() => {
                            openModal();
                            setIsDevOs(2);
                        }}
                        className="text-white font-bold mt-2 mb-2 w-full h-full"
                    >
                        OS
                    </button>
                </div>
            </div>

            <ChooseModal isOpen={isOpen} isDevOs={isDevOs} closeModal={closeModal} />
        </>
    )
}

function ChooseModal(props) {
    return (
        <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-100"
                    enterFrom="opacity-30"
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 backdrop-blur-sm bg-[#2b3d51]/50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-100"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <CategoryChoose isDevOs={props.isDevOs} />
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={props.closeModal}
                                        >
                                        선택
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent ml-2 bg-gray-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={props.closeModal}
                                        >
                                        취소
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}