import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dock, DockIcon } from "@/component/Blog/Dock/Dock";

const DockHeadsup = ({ encodedUrl }) => {
  const shareLinks = [
    {
      name: "whatsapp",
      href: `https://api.whatsapp.com/send?text=${encodedUrl}`,
      icon: "/images/whatsapp.png",
    },
    {
      name: "twitter",
      href: `https://twitter.com/share?url=${encodedUrl}`,
      icon: "/images/twitter.png",
    },
    {
      name: "linkedin",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`,
      icon: "/images/linkedin.png",
    },
    {
      name: "instagram",
      href: `https://www.instagram.com/share?url=${encodedUrl}`,
      icon: "/images/instagram.png",
    },
    {
      name: "facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: "/images/facebook.png",
    },
  ];

  return (
    <div className="flex flex-row gap-2">
      <Dock magnification={60} distance={100} className="mt-0">
        {shareLinks.map((link) => (
          <DockIcon className="bg-headupb2b/10 p-2.5 hover:bg-slate-100 dark:bg-white/10 dark:hover:bg-slate-800">
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.icon}
                height={25}
                width={25}
                alt={`${link.name} share`}
              />
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default DockHeadsup;
