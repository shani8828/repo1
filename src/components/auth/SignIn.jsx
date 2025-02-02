import React from "react";
import Section from "../Section";
import { BackgroundCircles } from "../design/Hero";
import { Gradient } from "../design/Services";
import Button from "../Button";

const SignIn = () => {
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

        <div className="max-w-[440px] mx-auto">
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-n-4">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              />

              <div className="flex justify-end">
                <a
                  href="/reset-password"
                  className="text-primary-1 hover:text-primary-2 text-sm"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <Button className="w-full">Sign In</Button>

            <p className="text-center text-n-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-primary-1 hover:text-primary-2">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default SignIn;
