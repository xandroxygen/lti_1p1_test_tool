export default function config() {
  const domain = process.env.VERCEL_URL || "localhost";
  const prefix = process.env.NODE_ENV === "production" ? "https://" : "http://";
  const launchURL = `${prefix}${domain}/launch`;

  return {
    DOMAIN: domain,
    LAUNCH_URL: launchURL,
  };
}
