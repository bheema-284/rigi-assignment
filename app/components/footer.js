'use client'

import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { EnvelopeOpenIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/travelxp/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/travelxptv/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/i/flow/login?redirect_after_login=%2Ftravelxp",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

export default React.memo(function Footer(props) {
  const pathname = usePathname();
  return (
    <footer
      className={`mb-3 ${
        pathname === "/en"
          ? "bg-gray-900 text-white"
          : "border-t-2 bg-white text-black"
      } ${pathname === "/en/login" ? "hidden" : "block"}`}
      aria-labelledby="footer-heading"
    >
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-5">
        <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-5">
          <div className="xl:col-span-1">
            <Image
              src={`data:image/jpeg;base64,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`}
              alt="Company name"
              width={170}
              height={10}
            />
            <p className="text-base text-gray-500">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex flex-col items-center gap-5 mt-4 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.travelxp&amp;hl=en_IN"
                target="_blank"
                rel="noreferrer"
                title="Google Play"
                className="googleplay"
              >
                <Image
                  src="https://images.travelxp.com/images/txpin/vector/general/googleplay.svg"
                  alt="google play"
                  width={138}
                  height={40.72}
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/travelxp/id1274547336"
                target="_blank"
                rel="noreferrer"
                title="App Store"
              >
                <Image
                  src="https://images.travelxp.com/images/txpin/vector/general/applestore.svg"
                  alt="apple store"
                  width={138}
                  height={41.84}
                />
              </a>
            </div>
          </div>
          {/* Solutions Section */}
          <div className="mt-5 md:mt-0">
            <h3 className="text-base font-medium text-gray-400">Solutions</h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.solutions.map((item) => (
                <li
                  key={item.name}
                 
                >
                  <a href={item.href} className={`text-base ${
                    pathname === "/en"
                      ? " text-white"
                      : " text-black"
                  }`} >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Support Section */}
          <div className="mt-5 md:mt-0">
            <h3 className="text-base font-medium text-slate-400">Support</h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className={`text-base ${
                    pathname === "/en"
                      ? " text-white"
                      : " text-black"
                  }`}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company Section */}
          <div className="mt-5 md:mt-0">
            <h3 className="text-base font-medium text-slate-400">Company</h3>
            <ul role="list" className="mt-4 space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className={`text-base ${
                    pathname === "/en"
                      ? " text-white"
                      : " text-black"
                  }`}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Section */}
          <div className="mt-12 md:mx-auto md:mt-0 md:w-60">
            <h3 className="text-base font-medium text-slate-400">Contact Us</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li className="flex items-center gap-2">
                <PhoneIcon className={`text-base ${
                    pathname === "/en"
                      ? " text-white"
                      : " text-black"
                  }`} width={20} height={20} />
                <a className={`text-base ${
                    pathname === "/en"
                      ? " text-white"
                      : " text-black"
                  }`}>+91 88 2813 9797</a>
              </li>
              <li className="flex items-start gap-2">
                <EnvelopeOpenIcon
                  className={` ${
                    pathname === "/en"
                      ? " text-white"
                      : " text-black"
                  }`}
                  width={20}
                  height={20}
                />
                <a
                  href="mailto:customercare@travelxp.com"
                  className={`text-base ${
                    pathname === "/en"
                      ? " text-white"
                      : " text-black"
                  }`}
                >
                  customercare@travelxp.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-5 mt-5 border-t border-gray-200 sm:flex-row">
          <p className="text-xs text-gray-400 sm:order-2">
            &copy; {dayjs().format("YYYY")} Travelxp Limited. All rights
            reserved.
          </p>
          <div className="flex space-x-6 sm:order-2">
          {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});