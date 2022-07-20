import fetchJson from "./fetchJson";

export default async function deviceContHandler(method, deviceSerial) {
    return (await fetchJson(
        '/api/deviceCont', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            serial: deviceSerial,
            method: method
        }),
        credentials: 'include',
    }))
}