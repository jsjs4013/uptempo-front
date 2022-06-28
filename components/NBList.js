import { useState, useEffect } from "react";
import axios from "axios";

export default function NBList(props) {
  const [pageNum, setPageNum] = useState(1);
  const [articleList, setArticleList] = useState([]);

  const selectPageNum = (number) => {
    setPageNum(number);
  };

  const selectArticle = (ano) => {
    props.selectArticle(ano);
  };
  
  const clickEditButton = () => {
    props.clickEditButton();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/nb?pageNumber=${pageNum}&pageSize=10`)
      .then((res) => {
        setArticleList(res.data);
      });
  }, [pageNum]);

  useEffect(() => {
      axios
        .get(`http://localhost:8080/nb?pageNumber=${pageNum}&pageSize=10`)
        .then((res) => {
          setArticleList(res.data);
        })
        .catch((err) => console.log(err));
    
  }, []);

  return (
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
          {articleList !== undefined
            ? articleList.map((item) => {
                return (
                  <>
                    <tr className="bg-white border-b border-gray-700">
                      <td className="px-4 py-4 text-lg font-bold text-red-600 text-2xl">
                        {item.type}
                      </td>
                      <td
                        className="px-4 py-4 text-lg font-bold cursor-pointer"
                        onClick={selectArticle(item.ano)}
                      >
                        {item.subject}
                      </td>
                      <td className="px-4 py-4 text-lg">{item.writer}</td>
                      <td className="px-4 py-4 text-lg">{item.date}</td>
                    </tr>
                  </>
                );
              })
            : articleList.length <= 0 ? (
              <div>작성 된 글이 없습니다.</div>
            ): (<div>에러 발생</div>)}
        </tbody>
      </table>
    </div>
  );
}
