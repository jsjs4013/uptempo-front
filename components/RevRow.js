export default function RevRow(props) {
  return (
    <>
      {props.block ? (
        <div className="bg-red-500 border border-r border-x-gray-200 border-y-red-400 py-1 border-y rounded-xs opacity-80">
          <br />
        </div>
      ) : (
        <div className="border-x border-b-2 border-gray-300 py-1">
          <br />
        </div>
      )}
    </>
  );
}
