import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import {
    SiInstagram,
    SiX,
    SiLinkedin,
    SiDiscord,
    SiTelegram,
    SiYoutube,
    IconType,
} from "@icons-pack/react-simple-icons";
import { Fragment } from "react";

type FooterLink = {
    name: string;
    url: string;
    icon: IconType;
};

export default function Home() {
    const footerLinks: FooterLink[] = [
        {
            name: "Twitter",
            url: "https://twitter.com/wemakedevs",
            icon: SiX,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/company/wemakedevs",
            icon: SiLinkedin,
        },
        {
            name: "Discord",
            url: "https://discord.gg/wemakedevs",
            icon: SiDiscord,
        },
        {
            name: "YouTube",
            url: "https://youtube.com/@wemakedevs",
            icon: SiYoutube,
        },
        {
            name: "Telegram",
            url: "https://t.me/WeMakeDevs",
            icon: SiTelegram,
        },
        {
            name: "Instagram",
            url: "https://instagram.com/wemakedevs",
            icon: SiInstagram,
        },
    ];

    return (
        <div className='min-h-dvh flex flex-col bg-[#141413] text-white px-5 md:px-10 lg:px-20'>
            <main className='grow flex flex-col gap-20 lg:gap-24 justify-center items-center'>
                <Image
                    src={logo}
                    alt='WeMakeDevs logo'
                    className='w-40 lg:w-48'
                />
                <div className='space-y-10 md:space-y-12'>
                    <h1 className='text-2xl text-center md:text-5xl lg:text-6xl font-semibold flex flex-col items-center justify-center gap-2 md:gap-3'>
                        We are currently under
                        <span className='block px-3 py-1 bg-[#caffc7] text-[#003d38] rounded-xl'>
                            development
                        </span>
                    </h1>
                    <p className='text-sm md:text-base max-w-full md:max-w-[75%] lg:max-w-[65%] mx-auto text-white/85 text-center'>
                        We&apos;re currently working on revaming this website.
                        To get updates about the community and this website,
                        follow us on our socials. Visit{" "}
                        <Link
                            href='https://techwithkunal.com/courses'
                            className='text-white underline hover:no-underline'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            this page
                        </Link>{" "}
                        to get course materials. Thank you!
                    </p>
                </div>
            </main>
            <footer className='flex justify-center flex-col items-center md:flex-row md:justify-between gap-5 py-5 border-t border-white/25'>
                <Link
                    href='mailto:kunal@wemakedevs.org'
                    className='hover:text-[#caffc7] hover:underline'
                >
                    kunal@wemakedevs.org
                </Link>
                <div className='flex gap-4 items-center text-white justify-center'>
                    {footerLinks.map((link, index) => (
                        <Fragment key={index}>
                            <Link
                                href={link.url}
                                aria-label={link.name}
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <link.icon
                                    title={link.name}
                                    size={18}
                                    color='#ffffff'
                                />
                            </Link>
                            {index !== footerLinks.length - 1 && (
                                <div className='text-white/25 font-bold'>/</div>
                            )}
                        </Fragment>
                    ))}
                </div>
            </footer>
        </div>
    );
}
