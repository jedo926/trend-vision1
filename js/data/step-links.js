// Step navigation links — maps lesson steps to Vision One console URLs.
// Format: { lessonId: [ { step: N, find: "exact text in step", url: "..." } ] }
// Multiple entries for the same step are supported (both get linked).

window.V1_STEP_LINKS = {

  // ── Introduction ───────────────────────────────────────────────────────────
  "intro-what-is-v1": [
    { step: 0, find: "Trend Vision One console",          url: "https://portal.xdr.trendmicro.com" },
    { step: 1, find: "main dashboard",                    url: "https://portal.xdr.trendmicro.com/sg/index" }
  ],
  "intro-why-use-it": [
    { step: 0, find: "Cyber Risk Index",                  url: "https://portal.xdr.trendmicro.com/sg/index" }
  ],
  "intro-key-features": [
    { step: 0, find: "Workbench",                         url: "https://portal.xdr.trendmicro.com/sg/workbench/alerts" }
  ],
  "intro-supported-products": [
    { step: 0, find: "Administration -> Product Instance", url: "https://portal.xdr.trendmicro.com/sg/administration/productinstances" }
  ],

  // ── Getting Started ────────────────────────────────────────────────────────
  "gs-access-tiers": [
    { step: 0, find: "Administration -> License Information", url: "https://portal.xdr.trendmicro.com/sg/administration/licensemanagement" }
  ],
  "gs-user-accounts": [
    { step: 0, find: "Administration -> User Accounts",    url: "https://portal.xdr.trendmicro.com/sg/administration/accounts/users" }
  ],
  "gs-console-settings": [
    { step: 0, find: "Administration -> Console Settings", url: "https://portal.xdr.trendmicro.com/sg/administration/settings" },
    { step: 2, find: "Console Access",                     url: "https://portal.xdr.trendmicro.com/sg/administration/settings" }
  ],

  // ── Dashboards ─────────────────────────────────────────────────────────────
  "db-main": [
    { step: 0, find: "Dashboards and Reports -> Dashboards", url: "https://portal.xdr.trendmicro.com/sg/reports/dashboards" }
  ],
  "db-risk-index": [
    { step: 0, find: "Company Risk Index",                 url: "https://portal.xdr.trendmicro.com/sg/index" }
  ],
  "db-customization": [
    { step: 0, find: "Dashboards app",                     url: "https://portal.xdr.trendmicro.com/sg/reports/dashboards" },
    { step: 2, find: "Widget Catalog",                     url: "https://portal.xdr.trendmicro.com/sg/reports/dashboards" }
  ],
  "db-risk-overview": [
    { step: 0, find: "Cyber Risk Exposure Management -> Cyber Risk Overview", url: "https://portal.xdr.trendmicro.com/sg/riskinsights/overview" }
  ],

  // ── Workbench & Alerts ─────────────────────────────────────────────────────
  "aw-understanding": [
    { step: 0, find: "Workbench",                          url: "https://portal.xdr.trendmicro.com/sg/workbench/alerts" }
  ],
  "aw-triage": [
    { step: 0, find: "Workbench",                          url: "https://portal.xdr.trendmicro.com/sg/workbench/alerts" }
  ],
  "aw-details": [
    { step: 0, find: "Workbench",                          url: "https://portal.xdr.trendmicro.com/sg/workbench/alerts" }
  ],
  "aw-oat": [
    { step: 0, find: "Agentic SIEM and XDR -> Observed Attack Techniques", url: "https://portal.xdr.trendmicro.com/sg/detectionmodel/oat" },
    { step: 2, find: "Workbench Insight",                  url: "https://portal.xdr.trendmicro.com/sg/workbench/alerts" }
  ],

  // ── Endpoint Security ──────────────────────────────────────────────────────
  "ep-explained": [
    { step: 0, find: "Endpoint Security -> Endpoint Inventory", url: "https://portal.xdr.trendmicro.com/sg/endpointsecurity/inventory" }
  ],
  "ep-inventory": [
    { step: 0, find: "Endpoint Inventory",                 url: "https://portal.xdr.trendmicro.com/sg/endpointsecurity/inventory" }
  ],
  "ep-policies": [
    { step: 0, find: "Endpoint Inventory",                 url: "https://portal.xdr.trendmicro.com/sg/endpointsecurity/inventory" }
  ],
  "ep-resource-monitoring": [
    { step: 0, find: "Endpoint Security -> Agent Resource Monitoring", url: "https://portal.xdr.trendmicro.com/sg/endpointsecurity/resourcemonitoring" }
  ],

  // ── Email Security ─────────────────────────────────────────────────────────
  "em-threats": [
    { step: 0, find: "Trend Vision One console",           url: "https://portal.xdr.trendmicro.com" },
    { step: 1, find: "Email and Collaboration Security",   url: "https://portal.xdr.trendmicro.com/sg/emailsecurity" }
  ],
  "em-inventory": [
    { step: 0, find: "Email and Collaboration Security Operations -> Email Asset Inventory", url: "https://portal.xdr.trendmicro.com/sg/emailsecurity/inventory" }
  ],
  "em-sensor": [
    { step: 0, find: "Email Account Inventory",            url: "https://portal.xdr.trendmicro.com/sg/emailsecurity/inventory" }
  ],
  "em-detections": [
    { step: 0, find: "Email and Collaboration Security",   url: "https://portal.xdr.trendmicro.com/sg/emailsecurity" },
    { step: 0, find: "Workbench alerts",                   url: "https://portal.xdr.trendmicro.com/sg/workbench/alerts" }
  ],

  // ── Attack Surface Management ──────────────────────────────────────────────
  "as-discovery": [
    { step: 0, find: "Cyber Risk Exposure Management -> Cyber Risk Overview", url: "https://portal.xdr.trendmicro.com/sg/riskinsights/overview" }
  ],
  "as-risk-scores": [
    { step: 0, find: "Cyber Risk Overview",                url: "https://portal.xdr.trendmicro.com/sg/riskinsights/overview" }
  ],
  "as-prioritizing": [
    { step: 0, find: "Cyber Risk Exposure Management -> Detected Vulnerabilities", url: "https://portal.xdr.trendmicro.com/sg/riskinsights/vulnerability" }
  ],
  "as-compliance": [
    { step: 0, find: "Cyber Governance & Risk Compliance -> Compliance Management", url: "https://portal.xdr.trendmicro.com/sg/riskinsights/compliancemanagement" }
  ],

  // ── Search & Investigations ────────────────────────────────────────────────
  "si-basics": [
    { step: 0, find: "Agentic SIEM and XDR -> Search",    url: "https://portal.xdr.trendmicro.com/sg/investigation/search" }
  ],
  "si-xdr-explorer": [
    { step: 0, find: "Agentic SIEM and XDR -> XDR Data Explorer", url: "https://portal.xdr.trendmicro.com/sg/investigation/dataexplorer" }
  ],
  "si-finding": [
    { step: 1, find: "Search tool",                        url: "https://portal.xdr.trendmicro.com/sg/investigation/search" },
    { step: 1, find: "XDR Data Explorer",                  url: "https://portal.xdr.trendmicro.com/sg/investigation/dataexplorer" }
  ],
  "si-sandbox": [
    { step: 0, find: "Agentic SIEM and XDR -> Sandbox Analysis", url: "https://portal.xdr.trendmicro.com/sg/investigation/sandboxanalysis" }
  ],

  // ── Response Actions ───────────────────────────────────────────────────────
  "ra-contextual": [
    { step: 0, find: "Workbench",                          url: "https://portal.xdr.trendmicro.com/sg/workbench/alerts" }
  ],
  "ra-isolation": [
    { step: 0, find: "Endpoint Inventory",                 url: "https://portal.xdr.trendmicro.com/sg/endpointsecurity/inventory" },
    { step: 2, find: "Response Management app",            url: "https://portal.xdr.trendmicro.com/sg/response/tasks" }
  ],
  "ra-remote": [
    { step: 0, find: "Endpoint Inventory",                 url: "https://portal.xdr.trendmicro.com/sg/endpointsecurity/inventory" },
    { step: 2, find: "Response Management -> Response Scripts", url: "https://portal.xdr.trendmicro.com/sg/response/scripts" }
  ],
  "ra-mitigation": [
    { step: 0, find: "Agentic SIEM and XDR -> Exception List", url: "https://portal.xdr.trendmicro.com/sg/detectionmodel/exceptionlist" }
  ],

  // ── Workflow & Automation ──────────────────────────────────────────────────
  "wa-integrations": [
    { step: 0, find: "Workflow and Automation -> Third-Party Integrations", url: "https://portal.xdr.trendmicro.com/sg/marketplace" }
  ],
  "wa-response-mgmt": [
    { step: 0, find: "Workflow and Automation -> Response Management", url: "https://portal.xdr.trendmicro.com/sg/response/tasks" }
  ],
  "wa-service-gateway": [
    { step: 0, find: "Workflow and Automation -> Service Gateway Management", url: "https://portal.xdr.trendmicro.com/sg/servicegateway" }
  ],

  // ── Zero Trust Secure Access ───────────────────────────────────────────────
  "zt-principles": [
    { step: 0, find: "Zero Trust Secure Access",           url: "https://portal.xdr.trendmicro.com/sg/ztsa" }
  ],
  "zt-private-access": [
    { step: 0, find: "Zero Trust Secure Access -> Private Access", url: "https://portal.xdr.trendmicro.com/sg/ztsa/privateaccess" }
  ],
  "zt-internet-access": [
    { step: 0, find: "Zero Trust Secure Access -> Internet Access", url: "https://portal.xdr.trendmicro.com/sg/ztsa/internetaccess" }
  ],
  "zt-ai-secure-access": [
    { step: 0, find: "Zero Trust Secure Access -> AI Secure Access", url: "https://portal.xdr.trendmicro.com/sg/ztsa/aiaccess" }
  ],

  // ── Threat Intelligence ────────────────────────────────────────────────────
  "ti-reports": [
    { step: 0, find: "Threat Intelligence -> Intelligence Reports", url: "https://portal.xdr.trendmicro.com/sg/intelligence/reports" },
    { step: 3, find: "Workbench",                          url: "https://portal.xdr.trendmicro.com/sg/workbench/alerts" }
  ],
  "ti-sweeping": [
    { step: 0, find: "Intelligence Reports",               url: "https://portal.xdr.trendmicro.com/sg/intelligence/reports" }
  ],
  "ti-sharing": [
    { step: 0, find: "Threat Intelligence -> Third-Party Intelligence", url: "https://portal.xdr.trendmicro.com/sg/intelligence/thirdparty" }
  ],

  // ── Reporting ──────────────────────────────────────────────────────────────
  "rp-generating": [
    { step: 0, find: "Dashboards and Reports -> Reports",  url: "https://portal.xdr.trendmicro.com/sg/reports" }
  ],
  "rp-scheduling": [
    { step: 0, find: "Reports app",                        url: "https://portal.xdr.trendmicro.com/sg/reports" }
  ],
  "rp-widgets": [
    { step: 0, find: "Agentic SIEM and XDR -> XDR Data Explorer", url: "https://portal.xdr.trendmicro.com/sg/investigation/dataexplorer" }
  ],
  "rp-executive": [
    { step: 0, find: "Compliance Management",              url: "https://portal.xdr.trendmicro.com/sg/riskinsights/compliancemanagement" }
  ],

  // ── Cloud & Network Security ───────────────────────────────────────────────
  "cn-accounts": [
    { step: 0, find: "Cloud Security -> Cloud Accounts",   url: "https://portal.xdr.trendmicro.com/sg/cloudsecurity/accounts" }
  ],
  "cn-risk-management": [
    { step: 0, find: "Cloud Security -> Cloud Risk Management", url: "https://portal.xdr.trendmicro.com/sg/cloudsecurity/riskmanagement" }
  ],
  "cn-network-inventory": [
    { step: 0, find: "Network Security -> Network Inventory", url: "https://portal.xdr.trendmicro.com/sg/networksecurity/inventory" }
  ],
  "cn-network-analysis": [
    { step: 0, find: "Network Security -> Network Analysis Configuration", url: "https://portal.xdr.trendmicro.com/sg/networksecurity/analysisconfiguration" }
  ],

  // ── AI Security ────────────────────────────────────────────────────────────
  "ai-blueprint": [
    { step: 0, find: "AI Security -> AI Security Blueprint", url: "https://portal.xdr.trendmicro.com/sg/aisecurity/blueprint" }
  ],
  "ai-app-security": [
    { step: 0, find: "AI Security -> AI Application Security", url: "https://portal.xdr.trendmicro.com/sg/aisecurity/appsecurity" }
  ],
  "ai-secure-access": [
    { step: 0, find: "AI Security -> AI Secure Access",    url: "https://portal.xdr.trendmicro.com/sg/aisecurity/secureaccess" }
  ],
};
