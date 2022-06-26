import axios from "axios";
import { useEffect } from "react";

export default function noticeboardcontent (props) {
    const ano = props.ano;

    useEffect(() => {
        axios.get(`http://localhost:8080/nb/arti/${ano}`).then
    },[])
    
}