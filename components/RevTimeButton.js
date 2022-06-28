import { useEffect, useState } from "react";

export default function RevTimeButton(props) {
  const timeInfo = props.timeInfo;
  const no = props.no;
  const [isSelected, setSelected] = useState(props.selectedBlock[no]);

  useEffect (() => {
    setSelected(false);
  }, [props.now])

  return (
    <div>
      {!props.isActive ? (
        <div id="timeselect_nonActive">
          <button
            className="border-2 bg-gray-100 text-gray-300 rounded-lg py-2 w-full mx-1 font-bold h-12"
            disabled
          >
            {timeInfo}
          </button>
        </div>
      ) : isSelected ? (
        <div id="timeselect_active_selected">
          <button
            className="border bg-red-400 text-white py-2 rounded-lg w-full h-12 mx-1 font-bold"
            onClick={() => {
              props.changeSelected(no);
              setSelected(!isSelected);
            }}
          >
            {timeInfo}
          </button>
        </div>
      ) : (
        <div id="timeselect_active_notSelected">
          <button
            className="border-2 py-2 rounded-lg w-full h-12 mx-1 font-bold hover:bg-red-100 hover:shadow-sm focus:bg-red-100 focus:shadow-sm active:bg-red-400 active:shadow-sm transition duration-150 ease-in-out"
            onClick={() => {
              props.changeSelected(no);
              setSelected(!isSelected);
            }}
          >
            {"   "}
            {timeInfo}{"   "}
          </button>
        </div>
      )}
    </div>
  );
}
