import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RevTimeButton from "./RevTimeButton";

export default function RevModal(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const deviceName = props.deviceName;
  const timeInfoArr = props.timeInfoArr;
  const [selectedBlock, setSelectedBlock] = useState();
  const serial = props.serial;
  const [occupiedblock, setOccupiedblock] = useState();

  const openModal = () => {
    setSelectedBlock(new Array(24).fill(false));
    getNewblock();
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedBlock(null);
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const selectionComfirm = () => {
    closeModal();
    alert("예약이 완료되었습니다.");
  };

  const changeSelected = async (no) => {
    selectedBlock[no] = !selectedBlock[no];
    await setSelectedBlock(selectedBlock);
  };

  const CustomButton = ({ value, onClick }) => (
    <button
      onClick={onClick}
      className="bg-transparent border boder-gray-700 hover:bg-gray-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded-full text-lg mx-2 transition duration-150 ease-in-out"
    >
      {value.split("/")[2]}년 {value.split("/")[0]}월 {value.split("/")[1]}일 ▾
    </button>
  );

  const getNewblock = async () => {
    let newOcuBlock = new Array(24).fill(true);
    for (var i = 0; i < props.blocks.length; i++) {
      newOcuBlock[props.blocks[i]] = false;
    }
    await setOccupiedblock(newOcuBlock);
  };

  useEffect(() => {
    setSelectedBlock(new Array(24).fill(false));
  }, [props.now]);

  useEffect(() => {
    if(props.blocks !== undefined) getNewblock();
  }, [props.blocks])

  return (
    <div>
      <button
        id="RevModalButton"
        type="button"
        className="bg-[#2b3d51] hover:bg-slate-900 text-white font-bold rounded w-36 h-12 max-w-lg min-w-fit ease-in-out hover:shadow-sm focus:shadow-sm active:bg-slate-700 active:shadow-lg transition text-xl"
        onClick={openModal}
      >
        예약 신청
      </button>

      {modalOpen ? (
        <div>
          <div
            id="RevModalBg"
            className="fixed top-0 left-0 bottom-0 right-0 w-full h-full outline-none overflow-x=hidden overflow-y-auto bg-slate-100 opacity-50"
          />
          <div
            id="RevModal"
            className="fixed top-0 left-0 bottom-0 right-0 w-full h-full outline-none overflow-x=hidden overflow-y-auto grid"
          >
            <section className="place-self-center rounded-md bg-white overflow-hidden mx-0 px-8 py-5 border border-slate-700 shadow-lg">
              <header className="realative text-bolder flex justify-between text-2xl font-bold pt-1 pb-4">
                <div>
                  <span className="font-bold pr-2">{deviceName}</span>
                  <span className="font-bold">사용 예약 신청</span>
                </div>
                <button onClick={closeModal}>✕</button>
              </header>
              <hr />
              <body>
                <div className="grid flex justify-center pb-5 pt-4">
                  <div className="px-1 mx-2 font-bold place-self-center text-xl pb-1">
                    날짜 선택
                  </div>
                  <div>
                    <DatePicker
                      className="mx-4 place-self-center"
                      selected={props.now}
                      onChange={(n) => props.selectDate(n)}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      customInput={<CustomButton />}
                    />
                  </div>
                </div>

                <div className="grid flex justify-center">
                  <p className="px-1 mx-2 font-bold place-self-center py-1 text-xl">
                    시간 선택
                  </p>
                  <div className="grid grid-cols-6 gap-4 py-4 place-content-center">
                    {timeInfoArr !== undefined
                      ? timeInfoArr.map((item) => {
                          return (
                            <>
                              <RevTimeButton
                                timeInfo={item.timeInfo}
                                selectedBlock={selectedBlock}
                                no={item.no}
                                changeSelected={changeSelected}
                                isActive={occupiedblock[item.no]}
                              ></RevTimeButton>
                            </>
                          );
                        })
                      : null}
                  </div>
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
        </div>
      ) : null}
    </div>
  );
}
