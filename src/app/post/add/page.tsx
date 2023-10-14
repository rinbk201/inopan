"use client";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const newPost = async (title:string,description:string|undefined) => {
    const res = await fetch(`http://localhost:3000/api/post`,
    {
        method: "POST",
        body: JSON.stringify({title,description}),
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    return res.json
}
//userRerationの追加関数をここに追記する


const AddPost = ()=>{
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if(titleRef.current?.value&&descriptionRef.current?.value){
            newPost(titleRef.current?.value!,descriptionRef.current?.value)
        }
        setLoading(false);
        router.push("/");
        router.refresh();

    }

    return( 
    <>
 {loading ? <CircularProgress /> : (
  <div className="w-full m-auto flex my-4">
    <div className="flex flex-col justify-center items-center m-auto">
      <p className="text-2xl text-slate-200 font-bold p-3">勉強会新規作成 🚀</p>
      <form onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          placeholder="タイトルを入力"
          type="text"
          className="rounded-md px-4 w-full py-2 my-2"
        />
        <textarea
          ref={descriptionRef}
          placeholder="募集詳細を入力"
          className="rounded-md px-4 py-2 w-full my-2"
        ></textarea>
        <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
          投稿
        </button>
        <p className="text-2xl text-slate-200 font-bold p-3">
            締め切り
        </p>
        <input type="date" className="rounded-md px-4 w-full py-2 my-2"/>
      </form>
    </div>
  </div>
 )}
</>);
}

export default AddPost;