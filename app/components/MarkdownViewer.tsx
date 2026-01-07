"use client";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownViewerProps {
  content: string;
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !content) {
    return (
      <div className="prose prose-invert prose-lg max-w-none">
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF8000]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Títulos
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 first:mt-0 bg-gradient-to-r from-[#FF8000] to-cyan-400 bg-clip-text text-transparent border-b border-white/10 pb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl md:text-4xl font-bold mb-5 mt-10 bg-gradient-to-r from-[#FF9933] to-cyan-300 bg-clip-text text-transparent border-b border-white/10 pb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-[#FF9933]" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-xl md:text-2xl font-bold mb-3 mt-6 text-[#FFB366]" {...props} />
          ),
          // Parágrafos
          p: ({ node, ...props }) => (
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg" {...props} />
          ),
          // Listas
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300 marker:text-[#FF8000]" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-300 marker:text-[#FF8000]" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-4 mb-2 text-base md:text-lg leading-relaxed" {...props} />
          ),
          // Links
          a: ({ node, ...props }) => (
            <a
              className="text-[#FF8000] hover:text-[#FF9933] underline underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          // Citações
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-[#FF8000]/50 pl-6 py-2 my-6 italic text-gray-400 bg-white/5 rounded-r-lg"
              {...props}
            />
          ),
          // Código inline
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = inline !== false;
            
            if (isInline) {
              return (
                <code
                  className="px-2 py-1 bg-[#FF8000]/20 text-[#FF9933] rounded text-sm font-mono border border-[#FF8000]/30"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className={`block p-4 bg-gray-900/50 text-gray-200 rounded-lg overflow-x-auto text-sm font-mono border border-white/10 my-4 ${className || ''}`}
                {...props}
              >
                {children}
              </code>
            );
          },
          // Blocos de código
          pre: ({ node, children, ...props }: any) => (
            <pre className="bg-gray-900/50 rounded-lg p-4 overflow-x-auto my-4 border border-white/10" {...props}>
              {children}
            </pre>
          ),
          // Tabelas
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6 rounded-lg border border-white/10">
              <table className="min-w-full divide-y divide-white/10" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-[#FF8000]/10" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="divide-y divide-white/10" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="hover:bg-white/5 transition-colors" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-6 py-3 text-left text-xs font-bold text-[#FF9933] uppercase tracking-wider" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-6 py-4 text-sm text-gray-300" {...props} />
          ),
          // Separadores
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-t border-white/10" {...props} />
          ),
          // Texto forte e itálico
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-white" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-gray-200" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

