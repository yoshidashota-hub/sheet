import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Categories() {
  const categories = [
    {
      id: "javascript",
      name: "JavaScript",
      color: "bg-blue-500",
      subcategories: [
        { id: "js-basics", name: "基本構文" },
        { id: "js-frameworks", name: "フレームワーク" },
        { id: "js-performance", name: "パフォーマンス" },
      ],
    },
    {
      id: "react",
      name: "React",
      color: "bg-green-500",
      subcategories: [
        { id: "react-hooks", name: "フック" },
        { id: "react-patterns", name: "パターン" },
        { id: "react-performance", name: "最適化" },
      ],
    },
    {
      id: "backend",
      name: "バックエンド",
      color: "bg-purple-500",
      subcategories: [
        { id: "node", name: "Node.js" },
        { id: "databases", name: "データベース" },
        { id: "api", name: "API設計" },
      ],
    },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-2 px-1">カテゴリ</h3>
      <div className="space-y-1">
        <Accordion type="multiple">
          {categories.map((category) => (
            <AccordionItem
              key={category.id}
              value={category.id}
              className="border-none"
            >
              <AccordionTrigger className="py-2 px-3 text-sm rounded-md hover:bg-muted data-[state=open]:bg-muted/50 hover:no-underline">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${category.color}`}
                  ></span>
                  <span>{category.name}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-0">
                <div className="ml-4 border-l-2 border-muted pl-2 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.id}
                      href={`#${subcategory.id}`}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
