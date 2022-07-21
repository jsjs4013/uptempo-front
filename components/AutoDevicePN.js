import { useEffect, useState } from "react";
import DeviceBox from "./AutoDeviceBox";

export default function AutoDevicePN(props) {
  const [deviceList, setDeviceList] = useState(props.deviceList);

  return (
    <>
      <div className="flex justify-between p-4">
        <div className="">
          <p className="text-2xl font-bold">2) 테스트할 기종 선택</p>
          <p className="text-lg">선택된 기기 : {props.selectedDevice.size}개</p>
        </div>
        <div className="flex gap-2">
          <div>
            <button
              className="px-4 py-2 text-lg font-bold text-center py-3 rounded-xl text-lg bg-slate-700 text-white hover:bg-slate-100 hover:text-gray-900 font-bold transition ease-in-out shadow-md"
              onClick={async () => {
                await props.onClickPrev();
              }}
            >
              ← 이전 (기종 선택)
            </button>
          </div>
          <div>
            <button
              className="px-4 py-2 text-lg font-bold text-center py-3 rounded-xl text-lg bg-slate-700 text-white hover:bg-slate-100 hover:text-gray-900 font-bold transition ease-in-out shadow-md"
              onClick={async () => {
                await props.onClickNext();
              }}
            >
              다음 (예약 하기) →
            </button>
          </div>
        </div>
      </div>
      <div className="border px-2 ">
        {deviceList !== undefined
          ? deviceList.map((item) => {
              return (
                <>
                  <DeviceBox deviceInfo={item} />
                </>
              );
            })
          : null}
      </div>
    </>
  );
}
