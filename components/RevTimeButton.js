import { useEffect, useState } from "react";

export default function RevTimeButton(props) {
  const [isSelected, setSelected] = useState(false);
  const timeInfo = props.timeInfo;

  const hasClicked = () => {
    setSelected(!isSelected);
  }

  return (
    <div>
        {props.isActive ? 
            <div id = "timeselect_nonActive">
                <button className="border bg-gray-200 text-white" disabled>{timeInfo}</button>
            </div> 
            : isSelected ?
                <div id = "timeselect_active_selected">
                    <button className="border bg-red-200 text-white" onClick={hasClicked}>{timeInfo}</button>
                </div> 
                :
                <div id = "timeselect_active_notSelected">
                    <button className="border" onClick={hasClicked}>{timeInfo}</button>
                </div>
        }
    </div>);
}
