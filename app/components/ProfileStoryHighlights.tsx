import { PlusIcon } from "lucide-react";

export type Highlight = {
  id: number;
  label: string;
  image: string;
};

type StoryHighlightsProps = {
  highlights?: Highlight[];
};

const itemClassName = "flex shrink-0 flex-col items-center gap-2";
const labelClassName = "max-w-[72px] truncate text-xs text-black";

const ProfileStoryHighlights = ({
  highlights = [
    { id: 1, label: "Story 1", image: "bg-zinc-200" },
    { id: 2, label: "Story 2", image: "bg-blue-200" },
    { id: 3, label: "Story 3", image: "bg-green-200" },
    { id: 4, label: "Story 4", image: "bg-yellow-200" },
    { id: 5, label: "Story 5", image: "bg-purple-200" },
  ],
}: StoryHighlightsProps) => {
  return (
    <section className="py-4 overflow-x-auto px-4 scrollbar-hide">
      <div className="flex gap-4">
        {highlights.map((h) => (
          <div key={h.id} className={itemClassName}>
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full border-2 border-zinc-200`}
            >
              <div className={`h-full w-full rounded-full ${h.image}`} />
            </div>
            <span className={labelClassName}>{h.label}</span>
          </div>
        ))}
        <div className={itemClassName}>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-zinc-300">
            <PlusIcon className="h-6 w-6 text-black" />
          </div>
          <span className={labelClassName}>New</span>
        </div>
      </div>
    </section>
  );
};

export default ProfileStoryHighlights;
