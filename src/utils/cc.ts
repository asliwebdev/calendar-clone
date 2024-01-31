export default function (...classes: unknown[]) {
  return classes.filter((c) => typeof c === "string").join(" ");
}
