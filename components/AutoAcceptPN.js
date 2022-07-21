import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "./Timepicker";
//import { ko } from 'date-fns/esm/locale'

export default function AutoAcceptPN (props) {

  const [now, setNow] = useState(new Date());

  const CustomButton = ({ value, onClick }) => (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-gray-300 font-semibold py-2 px-4 hover:border-transparent rounded py-2 text-lg mx-4 shadow-lg"
    >
      {value.split("/")[2]}년 {value.split("/")[0]}월 {value.split("/")[1]}일
    </button>
  );

    return (
      <>
        <div className="flex justify-between p-4">
          <div>
            <p className="text-2xl font-bold">3) 시간 선택 및 예약 확인</p>
          </div>
          <button
            className="px-4 py-2 text-lg font-bold text-center py-3 rounded-xl text-lg bg-slate-700 text-white hover:bg-slate-100 hover:text-gray-900 font-bold transition ease-in-out shadow-md"
            onClick={async () => {
              await props.onClickPrev();
            }}
          >
            ← 이전 (앱 선택)
          </button>
        </div>
        <div>
          <div>선택 된 앱 :</div>
          <div>테스트할 기종</div>
          <div>
            <p>날짜 선택</p>
            <DatePicker
              selected={now}
              onChange={(n) => {
                setNow(n);
              }}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              minDate={new Date()}
              dropdownMode="select"
              customInput={<CustomButton />}
            />
          </div>
          <p>시간 선택</p>
              <TimePicker></TimePicker>
          <div>
            <button className="bg-gray-700 text-white py-3 text-xl px-20 rounded font-bold transition ease-in-out shadow-lg hover:bg-slate-100 hover:text-gray-900">
              예약하기
            </button>
          </div>
        </div>
      </>
    );
}