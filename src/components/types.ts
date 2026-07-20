// types.ts
export type TabName = "Bundle" | "Exam Voucher" | "Practice Test" | "Courseware";

export interface TabContent {
  title: string;
  subtitle: string;
  image: string;
  price: number;
}

export interface CurriculumModule {
  question: string;
  answers: string[];
}

export interface BannerData {
  videoUrl: string;
}

export interface VideoData {
  videoUrl: string;
}

export interface CertificateData {
  certifier: string;
  certifierColor: string;
  certificateImg: string;
  bannerImg: string;
}

export interface Course {
  courseCode: string;
  courseName: string;
  tabData: Record<TabName, TabContent>;
  curriculum: CurriculumModule[];
  banner: BannerData;
  video: VideoData;
  highlights: string[];
  certificate: CertificateData;
}

export interface Testimonial {
  message: string;
  name: string;
  role: string;
  image: string;
}

// src/types/search.ts
export type TabItem = {
  title?: string;
  subtitle?: string;
  image?: string;
  price?: number;
  _id?: string;
};

export type TabData = Record<string, TabItem | undefined>;

export type Certificate = {
  certifier?: string;
  certifierColor?: string;
  certificateImg?: string;
  bannerImg?: string;
  _id?: string;
};

export type CurriculumItem = {
  question?: string;
  answers?: string[];
  _id?: string;
};

export type CourseSearchResult = {
  _id: string;
  courseCode: string;
  courseName?: string;
  tabData?: TabData;
  banner?: { videoUrl?: string };
  video?: { videoUrl?: string };
  curriculum?: CurriculumItem[];
  highlights?: string[];
  certificate?: Certificate;
  syllabus?: string;
  practiceTestLink?: string;
  coursewareLink?: string;
  createdAt?: string;
  updatedAt?: string;

};
