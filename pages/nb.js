import axios from "axios";
import { useEffect, useState } from "react"
import Layout from "../components/Layout";
import Navbar from "../components/SubNavbar";
import NBList from "../components/nblist";

export default function NB () {
  let currentPage = 5;
    const modes = ["list", "read", "edit"];
    const [mode, setMode] = useState(modes[0]);
    const [article, setArticle] = useState();

    const selectArticle = () => {
        axios.get(`http://localhost:8080/nb/arti/${ano}`).then((res) => {
          let article = res.data;  
          setArticle(article);
        }).catch((err) => console.log(err));

        setMode(modes[1]);
    }

    const clickEditButton = () => {
        setMode(modes[2]);
    }

    return(
        <Layout>
        <Navbar currentPage={currentPage} />
        <section className="bg-white">
          <div className="container px-6 py-8 mx-auto">
            <div name="nameBar" className="py-2">
              <p className="text-2xl pl-2 pb-4">게시판</p>
              <hr className="border border-black" />
            </div>
            <div>
              <button className="bg-[#2b3d51] hover:bg-slate-900 text-white font-bold rounded w-32 h-12 max-w-lg min-w-fit ease-in-out focus:shadow-lg active:bg-slate-700 active:shadow-lg transition">글 작성</button>
            </div>
            {(mode === modes[0]) ? (
                {/**<NBList selectArticle={selectArticle} clickEditButton={clickEditButton}></NBList>*/}
            ): (mode === modes[1]) ? (<div>

            </div>) : (<div></div>)}
                </div>
            </section>
        </Layout>
    )
}