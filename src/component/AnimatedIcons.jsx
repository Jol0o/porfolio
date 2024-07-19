import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "laravel",
    "php",
    "sql"
];

export function AnimatedIcons() {
    return (
        <div className="relative flex h-full w-full max-w-[100rem] items-center justify-center overflow-hidden rounded-lg p-10 md:px-20 md:pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}