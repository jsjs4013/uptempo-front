export default function AutoAcceptPN (props) {
    return(
    <>
    <div>
      <button
        className="px-4 py-2 text-lg font-bold text-center py-3 rounded-xl text-lg bg-slate-700 text-white hover:bg-slate-100 hover:text-gray-900 font-bold transition ease-in-out shadow-md"
        onClick={ async () => {
          await props.onClickPrev();
        }}
      >
        ← 이전 (앱 선택)
      </button>
      </div>
    </>
    )
}