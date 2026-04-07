import React, { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import type { CourseSearchResult, TabItem } from "../components/types";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080/api/v1/course/search";

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
    setLoading(true);
    setError(null);
    fetch(`${API_BASE}?q=${encodeURIComponent(q)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: CourseSearchResult[]) => {
        if (cancelled) return;
        setResults(data || []);
        // determine default tab from first result
        const first = data?.[0];
        const firstTab = first ? Object.keys(first.tabData ?? {})[0] ?? null : null;
        setActiveTab(firstTab);
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong while fetching results");
      })
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [q]);

  // collect all tab names across results for tabs UI
  const allTabs = useMemo(() => {
    const s = new Set<string>();
    results.forEach((r) => Object.keys(r.tabData ?? {}).forEach((t) => s.add(t)));
    return Array.from(s);
  }, [results]);

  const renderCard = (course: CourseSearchResult, tabKey?: string) => {
    const primary: TabItem | undefined = tabKey ? course.tabData?.[tabKey] : course.tabData ? (course.tabData.Bundle ?? Object.values(course.tabData)[0]) : undefined;
    const title = course.courseName ?? primary?.title ?? "Untitled";
    const subtitle = primary?.subtitle;
    const image = primary?.image;
    const price = primary?.price;

    return (
      <Link to={`/${course.courseCode}`} key={`${course._id}-${tabKey ?? "any"}`} className="block border rounded p-4 hover:shadow-md transition">
        <div className="flex gap-4 items-center">
          {image ? <img src={image} alt={title} className="w-24 h-24 object-contain" /> : <div className="w-24 h-24 bg-gray-100" />}
          <div>
            <h2 className="text-lg font-medium">{title}</h2>
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            <div className="mt-2 text-sm text-[#008641] font-semibold">₹{price ?? "—"}</div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 mt-24">
      <h1 className="text-2xl font-semibold mb-4">Search results for “{q}”</h1>

      {loading && <div className="py-4">Loading...</div>}
      {error && <div className="text-red-600 py-4">{error}</div>}
      {!loading && !error && results.length === 0 && <div className="text-gray-500 py-4">No results found</div>}

      {!loading && results.length > 0 && (
        <>
          <div className="mb-4 flex gap-3 items-center">
            {allTabs.length ? (
              <>
                {allTabs.map((t) => (
                  <button key={t} className={`px-3 py-1 rounded ${t === activeTab ? "bg-[#008641] text-white" : "bg-gray-100 text-gray-700"}`} onClick={() => setActiveTab(t)}>
                    {t}
                  </button>
                ))}
                <button className={`px-3 py-1 rounded ${activeTab === null ? "bg-[#008641] text-white" : "bg-gray-100 text-gray-700"}`} onClick={() => setActiveTab(null)}>All</button>
              </>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((r) => renderCard(r, activeTab ?? undefined))}
          </div>
        </>
      )}
    </div>
  );
}
