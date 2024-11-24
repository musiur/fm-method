import Link from 'next/link'
import { Phone } from 'lucide-react'

const CourseDetailsInquiry = () => {
    return (
        <Link 
            href="tel:16910" 
            className="flex items-center gap-2 text-primary"
        >
            <Phone className="w-6 h-6" />
            কল করুন 16910 নম্বরে
        </Link>
    )
}

export default CourseDetailsInquiry;

