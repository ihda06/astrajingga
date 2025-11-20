"use client";

import Divider from "@/components/ui/Divider";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { HomeIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { SocialMedia } from "@/const/common";
import { cn } from "@/lib/utils";
import React from "react";

export default function SidebarContent({
  onClickMenu,
}: {
  onClickMenu: () => void;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname?.startsWith("/blog");

  const navItems = [
    {
      href: "/",
      label: "About",
      icon: HomeIcon,
      isActive: isHome,
    },
    {
      href: "/blog",
      label: "Blog",
      icon: BookOpenIcon,
      isActive: isBlog,
    },
  ];

  return (
    <nav
      className="flex flex-col h-full space-y-6"
      aria-label="Main navigation"
    >
      {/* Logo with animation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-2"
      >
        <Image
          src="/logominiblack.png"
          width={40}
          height={40}
          sizes="40px"
          alt="Ihda Anwari logo"
          className="transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Navigation Links */}
      <div className="space-y-1">
        {navItems.map((item, index) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            isActive={item.isActive}
            onClick={onClickMenu}
            delay={index * 0.1}
          />
        ))}
      </div>

      <Divider />

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className="mt-auto pt-4"
      >
        <p className="text-xs text-gray-500 mb-3 tracking-wider uppercase">
          Connect
        </p>
        <div className="flex gap-2">
          {SocialMedia.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-lg transition-all duration-300 flex items-center justify-center",
                  social.bg_color,
                  "hover:scale-110 hover:shadow-md"
                )}
                aria-label={`Visit my ${social.title} profile`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-white size-4" aria-hidden="true" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  onClick: () => void;
  delay?: number;
}

function NavLink({
  href,
  label,
  icon: Icon,
  isActive,
  onClick,
  delay = 0,
}: NavLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      <Link
        href={href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "group relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300",
          "font-bold text-lg",
          isActive
            ? "text-emerald-600 bg-emerald-50"
            : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
        )}
      >
        <Icon
          className={cn(
            "size-5 transition-all duration-300",
            isActive
              ? "text-emerald-600"
              : "text-gray-400 group-hover:text-emerald-600"
          )}
          aria-hidden="true"
        />
        <span className="relative">
          {label}
          {!isActive && (
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </span>
        {isActive && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600 rounded-r-full"
            layoutId="activeIndicator"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
}
