export default function config() {
  const domain = process.env.LTI_DOMAIN || "localhost";
  const prefix = process.env.NODE_ENV === "production" ? "https://" : "http://";
  const launchURL = `${prefix}${domain}/launch`;

  return {
    DOMAIN: domain,
    LAUNCH_URL: launchURL,
  };
}
