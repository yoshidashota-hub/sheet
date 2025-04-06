"use client";

import { Bookmark, BookmarkCheck, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
  badges: { text: string; color?: string }[];
  isBookmarked: boolean;
  onBookmarkToggle: (id: string) => void;
  isFeatured?: boolean;
}

export const sampleArticles = [
  {
    id: "1",
    title: "JavaScript基礎: 初心者のための完全ガイド",
    description:
      "JavaScriptの基本的な概念から実践的な応用まで、初心者向けに分かりやすく解説します。変数、関数、オブジェクト、配列などの基本から、DOM操作、非同期処理まで幅広くカバーします。",
    date: "2023年10月15日",
    readTime: "15分",
    imageSrc: "/next.svg",
    imageAlt: "JavaScript基礎のイメージ",
    badges: [{ text: "JavaScript" }, { text: "初心者" }],
    isBookmarked: false,
  },
  {
    id: "2",
    title: "React Hooksの使い方",
    description:
      "ReactのHooksを使って状態管理とライフサイクル処理を効率的に行う方法を解説します。useState、useEffect、useContextなどの基本的なHooksから、カスタムHooksの作成方法まで。",
    date: "2023年9月28日",
    readTime: "10分",
    imageSrc: "/next.svg",
    imageAlt: "React Hooksのイメージ",
    badges: [{ text: "React" }, { text: "Hooks" }],
    isBookmarked: true,
  },
  {
    id: "3",
    title: "CSSレイアウトテクニック",
    description:
      "モダンなWebデザインに欠かせないCSSレイアウトテクニックを紹介します。Flexbox、Grid、レスポンシブデザインなど、実践的なテクニックを例と共に解説。",
    date: "2023年10月5日",
    readTime: "8分",
    imageSrc: "/next.svg",
    imageAlt: "CSSレイアウトのイメージ",
    badges: [{ text: "CSS" }, { text: "レイアウト" }],
    isBookmarked: false,
  },
  {
    id: "4",
    title: "CSSレイアウトテクニック",
    description:
      "モダンなWebデザインに欠かせないCSSレイアウトテクニックを紹介します。Flexbox、Grid、レスポンシブデザインなど、実践的なテクニックを例と共に解説。",
    date: "2023年10月5日",
    readTime: "8分",
    imageSrc: "/next.svg",
    imageAlt: "CSSレイアウトのイメージ",
    badges: [{ text: "CSS" }, { text: "レイアウト" }],
    isBookmarked: false,
  },
];

export function ArticleCard({
  id,
  title,
  description,
  date,
  readTime,
  badges,
  isBookmarked,
  onBookmarkToggle,
}: ArticleCardProps) {
  return (
    <Card className="group border hover:border-primary/50 transition-all duration-300">
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 p-0 rounded-full"
            onClick={() => onBookmarkToggle(id)}
          >
            {isBookmarked ? (
              <BookmarkCheck
                className="h-4 w-4 text-primary"
                fill="currentColor"
              />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        <div className="flex gap-1 mt-3">
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {badge.text}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{readTime}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 h-7 hover:bg-primary hover:text-primary-foreground"
        >
          <ExternalLink className="h-3 w-3" />
          <span>読む</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
