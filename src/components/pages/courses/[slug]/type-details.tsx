export type TypeDetails = {
  purchased: boolean;
  id: number;
  title: string;
  thumbnail: string;
  video_id: string;
  otp: string;
  playbackInfo: string;
  intro: string;
  category: TypeDetailsCategory;
  description: string;
  features: Array<string>;
  what_you_will_learn: Array<string>;
  what_do_I_need: Array<string>;
  course_type: string;
  difficulty: string;
  pricing: TypeDetailsPricing;
  metadata: TypeDetailsMetadata;
  syllabus: TypeDetailsSyllabus;
  engagement: TypeDetailsEngagement;
  promotions: TypeDetailsPromotions;
  instructor: TypeDetailsInstructor;
  faq: Array<TypeDetailsFAQ>;
  more_details: Array<TypeDetailsFAQ>;
};

export type TypeDetailsFAQ = {
  id: number;
  question: string;
  answer: string;
};

export type TypeDetailsPromotions = {
  coupons: Array<TypeDetailsPromotionsCoupon>;
};

export type TypeDetailsPromotionsCoupon = {
  id: number;
  code: string;
  discount: number;
  valid_until: string;
};

export type TypeDetailsRating = {
  user: string;
  rating: number;
  comment: string;
  date: string;
};

export type TypeDetailsChapter = {
  id: number;
  title: string;
  lessons: Array<TypeDetailsChapterLesson>;
};

export type TypeDetailsChapterLesson = {
  id: number;
  name: string;
  title: string;
  duration: number;
  description: string;
  lesson_details: string;
  video_id: string;
  video_title: string;
  video_url: string;
  audio: string;
  audio_title: string;
  status: string;
  embed_code: string;
  progress_status: string;
  otp: string,
  playback_info: string,
  course_id: number,
};

export type TypeDetailsCategory = {
  id: number;
  name: string;
  icon: string;
};

export type TypeDetailsPricing = {
  regular_price: string;
  sell_price: string;
  validity_days: number;
};

export type TypeDetailsMetadata = {
  course_code: string;
  instructor: string;
  status: string;
};

export type TypeDetailsSyllabus = {
  outline: string;
  chapters: Array<TypeDetailsChapter>;
  total_chapters: number;
  total_lessons: number;
  total_duration: number;
};

export type TypeDetailsEngagement = {
  average_rating: number;
  total_ratings: number;
  total_students: number;
  recent_ratings: Array<TypeDetailsRating>;
};

export type TypeDetailsInstructor = {
  id: 2;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
  institution: string;
  experience: string;
  bio: string;
  expertise: string;
  achievements: string;
  created_at: null;
  updated_at: null;
};
