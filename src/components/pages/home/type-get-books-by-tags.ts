export type TypeGetBooksByTags = {
  id: number,
  title: string,
  thumbnail: string,
  difficulty: string,
  engagement: { average_rating: number, total_ratings: number },
  syllabus: { total_duration: number },
  pricing: { sell_price: string, regular_price: string },
  course_type: string,
  tags: Array<string>
}