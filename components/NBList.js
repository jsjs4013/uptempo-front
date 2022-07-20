import { useState, useEffect } from "react";
import axios from "axios";

export default function NBList(props) {
  return (
    <div className="shadow-sm p-2 rounded">
      <div className="">
        <button
          className="bg-[#2b3d51] hover:bg-slate-900 text-white font-bold rounded w-24 h-12 max-w-lg min-w-fit ease-in-out focus:shadow-lg active:bg-slate-700 active:shadow-lg transition"
          onClick={props.clickEditButton}
        >
          글 작성
        </button>
      </div>
      <div className="flex justify-center py-2">
        <table className="min-2-full table-auto text-center w-full">
          <thead className="justify-between">
            <tr className="border-t-2 border-b-2 bg-slate-800 text-white">
              <th className="px-2 py-2"></th>
              <th className="px-64 py-2">제목</th>
              <th className="px-2 py-2">작성자</th>
              <th className="px-2 py-2">작성일</th>
            </tr>
          </thead>
          <tbody>
            {props.articleList !== undefined
              ? props.articleList.map((item) => {
                  return (
                    <>
                      <tr
                        id={item.ano}
                        className="bg-white border-b border-gray-70 hover:shadow-lg hover:bg-gray-100 transition ease-in-out duration-150"
                      >
                        <td className="px-4 py-4 text-lg font-bold text-red-600 text-2xl">
                          {item.type}
                        </td>
                        <td
                          className="px-4 py-4 text-lg font-bold cursor-pointer"
                          onClick={ async () => {
                            await props.selectAno(item.ano);
                            await props.clickArticle();
                          }}
                        >
                          {item.subject}
                        </td>
                        <td className="px-4 py-4 text-lg">{item.writer}</td>
                        <td className="px-4 py-4 text-lg">{item.date}</td>
                      </tr>
                    </>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <nav aria-label="Page navigation">
          <ul className="inline-flex space-x-2 text-xl">
            <li>
              <button className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-red-100">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
                </svg>
              </button>
            </li>
            <li>
              <button className="w-10 h-10 text-gray-600 transition-colors duration-150 rounded-full hover:bg-red-100">
                1
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center w-10 h-10 text-gray-600 transition-colors duration-150 rounded-full hover:bg-red-100">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
