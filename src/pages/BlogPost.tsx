import { useEffect, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone } from "lucide-react";

import Navbar from "@/components/Navbar";
import PageBackdrop from "@/components/PageBackdrop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { contactBlocks, siteProfile } from "@/data/site";

const BlogPost = () => {
  const { slug } = useParams();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  const moreBlogs = useMemo(() => {
    if (!blog) {
      return [];
    }

    return blogs.filter((item) => item.slug !== blog.slug).slice(0, 3);
  }, [blog]);

  useEffect(() => {
    if (!blog) {
      return;
    }

    document.title = `${blog.title} | ${siteProfile.name}`;
    const description = document.querySelector('meta[name="description"]');
    const keywords = document.querySelector('meta[name="keywords"]');

    if (description) {
      description.setAttribute("content", blog.excerpt);
    }

    if (keywords) {
      keywords.setAttribute("content", [...blog.tags, ...siteProfile.keywords].join(", "));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blog]);

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <PageBackdrop />
      <Navbar />

      <main className="relative z-10 pb-24 pt-28">
        <section className="px-6">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="rounded-[32px] border border-white/10 bg-card/75 p-8 backdrop-blur-xl md:p-12"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <a
                  href="/#blog"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to slider
                </a>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-primary">
                  {blog.eyebrow}
                </span>
                <span className="rounded-full border border-border px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">
                  {blog.readTime}
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">{blog.heroLine}</p>
              <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
                {blog.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {blog.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {contactBlocks.slice(0, 3).map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="rounded-[24px] border border-border bg-background/50 p-5"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-3 block text-base font-semibold transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-base font-semibold">{item.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 pt-12">
          <div className="container mx-auto grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="space-y-8">
              {blog.sections.map((section, index) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.04 }}
                  className="rounded-[28px] border border-white/10 bg-card/70 p-7 backdrop-blur-xl md:p-9"
                >
                  <h2 className="text-2xl font-bold md:text-3xl">{section.heading}</h2>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-8 text-muted-foreground md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl border border-primary/15 bg-primary/10 px-4 py-3 text-sm leading-relaxed text-foreground/90"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              ))}
            </article>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 lg:sticky lg:top-28 lg:self-start"
            >
              <div className="rounded-[28px] border border-primary/20 bg-primary/10 p-6 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Direct Contact</p>
                <h2 className="mt-3 text-2xl font-bold">Ready for a hyper-fast AI project?</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Connect for portfolio websites, automation systems, dashboards, AI workflows, and business software.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={siteProfile.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={siteProfile.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-background/70 px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-card/70 p-6 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">More Blogs</p>
                <div className="mt-5 space-y-4">
                  {moreBlogs.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/blog/${item.slug}`}
                      className="group block rounded-2xl border border-border bg-background/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">{item.category}</p>
                      <h3 className="mt-2 text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href={siteProfile.portfolioHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[28px] border border-white/10 bg-card/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Portfolio</p>
                  <p className="mt-2 text-lg font-semibold">See more work and live projects</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </motion.aside>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
