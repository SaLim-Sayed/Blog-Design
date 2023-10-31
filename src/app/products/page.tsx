import { Posts, Products } from "@/types/interfaces";
import { Quote } from "lucide-react";
import Image from "next/image";

interface postsProps extends Posts {}

async function getDate() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Products() {
  const data = await getDate();
  const products = data.products;
  return (
    <div className=" capitalize mt-24 max-w-[62rem] mx-auto grid grid-cols-1 indent-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-4 ">
      <Image
        src="/bg2.png"
        width={1920}
        height={1080}
        alt="second banner"
        className=" fixed bg-repeat-y -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
      />
      {products.map((item: Products) => (
        <div
          className="bg-slate-800 hover:bg-slate-950 transition-all   p-4 shadow-2xl  border-cyan-700  py-2 my-2 text-center rounded-xl"
          key={item.id}
        >
            <div className="flex max-h-[10rem] items-start gap-2">
           <div className="relative">
           <Image
              src={item.thumbnail}
              width={150}
              height={10}
              alt={item.title}
              className="rounded-lg  h-[10rem] "
            />
             
             <small className=" absolute bg-slate-800/50  bottom-0 right-0 text-sky-50 font-semibold">
                -{item.discountPercentage}%
              </small>
           </div>
            <div className="flex flex-col text-start">
              <h4 className="text-slate-100 indent-0  f   border-b-2">
                {item.title}
                 
              </h4>
              <small className="text-sky-600 font-semibold">
              {item.brand}
              </small>
              <small className="text-sky-600 font-semibold">
              price : {item.price}$
              </small>
            </div>
            
          </div>
          <p className="text-lg text-center md:text-start">
              
              {item.description}
            </p>
        </div>
      ))}
    </div>
  );
}

export async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
