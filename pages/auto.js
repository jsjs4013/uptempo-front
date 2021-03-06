import Layout from "../components/Layout"
import Navbar from "../components/Navbar";
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import DeviceBox from "../components/DeviceBox";
import { Tab } from '@headlessui/react'
import AutoDevicePN from "../components/AutoDevicePN";
import AutoAppPN from "../components/AutoAppPN";
import AutoAcceptPN from "../components/AutoAcceptPN";

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

    const [mode, setMode] = useState(1);
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
            <div className="lg:flex lg:-mx-2" />
            <div className="border rounded shadow-lg p-2 max-h-screen mt-3">
              {mode === 1 ? (
                deviceList !== undefined ? (
                  <AutoDevicePN
                    onClickNext={() => {
                      setMode(2);
                    }}
                    deviceList={deviceList}
                    selectedDevice={selectedDevice}
                  />
                ) : null
              ) : mode === 2 ? (
                <AutoAppPN
                  appList={appList}
                  onClickPrev={() => {
                    setMode(1);
                  }}
                  onClickNext={() => {
                    setMode(3);
                  }}
                />
              ) : mode === 3 ? (
                <AutoAcceptPN
                  onClickPrev={() => {
                    setMode(2);
                  }}
                />
              ) : null}
            </div>
          </div>
        </section>
      </Layout>
    );
}