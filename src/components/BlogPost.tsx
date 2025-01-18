import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";

export const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/content/blog/${id}.md`);
        if (!response.ok) {
          throw new Error(`Failed to load blog post: ${response.statusText}`);
        }
        const text = await response.text();
        
        // Extract title from frontmatter
        const titleMatch = text.match(/title: (.+)/);
        if (titleMatch) {
          setTitle(titleMatch[1]);
        }

        // Remove frontmatter from content
        const contentWithoutFrontmatter = text.split('---')[2];
        setContent(contentWithoutFrontmatter);
      } catch (error) {
        console.error("Error loading blog post:", error);
      }
    };

    fetchContent();
  }, [id]);

  if (id !== "dont-break-your-windows") {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          <ReactMarkdown>{content}</ReactMarkdown>
        </motion.article>
      </main>
    </div>
  );
};