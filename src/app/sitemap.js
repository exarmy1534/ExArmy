export default async function sitemap() {
  const baseUrl = "https://exarmytravels.com";

  // 🔹 Fetch dynamic car data
  const res = await fetch(`${baseUrl}/api/cars`, {
    cache: "no-store",
  });

  const cars = await res.json();

  // 🔹 Static routes (same pages, new brand)
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];

  // 🔹 Dynamic car routes (same logic, new domain)
  const carRoutes = cars.map((car) => ({
    url: `${baseUrl}/cars/${encodeURIComponent(car.name)}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...carRoutes];
}
