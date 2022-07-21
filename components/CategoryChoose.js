import { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'

const company = [{key:0, category:'ALL'}, {key:1, category:'SAMSUNG'}, {key:2, category:'LG'}, {key:3, category:'etc'}]
const os_list = [{key:0, category:'ALL'}, {key:1, category:'ANDROID'}, {key:2, category:'etc'}]

export default function CategoryChoose(props) {
  // 제조사인지 OS인지 확인할 수 있는 변수 할당
  const devOrOs = props.isDevOs == 1 ? [...company] : [...os_list]

  const [selected, setSelected] = useState(devOrOs[props.selected])

  useEffect(() => { // Radio 버튼이 선택될 때 마다 값을 바꿔주기 위해 사용되는 부분
    props.isSetDevOs(selected.key)
  }, [selected])

  return (
    <div className="w-full px-4 py-4">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          {
            props.isDevOs == 1 && <RadioGroup.Label className="sr-only">제조사</RadioGroup.Label>
          }
          {
            props.isDevOs == 2 && <RadioGroup.Label className="sr-only">OS</RadioGroup.Label>
          }
          <div className="space-y-2">
            {devOrOs.map((devOrOs) => (
              <RadioGroup.Option
                key={devOrOs.key}
                value={devOrOs}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-sky-700 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {devOrOs.category}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}