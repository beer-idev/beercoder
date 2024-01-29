import React from "react";
import IconContact from "../components/IconContact";

export default function Footer() {
  return (
    <div className="">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
          <IconContact />
          </div>
        </div>
        <div className="sm:mb-14 md:mb-14 lg:mb-0 xl:mb-0 2xl:mb-0">
          <p>
            Copyright© {new Date().getFullYear()} - All right reserved by &nbsp;
            <a className="link" href="./">
              BEERCODER
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
