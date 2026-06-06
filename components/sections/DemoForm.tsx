"use client";

import * as React from "react";
import { demo } from "@/content/demo";
import { site } from "@/content/site";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const { fields, submitLabel, successTitle, successBody, errorBody } = demo.form;

export function DemoForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border-accent bg-muted rounded-[var(--radius-base)] border p-8"
      >
        <h3 className="text-lg font-semibold tracking-tight">{successTitle}</h3>
        <p className="text-muted-foreground mt-2">{successBody}</p>
        <p className="text-muted-foreground mt-3 text-sm">
          Prefer email? Reach us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-accent-text hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>
            {field.label}
            {field.required && (
              <span className="text-accent-text" aria-hidden="true">
                {" "}
                *
              </span>
            )}
          </Label>

          {field.kind === "textarea" ? (
            <Textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={
                "placeholder" in field ? field.placeholder : undefined
              }
            />
          ) : field.kind === "select" ? (
            <Select
              id={field.name}
              name={field.name}
              required={field.required}
              defaultValue=""
            >
              <option value="" disabled>
                Select…
              </option>
              {"options" in field &&
                field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
            </Select>
          ) : (
            <Input
              id={field.name}
              name={field.name}
              type="text"
              required={field.required}
              autoComplete={
                "autoComplete" in field ? field.autoComplete : undefined
              }
              placeholder={
                "placeholder" in field ? field.placeholder : undefined
              }
            />
          )}
        </div>
      ))}

      {status === "error" && (
        <p role="alert" className="text-accent-text text-sm">
          {errorBody}{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-2"
          >
            {site.email}
          </a>
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>

      <p className="text-muted-foreground text-sm">{demo.privacyNote}</p>
    </form>
  );
}
