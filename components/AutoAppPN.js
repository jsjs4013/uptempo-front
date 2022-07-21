export default function AutoAppPN (props) {
    return (
      <>
        <div className="flex justify-between p-4">
          <div>
            <p className="text-2xl font-bold">1) 테스트 대상 앱 선택</p>
          </div>
          <div>
            <button
              className="px-4 py-2 text-lg font-bold text-center py-3 rounded-xl text-lg bg-slate-700 text-white hover:bg-slate-100 hover:text-gray-900 font-bold transition ease-in-out shadow-md"
              onClick={async () => {
                await props.onClickNext();
              }}
            >
              다음 (앱 선택) →
            </button>
          </div>
        </div>
        <div className="container px-6 py-12 h-full">
          <p className="flex justify-center"></p>
          <div></div>
          <div>
            {
              props.appList !== undefined ? (
                <div>
                  <img src={props.appList[0].icon}/>
                  <img src={props.appList[1].icon}/>
                  <img src={props.appList[2].icon}/>
                  <img src={props.appList[3].icon}/>
                  <img src={props.appList[4].icon}/>
                  <img src={props.appList[5].icon}/>
                </div>
              ) : null
            }
          </div>
        </div>
      </>
    );
}