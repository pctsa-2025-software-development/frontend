import { type FormEvent, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

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

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((v) => ({ ...v, [key]: e.target.value })),
    onBlur: () => setTouched((v) => ({ ...v, [key]: true })),
    error: errors[key],
    touched: touched[key],
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        as="h1"
        align="left"
        eyebrow="Contact"
        title="We'd love to hear from you."
        description="Have feedback, questions, or ideas? This form is a local demo in the browser right now, but it shows how accessible form design works in practice."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Card>
          {sent ? (
            <div role="status" aria-live="polite">
              <p className="text-slate-300">
                Thanks for reaching out. In a production version, your message would be securely sent to our team. For now, it's saved only in this local browser session.
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
              <FormField
                fieldId="name"
                label="Name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                {...field("name")}
              />
              <FormField
                fieldId="email"
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@school.edu"
                {...field("email")}
              />
              <FormField
                as="textarea"
                fieldId="message"
                label="Message"
                name="message"
                required
                rows={5}
                placeholder="How can we help?"
                {...field("message")}
              />
              <Button type="submit">Send message</Button>
            </form>
          )}
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-white">Direct contact</h2>
          <p className="mt-3 text-sm text-slate-400">
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
