import { Button } from "@/src/components/ui/button";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="text-left w-full text-2xl font-bold mb-2">
          Next Js with Shadcn + Typescript + Git Actions + Test
        </h1>
        <Button> This is a shadcn button</Button>
      </div>
    </div>
  );
}
