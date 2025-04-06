import Image from "next/image";
import { Button } from "@/components/ui/button";

export function RecentlyRead() {
  const recentArticles = [
    {
      title: "Reactアプリケーションのパフォーマンス最適化",
      timestamp: "2時間前",
      image: "/next.svg",
    },
    {
      title: "TypeScriptの高度な型システム入門",
      timestamp: "昨日",
      image: "/next.svg",
    },
    {
      title: "マイクロサービスアーキテクチャの実践",
      timestamp: "3日前",
      image: "/next.svg",
    },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-2 px-1">最近読んだ記事</h3>
      <div className="space-y-2">
        {recentArticles.map((article, index) => (
          <div
            key={index}
            className="flex items-start gap-2 px-2 py-1.5 rounded-md hover:bg-muted transition-colors cursor-pointer"
          >
            <div className="w-12 h-12 rounded-md bg-muted overflow-hidden relative flex-shrink-0">
              <Image
                src={article.image}
                alt="記事サムネイル"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-medium line-clamp-2">
                {article.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {article.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button variant="ghost" size="sm" className="w-full mt-2 text-xs h-8">
        すべて表示
      </Button>
    </div>
  );
}
