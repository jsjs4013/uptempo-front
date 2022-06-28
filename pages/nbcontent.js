import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/SubNavbar";

export default function NBcontent (props) {
    const ano = props.ano;
    
    return (
        <Layout>
        <Navbar currentPage={currentPage} />
        <section className="bg-white">
          <div className="container px-6 py-8 mx-auto">
            <div name="nameBar" className="py-2">
              <p className="text-2xl pl-2 pb-4" name="deviceName">
                {deviceName} 예약 신청 / 현황
              </p>
              <hr className="border border-black" />
            </div>
            </div>
            </section>
        </Layout>
    )
}