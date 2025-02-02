import React, { useState } from "react";
import Section from "../Section";
import { BackgroundCircles } from "../design/Hero";
import { Gradient } from "../design/Services";
import Button from "../Button";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset
  };

  return (
    <Section className="pt-[5rem] ">
      <div className="container relative z-2">
        <div className="relative -z-10">
          <BackgroundCircles />
        </div>

        <div className="max-w-[440px] mx-auto">
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Reset Password</h1>
            <p className="text-n-4 text-center">
              Enter your email address and we'll send you instructions to reset
              your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-n-8/80 rounded-lg border border-n-6 focus:outline-none focus:border-primary-1"
                required
              />
            </div>

            <Button className="w-full">Send Reset Link</Button>

            <p className="text-center text-n-4">
              Remember your password?{" "}
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

export default ResetPassword;
