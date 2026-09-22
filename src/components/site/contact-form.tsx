import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-lg border border-border bg-card p-6 shadow-sm sm:grid-cols-2"
    >
      <div className="sm:col-span-2">
        <Label htmlFor="inquiry">Inquiry type</Label>
        <select
          id="inquiry"
          className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
        >
          <option>General inquiry</option>
          <option>Courier & freight</option>
          <option>Distribution</option>
          <option>Connected systems</option>
        </select>
      </div>
      {[
        ["name", "Name"],
        ["company", "Company"],
        ["email", "Email"],
        ["phone", "Contact number"],
      ].map(([id, label]) => (
        <div key={id}>
          <Label htmlFor={id}>{label}</Label>
          <Input
            id={id}
            className="mt-2"
            required={id === "name" || id === "email"}
            type={id === "email" ? "email" : "text"}
          />
        </div>
      ))}
      <div className="sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" required className="mt-2 min-h-28" />
      </div>
      <div className="sm:col-span-2 flex flex-col items-start gap-3">
        <Button type="submit" size="lg">
          Send Inquiry
          <Send />
        </Button>
        {sent && (
          <p role="status" className="text-sm text-muted-foreground">
            Your form is ready. Email delivery will activate when a mail service is connected.
          </p>
        )}
      </div>
    </form>
  );
}
