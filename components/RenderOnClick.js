import useSWR from "swr";
import fetchJson from "../lib/fetchJson";

import useUser from "../lib/useUser";

import Router from "next/router";

export default function RenderOnClick(props) {
    return (
        props.status === props.serial ?
            props.method === "POST" ?
                <div className="flex items-center justify-center px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-800 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-700" >
                    <DeviceContHandler method={props.method} deviceSerial={props.serial} />
                </div>
                :
                <div className="flex items-center justify-center px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" >
                    <DeviceContHandler method={props.method} deviceSerial={props.serial} />
                </div>
            :
            props.method === "POST" ?
                <div className="flex items-center justify-center px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" >
                    <a className="mx-1">사용하기</a>
                </div>
                :
                <div className="flex items-center justify-center px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-800 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-700" >
                    <a className="mx-1">사용중지</a>
                </div>
    );
}

function DeviceContHandler(props) {
    const { data } = useSWR(["/api/deviceCont", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            serial: props.deviceSerial,
            method: props.method
        }),
        credentials: 'include',
    }], fetchJson);

    return (
        <>
            {
                data?.success ?
                (
                    data.method === 'POST' ?
                        <a className="mx-1">사용중지</a>
                        :
                        <a className="mx-1">사용하기</a>
                )
                :
                (
                    <a className="mx-1">사용하기</a>
                )
            }
        </>
    );
}