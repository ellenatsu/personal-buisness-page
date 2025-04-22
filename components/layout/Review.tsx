import React from "react";
import { SectionWrapper } from "../common/SectionWrapper";

const Review = () => {
  return (
    <SectionWrapper id="review" hasDivider>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">What Customers Say</h2>

        <div className="space-y-8">
          <blockquote className="text-lg text-gray-700 italic">
            “Thor fixed a dripping sink in my apartment — super quick and
            professional. Definitely recommend him if you need small plumbing
            help!”
            <footer className="mt-2 text-sm text-gray-500">
              – Omeri, friend & first-time client
            </footer>
          </blockquote>

          <blockquote className="text-lg text-gray-700 italic">
            “Fast, affordable, and easy to work with. Thor handled a kitchen
            faucet install for us and made it look easy.”
            <footer className="mt-2 text-sm text-gray-500">
              – James, friend & first-time client
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center space-y-6 mt-5">
        <h2 className="text-3xl font-bold text-gray-900">
          Testimonial from my coworkers
        </h2>

        <div className="space-y-8">
          <blockquote className="text-lg text-gray-700 italic">
            “I’ve worked with Thor on both service jobs and construction sites — he’s honest, knows what he’s doing, and never cuts corners. He’s the kind of guy who shows up early, finishes what he starts, and keeps things clean and organized.”
            <footer className="mt-2 text-sm text-gray-500">
              – Yifan, Journeyman Plumber
            </footer>
          </blockquote>

          <blockquote className="text-lg text-gray-700 italic">
            “Thor is reliable, efficient, and easy to work with. He communicates clearly, whether it’s with clients or the team, and takes pride in doing things right. I’d trust him to take on jobs solo anytime.”
            <footer className="mt-2 text-sm text-gray-500">
              – Gram, Journeyman Plumber
            </footer>
          </blockquote>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Review;
