"use client";
import { Page } from "@/lib/db/schema/pages";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe,Copy, Check } from "lucide-react";
import { updatePageAction } from "@/lib/actions/pages";

export default function TogglePublicButton({ page }: { page: Page }) {
  const [isCopied, setIsCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const makePublic = async () => {
      await updatePageAction({...page, public: true})
    // Here you would typically make an API call to update the page's visibility
    console.log("Page is now public")
  }

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select()
      document.execCommand('copy')
      setIsCopied(true)
    }
  }

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])

  // Replace this with your actual page URL
  const pageUrl = "http://localhost:3000/share/" + page.slug;



  if (!page.public) {
    return (
      <Button
        onClick={makePublic}
        className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white"
      >
        <Globe className="h-4 w-4 mr-2" />
        Public
      </Button>
    )
  }

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="relative">
        <Input
          ref={inputRef}
          readOnly
          value={pageUrl}
          className="pr-10"
        />
        <Button
          onClick={copyToClipboard}
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2"
        >
          {isCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}