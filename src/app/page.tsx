import { geistSans, geistMono } from "./fonts";
import type { Metadata } from "next";
import { HowItWorks } from "@/components/howItWorks";
import { Hero } from "@/components/hero";
import { UserReviews } from "@/components/userReviews";
import { Support } from "@/components/support";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";

export const metadata: Metadata = {
  title: "PodcastToMp3 - Download Podcasts as MP3",
  description:
    "Easily convert and download podcasts into MP3 format for offline listening. Discover your favorite shows and take them wherever you go!",
  keywords: [
    "podcast downloader",
    "download podcasts",
    "mp3 podcasts",
    "offline podcasts",
    "free podcast download",
    "download podcast episodes",
    "podcast to mp3",
  ],
  openGraph: {
    title: "PodcastToMp3 - Download Podcasts as MP3",
    description:
      "Convert and download your favorite podcasts as MP3 files. Perfect for offline listening!",
    url: "https://podcasttomp3.com",
    images: [
      {
        url: "https://podcasttomp3.com/assets/screenshot.png",
        width: 1200,
        height: 630,
        alt: "PodcastToMp3 website preview",
      },
    ],
    siteName: "PodcastToMp3",
  },
  twitter: {
    card: "summary",
    title: "PodcastToMp3 - Download Podcasts as MP3",
    description:
      "Easily convert and download podcasts into MP3 format for offline listening. Discover your favorite shows and take them wherever you go!",
    images: ["https://podcasttomp3.com/assets/screenshot.png"],
  },
};

export default async function Home() {
  return (
    <main
      className={`flex flex-col gap-24 pb-16 ${geistSans.variable} ${geistMono.variable} antialiased w-dvw h-full items-center justify-center sm:justify-center text-center  px-8 md:px-0`}
    >
      <Hero />
      <HowItWorks />
      <Features />
      <UserReviews />
      <Support />
      <FAQ />
    </main>
  );
}
