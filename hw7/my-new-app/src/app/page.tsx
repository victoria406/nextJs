import React from 'react';
import Image from 'next/image';
import Counter from './Counter';
import SearchBar from './SearchBar';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center gap-4 mt-8">
          <Counter incrementBy={1} buttonColor="blue" />
          <Counter incrementBy={2} buttonColor="green" />
        </div>
        <p className="mt-8 text-center sm:text-left max-w-md">
          For the this project, I stored the code in the following GitHub Repo:{" "}
          <a
            href="https://github.com/victoria406/nextJs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub Repository NextJS Assignment
          </a>
          . For my final project, I am interested in Using the Web Animations API or libraries to create a more enriched user experience.
          I plan to include features such as the basic/classic css animation and transiations, we well as more complex animation loops in JavaScript, with
	  libraries like ember-animated, framer motion, or older libraries such as Velocity.js or script.acul.us.
        </p>
	<SearchBar />
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

