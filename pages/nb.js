import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import NBList from "../components/NBList";
import NBEdit from "../components/NBEdit";
import NBArticle from "../components/NBArticle";
import { list } from "postcss";

export default function NB() {
  let currentPage = 5;
  const [mode, setMode] = useState(0);
  const [article, setArticle] = useState({});
  const [pageNum, setPageNum] = useState(1);
  const [articleList, setArticleList] = useState([]);
  const [ano, setAno] = useState();

  const getList = () => {
    axios
      .get(`http://localhost:8080/nb?pageNumber=${pageNum}&pageSize=10`)
      .then((res) => {
        if (res.status === 200) {
          setArticleList(res.data);
        } else {
          alert("아직 작성된 글이 없습니다.");
        }
        return [];
      })
      .catch((err) => {
        console.log(err);
        alert("데이터를 받아오는데 실패하였습니다.");
        return [];
      });
  };

  const getArticle = async () => {
    axios
      .get(`http://localhost:8080/nb/arti/${ano}`)
      .then((res) => {
        if (res.status === 200) {
          setArticle(res.data);
          //setMode(1)
        } else {
          alert("글을 불러오는데 실패하였습니다.");
        }
      })
      .catch((err) => console.log(err));
  }

  const registerArticle = async (contents) => {
    console.log("reg func called");
    axios
      .post("http://localhost:8080/nb", {
        content: contents.content,
        password: contents.password,
        subject: contents.subject,
        type: contents.type,
        writer: contents.writer,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("게시글이 등록되었습니다.");
        } else alert("게시글 등록을 실패하였습니다.");
      })
      .catch((err) => {
        console.log(err);
        alert("에러 발생");
        return;
      })
      .then(() => {
        setMode(0);
        return;
      });
  };

  useEffect(() => {
    // if (mode === 1 || mode === 2) {
    //   setMode(0);
    // }
  }, []);

  useEffect(() => {
    if (ano !== undefined) {
      getArticle();
    }
  }, [ano]);

  useEffect(() => {
    if (mode === 0) {
      getList();
    }
  }, [mode]);

  return (
    <Layout>
      <Navbar currentPage={currentPage} />
      <section className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div name="nameBar" className="py-2">
            <p className="text-2xl pl-2 pb-4">게시판</p>
            <hr className="border border-black" />
          </div>

          {mode === 0 ? (
            <NBList
              articleList={articleList}
              clickEditButton={() => {
                setMode(2);
              }}
              selectAno={(n) => {
                setAno(n);
              }}
              clickArticle={() => {
                setMode(1);
              }}
            ></NBList>
          ) : mode === 1 ? (
            <div>
              <NBArticle
                clickListButton={() => {
                  setMode(0);
                }}
                ano={ano}
                article={article}
              ></NBArticle>
            </div>
          ) : (
            <div>
              <NBEdit
                clickListButton={() => {
                  setMode(0);
                }}
                registerArticle={registerArticle}
              ></NBEdit>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
