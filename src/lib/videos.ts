export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    tier: "learner" | "master"; // minimum tier required
    category: string;
    // Source URL is server-side only — NEVER sent to client directly
    sourceUrl: string;
}

// Video catalog — add your unlisted YouTube/Vimeo video URLs here
// The sourceUrl should be the embed URL (not the public URL)
export const VIDEO_CATALOG: Video[] = [
    {
        id: "intro-entrepreneurship",
        title: "Introduction to Entrepreneurship",
        description: "Your first step into the world of building businesses. Learn the fundamentals that separate entrepreneurs from everyone else.",
        thumbnail: "https://framerusercontent.com/images/WFSJh0SPfkYfWx6XtirFMSdivIY.webp?width=640&height=452",
        duration: "24:30",
        tier: "learner",
        category: "Fundamentals",
        sourceUrl: "https://www.youtube.com/embed/YOUR_UNLISTED_VIDEO_ID_1",
    },
    {
        id: "sales-mastery",
        title: "Sales Mastery Fundamentals",
        description: "Master the art of selling — the #1 skill every entrepreneur needs. Proven frameworks used by 7-figure earners.",
        thumbnail: "https://framerusercontent.com/images/rtAqc4QjnylNpWdunND5E3NvH9s.webp?width=640&height=459",
        duration: "38:15",
        tier: "learner",
        category: "Sales",
        sourceUrl: "https://www.youtube.com/embed/YOUR_UNLISTED_VIDEO_ID_2",
    },
    {
        id: "marketing-psychology",
        title: "Marketing Psychology Secrets",
        description: "Understand the psychology behind why people buy. Use these principles to 10x your marketing results.",
        thumbnail: "https://framerusercontent.com/images/5qeJmi3ALthM0cIa4OXf6Fm2K9M.webp?width=640&height=529",
        duration: "42:00",
        tier: "learner",
        category: "Marketing",
        sourceUrl: "https://www.youtube.com/embed/YOUR_UNLISTED_VIDEO_ID_3",
    },
    {
        id: "leadership-elite",
        title: "Elite Leadership Strategies",
        description: "Advanced leadership frameworks used by CEOs of billion-dollar companies. Master Pack exclusive.",
        thumbnail: "https://framerusercontent.com/images/TSHdHn9kwxNGmPfuU3O453Q.png?width=850&height=837",
        duration: "55:20",
        tier: "master",
        category: "Leadership",
        sourceUrl: "https://www.youtube.com/embed/YOUR_UNLISTED_VIDEO_ID_4",
    },
    {
        id: "scaling-business",
        title: "Scaling to $1M+ Revenue",
        description: "The exact playbook to scale from zero to a million dollars. Advanced strategies for Master Pack members.",
        thumbnail: "https://framerusercontent.com/images/WFSJh0SPfkYfWx6XtirFMSdivIY.webp?width=640&height=452",
        duration: "1:12:45",
        tier: "master",
        category: "Growth",
        sourceUrl: "https://www.youtube.com/embed/YOUR_UNLISTED_VIDEO_ID_5",
    },
    {
        id: "wealth-mindset",
        title: "The Wealth Mindset",
        description: "Reprogram your mind for abundance. Transform your relationship with money and success.",
        thumbnail: "https://framerusercontent.com/images/rtAqc4QjnylNpWdunND5E3NvH9s.webp?width=640&height=459",
        duration: "33:10",
        tier: "learner",
        category: "Mindset",
        sourceUrl: "https://www.youtube.com/embed/YOUR_UNLISTED_VIDEO_ID_6",
    },
];

// Get public video info (without source URL)
export function getPublicVideos(userPlan?: string | null) {
    return VIDEO_CATALOG.map(({ sourceUrl, ...video }) => ({
        ...video,
        isLocked: !userPlan || (video.tier === "master" && userPlan === "learner"),
    }));
}

// Get video with source (server-side only)
export function getVideoWithSource(videoId: string, userPlan: string) {
    const video = VIDEO_CATALOG.find((v) => v.id === videoId);
    if (!video) return null;

    // Check tier access
    if (video.tier === "master" && userPlan === "learner") {
        return null;
    }

    return video;
}
