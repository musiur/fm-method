import { Button } from "@/components/ui/button";
import HomeRegistrationForm from "./home-registration-form";
import Link from "next/link";
import FM_SIR_IMAGE from "./assets/fm-sir-one.png"
import Image from "next/image";

const HomeHero = () => {
    return <section className="bg-darkBrand section lg:py-0">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="py-0 lg:section flex flex-col gap-8 my-auto">
                <div className="flex flex-col gap-4 [&>*]:text-white">
                    <p>বিশেষীকরণ</p>
                    <h1 className="heading-one">ইংলিশ কোর্সে অনলাইন ব্যাচে ভর্তি চলছে!</h1>
                    <p>বছর জুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি!</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-white text-lg md:text-2xl font-semibold">লাইভ ইন্টারেক্টিভ ক্লাস</p>
                    <Link href="/courses">
                        <Button className="inline-flex">অনলাইন ব্যাচ সম্পর্কে আরও জানুন</Button></Link>
                </div>
            </div>
            <div className="mt-auto hidden lg:block">
                <Image src={FM_SIR_IMAGE} alt="FM Sir" width={500} height={500} className="w-full h-full" />
            </div>
            <div className="my-auto py-0 lg:section">
                <HomeRegistrationForm />
            </div>
        </div>
    </section>;
};

export default HomeHero;
