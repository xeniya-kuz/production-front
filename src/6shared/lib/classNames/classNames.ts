type Mods = Record<string, boolean | string>

export function classNames (
  className?: string,
  additional: Array<string | undefined> = [],
  mods: Mods = {}
): string {
  return [
    className,
    ...additional.filter((ad) => Boolean(ad)),
    ...Object.entries(mods)
      .filter(([className, condition]) => Boolean(condition))
      .map(([className, condition]) => className)
  ].join(' ')
}
