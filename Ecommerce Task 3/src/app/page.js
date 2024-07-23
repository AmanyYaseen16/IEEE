'use client';
import "./page.css";
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import HomePage from "@/pages/HomePage/HomePage";
import Sidebar from "@/components/Sidebar/Sidebar";


export default function Home() {
  return (
    <div>
     <Header />
     <Sidebar/>
     <HomePage/>
       <Footer />
    </div>

  );
}
