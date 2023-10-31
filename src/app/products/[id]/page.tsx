import Heading from "@/components/Heading";
import { Posts, Products } from "@/types/interfaces";

import Image from "next/image";
import Link from "next/link";
import { cache } from "react";

interface postsProps extends Posts {}

const getDate = cache(async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  return res.json();
});

interface idParams {
  params: { id: string };
}

export default async function Product({ params: { id } }: idParams) {
  console.log(id);
  const item: Products = await getDate(id);

  return (
    <div className="container mt-24 ">
      <Heading title="All Products" isCentered={true} />

     <div className="flex flex-col mt-4 border-2 border-cyan-800 rounded-xl p-4 ">
     <article
        className={`flex flex-col lg:flex-row items-start bg-slate-800 justify-between gap-8  `}
      >
        <Image
          src={item.thumbnail}
          width={370}
          height={370}
          alt="feature"
          className="basis-5/12 w-full rounded-xl shadow-lg"
        />
        <div className="basis-6/12 flex flex-col  md:text-center lg:text-start gap-4 md:gap-6">
          <Heading title={item.title} />
          <p className="lg:max-w-[40rem]">{item.description}</p>
        </div>
       
      </article>
      <section
          id="client"
          className=" items-center max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4"
        >
          {item.images.map((image, index) => (
            <Image
              key={index}
              src={image }
              width={100}
              height={100}
              alt={""}
              className="w-40 h-40 md:w-full mx-auto rounded-lg hover:w-72  "
            />
          ))}
        </section>
     </div>
      <div className="  capitalize  max-w-[62rem] mx-auto grid grid-cols-1 indent-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-4 ">
        <Image
          src="/bg2.png"
          width={1920}
          height={1080}
          alt="second banner"
          className=" fixed bg-repeat-y -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
        />
      </div>
    </div>
  );
}
