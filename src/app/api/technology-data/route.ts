import { NextResponse } from "next/server";

interface TechnologyData {
  description: string;
  category: string;
  comparisonData: {
    labels: string[];
    data: number[];
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const technology = searchParams.get("technology");

  const technologyData: Record<string, TechnologyData> = {
    JavaScript: {
      description:
        "A high-level, interpreted programming language that is a core technology of the Web.",
      category: "Programming Languages",
      comparisonData: {
        labels: ["JavaScript", "Python", "Java"],
        data: [63.61, 49.28, 35.35], // Updated based on real-world usage
      },
    },
    React: {
      description: "A JavaScript library for building user interfaces.",
      category: "Front-End Frameworks",
      comparisonData: {
        labels: ["React", "Angular", "Vue"],
        data: [50.4, 22.96, 18.97], // Reflects the most recent popularity rankings of frameworks
      },
    },
    Next: {
      description:
        "A React framework capable of server-side rendering and static site generation.",
      category: "Full-Stack Frameworks",
      comparisonData: {
        labels: ["Next.js", "Nuxt.js", "Laravel"],
        data: [40.4, 19.6, 12.5], // Based on popularity in full-stack and server-side frameworks
      },
    },
    Node: {
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      category: "Backend Technologies",
      comparisonData: {
        labels: ["Node.js", "Spring Boot", "Django"],
        data: [42.73, 32.1, 20.9], // Reflecting current server-side tech trends
      },
    },
    Express: {
      description: "A minimal and flexible Node.js web application framework.",
      category: "Node.js Web Frameworks",
      comparisonData: {
        labels: ["Express", "Fastify", "NestJS"],
        data: [22.3, 14.9, 10.1], // Reflects growing adoption of Fastify and NestJS
      },
    },
    MongoDB: {
      description:
        "A NoSQL database that provides a document-oriented data model.",
      category: "Database Management Systems",
      comparisonData: {
        labels: ["MongoDB", "Amazon DynamoDB", "Oracle NoSQL Database"],
        data: [38.9, 22.5, 12.1], // Reflects growing use of NoSQL databases
      },
    },
    Cypress: {
      description: "An end-to-end testing framework for web applications.",
      category: "Testing Frameworks",
      comparisonData: {
        labels: ["Cypress", "Selenium", "Puppeteer"],
        data: [12.1, 8.3, 7.4], // Updated based on adoption in the testing ecosystem
      },
    },
  };

  if (!technology || !(technology in technologyData)) {
    return NextResponse.json(
      { error: "Technology not found" },
      { status: 404 }
    );
  }

  const data = technologyData[technology];
  return NextResponse.json(data);
}
