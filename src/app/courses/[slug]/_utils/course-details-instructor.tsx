import FMSirTwo from "@/app/_utils/_assets/fm-sir-two.png"
import Image from "next/image";

const CourseDetailsInstructor = () => {
    return <div className="space-y-8">
        <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src={FMSirTwo} alt="fm-sir-two" width={100} height={100} className="object-cover object-center" />
            </div>
            <div>
                <p className="text-lg font-semibold">Shahnawaz Hossain Jay</p>
                <p className="text-gray-500">University of Sussex, UK</p>
                <p className="text-gray-500">English Subject Matter Expert, 10 Minute School</p>
            </div>
        </div>
        <div className="space-y-4">
            <p className="text-gray-700">
                With over 8 years of teaching experience, Shahnawaz specializes in English language education and academic writing. He has helped hundreds of students improve their English proficiency and achieve their academic goals.
            </p>
            <div>
                <h4 className="font-medium mb-2">Expertise:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Academic Writing and Research</li>
                    <li>IELTS Preparation</li>
                    <li>Business English</li>
                    <li>English Literature</li>
                </ul>
            </div>
            <div>
                <h4 className="font-medium mb-2">Achievements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Published author in ESL methodology</li>
                    <li>Cambridge CELTA certified trainer</li>
                    <li>Best Online Instructor Award 2022 - 10 Minute School</li>
                </ul>
            </div>
        </div>
    </div>
}

export default CourseDetailsInstructor;

