'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from "@/app/components/Button";

export default function AssetsPage() {
  const [files, setFiles] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/files')
      .then((res) => res.json())
      .then((data) => {
        if (data.files) {
          setFiles(data.files);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredFiles = files.filter((file) =>
    file.toLowerCase().includes(search.toLowerCase())
  );

  const isImage = (file: string) => {
    return /\.(jpg|jpeg|png|webp|avif|svg|gif|ico)$/i.test(file);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white pt-24">
      <section className="px-6 py-12 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl tracking-tight text-zinc-900 sm:text-6xl font-montserrat mb-6">
          Asset Browser
        </h1>
        <p className="text-lg text-zinc-600 max-w-3xl font-montserrat mb-12">
          Browse and manage all uploaded assets. You can search for specific files, 
          preview images, and copy direct URLs for use in your projects.
        </p>

        <div className="mb-12">
          <input
            type="text"
            placeholder="Search files..."
            className="w-full p-4 border border-zinc-200 rounded-2xl bg-zinc-50 shadow-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none text-zinc-900 font-montserrat"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFiles.map((file) => (
            <div
              key={file}
              className="flex flex-col"
            >
              <div className="aspect-square relative bg-white rounded-xl mb-6 flex items-center justify-center overflow-hidden group border border-zinc-200">
                {isImage(file) ? (
                  <Link href={`/${file}`} target="_blank" className="w-full h-full">
                    <Image
                      src={`/${file}`}
                      alt={file}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                ) : (
                  <div className="text-zinc-400 font-mono text-2xl p-4 text-center">
                    {file.split('.').pop()?.toUpperCase() || 'FILE'}
                  </div>
                )}
              </div>
              
              <div className="flex-grow">
                <p className="text-xs font-medium text-zinc-500 font-montserrat truncate mb-1" title={file}>
                  {file.split('/').slice(0, -1).join('/') || '/'}
                </p>
                <h3 className="text-lg font-bold text-zinc-900 font-montserrat truncate mb-4" title={file.split('/').pop()}>
                  {file.split('/').pop()}
                </h3>
              </div>

              <div className="flex gap-4 mt-auto">
                <Button
                  href={`/${file}`}
                  newTab={true}
                  className="px-4! py-2! rounded-xl! text-xs!"
                >
                  View Full
                </Button>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(`${window.location.origin}/${file}`);
                    setCopied(file);
                    window.setTimeout(() => setCopied(null), 1500);
                  }}
                  aria-live="polite"
                  variant={copied === file ? "success" : "secondary"}
                  className="px-4! py-2! rounded-xl! text-xs!"
                >
                  {copied === file ? 'Copied!' : 'Copy URL'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredFiles.length === 0 && (
          <div className="text-center py-24 text-zinc-500 font-montserrat">
            No files found matching &quot;{search}&quot;
          </div>
        )}
      </section>
    </div>
  );
}
