export type SystemCategory = "hr" | "finance" | "logistics" | "core";
export type ConnectedSystem = {
  code: string;
  name: string;
  category: SystemCategory;
  categoryName: string;
  description: string;
  url: string;
  enabled: boolean;
  features: string[];
};

export const categoryDetails: Record<SystemCategory, { label: string; description: string }> = {
  hr: {
    label: "Human Resources Management",
    description:
      "Manage people, workforce operations, development, and employee services through connected HR systems.",
  },
  finance: {
    label: "Financial Management",
    description:
      "Connect financial operations with the organization's logistics and business activities.",
  },
  logistics: {
    label: "Logistic Management",
    description:
      "Connect inventory, supply chain, fleet, and transportation operations in one digital ecosystem.",
  },
  core: {
    label: "Core Transactions",
    description:
      "The operational foundation connecting freight, service providers, customers, and business transactions.",
  },
};

export const systems: ConnectedSystem[] = [
  {
    code: "HR-1",
    name: "Recruitment & Onboarding",
    category: "hr",
    categoryName: "Human Resources Management",
    url: "https://hr1.priority-handling.com/",
    enabled: true,
    description:
      "Recruitment workflows, candidate records, hiring processes, and employee entry procedures.",
    features: [
      "Candidate Management",
      "Recruitment Pipeline",
      "Interview Management",
      "Hiring Workflow",
      "Employee Onboarding",
      "Document Management",
    ],
  },
  {
    code: "HR-2",
    name: "Workforce Management",
    category: "hr",
    categoryName: "Human Resources Management",
    url: "https://hr2.priority-handling.com/",
    enabled: true,
    description:
      "Employees, attendance, schedules, timesheets, leave, and day-to-day workforce operations.",
    features: [
      "Employee Management",
      "Time & Attendance",
      "Shift Scheduling",
      "Timesheets",
      "Leave Management",
      "Workforce Analytics",
      "Workforce Monitoring",
    ],
  },
  {
    code: "HR-3",
    name: "Performance & Development",
    category: "hr",
    categoryName: "Human Resources Management",
    url: "https://hr3.priority-handling.com/",
    enabled: true,
    description:
      "Performance monitoring, development planning, evaluations, and organizational growth.",
    features: [
      "Performance Reviews",
      "KPI Monitoring",
      "Goal Management",
      "Training",
      "Development Plans",
      "Employee Progress",
      "Performance Analytics",
    ],
  },
  {
    code: "HR-4",
    name: "Payroll & Benefits",
    category: "hr",
    categoryName: "Human Resources Management",
    url: "https://hr4.priority-handling.com/",
    enabled: true,
    description:
      "Payroll processes, benefits, compensation records, and employee payroll information.",
    features: [
      "Payroll Processing",
      "Compensation",
      "Benefits",
      "Employee Deductions",
      "Payroll Records",
      "Reports",
      "Employee Payroll Portal",
    ],
  },
  {
    code: "FIN",
    name: "Financial Management System",
    category: "finance",
    categoryName: "Financial Management",
    url: "https://financial.priority-handling.com/",
    enabled: true,
    description: "Financial operations connected with logistics and wider business activity.",
    features: [
      "Accounts Receivable",
      "Accounts Payable",
      "Billing & Invoicing",
      "Expense Management",
      "Financial Reports",
      "Budget Monitoring",
      "Transaction Management",
      "Financial Analytics",
    ],
  },
  {
    code: "LOG-1",
    name: "Supply Chain & Inventory",
    category: "logistics",
    categoryName: "Logistic Management",
    url: "https://log1.priority-handling.com/",
    enabled: true,
    description:
      "Inventory, procurement, stock movement, warehouse operations, and supply chain visibility.",
    features: [
      "Inventory Management",
      "Stock Monitoring",
      "Warehouse Operations",
      "Supply Chain Visibility",
      "Procurement",
      "Stock Movement",
      "Inventory Analytics",
    ],
  },
  {
    code: "LOG-2",
    name: "Fleet & Transportation",
    category: "logistics",
    categoryName: "Logistic Management",
    url: "https://log2.priority-handling.com/",
    enabled: true,
    description: "Fleet, driver, route, trip, fuel, and transportation schedule management.",
    features: [
      "Fleet Management",
      "Vehicle Monitoring",
      "Driver Management",
      "Trip Management",
      "Route Planning",
      "Transportation Scheduling",
      "Fuel Monitoring",
    ],
  },
  {
    code: "CORE-1",
    name: "Freight Operations & Shipment Execution",
    category: "core",
    categoryName: "Core Transactions",
    url: "https://core1.priority-handling.com/",
    enabled: true,
    description:
      "Shipment creation, booking, execution, delivery, documentation, and operational status.",
    features: [
      "Shipment Creation",
      "Freight Booking",
      "Shipment Tracking",
      "Shipment Execution",
      "Delivery Management",
      "Proof of Delivery",
      "Freight Documentation",
    ],
  },
  {
    code: "CORE-2",
    name: "Service Provider & Network Control",
    category: "core",
    categoryName: "Core Transactions",
    url: "https://core2.priority-handling.com/",
    enabled: true,
    description:
      "Partners, rates, contracts, service-provider performance, and network monitoring.",
    features: [
      "Service Provider Management",
      "Partner Management",
      "Network Management",
      "Rate Management",
      "Contract Management",
      "Network Monitoring",
      "Partner Analytics",
    ],
  },
  {
    code: "CORE-3",
    name: "Customer Relationship & Business Control",
    category: "core",
    categoryName: "Core Transactions",
    url: "https://core3.priority-handling.com/",
    enabled: true,
    description:
      "Customer accounts, requests, quotations, service activity, and business transactions.",
    features: [
      "Customer Management",
      "Customer Accounts",
      "CRM",
      "Customer Requests",
      "Quotations",
      "Business Transactions",
      "Customer Analytics",
    ],
  },
];
