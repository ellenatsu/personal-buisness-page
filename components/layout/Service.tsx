"use client";

import React from "react";
import { SectionWrapper } from "../common/SectionWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Service = () => {
  return (
    <SectionWrapper id="service" hasDivider bgColor="bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        What I Can Help With
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Straightforward plumbing help for your home — done right, and more
        affordable than calling a company.
      </p>
      <p className="mt-6 text-sm text-gray-500 italic">
        Always fair pricing — no surprise fees or company markups.
      </p>

      <div className="w-full grid md:grid-cols-4 gap-5">
        <Card>
          <CardHeader>
            <CardTitle>Leak Fixing</CardTitle>
          </CardHeader>
          <CardContent>
            I repair leaky faucets, pipes, sinks, and common household plumbing
            issues before they turn into costly problems.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fixture Installations</CardTitle>
          </CardHeader>
          <CardContent>
            Need a new faucet, toilet, or showerhead installed? I can handle
            small installs with care and precision.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plumbing Inspections</CardTitle>
          </CardHeader>
          <CardContent>
            I offer general plumbing checks if you’re unsure about a water issue
            or need a second opinion before calling a larger service.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Minor Repairs & Replacements</CardTitle>
          </CardHeader>
          <CardContent>
            From pipe replacements to small fixes, I help keep your plumbing in
            good shape — even on evenings and weekends.
          </CardContent>
        </Card>
      </div>

      <p>TODO later: modal per service with details, chat/email buttons, more contact and pricing logic</p>
    </SectionWrapper>
  );
};

export default Service;
