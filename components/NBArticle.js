import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Navbar from "./SubNavbar";

export default function NBArticle(props) {
  const ano = props.ano;
  //const [article, setArticle] = useState(props.article);

  return (
    <div className="w-full shadow-2xl p-2 rounded-lg">
      <div>
        <button
          className="w-24 py-2 px-2 border-2 font-bold rounded-md shadow-sm hover:bg-gray-700 hover:text-white hover:shadow-lg focus:bg-gray-500 focus:shadow-sm active:bg-gray-500 active:shadow-sm transition duration-150 ease-in-out mt-2 mb-4"
          onClick={props.clickListButton}
        >
          ←  목록으로
        </button>
      </div>
      <div className="flex rounded-sm border-b-2 pb-2 border-gray-600 place-content-between p-4 mx-4">
        <div className="px-4 text-2xl font-bold">{props.article.subject}</div>
        <div className="grid grid-cols-2 px-8">
          <div className="">
            <span className="font-bold mx-2">작성자 </span>
            <span>{props.article.writer}</span>
          </div>
          <div className="">
            <span className="font-bold mx-2">작성일자 </span>
            <span>{props.article.date}</span>
          </div>
        </div>
      </div>
      <div className="my-4 px-6 h-fit min-h-screen py-3 text-lg">
        <pre className="whitespace-pre-wrap break-words">{props.article.content}</pre>
      </div>
    </div>
  );
}
