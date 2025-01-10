"use client";

import { Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 text-center relative z-40">
      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://www.linkedin.com/in/qiwen-ye"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary p-2 rounded-full hover:bg-accent transition-colors"
        >
          <Linkedin size={24} />
        </Link>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Bobbie Ye. All rights reserved.
      </p>
    </footer>
  );
}
