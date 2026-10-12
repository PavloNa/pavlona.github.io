# DESIGN.md

## Direction (from the owner)

> Modern, slick, dark themed, programmy, something that gives off premiumness.
>
> Black on gold feels nice.

Dial: ENERGY 2 / RHYTHM 2 / MOTION 2

## Decisions and reasons

- **Dark only:** the owner asked for dark. No toggle.
- **Palette:** neutral black `#080808`, off-white text `#ededef`, grey `#9d9da6` for secondary text, and one accent, gold `#e0b14f`, with black text on gold buttons (the owner's pick). Gold is the premium cue, and it sits close to the amber of old phosphor terminals (programmy). The accent goes only on the primary button, timeline progress, `//` marks and focus rings.
- **Type:** IBM Plex Sans + IBM Plex Mono. It's IBM's engineering typeface family, and its mono matches the sans, so the `//` labels sit naturally next to everything else. Headings are medium weight with tight tracking, which reads precise rather than loud. The owner rejected a serif (Bodoni Moda) as looking like a consultant, not a developer.
- **Identity motif:** mono `// comment` lines carry metadata such as role, location, stack and dates. They tie the page to code without putting a fake terminal on it.
- **Background:** neutral black `#080808` with a sparse ordered (Bayer) dither of 4px white dots at about 6% opacity, running the full page height. It's densest at the left and right edges and fades toward the content, so it frames the page instead of sitting behind the text, and a slow wave varies the density down the page. Density is capped at about 30%, because above that the dots join into a checkerboard that shimmers (the owner found the earlier round dither ball uncomfortable). Dithering is a computer-graphics technique: modern and programmy, and still neutral. The owner turned down a gold glow, circuit traces, a warm-tinted black, film grain, divider lines and flat stale black.
- **Surfaces:** flat, with hairline borders. No glow, and no grid. The sticky navbar is the only blurred surface, because content scrolls under it.
- **Radius:** 10px on cards, 8px on buttons and inputs, 4px on tags. No pills.
- **Motion:** a staggered hero entrance, a one-time scroll reveal per section and the experience timeline filling as you scroll. No looping animation.
- **Rhythm:** each section has its own composition: hero split, About as rows, Experience as a timeline, Projects as media rows, Contact as a split.
