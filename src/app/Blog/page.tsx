import Heading from "@/components/Heading";
import { Posts } from "@/types/interfaces";
import { Quote } from "lucide-react";
import Image from "next/image";

interface postsProps extends Posts {}

async function getDate() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const posts = await getDate();
  return (
    <div className="mt-24">
      <Heading title="All Posts" isCentered={true} />
      <div className=" capitalize  max-w-[62rem] mx-auto grid grid-cols-1 indent-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-4 ">
        <Image
          src="/bg2.png"
          width={1920}
          height={1080}
          alt="second banner"
          className=" fixed bg-repeat-y -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
        />
        {posts.map((item: Posts) => (
          <div
            className="hover:bg-slate-950   bg-slate-800    p-4 shadow-2xl  border-cyan-700  py-2 my-2 text-center rounded-xl"
            key={item.id}
          >
            <div className="flex  gap-x-4 border-sky-600/20 font-extrabold tracking-wide border-b-2  ">
              <Quote className="flex items-start min-w-[3rem] min-h-[3rem] text-sky-600" />
              <h1 className="flex text-start text-sky-600 "> {item.title.slice(0,18)}</h1>
            </div>
            <p className=" flex   text-lg   text-justify">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
