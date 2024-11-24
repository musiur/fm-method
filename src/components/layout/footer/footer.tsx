import ASSETS___BrandLogo from "@/lib/assets/assets___brandlogo/assets___brandlogo";
import { Facebook, Linkedin, Twitter } from "lucide-react";

interface FooterLink {
    title: string;
    href: string;
}

const Footer = () => {
    const companyLinks: FooterLink[] = [
        { title: "ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি", href: "/career" },
        { title: "শিক্ষক হিসাবে যোগ দিন", href: "/join-as-teacher" },
        { title: "প্রাইভেসি পলিসি", href: "/privacy" },
        { title: "নিয়মাবলী", href: "/terms" },
        { title: "অ্যাডমিনেট হিসাবে যোগ দিন", href: "/join-as-admin" },
        { title: "ব্যবহারকারীর শর্তাবলি", href: "/user-terms" },
    ];

    const otherLinks: FooterLink[] = [
        { title: "মূল তথ্যে", href: "/main-info" },
        { title: "চাকরির প্রস্তুতি ভেরিফায়", href: "/job-prep" },
        { title: "সার্টিফিকেট ভেরিফাই করুন", href: "/verify-certificate" },
    ];

    const socialLinks = [
        { icon: <Facebook className="w-6 h-6" />, href: "#" },
        { icon: <Linkedin className="w-6 h-6" />, href: "#" },
        { icon: <Twitter className="w-6 h-6" />, href: "#" },
    ];

    return (
        <footer className="bg-gray-900 text-white section">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1 - Logo & Description */}
                    <div className="space-y-4">
                        <ASSETS___BrandLogo />
                        <p className="text-gray-400">
                            ডাউনলোড করুন আমাদের মোবাইল অ্যাপস, যেখা শুরু করুন আজই থেকেই। ডাউনলোড করুন আমাদের মোবাইল অ্যাপস, যেখা শুরু করুন আজই থেকেই
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.href}
                                    className="text-gray-500 hover:text-white transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Company Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">কোম্পানি</h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Other Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">অন্যান্য</h3>
                        <ul className="space-y-2">
                            {otherLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">আমাদের যোগাযোগ মাধ্যম</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>ভাটারা ঢাকা ১২০০</p>
                            <p>+৮৮০১৭০০০০০০০০</p>
                            <p>sfmmethod@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>স্বত্ব © ২০১৫ - ২০২৪ FM Method কর্তৃক সর্বস্বত্ব সংরক্ষিত | RubyTech</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;