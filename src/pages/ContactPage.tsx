import { type FormEvent, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = { name: "", email: "", message: "" };

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const errors = useMemo<FormErrors>(() => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (form.message.trim().length < 10) {
      next.message = "Please include at least 10 characters.";
    }
    return next;
  }, [form.email, form.message, form.name]);

  const isValid = Object.keys(errors).length === 0;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        align="left"
        eyebrow="Contact"
        title="We would love your feedback."
        description="This demo form is local-only right now, but it gives a clear example of accessible form structure."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Card>
          {sent ? (
            <div role="status" aria-live="polite">
              <p className="text-slate-700">
                Thanks. Your message was saved only in this local demo session and was not sent
                to a server.
              </p>
              <Button
                type="button"
                className="mt-6"
                onClick={() => {
                  setSent(false);
                  setForm(emptyForm);
                  setTouched({});
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                  onBlur={() => setTouched((v) => ({ ...v, name: true }))}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="field-frost mt-2"
                  placeholder="Your name"
                />
                {touched.name && errors.name ? (
                  <p id="name-error" className="mt-2 text-xs text-amber-200">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                  onBlur={() => setTouched((v) => ({ ...v, email: true }))}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="field-frost mt-2"
                  placeholder="you@school.edu"
                />
                {touched.email && errors.email ? (
                  <p id="email-error" className="mt-2 text-xs text-amber-200">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                  onBlur={() => setTouched((v) => ({ ...v, message: true }))}
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="field-frost mt-2"
                  placeholder="How can we help?"
                />
                {touched.message && errors.message ? (
                  <p id="message-error" className="mt-2 text-xs text-amber-200">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <Button type="submit">Send message</Button>
            </form>
          )}
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-slate-900">Direct contact</h2>
          <p className="mt-3 text-sm text-slate-600">
            If you prefer, replace this section with your chapter&apos;s official email address or
            contact channel.
          </p>
          <p className="mt-6 text-sm text-slate-500">
            We keep privacy messaging simple: this demo does not store submissions long term.
          </p>
        </Card>
      </div>
    </div>
  );
}
