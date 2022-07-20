import Layout from "../components/Layout"
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import DeviceBox from "../components/DeviceBox";
import { Tab } from '@headlessui/react'

export default function Auto() {
    let currentPage = 10;

    let devices = [
        {dno : 1, deviceName : '갤럭시 S21 울트라', modelName: 'SM-G998N', os: '12', port:''},
        {dno : 2, deviceName : '갤럭시 노트20 5G', modelName: 'SM-N981N', os: '11', port:''},
        {dno : 3, deviceName : '갤럭시 Z Filp3 5G', modelName: 'SM-F707N', os: '11', port:''},
        {dno : 4, deviceName : '갤럭시 S10', modelName: 'SM-G973N', os: '11', port:''}
    ]

    let apps = [
        {ano : 1, serviceName : 'KT 기가지니'},
        {ano : 2, serviceName : '올레 tv play'},
        {ano : 3, serviceName : '원내비'},
        {ano : 4, serviceName : '마이 케이티'},
        {ano : 5, serviceName : 'KT 멤버쉽'},
        {ano : 6, serviceName : '기가지니 홈 IoT'},
    ]

    const [deviceList, setDeviceList] = useState(devices);
    const [appList, setAppList] = useState(apps);

    const [selectedDevice, setSelectedDevice] = useState(new Map());
    const [selectedApp, setSelectedApp] = useState(new Map());


    const DynamicDesktop = dynamic(
      // For no SSR
      () => import("../components/Device_screen").then((mod) => mod.Desktop),
      { ssr: false }
    );

    const DynamicPhone = dynamic(
      // For no SSR
      () => import("../components/Device_screen").then((mod) => mod.Phone),
      { ssr: false }
    );

    return (
      <Layout currentPage={currentPage}>
        <section className="bg-white">
          <div className="container px-6 py-8 mx-auto">
            <div name="nameBar" className="py-2">
              <p className="text-2xl pl-2 pb-4" name="subject">
                자동 테스트 예약
              </p>
              <hr className="border border-black" />
            </div>
            <div className="lg:flex lg:-mx-2"></div>
            <div className="grid grid-cols-3 flex">
              <div className="h-screen border">
                <div>
                  <h2>단말기기 선택</h2>
                </div>
                <div>
                  <div className="w-3/4 bg-white rounded shadow-sm">
                    <div className="my-3">
                      <input
                        type="text"
                        id="input-group-search"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="기기명 검색"
                      />
                    </div>
                    <div>
                      <ul>
                        {deviceList !== undefined ? (
                          <li>
                            <DeviceBox deviceInfo={deviceList[0]}></DeviceBox>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-screen border">
                <div>
                  <h2>테스트 앱 선택</h2>
                </div>
              </div>
              <div className="h-screen border">
                <div className="m-1 border">
                  <p>날짜 선택</p>
                </div>
                <div>
                  <div className="m-1 border">
                    <p>선택 확인</p>
                    <p>선택 기기</p>
                    <p>테스트 앱</p>
                    <p>스크립트 파일</p>
                  </div>
                </div>
                <div>
                  <button className="py-4 bg-slate-700 w-3/4 rounded text-white text-lg hover:bg-slate-400 hover:text-gray-900 shadow-lg font-bold transition duration-150 ease-in-out">
                    예약 하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}