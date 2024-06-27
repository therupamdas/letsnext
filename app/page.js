"use client"
import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="triplet">
        <Link className="blok" href={"/videoediting"}>
            <div className="t1">
                Video Editing
            </div>
        </Link>
        <Link className="blok" href={"/photoediting"}>
            <div className="t1">
                Photo Editing
            </div>
        </Link>
        <Link className="blok" href={"/graphicdesigning"}>
            <div className="t1">
                Graphic Designing
            </div>
        </Link>
    </div>

    </>

        );
}
