"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import MarkdownViewer from "../../components/MarkdownViewer";

export default function MarkdownPage() {
  const params = useParams();
  const router = useRouter();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const slug = params?.slug as string;
    if (!slug) {
      setError("Documento não encontrado");
      setLoading(false);
      return;
    }

    // Buscar o conteúdo do markdown
    // O arquivo está em public/, então o caminho é direto
    fetch(`/${slug}.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Documento não encontrado");
        }
        return res.text();
      })
      .then((text) => {
        // Extrair título do markdown (primeira linha ou primeiro H1)
        const lines = text.split("\n");
        let extractedTitle = slug;

        // Tentar encontrar o primeiro H1 ou usar a primeira linha
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("# ")) {
            extractedTitle = trimmed.replace(/^#+\s*/, "").trim();
            break;
          } else if (trimmed && !trimmed.startsWith("#") && trimmed.length > 0) {
            extractedTitle = trimmed;
            break;
          }
        }

        setTitle(extractedTitle || slug);
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar markdown:", err);
        setError(err.message || "Erro ao carregar documento");
        setLoading(false);
      });
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400 mb-4"></div>
          <p className="text-gray-400">Carregando documento...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold mb-4 text-red-400">Erro ao carregar documento</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg transition-colors border border-indigo-500/30"
          >
            Voltar para a página inicial
          </button>
        </div>
      </div>
    );
  }

  const slug = params?.slug as string;

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
              >
                <ArrowLeft size={18} />
                <span>Voltar</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`/${slug}.md`}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg transition-colors border border-indigo-500/30"
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">Baixar</span>
                </a>
                <a
                  href={`/${slug}.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                >
                  <ExternalLink size={18} />
                  <span className="hidden sm:inline">Abrir</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-5xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <FileText size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {title}
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 md:p-12"
          >
            <MarkdownViewer content={content} />
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-20 py-8 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg transition-colors border border-indigo-500/30"
            >
              <ArrowLeft size={18} />
              Voltar para a página inicial
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

