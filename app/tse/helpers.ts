import type { FieldErrors, Path, UseFormSetFocus } from "react-hook-form";
import type { FormValues } from "./schema";

export function focusFirstError(
  errors: FieldErrors<FormValues>,
  setFocus: UseFormSetFocus<FormValues>,
) {
  const path = findFirstErrorPath(errors);
  if (!path) return;
  setFocus(path);
  const element = document.querySelector<HTMLElement>(`[name="${path}"]`);
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function findFirstErrorPath(
  errors: FieldErrors<FormValues>,
  trail: string[] = [],
): Path<FormValues> | null {
  for (const key of Object.keys(errors)) {
    const value = errors[key as keyof typeof errors];
    if (!value) continue;
    const currentTrail = [...trail, key];
    if ("message" in value && value.message) {
      return currentTrail.join(".") as Path<FormValues>;
    }
    if (typeof value === "object") {
      const nested = findFirstErrorPath(
        value as FieldErrors<FormValues>,
        currentTrail,
      );
      if (nested) return nested;
    }
  }
  return null;
}
