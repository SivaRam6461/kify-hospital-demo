"use client";

import Image from "next/image";
import { Heart, ExternalLink } from "lucide-react";
import { hospital } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/animations/reveal";

const instaPosts = [
  { src: "/insta-post-1.png", alt: "Instagram Post 1" },
  { src: "/insta-post-2.png", alt: "Instagram Post 2" },
  { src: "/insta-post-3.png", alt: "Instagram Post 3" },
  { src: "/insta-post-4.png", alt: "Instagram Post 4" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    handle: "@kifyhospital",
    stats: "353K followers",
    url: hospital.instagram,
    color: "from-pink-500 to-purple-600",
    hoverColor: "hover:from-pink-600 hover:to-purple-700",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    handle: "@KifyHospital",
    stats: "278K subscribers",
    url: hospital.youtube,
    color: "from-red-500 to-red-600",
    hoverColor: "hover:from-red-600 hover:to-red-700",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    handle: "Kify Hospital",
    stats: "Follow us",
    url: hospital.facebook,
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    handle: "Join Channel",
    stats: "Stay updated",
    url: hospital.whatsapp,
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700",
  },
];

export function SocialSection() {
  return (
    <section id="social" className="relative py-20 lg:py-28 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-blob rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 animate-blob rounded-full bg-red-500/10 blur-3xl [animation-delay:6s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Follow Us"
          title="Join our social media community"
          description="Stay connected with health tips, hospital updates, and medical awareness. Join 353K+ followers on Instagram and 278K subscribers on YouTube."
        />

        {/* Instagram Posts Grid */}
        <Reveal className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
              <InstagramIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">@kifyhospital</p>
              <p className="text-sm text-muted-foreground">353K followers &bull; 2,059 posts</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instaPosts.map((post, index) => (
              <a
                key={index}
                href={hospital.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Heart className="h-4 w-4 fill-current" />
                    <span>View on Instagram</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* YouTube Section */}
        <Reveal className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white">
              <YoutubeIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">@KifyHospital</p>
              <p className="text-sm text-muted-foreground">278K subscribers &bull; 1.2K videos</p>
            </div>
          </div>
          <a
            href={hospital.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-border shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <Image
              src="/youtube-videos.png"
              alt="YouTube Videos"
              width={1200}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 text-white">
                <YoutubeIcon className="h-5 w-5" />
                <span className="font-medium">Watch on YouTube</span>
              </div>
            </div>
          </a>
        </Reveal>

        {/* Social Links Cards */}
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((social) => (
            <StaggerItem key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${social.color} ${social.hoverColor} text-white transition-all duration-300 group-hover:scale-110`}>
                  <social.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{social.name}</p>
                  <p className="text-sm text-muted-foreground">{social.handle}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <Reveal className="mt-10 text-center">
          <a
            href={hospital.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <InstagramIcon className="h-5 w-5" />
              Follow on Instagram
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
