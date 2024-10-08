import { db } from "@/lib/db/index";
import { getUserAuth } from "@/lib/auth/utils";
import { type PageId, pageIdSchema } from "@/lib/db/schema/pages";
import { z } from "zod";


export const getPages = async () => {
  const { session } = await getUserAuth();
  const p = await db.page.findMany({ where: {userId: session?.user.id}});
  return { pages: p };
};

export const getPageById = async (id: PageId) => {
  const { session } = await getUserAuth();
  const { id: pageId } = pageIdSchema.parse({ id });
  const p = await db.page.findFirst({
    where: { id: pageId, userId: session?.user.id}});
  return { page: p };
};

export const getPageByIdWithPageLinks = async (id: PageId) => {
  const { session } = await getUserAuth();
  const { id: pageId } = pageIdSchema.parse({ id });
  const p = await db.page.findFirst({
    where: { id: pageId, userId: session?.user.id},
    include: { pageLinks: { include: {page: true } } }
  });
  if (p === null) return { page: null };
  const { pageLinks, ...page } = p;

  return { page, pageLinks:pageLinks };
};


// For using Slug
export const getPageBySlugWithPageLinks = async (slug: string) => {
  const slugSchema = z.object({ slug: z.string() });
  const { slug: pageSlug } = slugSchema.parse({ slug });
  const p = await db.page.findFirst({
    where: { slug: pageSlug },
    include: { pageLinks: { include: { page: true } } }
  });
  if (p === null) return { page: null };
  const { pageLinks, ...page } = p;
  return { page, pageLinks };
};

