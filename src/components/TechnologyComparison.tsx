"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = dynamic(() => Promise.resolve(Bar), { ssr: false });

interface TechnologyComparisonProps {
  technology: string;
}

interface TechnologyData {
  description: string;
  comparisonData: {
    labels: string[];
    data: number[];
  };
}

export function TechnologyComparison({
  technology,
}: TechnologyComparisonProps) {
  const [technologyData, setTechnologyData] = useState<TechnologyData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/technology-data?technology=${encodeURIComponent(technology)}`,
          {
            headers: {
              "Cache-Control": "max-age=3600", // Cache for 1 hour
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTechnologyData(data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [technology]);

  const chartData = technologyData
    ? {
        labels: technologyData.comparisonData.labels,
        datasets: [
          {
            label: "Usage (%)",
            data: technologyData.comparisonData.data,
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }
    : null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
      aria-labelledby={`${technology}-comparison`}
    >
      <h3
        id={`${technology}-comparison`}
        className="text-xl font-semibold mb-2"
      >
        {technology} Comparison
      </h3>
      {isLoading ? (
        <SkeletonLoader />
      ) : error ? (
        <p role="alert" className="text-red-500">
          {error}
        </p>
      ) : !technologyData ? (
        <p>No data available</p>
      ) : (
        <>
          <p className="mb-4">{technologyData.description}</p>
          <div className="h-64 md:h-80 lg:h-96" aria-hidden="true">
            {chartData && (
              <ChartComponent
                data={chartData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      title: {
                        display: true,
                        text: "Usage (%)",
                      },
                    },
                    x: {
                      title: {
                        display: true,
                        text: "Technologies",
                      },
                    },
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) =>
                          `${context.label}: ${context.formattedValue}%`,
                      },
                    },
                  },
                }}
              />
            )}
          </div>
          <div className="sr-only">
            <h4>Technology Usage Comparison</h4>
            <ul>
              {technologyData.comparisonData.labels.map((label, index) => (
                <li key={label}>
                  {label}: {technologyData.comparisonData.data[index]}%
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </motion.section>
  );
}

function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-64 md:h-80 lg:h-96 bg-gray-200 rounded"></div>
    </div>
  );
}
