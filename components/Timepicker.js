export default function TimePicker (props) {

    const H_List = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    return (
      <div className="flex">
        <div className="bg-white rounded-lg shadow-sm text-center">
          <div className="flex shadow-lg px-8 py-2 rounded hover:bg-gray-200">
            <select
              name="hours"
              className="bg-transparent font-bold text-lg appearance-none outline-none px-1 cursor-pointer"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select
              name="ampm"
              className="bg-transparent font-bold text-lg appearance-none outline-none px-1 cursor-pointer hover:underline-offset-4"
            >
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </div>
        </div>
      </div>
    );
}