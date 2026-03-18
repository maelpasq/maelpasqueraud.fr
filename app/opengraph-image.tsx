import { ImageResponse } from "next/og";

import { portfolioContent } from "@/content/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "100%",
          width: "100%",
          background: "#0A0A0A",
          color: "#F5F1E8",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.22,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: 320,
            width: 320,
            background:
              "radial-gradient(circle, rgba(255,106,0,0.34) 0%, rgba(255,106,0,0) 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(245,241,232,0.14)",
            padding: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 18,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#FF6A00",
            }}
          >
            <span>{portfolioContent.seo.ogLabel}</span>
            <span>{portfolioContent.identity.role}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 86,
                lineHeight: 0.9,
                letterSpacing: "-0.08em",
                textTransform: "uppercase",
                maxWidth: 760,
              }}
            >
              {portfolioContent.hero.title}
            </div>
            <div
              style={{
                fontSize: 86,
                lineHeight: 0.9,
                letterSpacing: "-0.08em",
                textTransform: "uppercase",
                color: "#FF6A00",
              }}
            >
              {portfolioContent.hero.accent}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  fontSize: 18,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(245,241,232,0.68)",
                }}
              >
                {portfolioContent.identity.name}
              </div>
              <div
                style={{
                  fontSize: 22,
                  maxWidth: 640,
                  lineHeight: 1.45,
                  color: "rgba(245,241,232,0.82)",
                }}
              >
                {portfolioContent.hero.description}
              </div>
            </div>
            <div
              style={{
                height: 56,
                width: 56,
                border: "1px solid rgba(255,106,0,0.48)",
                background: "rgba(255,106,0,0.14)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
