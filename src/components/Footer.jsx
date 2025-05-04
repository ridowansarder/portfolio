import React from "react";
import {
    Linkedin,
    Facebook,
    Instagram,
  } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-10 ">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <p className="text-muted-foreground mb-4">
          &copy; {new Date().getFullYear()} Ridowan Sarder. All rights reserved.
        </p>
        <div className="pt-2">
          <h4 className="font-medium mb-4"> Connect With Me</h4>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.linkedin.com/in/ridowan-sarder/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/ridowan_sarder/" target="_blank">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/ridowansarder06" target="_blank">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
