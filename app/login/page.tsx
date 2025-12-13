"use client";

import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card w-full max-w-md p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-orange-600 text-center">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <Input
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit">Login</Button>
        </form>

        {/* Switch */}
        <p className="text-center mt-6 text-sm text-gray-600">
          New here?{" "}
          <Link href="/signup" className="text-orange-600 font-medium">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
