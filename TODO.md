# TODO - Standardize website typography

- [ ] Inspect other page stylesheets (Upcoming/Past/WWII/Vista/GetInvolved/ContactUs/etc.) to see which selectors override heading/paragraph font-size/font-family.
- [ ] Add a typography system in a single global stylesheet (prefer `src/index.css`) defining:
  - base body font-family + base font-size
  - consistent heading sizes for h1/h2/h3/h4/h5/h6
  - consistent paragraph size for `p` and other text blocks
  - ensure responsive scaling for smaller screens
- [ ] Remove/neutralize per-page font overrides that conflict with the global standard (or map them to the same sizes).
- [ ] Ensure “page headers” (usually a big h1 in each page) use the same size via shared class or selectors like `.page-header` / `.about-header h1` equivalents.
- [ ] Test build/dev server and visually verify that headings + paragraphs match across key pages.
- [ ] Update remaining CSS files until all page headings and paragraph text follow the same standard.

