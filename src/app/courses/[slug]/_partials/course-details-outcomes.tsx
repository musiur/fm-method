const CourseDetailsOutcomes = () => {
    const outcomes = [
        "পোড়ানো ও স্মার্ট পদ্ধতিতে গতবছরের অব পরীক্ষার জন্য ইংরেজি",
        "ইংরেজি লিটারেচার মনে রাখার সহজ টিপস এন্ড ট্রিক্স",
        "কঠিন ইংরেজি প্রশ্ন বুঝতে পারা ও সঠিকভাবে উত্তর প্রদানের কৌশল",
        "ইংরেজি গ্রামার দৃঢ় করার কৌশল",
        "অনুশীলনের মাধ্যমে ইংরেজি ভিত্তি দৃঢ় করার উপায়"
    ];

    return (
        <div className="bg-white rounded-lg">
            <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-primary">✓</span>
                        <span>{outcome}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDetailsOutcomes;

