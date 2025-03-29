
export type TypeCard = {
    "id": string,
    "slug": string,
    "title": string,
    "thumbnail": string,
    "intro": string,
    "category": {
        "id": number,
        "name": string,
        "icon": string
    },
    "description": string,
    "features": string[],
    "what_you_will_learn": string[],
    "what_do_I_need": string[],
    "course_type": string,
    "difficulty": string,
    "pricing": {
        "regular_price": number,
        "sell_price": number,
        "validity_days": number
    },
    "metadata": {
        "course_code": string,
        "instructor": string,
        "status": string
    },
    "syllabus": {
        "outline": string,
        "chapters": string[],
        "total_chapters": number,
        "total_lessons": number,
        "total_duration": number
    },
    "engagement": {
        "average_rating": number,
        "total_ratings": number,
        "total_students": number,
        "recent_ratings": string[],
        "rating_details": object
    },
    "promotions": {
        "coupons": object[]
    },
    "instructor": object,
    "faq": object[],
    "more_details": object[]
}
