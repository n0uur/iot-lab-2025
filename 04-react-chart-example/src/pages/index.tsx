import { useState } from "react";
import reactLogo from "../assets/react.svg";
import {
  BookOpen,
  Code,
  ExternalLink,
  GraduationCap,
  Rocket,
  Layers,
  ChartBarIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

function IndexPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <main className="max-w-3xl w-full space-y-8 text-center">
        {/* Hero Section */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex justify-center items-center gap-4 mb-8">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img
                src="/vite.svg"
                className="h-16 w-16 hover:scale-110 transition-transform duration-300"
                alt="Vite logo"
              />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img
                src={reactLogo}
                className="h-16 w-16 hover:scale-110 transition-transform duration-300 animate-[spin_20s_linear_infinite]"
                alt="React logo"
              />
            </a>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome to React + Vite
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey to building modern web applications starts here. Fast, scalable, and
            developer-friendly.
          </p>
        </div>

        {/* Interactive Element */}
        <div className="w-full p-8 bg-card border border-border rounded-xl shadow-sm mx-auto hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
            <Code className="w-6 h-6 text-primary" />
            Interactive Demo
          </h2>
          <p className="mb-6 text-muted-foreground">
            Edit{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>

          <div className="flex justify-center items-center gap-2">
            <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>

            <Link to={"/chart"}>
              <Button variant="link">
                ตารางอะไรสักอย่าง <ExternalLinkIcon />{" "}
              </Button>
            </Link>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <ResourceCard
            href="https://react.dev/learn"
            title="Learn React"
            description="Comprehensive guide to the core concepts of React."
            icon={<BookOpen className="w-5 h-5" />}
          />
          <ResourceCard
            href="https://vitejs.dev/guide/"
            title="Vite Docs"
            description="Learn how Vite creates a super fast dev environment."
            icon={<Rocket className="w-5 h-5" />}
          />
          <ResourceCard
            href="https://tailwindcss.com/docs"
            title="Tailwind CSS"
            description="Utility-first CSS framework for rapid UI development."
            icon={<GraduationCap className="w-5 h-5" />}
          />
          <ResourceCard
            href="https://ui.shadcn.com"
            title="shadcn/ui"
            description="Beautifully designed components that you can copy and paste into your apps."
            icon={<Layers className="w-5 h-5" />}
          />
        </div>
      </main>

      <footer className="mt-16 text-sm text-muted-foreground">
        <p>Built for the IoT Lab 2025 React Workshop</p>
      </footer>
    </div>
  );
}

function ResourceCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-accent/50 transition-all group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 bg-primary/10 text-primary rounded-md group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </a>
  );
}

export default IndexPage;
