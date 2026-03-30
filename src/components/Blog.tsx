import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpenText, Sparkles } from "lucide-react";

import { blogs, type BlogPost } from "@/data/blogs";
import { siteProfile } from "@/data/site";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const topCategories = Array.from(new Set(blogs.map((blog) => blog.category))).slice(0, 8);

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="group block h-full rounded-[28px] border border-white/10 bg-card/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-primary/[0.07]"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-primary">
          {blog.eyebrow}
        </span>
        <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{blog.category}</p>
      <h3 className="mt-3 text-2xl font-bold leading-snug transition-colors group-hover:text-primary">
        {blog.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{blog.excerpt}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {blog.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-background/70 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-sm font-medium text-foreground">{blog.readTime}</span>
        <span className="text-sm font-semibold text-primary">Open full article</span>
      </div>
    </Link>
  );
};

const Blog = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(blogs.length);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
      setSlideCount(api.scrollSnapList().length);
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3800);

    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <section id="blog" className="relative overflow-hidden px-6 py-32">
      <motion.div
        className="absolute left-10 top-24 h-24 w-24 rounded-full border border-primary/15"
        animate={{ rotate: 360, y: [0, -18, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-14 right-16 h-40 w-40 rounded-[2.5rem] border border-white/10"
        animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-primary">
              <BookOpenText className="h-4 w-4" />
              Blog slider
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.24em] text-muted-foreground">
              {blogs.length} separate blog pages
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Hyper blog library on <span className="gradient-text">AI, prompts, web systems, and growth</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            Yeh section ab static nahi hai. Har card click karne par alag page khulta hai jahan long-form blog,
            category-specific breakdown, prompt-engineering angle, aur end mein direct contact details diye gaye hain.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-3">
          {topCategories.map((category) => (
            <span
              key={category}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-4 py-2 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground backdrop-blur-xl"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {category}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-14 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,hsl(220_18%_8%_/_0.88),hsl(220_18%_10%_/_0.62))] p-6 backdrop-blur-xl md:p-8"
        >
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
                {siteProfile.title}
              </p>
              <h3 className="mt-3 text-2xl font-bold md:text-4xl">
                Slide through all categories and open any full article
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-background/70 text-foreground transition-all hover:border-primary/25 hover:bg-primary/10 hover:text-primary disabled:opacity-40"
                aria-label="Previous blogs"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-background/70 text-foreground transition-all hover:border-primary/25 hover:bg-primary/10 hover:text-primary disabled:opacity-40"
                aria-label="Next blogs"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {blogs.map((blog) => (
                <CarouselItem key={blog.slug} className="basis-full md:basis-1/2 xl:basis-1/3">
                  <BlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-7 text-muted-foreground">
              Auto-sliding showcase with {blogs.length} long-form blog pages on AI delivery, prompt engineering, full stack systems, and modern business software.
            </p>

            <div className="flex min-w-[16rem] items-center gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${((activeIndex + 1) / slideCount) * 100}%` }}
                />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {String(activeIndex + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
