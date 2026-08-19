/**
 * WordPress/CPT TypeScript Interfaces
 * Strict type definitions for all data structures from WPGraphQL API
 */

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText?: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

export interface Project {
  id: string;
  databaseId: number;
  slug: string;
  title: string;
  featuredImage?: FeaturedImage;
  projectDetails?: {
    content?: string;
    summary?: string;
    techStack?: string[];
    githubUrl?: string;
    liveUrl?: string;
    isFeatured?: boolean;
    displayOrder?: number;
  };
}

export interface Experience {
  id: string;
  databaseId: number;
  slug: string;
  title: string;
  experienceDetails?: {
    companyName?: string;
    role?: string;
    startDate?: string;
    endDate?: string;
    keyAchievements?: string;
  };
}

export interface Post {
  id: string;
  databaseId: number;
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  date?: string;
  featuredImage?: FeaturedImage;
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{
    message: string;
    extensions?: {
      category: string;
    };
  }>;
}

export interface ProjectsResponse {
  edges: Array<{
    node: Project;
  }>;
}

export interface ExperiencesResponse {
  edges: Array<{
    node: Experience;
  }>;
}

export interface PostsResponse {
  edges: Array<{
    node: Post;
  }>;
}
