"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArticleCard,
  sampleArticles,
} from "./_components/layout/articles/ArticleCard";

export default function Home() {
  const [articles, setArticles] = useState(sampleArticles);

  const handleBookmarkToggle = (id: string) => {
    setArticles(
      articles.map((article) =>
        article.id === id
          ? { ...article, isBookmarked: !article.isBookmarked }
          : article
      )
    );
  };

  return (
    <main className="flex-1 overflow-auto">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="container py-6 px-2 md:px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">最新記事</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    {...article}
                    onBookmarkToggle={handleBookmarkToggle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </main>
  );
}
