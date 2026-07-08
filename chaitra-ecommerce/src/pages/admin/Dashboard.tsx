import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const PIE_COLORS = ["#2a78d6", "#1baf7a", "#eda100", "#e34948", "#4a3aa7"];

interface ProductStatus {
  status: string;
  count: string;
}

interface UserCount {
  is_seller: boolean;
  is_admin: boolean;
  count: string;
  label: string;
}

interface DashboardData {
  product_statuses: ProductStatus[];
  user_counts: UserCount[];
}

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://ecom-zb9o.vercel.app/api/dashboard")
      .then((res) => {
        setDashboardData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch dashboard data:", err);
        setError("Failed to load dashboard data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>Loading dashboard...</div>;
  }

  if (error || !dashboardData) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
        {error ?? "No data available"}
      </div>
    );
  }

  // count comes in as a string from the API, so convert it to a number for the chart
  const productStatusData = dashboardData.product_statuses.map((item) => ({
    name: item.status,
    value: Number(item.count),
  }));

  const userCountData = dashboardData.user_counts.map((item) => ({
    name: item.label,
    value: Number(item.count),
  }));

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
      <div style={{ width: "45%", minWidth: 320, height: 400 }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Product statuses
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={productStatusData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#2a78d6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: "45%", minWidth: 320, height: 400 }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          User counts
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={userCountData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#1baf7a" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

            <div style={{ width: "45%", minWidth: 320, height: 400 }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Product statuses 
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={productStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={(entry) => `${entry.name}: ${entry.value}`}
            >
              {productStatusData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: "45%", minWidth: 320, height: 400 }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          User counts 
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={userCountData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={(entry) => `${entry.name}: ${entry.value}`}
            >
              {userCountData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}