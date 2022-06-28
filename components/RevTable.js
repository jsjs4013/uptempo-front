import { useEffect, useState } from "react";
import RevRow from "./RevRow";

export default function RevTable(props) {
  const [blockArr, setBlockarr] = useState(props.blockArr);

  const getNewArr = () => {
    let newarr = new Array(23).fill(false);

    for (var i = 0; i < props.blockArr.length; i++) {
      newarr[props.blockArr[i]] = true;
    }
    setBlockarr(newarr);
  };

  useEffect(() => {
    if (props.blockArr !== undefined) getNewArr();
  }, [props.blockArr]);

  return (
    <>
      {blockArr !== undefined ? (
        <div name={props.name} className="grid grid-rows-24">
          <div className="border-b-2 py-1">
            <br />
          </div>
          {blockArr.map((block) => {
            return(
              <>
                <RevRow block={block}></RevRow>
              </>)
          })}
          <div className="py-1">
            <br />
          </div>
        </div>
      ) : null}
    </>
  );
}
