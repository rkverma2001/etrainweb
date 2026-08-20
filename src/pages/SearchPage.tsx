import React, { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import type { CourseSearchResult, TabItem } from "../components/types";
import api from "@/services/api";
import Footer from "@/components/footer/Footer";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  const q = useQuery().get("q") || "";

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<CourseSearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    if (!q.trim()) {
      setResults([]);
      setActiveTab(null);
      return;
    }

    let cancelled = false;

    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = await api.get("/course/search", {
          params: {
            q,
          },
        });

        if (cancelled) return;

        setResults(data || []);

        const first = data?.[0];

        const firstTab = first
          ? (Object.keys(first.tabData ?? {})[0] ?? null)
          : null;

        setActiveTab(firstTab);
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError("Something went wrong while fetching results");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchResults();

    return () => {
      cancelled = true;
    };
  }, [q]);

  const allTabs = useMemo(() => {
    const tabs = new Set<string>();

    results.forEach((course) => {
      Object.keys(course.tabData ?? {}).forEach((tab) => tabs.add(tab));
    });

    return Array.from(tabs);
  }, [results]);

  const renderCard = (course: CourseSearchResult, tabKey?: string) => {
    const primary: TabItem | undefined = tabKey
      ? course.tabData?.[tabKey]
      : course.tabData
        ? (course.tabData.Bundle ?? Object.values(course.tabData)[0])
        : undefined;

    const title = course.courseName ?? primary?.title ?? "Untitled";

    const subtitle = primary?.subtitle;
    const image = primary?.image;
    const price = primary?.price;

    const getCourseLink = (course: CourseSearchResult) => {
      const code = course.courseCode.toUpperCase();

      // IBM Courses
      const ibmCourses = [
        "PY0101EN",
        "GENAI101",
        "DA0101EN",
        "SC0101EN",
        "IOT0101EN",
        "CL0101EN",
        "BC0101EN",
        "AI0101EN",
        "ML0101EN",
        "DB0101EN",
        "GENAI201",
        "AGILE101",
        "CEDEV1IN",
        "CEBDH1IN",
        "CEJAVA1IN",
        "CEJS1IN",
        "CENJS1IN",
        "CEMDB1IN",
        "CERDB1IN",
        "CEREST1IN",
        "SCALA101",
        "CEHTML1IN",
        "CEIBMCL1IN",
        "CN0101EN",
        "DL0101EN",
        "DS0103EN",
        "CESPR1IN",
        "CESPS1IN",
        "CEDOCK1IN",
        "CEDV1IN",
        "CEC1IN",
        "CECPP1IN",
        "CEIAM1IN",
        "CEDL1IN",
        "CENOSQL1IN",
        "CEKAFKA1IN",
        "AIA01IN"
      ];

      // Role Based Courses
      const roleBasedPrefixes = ["AWS-", "MCP-"];

      if (ibmCourses.includes(code)) {
        return `/ibm/${code}`;
      }

      if (roleBasedPrefixes.some((prefix) => code.startsWith(prefix))) {
        return `/rolebased/${code}`;
      }

      // Everything else
      return `/${code}`;
    };

    return (
      <Link
        to={getCourseLink(course)}
        key={`${course._id}-${tabKey ?? "any"}`}
        className="block border rounded-lg p-4 hover:shadow-md transition"
      >
        <div className="flex gap-4 items-center">
          {image ? (
            <img src={image} alt={title} className="w-24 h-24 object-contain" />
          ) : (
            <div className="w-24 h-24 bg-gray-100 rounded" />
          )}

          <div>
            <h2 className="text-lg font-medium">{title}</h2>

            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}

            <div className="mt-2 text-sm font-semibold text-[#008641]">
              ₹{price ?? "—"}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6 mt-24 mb-24">
        <h1 className="text-2xl font-semibold mb-4">
          Search results for "{q}"
        </h1>

        {loading && <div className="py-4">Loading...</div>}

        {error && <div className="text-red-600 py-4">{error}</div>}

        {!loading && !error && results.length === 0 && (
          <div className="text-gray-500 py-4">No results found</div>
        )}

        {!loading && results.length > 0 && (
          <>
            <div className="mb-4 flex flex-wrap gap-3 items-center">
              {allTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded ${
                    activeTab === tab
                      ? "bg-[#008641] text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}

              <button
                onClick={() => setActiveTab(null)}
                className={`px-3 py-1 rounded ${
                  activeTab === null
                    ? "bg-[#008641] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((course) =>
                renderCard(course, activeTab ?? undefined),
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
