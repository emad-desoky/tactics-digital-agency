import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: <span className="text-[rgb(255,228,0)]">2013</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white md:text-3xl font-normal mb-8 space-y-4">
            A passionate
            <span className="text-[rgb(255,228,0)]">E-marketing</span> student
            begins as a social media marketer for a real estate corporate.
          </li>
          <li className="text-white md:text-3xl font-normal mb-8 space-y-4">
            The idea of freelancing sparks an entrepreneurial journey.
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2014</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Formed the first soft team and established Marketerak Agency.
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Served four different industries and worked with six companies.
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Secured the first overseas collaborations with Mahfouz Tourism in
            the UAE and EET Global in Malaysia.
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2015</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Completed an integrated digital team to expand services.{" "}
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Achieved a 50% real estate client base.{" "}
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Invested 50k EGP in digital ads for the Sheikh Zayed Al Rabwa
            project.
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Opened the first workspace branch in King Faisal Street, Giza.
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2016</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Attempted rebranding but continued under the same name due to
            challenges.
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2017</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Transitioned back to a mobile soft team to meet clients directly.{" "}
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Enhanced proficiency by refining operational details.{" "}
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Formed the first media buying team specializing in social media ads.
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2018</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Successfully rebranded to
            <span className="text-[rgb(255,228,0)]">TACTICS®</span>.
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Expanded work across the GCC market, especially in real estate.
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2019</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Diversified services to work across various industries.
            <span className="text-[rgb(255,228,0)]">TACTICS®</span>.
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Established a professional design team to enhance digital campaigns.
          </li>
          <li className="text-white md:text-2xl font-normal mb-8">
            Achieved notable results, such as a 3.6% conversion rate for
            <span className="text-[rgb(255,228,0)]">CityScape Egypt</span>.
            campaigns.
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2020</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Expanded real estate marketing abroad, serving developers in the
            <span className="text-[rgb(255,228,0)]">UAE and KSA.</span>.
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2021</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Innovated real estate marketing with visually compelling ads and
            video production.
          </li>
          <li className="text-white  md:text-2xl font-normal mb-8">
            Opened the first official agency branch in Nasr City, Cairo.
          </li>
          <li className="text-white  md:text-2xl font-normal mb-8">
            Established a media production studio specializing in videography,
            voiceovers, and product photography.{" "}
          </li>
        </ul>
      ),
    },
    {
      title: <span className="text-[rgb(255,228,0)]">2022</span>,
      content: (
        <ul className="list-disc">
          <li className="text-white  md:text-2xl font-normal mb-8">
            Launched a business development team to assist startups with
            marketing and operations.
          </li>
          <li className="text-white  md:text-2xl font-normal mb-8">
            Opened the Alexandria branch in AlBitach, specializing in real
            estate digital services.{" "}
          </li>
          <li className="text-white  md:text-2xl font-normal mb-8">
            Formed an in-house media production team, including photographers,
            videographers, and editors.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
