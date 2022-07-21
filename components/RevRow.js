export default function RevRow(props) {
  return (
    <>
      {props.block ? (
        <div className="bg-slate-600 border border-r border-x-gray-200 border-y-slate-500 py-1 border-y rounded-xs">
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
