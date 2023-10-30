"use client"
import Button from "@/components/Button";
import FeatureBlock from "@/components/FeatureBlock";
import FeatureCard from "@/components/FeatureCard";
import Heading from "@/components/Heading";
import TestimonialCard from "@/components/TestimonialCard";
import { clients } from "@/constants/clients";
import { features, featuresBlock } from "@/constants/features";
import { testimonials } from "@/constants/testimonials";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data=> console.log(data))
  }
  ,[])
  
  return (
    <main className=" overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container  ">
        <Image
          src="/bg.png"
          width={1920}
          height={1080}
          alt="test"
          className="absolute -z-50 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen -top-20 left-0 opacity-10"
        />
        {/* home  */}
        <section id="home" className=" relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p
                className="capaitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl
           hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all"
              >
                New Features Is Now Available.
                <ArrowRightCircle className=" inline ml-1 h-4 w-4" />
              </p>
              <Heading title="A CRM dashboard for engineering teams" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team&rsquo;s productivity with Ocean CRM
                dashboard that streamlines project management, collaboration,
                and data-driven decision-making.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="primary">
                  get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
              <Image
                src="/portfolio4.svg"
                 
                alt=""
                width={670}
                height={370}
                className=" mx-auto shadow-3xl rounded-xl border-2 border-[#282D45]"
              />
            </div>
          </div>
        </section>
        {/* home  */}

        {/* Clients section */}

        <section
          id="client"
          className=" max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Clients section */}
        {/* Features section */}
        <section id="features" className=" flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28">
          {/* part 1 */}
          <div className=" relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <Image
              src="/bg2.png"
              width={1920}
              height={1080}
              alt="second banner"
              className="absolute -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
            />
             <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
              <Button>get started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          {/* part 1 */}
           {/* Part 2 */}
           {featuresBlock.map((item, index) => (
            <FeatureBlock key={index} {...item} />
          ))}
          {/* Part 2 */}
        </section>
        {/* Features section */}
          {/* Testimonials section */}
          <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Testimonials section */}

      </div>
    </main>
  );
}
