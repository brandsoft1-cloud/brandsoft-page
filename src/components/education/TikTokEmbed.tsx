'use client';

/**
 * Embed TikTok por iframe (más fiable en localhost que embed.js + blockquote).
 * Video: https://www.tiktok.com/@mao.brandsoft/video/7637368871409798420
 */
export const CAREER_PACK_TIKTOK_URL =
    'https://www.tiktok.com/@mao.brandsoft/video/7637368871409798420';
export const CAREER_PACK_TIKTOK_ID = '7637368871409798420';

const EMBED_SRC = `https://www.tiktok.com/embed/v2/${CAREER_PACK_TIKTOK_ID}`;

type Props = {
    className?: string;
};

export default function TikTokEmbed({ className = '' }: Props) {
    return (
        <div className={`mx-auto w-full max-w-[325px] ${className}`}>
            <div className="overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-white/10">
                <iframe
                    src={EMBED_SRC}
                    title="Mentoría BrandSoft Education en TikTok"
                    className="block h-[580px] w-full border-0"
                    allow="encrypted-media; fullscreen; picture-in-picture; accelerometer; gyroscope"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            </div>
            <a
                href={CAREER_PACK_TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[#C4B5FD] underline-offset-4 hover:underline"
            >
                Si no carga el video, ábrelo en TikTok →
            </a>
        </div>
    );
}
