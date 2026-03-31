import { type FormEvent, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeader
        align="left"
        eyebrow="Contact"
        title="We would love to hear from you."
        description="This form is a POC—no data is sent to a server. It demonstrates accessible form structure for your presentation."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Card>
          {sent ? (
            <p className="text-slate-200" role="status">
              Thanks—your message was recorded locally for demo purposes. Connect a backend or
              form provider when you are ready for production.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  placeholder="you@school.edu"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  placeholder="How can we help?"
                />
              </div>
              <Button type="submit">Send message</Button>
            </form>
          )}
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-white">Direct</h2>
          <p className="mt-3 text-sm text-slate-300">
            Replace with your chapter&apos;s preferred contact method. For judges, emphasize
            that privacy claims match actual behavior—this demo does not persist submissions.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            Tip: add a school-appropriate email or ticketing link when content is finalized.
          </p>
        </Card>
      </div>
    </div>
  );
}
