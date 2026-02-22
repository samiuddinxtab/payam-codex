export async function loadContent(lang: string, page: string) {
  return await import(`../content/${lang}/${page}.json`);
}
