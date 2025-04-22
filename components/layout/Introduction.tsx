import React from "react";
import { SectionWrapper } from "../common/SectionWrapper";
import PhotoGallery from "../common/PhotoGallery";

const Introduction = () => {
  return (
    <SectionWrapper id="introduction" bgColor="bg-white" hasDivider>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Intro */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="text-lg text-gray-700">
            I’m a plumber based in Vancouver with hands-on
            experience in both residential service and new building
            construction. I take pride in honest work, fair pricing, and showing
            up when I say I will.
          </p>
        </div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Work Experience
            </h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>
                3 years at a residential plumbing service company (repairs,
                installations, maintenance)
              </li>
              <li>
                1 year (current) on-site plumbing for new apartment buildings
                (rough-ins, layout, installs)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Training & Certification
            </h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Completed Level 1–3 plumbing apprenticeship in BC</li>
              <li>
                Currently completing Level 4
              </li>
            </ul>
          </div>
        </div>

        {/* Tool + Work Photo Gallery */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Tools & Job Photos
          </h3>
          <p className="text-gray-600 mb-4">
            Photos from real job sites — my own tools and plumbing work across
            Vancouver.
          </p>

          <PhotoGallery />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Introduction;
