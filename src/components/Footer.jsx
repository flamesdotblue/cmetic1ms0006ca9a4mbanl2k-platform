import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/80">
      <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-zinc-500">
        <p className="leading-relaxed">
          This site presents dark fiction, apocrypha, and unverified accounts for atmospheric and narrative purposes. No claims of scientific proof are made.
        </p>
        <div className="mt-3 text-zinc-600">© {new Date().getFullYear()} Nocturne Archives</div>
      </div>
    </footer>
  );
}
