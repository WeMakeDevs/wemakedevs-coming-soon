import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";

export default function Home() {
    const footerLinks = [
        {
            name: "Twitter",
            url: "https://twitter.com/wemakedevs",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/company/wemakedevs",
        },
        {
            name: "Instagram",
            url: "https://instagram.com/wemakedevs",
        },
    ];
    return (
        <div className='min-h-screen flex flex-col bg-[#141413] text-white px-5 md:px-10 lg:px-20'>
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
                <ul className='flex gap-4 items-center text-white'>
                    <li>
                        <Link
                            href='https://twitter.com/wemakedevs'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='hover:text-[#caffc7] hover:underline'
                        >
                            Twitter
                        </Link>
                    </li>
                    <li className='text-white/25 font-bold'>/</li>
                    <li>
                        <Link
                            href='https://linkedin.com/company/wemakedevs'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='hover:text-[#caffc7] hover:underline'
                        >
                            LinkedIn
                        </Link>
                    </li>
                    <li className='text-white/25 font-bold'>/</li>
                    <li>
                        <Link
                            href='https://instagram.com/wemakedevs'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='hover:text-[#caffc7] hover:underline'
                        >
                            Instagram
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
