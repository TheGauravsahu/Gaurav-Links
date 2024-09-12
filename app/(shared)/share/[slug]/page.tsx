import React from "react";
import { getPageBySlugWithPageLinks } from "@/lib/api/pages/queries";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShraredPage = async ({ params }: { params: { slug: string } }) => {
  const { page, pageLinks } = await getPageBySlugWithPageLinks(params.slug);
  if (page === null) notFound();
  if (page.public === false) return <main>This page is not Public</main>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 filter blur-lg "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1575995872537-3793d29d972c?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none mix-blend-overlay"></div>
      <Card className="w-full max-w-md z-10">
        <CardHeader className="text-center">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage
              className="object-cover"
              src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile Picture"
            />
            <AvatarFallback>{page.name}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">@{page.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-sm text-gray-600">
            {page.description}
          </p>
          <div className="space-y-2">
            {pageLinks.map((link) => (
              <Button
                key={link.id}
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShraredPage;
