export default function RevRow(props) {
  return (
    <>
      {props.block ? (
        <div className="bg-red-400 border border-r-2 border-x-gray-200 border-y-red-400 py-1">
          <br />
        </div>
      ) : (
        <div className="border-b-2 border-gray-300 py-1">
          <br />
        </div>
      )}
    </>
  );
}
