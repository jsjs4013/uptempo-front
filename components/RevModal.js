import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RevModal(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const deviceName = props.deviceName;
  const [now, setNow] = useState(props.now);
  const [timeData, setTimeData] = useState(props.timeData);
  const timeInfoArr = props.timeInfoArr;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const selectionComfirm = () => {
    closeModal();
    alert("예약이 완료되었습니다.");
  };

  const CustomButton = ({ value, onClick }) => (
    <button
      onClick={onClick}
      className="bg-transparent border boder-gray-700 hover:bg-gray-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-full text-lg mx-2"
    >
      {value.split("/")[2]}년 {value.split("/")[0]}월 {value.split("/")[1]}일 ▾
    </button>
  );

  const handleSelectDate = async (n) => {
    await setNow(n);
  };

  useEffect(() => {}, [now]);

  return (
    <div>
      <button
        id="RevModalButton"
        type="button"
        className="bg-[#2b3d51] hover:bg-slate-900 text-white font-bold rounded w-32 h-12 max-w-lg min-w-fit ease-in-out focus:shadow-lg active:bg-slate-700 active:shadow-lg transition"
        onClick={openModal}
      >
        예약 신청
      </button>

      {modalOpen ? (
        <div
          id="RevModalBg"
          className="fixed top-0 left-0 bottom-0 right-0 w-full h-full outline-none overflow-x=hidden overflow-y-auto grid"
        >
          <section
            id="RevModal"
            className="w-4/5 max-w-4xl rounded-md bg-white overflow-hidden mx-0 place-self-center px-8 py-5 border border-slate-700"
          >
            <header className="realative text-bolder flex justify-between text-2xl text-bold pb-4">
              <div>
                <span className="font-bold">{deviceName}</span>{" "}
                <span className="text-xl font-bold">사용 예약 신청</span>
              </div>
              <button onClick={closeModal}>✕</button>
            </header>
            <body>
              <div className="grid flex justify-center pb-5 pt-2">
                <div className="px-1 mx-2 font-bold place-self-center text-xl pb-1">
                  날짜 선택
                
                </div>
                <div>
                  <DatePicker
                    className="mx-4 place-self-center"
                    selected={now}
                    onChange={(n) => handleSelectDate(n)}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    customInput={<CustomButton />}
                  />
                </div>
              </div>

              <div className="grid flex justify-center">
                <p className="px-1 mx-2 font-bold place-self-center py-1 text-xl">시간 선택</p>
              </div>
            </body>
            <footer className="flex flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6 py-2.5 bg-[#2b3d51] text-white font-medium rounded shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900 focus:bg-slate-900 focus:shadow-lg active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out ml-1 mr-2"
                onClick={selectionComfirm}
              >
                선택 완료
              </button>
              <button
                type="button"
                className="px-8 py-2.5 font-medium rounded shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg focus:bg-red-600 focus:shadow-lg active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out ml-1"
                onClick={closeModal}
              >
                취소
              </button>
            </footer>
          </section>
        </div>
      ) : null}
    </div>
  );
}
