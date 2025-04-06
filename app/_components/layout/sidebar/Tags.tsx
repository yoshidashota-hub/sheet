import { Badge } from "@/components/ui/badge";

interface PopularTagsProps {
  activeTags: string[];
  toggleTag: (tag: string) => void;
}

export function Tags({ activeTags, toggleTag }: PopularTagsProps) {
  const Tags = [
    "チュートリアル",
    "ベストプラクティス",
    "初心者向け",
    "パフォーマンス",
    "セキュリティ",
    "フレームワーク",
    "アーキテクチャ",
    "テスト",
    "デプロイ",
  ];

  return (
    <div>
      <h3 className="font-semibold mb-2 px-1">タグ</h3>
      <div className="flex flex-wrap gap-1.5 px-1">
        {Tags.map((tag) => (
          <Badge
            key={tag}
            variant={activeTags.includes(tag) ? "default" : "secondary"}
            className="cursor-pointer hover:bg-secondary/80 transition-colors"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
