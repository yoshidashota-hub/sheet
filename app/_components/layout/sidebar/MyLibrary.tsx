import { BookmarkCheck, History, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function MyLibrary() {
  const libraryItems = [
    { icon: BookmarkCheck, label: "ブックマーク", count: 12, href: "#" },
    { icon: Star, label: "お気に入り", count: 8, href: "#" },
    { icon: History, label: "閲覧履歴", count: 24, href: "#" },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-2 px-1">マイライブラリ</h3>
      <div className="space-y-1">
        {libraryItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-2">
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {item.count}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
