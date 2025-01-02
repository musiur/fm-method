"use client"

import { useState } from "react";
import { Button } from "../../ui/button";
import CourseImage from "@/app/_utils/assets/bank-jobs.png"
import Image from "next/image";
import clsx from "clsx";
import { BookOpen, Clock, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AssetsBrandLogo from "@/lib/assets/assets-brand-logo";
import I18NSwitch from "@/lib/i18n/i18n-switch";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const pathname = usePathname();

  const courseData = [
    {
      title: "ওয়েব ডেভেলপমেন্ট",
      duration: "৬ মাস",
      lessons: "১২০টি লেসন",
      image: CourseImage
    },
    {
      title: "ডিজিটাল মার্কেটিং",
      duration: "৯ মাস",
      lessons: "৯০টি লেসন",
      image: CourseImage
    },
    {
      title: "গ্রাফিক্স ডিজাইন",
      duration: "৫ মাস",
      lessons: "১০০টি লেসন",
      image: CourseImage
    },
  ];

  const navLinks = [
    { href: "/notice", label: "নোটিশ" },
    { href: "/batch", label: "আমাদের ব্যাচ" },
    { href: "/about", label: "আমরা" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90">
      <nav className="container py-2 flex items-center justify-between">
        <AssetsBrandLogo className="w-20" />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className={clsx("w-6 h-6", isMobileMenuOpen && "hidden")} />
          <X className={clsx("w-6 h-6", !isMobileMenuOpen && "hidden")} />
        </button>

        {/* Desktop Menu */}
        <div className={clsx(
          'items-center gap-8',
          isMobileMenuOpen ? 'absolute top-full left-0 right-0 bg-white p-4' : 'hidden',
          'lg:flex lg:relative lg:bg-transparent lg:p-0'
        )}>
          <ul className="flex flex-col lg:flex-row gap-6">
            <li
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <span className="hover:text-purple-600 cursor-pointer">কোর্স ▾</span>

              {/* Mega Menu */}
              <div
                className={clsx("fixed left-0 w-full overflow-y-auto pt-[24px]", {
                  "opacity-100": isCoursesOpen,
                  "opacity-0": !isCoursesOpen,
                  "pointer-events-auto": isCoursesOpen,
                  "pointer-events-none": !isCoursesOpen,
                  "z-50": isCoursesOpen,
                  "z-0": !isCoursesOpen,
                  "max-h-[60vh] lg:max-h-[80vh]": isCoursesOpen,
                })}
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                <div className="bg-white">
                  <div className="container py-8">
                    <h2 className="text-2xl font-bold mb-6">আমাদের কোর্সসমূহ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {courseData.map((course, index) => (
                        <div
                          key={index}
                          className="group cursor-pointer"
                        >
                          <div className="relative overflow-hidden rounded-lg">
                            <Image
                              src={course.image}
                              alt={course.title}
                              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-semibold text-lg group-hover:text-purple-600">
                              {course.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {course.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {course.lessons}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "hover:text-purple-600 transition-colors",
                    pathname === link.href && "text-purple-600 font-medium"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

          <div className="flex items-center gap-2">
            <I18NSwitch />
            <Button>লগ-ইন</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
