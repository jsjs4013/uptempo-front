import { useEffect, useState } from "react";
import RevRow from "./RevRow";

export default function RevTable(props) {
  const [blockArr, setBlockarr] = useState();

  useEffect(() => {
    let newarr = new Array(21).fill(false);

    for (var i = 0; i < props.blockArr.length; i++) {
      newarr[props.blockArr[i]] = true;
    }
    setBlockarr(newarr);
  }, []);

  return (
    <>
      {blockArr !== undefined ? (
        <div name={props.name} className="grid grid-rows-21">
          <RevRow block={blockArr[0]}></RevRow>
          <RevRow block={blockArr[1]}></RevRow>
          <RevRow block={blockArr[2]}></RevRow>
          <RevRow block={blockArr[3]}></RevRow>
          <RevRow block={blockArr[4]}></RevRow>
          <RevRow block={blockArr[5]}></RevRow>
          <RevRow block={blockArr[6]}></RevRow>
          <RevRow block={blockArr[7]}></RevRow>
          <RevRow block={blockArr[8]}></RevRow>
          <RevRow block={blockArr[9]}></RevRow>
          <RevRow block={blockArr[10]}></RevRow>
          <RevRow block={blockArr[11]}></RevRow>
          <RevRow block={blockArr[12]}></RevRow>
          <RevRow block={blockArr[13]}></RevRow>
          <RevRow block={blockArr[14]}></RevRow>
          <RevRow block={blockArr[15]}></RevRow>
          <RevRow block={blockArr[16]}></RevRow>
          <RevRow block={blockArr[17]}></RevRow>
          <RevRow block={blockArr[18]}></RevRow>
          <RevRow block={blockArr[19]}></RevRow>
          <div>
            <br />
          </div>
        </div>
      ) : null}
    </>
  );
}
