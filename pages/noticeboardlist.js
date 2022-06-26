import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export default function NoticeBoardList() {
  let currentPage = 5;
  const [articleList, setArticleList] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/nb?pageNumber=1&pageSize=10")
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const clickAritcle = (ano) => {

  }

  return (
    <Layout>
      <Navbar currentPage={currentPage} />
      <section className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div name="nameBar" className="py-2">
            <p className="text-2xl pl-2 pb-4">게시판</p>
            <hr className="border border-black" />
          </div>
          <div className="flex justify-center">
            <table className="min-2-full table-auto text-center w-11/12">
              <thead className="justify-between">
                <tr className="border-t-2 border-b-2 bg-slate-800 text-white">
                  <th className="px-2 py-2"></th>
                  <th className="px-64 py-2">제목</th>
                  <th className="px-2 py-2">작성자</th>
                  <th className="px-2 py-2">작성일</th>
                </tr>
              </thead>
              <tbody>
                { articleList !== undefined ?
                    articleList.map((item) => {
                  return (
                    <>
                      <tr className="bg-white border-b border-gray-700">
                        <td className="px-4 py-4 text-lg font-bold text-red-600 text-2xl">{item.type}</td>
                        <td className="px-4 py-4 text-lg font-bold cursor-pointer" onClick={clickAritcle(item.ano)}>{item.subject}</td>
                        <td className="px-4 py-4 text-lg">{item.writter}</td>
                        <td className="px-4 py-4 text-lg">{item.date}</td>
                      </tr>
                    </>
                  );
                }) : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
