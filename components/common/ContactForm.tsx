"use client";

import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnndaoaw");
  useEffect(()=>{
    if (state.succeeded) {
        toast('Message sent! Thank you for your interest! I will get back to you asap!', {
            duration: 4000,
            position: 'top-center',
            icon: '👏',
          });
      }
  }, [state.succeeded]);
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={state.submitting} className="w-full">
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

export default ContactForm;
