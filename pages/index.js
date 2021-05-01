import styles from "../styles/Home.module.css";
import Nav from "./nav";
import Footer from "./footer";
import HTMLFlipBook from "react-pageflip";
import React from "react";

const pageList = [
  "/SamplePages/BookCover.jpg",
  "/SamplePages/page-1.jpg",
  "/SamplePages/page-2.jpg",
  "/SamplePages/page-4a.jpg",
  "/SamplePages/page-5.jpg",
  "/SamplePages/page-6.jpg",
  "/SamplePages/page-8.jpg",
  "/SamplePages/page-10.jpg",
  "/SamplePages/page-3.jpg",
  "/SamplePages/page-4b.jpg",
  "/SamplePages/page-5a.jpg",
  "/SamplePages/page-7b.jpg",
  "/SamplePages/page-9a.jpg",
  "/SamplePages/lastpage.jpg",
];

export default function Home() {
  
  return (
    <div className="bg-gray-900">
      <Nav />
      <div className="ml-16 mt-8">
        <div className="content-center justify-center items-center align-middle">
          <HTMLFlipBook
            width={600}
            height={600}
            // showCover="true"
            flippingTime="2000"
          >
          <Page number="1" fileName="/SamplePages/BookCover.jpg"></Page>
          <Page number="2" fileName="/SamplePages/page-1.jpg"></Page>
          <Page number="3" fileName="/SamplePages/page-2.jpg"></Page>
          <Page number="4" fileName="/SamplePages/page-3.jpg"></Page>
          <Page number="5" fileName="/SamplePages/page-4a.jpg"></Page>
          <Page number="6" fileName="/SamplePages/page-4b.jpg"></Page>
          <Page number="7" fileName="/SamplePages/page-5.jpg"></Page>
          <Page number="8" fileName="/SamplePages/page-5a.jpg"></Page>
          <Page number="9" fileName="/SamplePages/page-6.jpg"></Page>
          <Page number="10" fileName="/SamplePages/page-7b.jpg"></Page>
          <Page number="11" fileName="/SamplePages/page-8.jpg"></Page>
          <Page number="2" fileName="/SamplePages/page-9a.jpg"></Page>
          <Page number="1" fileName="/SamplePages/lastpage.jpg"></Page>
          </HTMLFlipBook>
        </div>
        <div className="relative -top-20 left-3 z-auto" >
          <div className="shadow-lg rounded-lg bg-gray-600 w-72">
            <div className="flex items-center justify-between py-2 px-3">
              <h1 className="text-white font-bold">₹ 198 </h1>
              <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_H5SaT7FbMFdDdH" async> </script> </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Page = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
    <img src={props.fileName} />
    </div>
  );
});

