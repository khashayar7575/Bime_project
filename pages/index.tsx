import type { NextPage } from "next";
import { Navbar } from "../exteras/components/Navbar";
import { Hero } from "../exteras/components/desktop/Hero";
import { InsuranceCompanies } from "../exteras/components/desktop/InsuranceCompanies";
import { OnlineServices } from "../exteras/components/desktop/OnlineServices";
import { Blog } from "../exteras/components/desktop/Blog";
import { Comments } from "../exteras/components/desktop/Comments";
import { Companies } from "../exteras/components/desktop/Companies";
import { Footer } from "../exteras/components/desktop/Footer";
import React from "react";
import { useRouter } from "next/router";
import {GetStaticProps} from "next";



const Home: NextPage = () => (
  <>
    {/* <Navbar /> */}
    <Hero />
    <InsuranceCompanies />
    <OnlineServices />
    <Blog />
    <Comments />
    <Companies />
    <Footer />
  </>
);

export default Home;

