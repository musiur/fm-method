const CourseDetailsNecessaries = () => {
    const necessaries = [
        "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
        "স্মার্টফোন অথবা পিসি"
    ];

    return (
        <div className="bg-white rounded-lg">
            <ul className="space-y-4">
                {necessaries.map((necessary, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-primary">✓</span>
                        <span>{necessary}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDetailsNecessaries;

