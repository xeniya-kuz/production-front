type Mods = Record<string, boolean | string>;

export function classNames(
  className: string,
  additional: string,
  mods: Mods
): string {
  return [
    className,
    additional,
    ...Object.entries(mods)
      .filter(([className, condition]) => Boolean(condition))
      .map(([className, condition]) => className),
  ].join(' ');
}
