import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsGithub, BsTwitter, BsYoutube, BsLinkedin} from 'react-icons/bs'

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-black">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
        <div className="mt-5">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r bg-black rounded-lg text-white dark:bg-white dark:text-black">
              Zafri's
            </span>
            Blog
          </Link>
          </div>
        
        <div className="grid grid-cols-2 gap-8 mt-5 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                google
              </Footer.Link>
              <Footer.Link
                href="https://yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                yahoo
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow Me" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Footer.Link>
              <Footer.Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy & Policy
              </Footer.Link>
              <Footer.Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bug Bounty Programme
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Zafri's Blog" year={new Date().getFullYear()} />
        <div className="flex gap-5 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsGithub}/>
            <Footer.Icon href="#" icon={BsLinkedin}/>
            <Footer.Icon href="#" icon={BsYoutube}/>
        </div>
      </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
