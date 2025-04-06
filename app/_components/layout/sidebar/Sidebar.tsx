"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";

import { MyLibrary } from "./MyLibrary";
import { Categories } from "./Categories";
import { RecentlyRead } from "./RecentlyRead";
import { Tags } from "./Tags";

export function Sidebar() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <nav className="grid items-start gap-4">
      <MyLibrary />
      <Separator />
      <Categories />
      <Separator />
      <RecentlyRead />
      <Separator />
      <Tags activeTags={activeTags} toggleTag={toggleTag} />
    </nav>
  );
}
