export default function AutoDeviceBox(props) {
    return (
      <>
        {props.deviceInfo !== undefined ? (
          <li>
            <input type={"checkbox"} className="hidden peer" required="" />
            <label className="flex inline-flex justify-between items-center p-3 w-full text-gray-800 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-100 shadow-lg">
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {props.deviceInfo.deviceName}
                </div>
                <div className="w-full text-sm">
                  모델명 : {props.deviceInfo.modelName}
                </div>
                <div className="w-full text-sm">OS : {props.deviceInfo.os}</div>
              </div>
            </label>
          </li>
        ) : null}
      </>
    );
}