import React, { useState } from "react";
import Section from "../Section";
import { BackgroundCircles } from "../design/Hero";
import { Gradient } from "../design/Services";
import Button from "../Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    college: "",
    country: "",
    place: "",
    gender: "",
    yearOfStudy: "",
    campusAmbassadorId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Section className="pt-[5rem] ">
      <div className="container relative z-2">
        <div className="relative -z-10">
          <BackgroundCircles />
        </div>

        <div className="max-w-[540px] mx-auto">
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Create Account</h1>
            <p className="text-n-4">Join Optima 2025 today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 z-50">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                  required
                  minLength={6}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                  required
                />
              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="College"
                  className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                  required
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Place"
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              />

              <select
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <select
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              >
                <option value="">Year of Study</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>

              <input
                type="text"
                placeholder="Campus Ambassador ID (optional)"
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
              />
            </div>

            <Button className="w-full">Sign Up</Button>

            <p className="text-center text-n-4">
              Already have an account?{" "}
              <a href="/signin" className="text-primary-1 hover:text-primary-2">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default SignUp;
