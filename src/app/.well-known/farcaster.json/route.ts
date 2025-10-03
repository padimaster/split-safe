function withValidProperties(
  properties: Record<string, undefined | string | string[]>
) {
  return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) =>
      Array.isArray(value) ? value.length > 0 : !!value
    )
  );
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL as string;
  return Response.json({
    accountAssociation: {
      header: "",
      payload: "",
      signature: "",
    },
    baseBuilder: {
      allowedAddresses: [""],
    },
    miniapp: {
      version: "1",
      name: "Split Safe",
      homeUrl: "https://split-safe-three.vercel.app",
      iconUrl: "https://split-safe-three.vercel.app/icon.png",
      splashImageUrl: "https://split-safe-three.vercel.app/splash-image.png",
      splashBackgroundColor: "#FFFFFF",
      webhookUrl: "https://split-safe-three.vercel.app/api/webhook",
      subtitle: "Split Safe",
      description: "A fast, fun way to split bills.",
      screenshotUrls: [
        "https://split-safe-three.vercel.app/screenshot-1.png",
        "https://split-safe-three.vercel.app/screenshot-2.png",
        "https://split-safe-three.vercel.app/screenshot-3.png",
      ],
      primaryCategory: "finance",
      tags: ["split-safe", "miniapp", "baseapp"],
      heroImageUrl: "https://split-safe-three.vercel.app/og.png",
      tagline: "Split Safe",
      ogTitle: "Split Safe",
      ogDescription: "A fast, fun way to split bills.",
      ogImageUrl: "https://split-safe-three.vercel.app/og.png",
      noindex: true,
    },
  });
}
