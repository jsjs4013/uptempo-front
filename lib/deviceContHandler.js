import useSWR from "swr";
import fetchJson from "./fetchJson";

export default async function deviceContHandler(method, deviceSerial) {
    const { data } = useSWR(["/api/deviceCont", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            serial: deviceSerial,
            method: method
        }),
        credentials: 'include',
    }], fetchJson);

    return (
        <>

        </>
    );
}

// function RenderOnClick() {
//     const [shouldRender, setShouldRender] = React.useState(false);
//     function handleClick() {
//       setShouldRender(true);
//     }
//     return (
//       <>
//         <button disable={shouldFetch} onClick={handleClick}>Fetch</button>
//         {shouldRender && <FetchAndRender />}
//       </>
//     );
//   }
  
//   function FetchAndRender() {
//     const { data } = useSWR("/api/users/1", fetcher);
//     return (
//       <>
//         {data ? <h1>{data.fullName}</h1> : null
//       </>
//     );
//   }