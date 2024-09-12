import React from "react";
import { getPageBySlugWithPageLinks } from "@/lib/api/pages/queries";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const ShraredPage = async ({ params }: { params: { slug: string } }) => {
  const { page, pageLinks } = await getPageBySlugWithPageLinks(params.slug);
  if (page === null) notFound();
  if (page.public === false) return <main>This page is not Public</main>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage
              src="/placeholder.svg?height=96&width=96"
              alt="Profile Picture"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">{page.name}</CardTitle>
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
                  <Github className="mr-2 h-4 w-4" />
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
