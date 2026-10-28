import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
  message: 'Debe ser un slug estable en minúsculas y formato kebab-case.',
});

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/u, {
  message: 'Debe usar formato ISO (YYYY-MM-DD).',
});

const localVideoPath = z.string().regex(
  /^src\/assets\/projects\/([a-z0-9]+(?:-[a-z0-9]+)*\/)[a-z0-9]+(?:-[a-z0-9]+)*\.(mp4|webm)$/u,
  {
    message: 'Debe ser una ruta local bajo src/assets/projects/<slug>/ y terminar en .mp4 o .webm.',
  },
);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    slug,
    title: z.string().trim().min(1, 'El título es obligatorio.'),
    summary: z.string().trim().min(1, 'El resumen es obligatorio.'),
    technologies: z.array(z.string().trim().min(1)).min(1, 'Incluye al menos una tecnología.'),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative().default(0),
    repositoryUrl: z.url({ error: 'El enlace del repositorio debe ser una URL válida.' }).optional(),
    liveUrl: z.url({ error: 'El enlace de la demostración debe ser una URL válida.' }).optional(),
    cover: image().optional(),
    coverAlt: z.string().trim().optional(),
    gallery: z.array(z.object({
      image: image(),
      alt: z.string().trim().min(1, 'Cada imagen debe incluir texto alternativo.'),
    })).optional(),
    video: z.object({
      src: localVideoPath,
      poster: image().optional(),
      title: z.string().trim().min(1, 'El título del video es obligatorio.').optional(),
    }).optional(),
  }).superRefine((value, context) => {
    if (value.cover && !value.coverAlt) {
      context.addIssue({
        code: 'custom',
        path: ['coverAlt'],
        message: 'Una imagen de portada debe incluir texto alternativo.',
      });
    }
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string().trim().min(1, 'El cargo es obligatorio.'),
    organization: z.string().trim().min(1, 'La organización es obligatoria.'),
    startDate: isoDate,
    endDate: isoDate.optional(),
    current: z.boolean().default(false),
    order: z.number().int().nonnegative(),
  }).superRefine((value, context) => {
    if (value.current && value.endDate) {
      context.addIssue({
        code: 'custom',
        path: ['endDate'],
        message: 'Una experiencia actual no debe tener fecha de finalización.',
      });
    }
    if (!value.current && value.endDate && value.endDate < value.startDate) {
      context.addIssue({
        code: 'custom',
        path: ['endDate'],
        message: 'La fecha de finalización no puede ser anterior a la fecha de inicio.',
      });
    }
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    slug,
    title: z.string().trim().min(1, 'El título es obligatorio.'),
    description: z.string().trim().min(1, 'La descripción es obligatoria.'),
    pubDate: isoDate,
    updatedDate: isoDate.optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string().trim().min(1)).default([]),
  }),
});

export const collections = {
  projects,
  experience,
  articles,
};
