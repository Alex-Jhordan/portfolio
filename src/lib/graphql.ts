/**
 * GraphQL Client for WordPress Headless API
 * Handles all WPGraphQL queries and error handling
 */

import type {
  GraphQLResponse,
  Project,
  Experience,
  Post,
  ProjectsResponse,
  ExperiencesResponse,
  PostsResponse,
} from '../types/wordpress.ts';

const ENDPOINT = import.meta.env.WORDPRESS_GRAPHQL_ENDPOINT;

/**
 * Validate that the GraphQL endpoint is configured
 */
function validateEndpoint(): void {
  if (!ENDPOINT) {
    throw new Error(
      'WORDPRESS_GRAPHQL_ENDPOINT environment variable is not set. ' +
        'Please configure your .env file with the WordPress GraphQL endpoint URL.'
    );
  }
}

/**
 * Execute a GraphQL query against the WordPress API
 */
async function executeQuery<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  validateEndpoint();

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(
        `GraphQL endpoint returned status ${response.status}: ${response.statusText}`
      );
    }

    const result: GraphQLResponse<T> = await response.json();

    if (result.errors && result.errors.length > 0) {
      const errorMessages = result.errors
        .map((err) => err.message)
        .join('; ');
      console.error('[GraphQL Error]', errorMessages);
      throw new Error(`GraphQL query failed: ${errorMessages}`);
    }

    return result.data as T;
  } catch (error) {
    if (error instanceof Error) {
      console.error('[GraphQL Request Failed]', error.message);
      throw error;
    }
    throw new Error('Unknown error occurred while fetching GraphQL data');
  }
}

/**
 * GraphQL Query: Fetch projects
 */
export const GET_PROJECTS = `
  query GetProjects {
    projects(first: 100) {
      edges {
        node {
          id
          databaseId
          slug
          title
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          projectDetails {
            content
            summary
            techStack
            githubUrl
            liveUrl
            isFeatured
            displayOrder
          }
        }
      }
    }
  }
`;

/**
 * GraphQL Query: Fetch a single project by slug
 */
export const GET_PROJECT_BY_SLUG = `
  query GetProjectBySlug($slug: String!) {
    projectBy(slug: $slug) {
      id
      databaseId
      slug
      title
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      projectDetails {
        content
        summary
        techStack
        githubUrl
        liveUrl
        isFeatured
        displayOrder
      }
    }
  }
`;

/**
 * GraphQL Query: Fetch experiences
 */
export const GET_EXPERIENCES = `
  query GetExperiences {
    experiences(first: 100) {
      edges {
        node {
          id
          databaseId
          slug
          title
          experienceDetails {
            companyName
            role
            startDate
            endDate
            keyAchievements
          }
        }
      }
    }
  }
`;

/**
 * GraphQL Query: Fetch blog posts
 */
export const GET_POSTS = `
  query GetPosts {
    posts(first: 100) {
      edges {
        node {
          id
          databaseId
          slug
          title
          excerpt
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * GraphQL Query: Fetch a single post by slug
 */
export const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      databaseId
      slug
      title
      excerpt
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

/**
 * Fetch projects
 */
export async function fetchProjects(): Promise<ProjectsResponse> {
  const data = await executeQuery<{ projects: ProjectsResponse }>(
    GET_PROJECTS
  );
  return data.projects;
}

/**
 * Fetch a single project by slug
 */
export async function fetchProjectBySlug(slug: string): Promise<Project> {
  const data = await executeQuery<{ projectBy: Project }>(
    GET_PROJECT_BY_SLUG,
    { slug }
  );
  return data.projectBy;
}

/**
 * Fetch experiences
 */
export async function fetchExperiences(): Promise<ExperiencesResponse> {
  const data = await executeQuery<{ experiences: ExperiencesResponse }>(
    GET_EXPERIENCES
  );
  return data.experiences;
}

/**
 * Fetch posts
 */
export async function fetchPosts(): Promise<PostsResponse> {
  const data = await executeQuery<{ posts: PostsResponse }>(GET_POSTS);
  return data.posts;
}

/**
 * Fetch a single post by slug
 */
export async function fetchPostBySlug(slug: string): Promise<Post> {
  const data = await executeQuery<{ postBy: Post }>(
    GET_POST_BY_SLUG,
    { slug }
  );
  return data.postBy;
}
