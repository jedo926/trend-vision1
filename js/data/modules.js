// Vision One Interactive Training Website - Lesson Data
// Sourced from the repository's markdown documentation files.

window.V1_MODULES = [
  {
    id: "intro",
    title: "Introduction to Trend Vision One",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "intro-what-is-v1",
        title: "What is Trend Micro Vision One?",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Trend Vision One is a unified, cloud-native enterprise cybersecurity platform that integrates prevention, detection, and response capabilities across all security layers.",
          whyItMatters: "Traditional security operations are siloed, leading to visibility gaps and delayed response times. Trend Vision One consolidates these silos into a single pane of glass.",
          whatYouWillLearn: [
            "The core definition and purpose of Trend Vision One.",
            "How the platform centralizes security operations.",
            "The key layers protected: endpoints, network, email, cloud, and OT."
          ],
          steps: [
            "Log in to the Trend Vision One console.",
            "Navigate the main dashboard to see the unified view.",
            "Identify the different security layers feeding data into the platform."
          ],
          scenario: "An analyst at a mid-sized enterprise is overwhelmed by alerts from separate email, network, and endpoint consoles. By adopting Trend Vision One, they receive correlated alerts that tell a single, cohesive story of an attack, saving hours of manual correlation.",
          commonMistakes: [
            "Treating Trend Vision One as just another endpoint antivirus manager instead of an XDR platform.",
            "Failing to connect all available security layers, which leaves visibility blind spots."
          ],
          summary: "Trend Vision One is an enterprise cybersecurity platform that centralizes risk management, security operations, and layered protection to accelerate proactive security outcomes."
        },
        quiz: {
          questions: [
            {
              question: "What is the primary purpose of Trend Vision One?",
              options: [
                "To act as a standalone endpoint antivirus tool",
                "To centralize cyber risk exposure management, security operations, and robust layered protection",
                "To replace all corporate email servers",
                "To provide local network hardware routing"
              ],
              correct: 1,
              hint: "Recall that it integrates prevention, detection, and response across multiple layers."
            }
          ]
        }
      },
      {
        id: "intro-why-use-it",
        title: "Why Use Trend Vision One?",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Using Trend Vision One allows organizations to predict, prevent, and respond to threats faster by leveraging global threat intelligence and AI-powered detections.",
          whyItMatters: "Speed is critical in cybersecurity. Earlier detection and faster response reduce the overall impact and cost of security incidents.",
          whatYouWillLearn: [
            "The business and operational benefits of Trend Vision One.",
            "How global threat intelligence improves local security.",
            "The role of AI-powered threat detection in reducing analyst fatigue."
          ],
          steps: [
            "Review the Cyber Risk Index on the home page.",
            "Observe how global threat intelligence feeds are automatically applied to your telemetry.",
            "Check how correlated alerts reduce the absolute number of tickets to investigate."
          ],
          scenario: "During a zero-day outbreak, Trend Research publishes new Indicators of Compromise (IoCs). Instead of manually searching every server, Trend Vision One automatically sweeps the environment, identifying three compromised endpoints in minutes.",
          commonMistakes: [
            "Ignoring the automated sweeping results and continuing manual threat hunting.",
            "Assuming that a low alert count means the platform is not working, when it actually indicates successful correlation."
          ],
          summary: "Trend Vision One helps organizations stop adversaries faster, prioritize cyber risks, and simplify security operations through correlation and automation."
        },
        quiz: {
          questions: [
            {
              question: "How does Trend Vision One help reduce analyst alert fatigue?",
              options: [
                "By automatically deleting alerts after 24 hours",
                "By correlating multiple related events across layers into a single high-fidelity alert",
                "By disabling notifications during busy hours",
                "By sending all alerts to external email accounts"
              ],
              correct: 1,
              hint: "Correlation is key to reducing the volume of alerts analysts must review."
            }
          ]
        }
      },
      {
        id: "intro-key-features",
        title: "Key Features & Benefits",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The platform offers alert notifications, correlated detection models, Workbench triage, attack visualization, threat hunting, and integrated response actions.",
          whyItMatters: "Having these features integrated means an analyst can investigate and remediate a threat without switching tools.",
          whatYouWillLearn: [
            "The main features of the Trend Vision One console.",
            "How the Workbench allows for alert triage.",
            "The purpose of attack visualization and execution profiles."
          ],
          steps: [
            "Open the Workbench app in the console.",
            "Select an alert to view its interactive attack visualization graph.",
            "Identify the execution profile of a suspicious process on an endpoint."
          ],
          scenario: "An analyst opens a Workbench alert and sees a visual tree: a malicious email arrived, the user clicked a link, a powershell script executed, and it attempted to contact an external IP. The analyst right-clicks the IP and blocks it instantly.",
          commonMistakes: [
            "Neglecting the attack visualization tool and relying solely on text logs.",
            "Not using the right-click context menu for rapid response actions."
          ],
          summary: "Key features like attack visualization, Workbench triage, and threat hunting work together to provide complete context and rapid response capabilities."
        },
        quiz: {
          questions: [
            {
              question: "Which feature allows you to see the step-by-step threat actions within an endpoint or server?",
              options: [
                "Search / Threat hunting",
                "Execution Profile Analysis",
                "API Integrations",
                "Compliance Management"
              ],
              correct: 1,
              hint: "This view shows the detailed process execution tree on a specific system."
            }
          ]
        }
      },
      {
        id: "intro-supported-products",
        title: "Supported Products & Sensors",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Trend Vision One analyzes activity data collected by various sensor products like Apex One, Cloud One, Cloud App Security, and Deep Discovery.",
          whyItMatters: "Sensors are the eyes and ears of the platform. The more sensors deployed, the richer the telemetry and the better the correlation.",
          whatYouWillLearn: [
            "Which Trend Micro products act as sensors for Vision One.",
            "The version requirements for endpoint agents.",
            "How network and email sensors contribute to cross-layer detection."
          ],
          steps: [
            "Go to Administration -> Product Instance.",
            "Check the status of connected product sensors.",
            "Identify any agents requiring updates to meet the minimum version requirements."
          ],
          scenario: "An organization connects Apex One as a Service and Cloud App Security to Trend Vision One. Now, when malware is detected on an endpoint, the platform can automatically check if the same file was distributed via email to other users.",
          commonMistakes: [
            "Deploying outdated agent versions that do not support the XDR sensor telemetry.",
            "Connecting only endpoint sensors and neglecting network or email telemetry."
          ],
          summary: "Trend Vision One relies on telemetry from endpoint, email, network, and cloud sensors to deliver high-fidelity detections and correlation."
        },
        quiz: {
          questions: [
            {
              question: "Which of the following is a supported sensor source for Trend Vision One?",
              options: [
                "Apex One as a Service with Endpoint Sensor",
                "Third-party local printer drivers",
                "Standard web browser extensions only",
                "Basic operating system registry cleaners"
              ],
              correct: 0,
              hint: "Look for the enterprise security agent mentioned in the supported products list."
            }
          ]
        }
      }
    ]
  },
  {
    id: "getting-started",
    title: "First Login & Setup",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "gs-activation",
        title: "Accessing and Activating the Portal",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Activating Trend Vision One involves clicking the activation link in your purchase email, creating a Primary User Account, and choosing a data center region.",
          whyItMatters: "Choosing the correct data center region is permanent and determines where your security data is stored and processed for compliance.",
          whatYouWillLearn: [
            "The step-by-step process of activating a Trend Vision One license.",
            "The importance of the Primary User Account.",
            "How to select the correct data center region."
          ],
          steps: [
            "Click the activation link in your confirmation email.",
            "Sign in or create a Primary User Account.",
            "Verify your email address using the 3-minute verification code.",
            "Select your data center region and click Confirm."
          ],
          scenario: "A security administrator in Europe receives the activation email. During setup, they carefully select the Germany data center region to ensure all telemetry remains within the EU for GDPR compliance.",
          commonMistakes: [
            "Creating a duplicate business account instead of signing in with an existing Primary User Account.",
            "Letting the 3-minute email verification code expire, requiring a restart of the process."
          ],
          summary: "License activation requires creating a Primary User Account, verifying your email, selecting your data center region, and configuring your local time zone."
        },
        quiz: {
          questions: [
            {
              question: "What is a critical and permanent setting configured during the first login to Trend Vision One?",
              options: [
                "The admin user's profile picture",
                "The data center region",
                "The default dark mode theme",
                "The API integration token"
              ],
              correct: 1,
              hint: "This determines the physical storage location of your telemetry data."
            }
          ]
        }
      },
      {
        id: "gs-access-tiers",
        title: "Access Tiers and Licenses",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Trend Vision One offers two access tiers: Essential Access (limited apps, included with product licenses) and Advanced Access (full suite, credit-based).",
          whyItMatters: "Understanding your tier helps you manage credits and know when access might be restricted due to license expiration.",
          whatYouWillLearn: [
            "The difference between Essential and Advanced Access.",
            "How credits are used in Advanced Access.",
            "The grace, lockout, and purge periods for expired licenses."
          ],
          steps: [
            "Navigate to Administration -> License Information.",
            "Identify your current access tier (Essential or Advanced).",
            "Check the expiration dates and credit balance."
          ],
          scenario: "An organization's credits expire. They transition to Essential Access, which still allows them to use basic search and reports, but they lose access to advanced features like Zero Trust Secure Access until they renew.",
          commonMistakes: [
            "Allowing the 30-day lockout period to end without renewing, resulting in the permanent purging of all tenant data.",
            "Assuming all features are available in the Essential Access tier."
          ],
          summary: "Essential Access provides basic security apps, while Advanced Access unlocks the full platform suite using a credit-based model."
        },
        quiz: {
          questions: [
            {
              question: "What happens after the 30-day grace period and the subsequent 30-day lockout period of an expired license?",
              options: [
                "The console automatically renews for free",
                "Trend Micro purges all associated tenant data",
                "The console permanently downgrades to read-only",
                "An alert is sent but data is kept indefinitely"
              ],
              correct: 1,
              hint: "Review the expiration policies regarding data retention."
            }
          ]
        }
      },
      {
        id: "gs-user-accounts",
        title: "User Accounts & Roles",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Manage user access using Role-Based Access Control (RBAC), allowing you to assign specific permissions and asset visibility scopes to different administrators.",
          whyItMatters: "Enforcing the principle of least privilege ensures that analysts only see the assets and take the actions necessary for their role.",
          whatYouWillLearn: [
            "How to configure user accounts and roles.",
            "The concept of Asset Visibility Management.",
            "How SAML account users can switch between different business accounts."
          ],
          steps: [
            "Go to Administration -> User Accounts.",
            "Create a new user account and assign a predefined role.",
            "Configure an Asset Visibility Scope to restrict the user to specific endpoint groups."
          ],
          scenario: "A regional security analyst is hired for the Asia-Pacific branch. The global admin configures their account with an Asset Visibility Scope limited to the APAC endpoint group, preventing them from viewing European server telemetry.",
          commonMistakes: [
            "Assigning the Master Administrator role to every user.",
            "Forgetting to configure asset visibility scopes, allowing all users to see all corporate data."
          ],
          summary: "User accounts in Trend Vision One use centralized roles and asset visibility scopes to enforce secure, granular access controls."
        },
        quiz: {
          questions: [
            {
              question: "What does Asset Visibility Management allow an administrator to do?",
              options: [
                "Change the physical location of endpoints",
                "Define which assets a specific user is permitted to view across apps",
                "Enable or disable the endpoint's monitor screen",
                "Monitor the physical visibility of security cameras"
              ],
              correct: 1,
              hint: "It restricts or grants access to see specific devices, users, or domains in the console."
            }
          ]
        }
      },
      {
        id: "gs-console-settings",
        title: "Console Settings & Security",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Console Settings allow you to configure system-wide parameters like time zones, multi-factor authentication (MFA), and IP access restrictions.",
          whyItMatters: "Restricting console access to specific IP addresses prevents unauthorized logins from external networks, even if credentials are leaked.",
          whatYouWillLearn: [
            "How to configure the console time zone.",
            "How to enable and reset Multi-Factor Authentication (MFA).",
            "How to restrict console access using IP allow lists."
          ],
          steps: [
            "Go to Administration -> Console Settings.",
            "Verify that the system time zone matches your organization's primary SOC location.",
            "Navigate to Console Access and add your corporate VPN egress IPs to the allow list."
          ],
          scenario: "To secure their environment, a company enables 'Restrict console access to specified IP addresses'. When an analyst attempts to log in from a public Wi-Fi without connecting to the corporate VPN, the console blocks the connection.",
          commonMistakes: [
            "Not configuring the correct time zone, leading to discrepancies in alert timestamps and license periods.",
            "Enabling IP restrictions without adding the current administrator's IP, risking an immediate lockout."
          ],
          summary: "Securing the console involves aligning time zones, enforcing MFA, and optionally restricting access to trusted IP ranges."
        },
        quiz: {
          questions: [
            {
              question: "If a user is unable to sign in to the mobile app due to IP restrictions, what should the administrator check?",
              options: [
                "The mobile phone's battery percentage",
                "Whether the user's IP is in the console access allow list under Console Settings",
                "The email verification code expiration",
                "The SAML Identity Provider's password policy"
              ],
              correct: 1,
              hint: "Recall how IP restriction settings affect all console access, including mobile."
            }
          ]
        }
      }
    ]
  },
  {
    id: "dashboards",
    title: "Dashboard Overview",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "db-main",
        title: "The Main Dashboard & Widgets",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The main dashboard provides an at-a-glance perspective of your organization's overall cybersecurity strength using customizable widgets.",
          whyItMatters: "A well-configured dashboard allows security leaders and analysts to immediately identify outstanding risks and active attacks.",
          whatYouWillLearn: [
            "The purpose of the default dashboard widgets.",
            "How widgets display data based on user asset visibility.",
            "The type of information shown in Top High-Risk Devices and Top High-Risk Users."
          ],
          steps: [
            "Navigate to Dashboards and Reports -> Dashboards.",
            "Review the default widgets on the Overview tab.",
            "Hover over the Top High-Risk Devices widget to see which endpoints have the highest risk scores."
          ],
          scenario: "A SOC manager starts their day by looking at the main dashboard. They notice the 'Top High-Risk Users' widget has a new entry with a critical risk score. Clicking the user name takes them directly to the risk details.",
          commonMistakes: [
            "Assuming all users see the same dashboard data, forgetting that asset visibility scopes filter widget contents.",
            "Overlooking high-risk device counts on the dashboard."
          ],
          summary: "Dashboards use widgets like Top High-Risk Devices, Top High-Risk Users, and Workbench Alert Overview to present a high-level security posture summary."
        },
        quiz: {
          questions: [
            {
              question: "Which default widget displays the total number of alerts triggered over the last 7 days categorized by severity?",
              options: [
                "Detected Vulnerabilities",
                "Workbench Alert Overview",
                "Company Risk Index",
                "Endpoints Reporting Activity"
              ],
              correct: 1,
              hint: "This widget summarizes recent alert activity from the Workbench."
            }
          ]
        }
      },
      {
        id: "db-risk-index",
        title: "Company Risk Index",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The Company Risk Index is a comprehensive score based on the dynamic assessment of risk factors, updating automatically every four hours.",
          whyItMatters: "It provides a benchmark of your security posture, allowing you to track whether your overall risk is improving or worsening over time.",
          whatYouWillLearn: [
            "How the Company Risk Index is calculated.",
            "The frequency of automatic recalculations.",
            "How to manually trigger a recalculation."
          ],
          steps: [
            "Locate the Company Risk Index widget on the dashboard.",
            "Observe the historical trend of your company's risk score.",
            "Click the Recalculate button to update the index manually (takes up to one hour)."
          ],
          scenario: "After patching a critical vulnerability across 500 servers, the security team wants to see the immediate impact. They click 'Recalculate' on the Risk Index widget, and an hour later, they see the index score drop from Medium to Low.",
          commonMistakes: [
            "Expecting the Risk Index to update instantly after taking a remediation action, when it takes up to an hour.",
            "Failing to configure company size and industry, which prevents accurate benchmarking against peers."
          ],
          summary: "The Company Risk Index evaluates exposure, attacks, and security configurations to generate a dynamic score representing overall risk."
        },
        quiz: {
          questions: [
            {
              question: "How often does the Company Risk Index automatically update?",
              options: [
                "Every hour",
                "Every four hours",
                "Once a week",
                "Only when manually triggered"
              ],
              correct: 1,
              hint: "It updates multiple times a day automatically, but not every single hour."
            }
          ]
        }
      },
      {
        id: "db-customization",
        title: "Customizing Dashboards",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Users can personalize their Dashboards app by creating new dashboards, adding or editing widgets from the catalog, and rearranging layouts.",
          whyItMatters: "Different roles need different views. An executive needs high-level risk trends, while a SOC analyst needs active alert counts.",
          whatYouWillLearn: [
            "How to create a custom dashboard from scratch or a template.",
            "The maximum number of widgets allowed per dashboard.",
            "How to edit and rearrange widget layouts."
          ],
          steps: [
            "Click the add icon (+) in the Dashboards app.",
            "Select 'Create your own dashboard' or choose a template.",
            "Open the Widget Catalog, select up to 20 widgets, and add them.",
            "Drag and drop the widgets to organize your layout."
          ],
          scenario: "An incident responder creates a dedicated 'Threat Hunting' dashboard. They add widgets for XDR search queries, sandbox submissions, and observed attack techniques, placing them at the top for quick access.",
          commonMistakes: [
            "Trying to add more than 20 widgets to a single dashboard, exceeding the platform limit.",
            "Using generic dashboards instead of tailoring them to specific operational roles."
          ],
          summary: "Dashboard customization allows users to add up to 20 widgets per dashboard, edit widget settings, and drag-and-drop layouts to fit their workflow."
        },
        quiz: {
          questions: [
            {
              question: "What is the maximum number of widgets you can add to a single dashboard?",
              options: [
                "5",
                "10",
                "20",
                "50"
              ],
              correct: 2,
              hint: "Check the note in the 'Manage widgets' section of the documentation."
            }
          ]
        }
      },
      {
        id: "db-risk-overview",
        title: "Cyber Risk Overview",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The Cyber Risk Overview screen breaks down your security posture into four key areas: Risk, Exposure, Attack, and Security Configuration.",
          whyItMatters: "Breaking down the score helps you identify exactly what is driving your risk—whether it's active malware, unpatched vulnerabilities, or poor agent coverage.",
          whatYouWillLearn: [
            "The four main sections of the Cyber Risk Overview.",
            "What the Exposure score represents.",
            "What the Security Configuration score evaluates."
          ],
          steps: [
            "Go to Cyber Risk Exposure Management -> Cyber Risk Overview.",
            "Review the Exposure Overview to identify outstanding vulnerabilities.",
            "Check the Security Configuration Overview to see if key features like predictive machine learning are adopted."
          ],
          scenario: "An auditor asks why the company's risk index is high. The admin opens the Cyber Risk Overview and shows that while the 'Attack' score is low (no active malware), the 'Exposure' score is high due to outdated agent versions on several legacy servers.",
          commonMistakes: [
            "Focusing only on active attacks while ignoring poor security configurations that leave the organization vulnerable.",
            "Not realizing that disabling assets for assessment will artificially lower the displayed Risk Index."
          ],
          summary: "The Cyber Risk Overview provides a detailed breakdown of risk factors, including exposure (vulnerabilities) and security configurations (agent versions and feature adoption)."
        },
        quiz: {
          questions: [
            {
              question: "Which score in the Cyber Risk Overview represents agent deployment, key feature adoption, and agent versions?",
              options: [
                "Exposure score",
                "Attack score",
                "Security Configuration score",
                "Company Risk Index"
              ],
              correct: 2,
              hint: "Focus on the health and setup of your security controls."
            }
          ]
        }
      }
    ]
  },
  {
    id: "alerts-workbench",
    title: "Alerts & Workbench",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "aw-understanding",
        title: "Understanding Alerts & Severity",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Alerts are triggered by correlated detection models that analyze activities across security layers. The alert score represents the overall severity.",
          whyItMatters: "Understanding how scores are calculated helps analysts prioritize critical threats over minor anomalies.",
          whatYouWillLearn: [
            "How detection models trigger alerts.",
            "The difference between model severity and the overall alert score.",
            "The maximum alert score defined by the platform."
          ],
          steps: [
            "Open the Workbench and look at the Score column.",
            "Note how the score is calculated based on model severity and impact scope.",
            "Verify the maximum possible alert score."
          ],
          scenario: "An analyst sees two alerts: one triggered by a high-severity model affecting 1 endpoint (Score: 70), and another triggered by the same model affecting 50 endpoints (Score: 99). The impact scope increases the priority of the second alert.",
          commonMistakes: [
            "Assuming a high-severity model always results in a score of 99, regardless of the number of affected systems.",
            "Treating the model severity and the final alert score as the exact same value."
          ],
          summary: "Alert scores (up to 99) are calculated dynamically by combining the severity of the matched detection model with the alert's impact scope."
        },
        quiz: {
          questions: [
            {
              question: "What is the maximum alert score in the Trend Vision One scoring model?",
              options: [
                "10",
                "99",
                "100",
                "1000"
              ],
              correct: 1,
              hint: "Review the note in the 'Score' section of the Alert Details documentation."
            }
          ]
        }
      },
      {
        id: "aw-triage",
        title: "Workbench Alerts & Triage",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The Workbench is where analysts prioritize, process, and track alerts through status updates and investigation findings.",
          whyItMatters: "Proper triage ensures that alerts are systematically investigated and that team members do not duplicate work.",
          whatYouWillLearn: [
            "The three primary statuses of a Workbench alert.",
            "The different categories of investigation findings.",
            "How to assign ownership to an alert."
          ],
          steps: [
            "Select an open alert in the Workbench.",
            "Change the status from 'Open' to 'In progress' and assign yourself as the owner.",
            "After investigating, set the status to 'Closed' and select the appropriate finding (e.g., True Positive)."
          ],
          scenario: "An analyst opens an alert regarding suspicious credential dumping. They change the status to 'In progress' so other team members know it's being handled. After confirming it was an authorized penetration test, they close it as a 'Benign True Positive'.",
          commonMistakes: [
            "Leaving investigated alerts with an 'Open' status, causing confusion in the SOC.",
            "Closing alerts without selecting a finding, which ruins historical reporting and metrics."
          ],
          summary: "Triage involves moving alerts through Open, In Progress, and Closed statuses, and classifying them as True Positive, False Positive, Benign True Positive, or Noteworthy."
        },
        quiz: {
          questions: [
            {
              question: "Which finding should be selected if an investigation confirms a genuine threat was present but it posed no risk because it was part of an authorized penetration test?",
              options: [
                "True positive",
                "False positive",
                "Benign true positive",
                "Noteworthy"
              ],
              correct: 2,
              hint: "It is a true detection, but benign in nature due to authorized activity."
            }
          ]
        }
      },
      {
        id: "aw-details",
        title: "Alert Details & Visualization",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The alert details screen provides a summary, highlights of the event, a timeline, and an interactive Observable Graph.",
          whyItMatters: "The Observable Graph visualizes relationships between objects (endpoints, IPs, files, emails), making complex attacks easy to understand.",
          whatYouWillLearn: [
            "The components of the alert details screen.",
            "How to read the Observable Graph nodes and links.",
            "What special details are shown for Threat Intelligence Sweeping alerts."
          ],
          steps: [
            "Click on an alert in the Workbench to open the details screen.",
            "Review the Highlights section to see the specific objects that triggered the filter.",
            "Interact with the Observable Graph: click nodes to highlight related events and click the Connection Details icon."
          ],
          scenario: "Investigating a ransomware alert, the analyst uses the Observable Graph. They see an arrow pointing from a malicious IP to a web server, which then wrote an executable file. This visual representation allows them to trace the entry point instantly.",
          commonMistakes: [
            "Ignoring the direction of arrows in the Observable Graph, which indicates the flow of transactions.",
            "Not clicking the Connection Details icon to view specific transaction logs."
          ],
          summary: "Alert details combine text highlights, timelines, and interactive Observable Graphs to tell the complete story of an attack."
        },
        quiz: {
          questions: [
            {
              question: "In the Observable Graph, what does an arrow between two nodes indicate?",
              options: [
                "The nodes are completely unrelated",
                "The direction of the transaction or communication between the two objects",
                "That both assets are currently offline",
                "The physical network cable path"
              ],
              correct: 1,
              hint: "An arrow shows where data or action flowed from and to."
            }
          ]
        }
      },
      {
        id: "aw-oat",
        title: "Observed Attack Techniques",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Observed Attack Techniques (OAT) lists individual events detected in your environment. These events are granular and may not trigger a Workbench alert on their own.",
          whyItMatters: "OAT is crucial for deep investigations, allowing you to find suspicious behaviors that haven't crossed the threshold to become high-priority alerts.",
          whatYouWillLearn: [
            "The difference between OAT events and Workbench alerts.",
            "How to filter and search event data in OAT.",
            "How to add an event to an existing Workbench insight or case."
          ],
          steps: [
            "Go to Agentic SIEM and XDR -> Observed Attack Techniques.",
            "Filter the list by Event severity or Tactic ID.",
            "Right-click an event and select 'Add to Workbench Insight' to enrich an ongoing investigation."
          ],
          scenario: "An analyst is investigating a compromised host. In OAT, they find several low-severity 'reconnaissance' events. Individually they didn't trigger an alert, but the analyst adds them to the main Workbench insight to build a complete timeline.",
          commonMistakes: [
            "Expecting every event in OAT to have a corresponding Workbench alert.",
            "Hiding detection filters permanently, forgetting that the hidden objects list resets when leaving the screen."
          ],
          summary: "Observed Attack Techniques records granular detection events that analysts can filter, analyze, and manually add to Workbench insights or cases."
        },
        quiz: {
          questions: [
            {
              question: "Which of the following is true regarding the 'Hidden objects' list in Observed Attack Techniques?",
              options: [
                "It is saved permanently for all users in the business",
                "It resets and is not saved when you leave the Observed Attack Techniques screen",
                "It automatically deletes the corresponding endpoints",
                "It requires a paid license to configure"
              ],
              correct: 1,
              hint: "Refer to the note in the 'Hide detection filters from the list' section."
            }
          ]
        }
      }
    ]
  },
  {
    id: "endpoint-security",
    title: "Endpoint Security",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "ep-explained",
        title: "Endpoints & Sensors Explained",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Endpoint Security involves deploying protection or sensor agents onto physical and virtual machines to monitor activity and enforce policies.",
          whyItMatters: "Endpoints are the most common target for attackers. Monitoring them provides the telemetry needed to detect lateral movement and execution of malicious code.",
          whatYouWillLearn: [
            "The difference between a protection agent and a sensor-only agent.",
            "How agents collect telemetry for XDR analysis.",
            "The basic system requirements for agents."
          ],
          steps: [
            "Go to Endpoint Security -> Endpoint Inventory.",
            "Click on the 'Agent Installer' button.",
            "Review the available installer packages for Windows, Linux, and macOS."
          ],
          scenario: "A company has legacy servers that cannot run full antivirus due to performance concerns. They deploy the 'Sensor-only' agent, which consumes minimal resources but still forwards telemetry to Trend Vision One for threat detection.",
          commonMistakes: [
            "Assuming a sensor-only agent will actively block malware (it only monitors and reports).",
            "Deploying agents on unsupported operating system versions."
          ],
          summary: "Endpoint security relies on managed agents (full protection or sensor-only) to gather telemetry and execute response actions like isolation."
        },
        quiz: {
          questions: [
            {
              question: "What is the key difference between a Standard Endpoint Protection agent and a Sensor-only agent?",
              options: [
                "Sensor-only agents do not require an internet connection",
                "Standard Protection provides active blocking and security features, while Sensor-only primarily gathers telemetry for XDR",
                "Sensor-only agents can only be installed on mobile devices",
                "Standard Protection does not send any logs to the cloud"
              ],
              correct: 1,
              hint: "Think about what 'protection' implies versus 'sensor'."
            }
          ]
        }
      },
      {
        id: "ep-inventory",
        title: "Managing Endpoint Inventory",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Endpoint Inventory is the central dashboard to locate, group, filter, and take action on any managed or unmanaged endpoint in your network.",
          whyItMatters: "It allows administrators to quickly identify systems that are missing agents, have disabled sensors, or require urgent updates.",
          whatYouWillLearn: [
            "How to navigate the Endpoint Inventory tabs.",
            "The meaning of statuses like 'Sensor disabled' and 'Sensor update recommended'.",
            "How to move endpoints between groups."
          ],
          steps: [
            "Open Endpoint Inventory.",
            "Select the 'Available Actions' tab to see endpoints requiring attention.",
            "Use the 'Add filters' button to display only Linux servers.",
            "Select an endpoint and explore the available response actions."
          ],
          scenario: "An administrator notices 15 'Unmanaged endpoints' discovered on the network. Using the inventory, they export the list to CSV and coordinate with the desktop team to push the agent installer to those machines.",
          commonMistakes: [
            "Trying to move sensor-only endpoints into endpoint groups (sensor-only endpoints do not support grouping).",
            "Assuming that removing an endpoint from the inventory uninstalls the agent."
          ],
          summary: "Endpoint Inventory provides complete visibility of managed and unmanaged devices, enabling grouping, filtering, and direct administrative actions."
        },
        quiz: {
          questions: [
            {
              question: "Does removing an endpoint from the Endpoint Inventory uninstall the Trend Vision One agent?",
              options: [
                "Yes, it triggers an automatic uninstallation script",
                "No, it only removes it from the console view; the agent remains installed and will reconnect if active",
                "Yes, but only on Windows devices",
                "No, but it disables the operating system on that endpoint"
              ],
              correct: 1,
              hint: "Look at the 'Remove Endpoint' description under 'Endpoint actions'."
            }
          ]
        }
      },
      {
        id: "ep-policies",
        title: "Endpoint Security Policies & Overrides",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Policies define the security settings (like real-time scanning and firewall rules) applied to endpoints. Overrides allow you to apply custom settings to specific devices.",
          whyItMatters: "Sometimes specific endpoints (like developer machines) require exceptions. Overrides let you apply these without changing the global policy.",
          whatYouWillLearn: [
            "How policies are assigned to endpoint groups.",
            "How to configure a policy override for a specific endpoint.",
            "How to remove overrides to restore standard policy settings."
          ],
          steps: [
            "Select an endpoint in the Endpoint Inventory list.",
            "Click on 'Endpoint security policy' and select 'Override endpoint security policy'.",
            "Configure the specific scan or intrusion prevention setting to override.",
            "To revert, select the endpoint and click 'Remove override settings'."
          ],
          scenario: "A database server experiences performance degradation during scheduled scans. The administrator applies a policy override to exclude the database directory from real-time scanning, resolving the performance issue immediately.",
          commonMistakes: [
            "Leaving overrides active indefinitely instead of updating the main policy or creating a dedicated group.",
            "Assuming overrides apply to all devices in the group instead of just the selected endpoints."
          ],
          summary: "Policy overrides allow administrators to apply custom security settings to individual endpoints, which can be easily managed and reverted."
        },
        quiz: {
          questions: [
            {
              question: "How can an administrator revert an individual endpoint's custom settings back to the group policy?",
              options: [
                "By reinstalling the agent on the endpoint",
                "By selecting the endpoint in Inventory and choosing 'Remove override settings'",
                "By deleting the entire endpoint group",
                "By restarting the Trend Vision One cloud console"
              ],
              correct: 1,
              hint: "Look for the specific action designed to clean up custom settings."
            }
          ]
        }
      },
      {
        id: "ep-resource-monitoring",
        title: "Agent Resource Monitoring",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Agent Resource Monitoring is a pre-release feature that provides visibility into how security agents impact the CPU and memory performance of endpoints.",
          whyItMatters: "It helps administrators troubleshoot performance complaints from users and identify if a specific security process is behaving abnormally.",
          whatYouWillLearn: [
            "How to access the Agent Resource Monitoring dashboard.",
            "The primary security processes monitored on Windows and Linux.",
            "How to identify the most frequently scanned files on an endpoint."
          ],
          steps: [
            "Go to Endpoint Security -> Agent Resource Monitoring (if available in your region).",
            "Review the average CPU and Memory trends for the past 7 days.",
            "Click on a high-resource endpoint to open its Detailed Resource View.",
            "Examine the 'Top 10 Anti-malware scanned files and paths' list."
          ],
          scenario: "A user complains that their laptop is running slow. The administrator checks Agent Resource Monitoring and sees the `coreServiceShell.exe` process is using 80% CPU. The scan history reveals it is repeatedly scanning a large local database file, which they then exclude.",
          commonMistakes: [
            "Expecting resource data for older agent versions (requires Server & Workload Protection version 202503 or later).",
            "Forgetting that filtering by a security process only displays endpoints where that process is actively running."
          ],
          summary: "Agent Resource Monitoring tracks CPU and memory usage of security processes and lists frequently scanned paths to help optimize endpoint performance."
        },
        quiz: {
          questions: [
            {
              question: "Which process represents the Anti-Malware Scan module on Windows endpoints?",
              options: [
                "dsa.exe",
                "coreServiceShell.exe",
                "ds_am",
                "tm_netagent.exe"
              ],
              correct: 1,
              hint: "Check the 'Security Processes' table in the Agent Resource Monitoring documentation."
            }
          ]
        }
      }
    ]
  },
  {
    id: "email-security",
    title: "Email Security",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "em-threats",
        title: "Email Threats & Cloud App Security",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Email security involves protecting collaboration platforms (like Microsoft 365 and Google Workspace) from phishing, spam, business email compromise (BEC), and malicious attachments.",
          whyItMatters: "Email remains the primary entry point for cyberattacks. Securing it prevents threats from reaching user inboxes and stopping attacks before they start.",
          whatYouWillLearn: [
            "The common types of email-based threats.",
            "How Cloud App Security integrates with collaboration tools.",
            "The role of email security in the broader XDR framework."
          ],
          steps: [
            "Open the Trend Vision One console.",
            "Navigate to Email and Collaboration Security.",
            "Review the latest detections of phishing and malicious URLs."
          ],
          scenario: "An attacker sends a spear-phishing email containing a link to a credential harvesting site. Cloud App Security detects the suspicious link, blocks the email, and logs the event in Trend Vision One, preventing any user interaction.",
          commonMistakes: [
            "Assuming standard email provider filters are sufficient to block advanced, targeted BEC attacks.",
            "Not integrating email security events with endpoint telemetry for cross-layer correlation."
          ],
          summary: "Email security utilizes Cloud App Security to scan collaboration services, block incoming threats, and feed telemetry into the XDR engine."
        },
        quiz: {
          questions: [
            {
              question: "Why is email security integrated into the Trend Vision One XDR platform?",
              options: [
                "To allow administrators to read all personal user emails",
                "To correlate email delivery events with subsequent endpoint and network activities",
                "To replace the organization's public DNS servers",
                "To host the company's marketing website"
              ],
              correct: 1,
              hint: "Think about the value of cross-layer correlation when an email contains a threat."
            }
          ]
        }
      },
      {
        id: "em-inventory",
        title: "Email Asset Inventory",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Email Asset Inventory allows you to manage the security configurations and take action on email assets in your environment.",
          whyItMatters: "It provides a single location to identify unprotected mailboxes, unmanaged domains, and verify the health of connected email servers.",
          whatYouWillLearn: [
            "The three main sections of the Email Asset Inventory.",
            "What 'Unmanaged email accounts' represents.",
            "How to view details of protected domains."
          ],
          steps: [
            "Go to Email and Collaboration Security Operations -> Email Asset Inventory.",
            "Select the 'Email Account Inventory' tab to see all discovered mailboxes.",
            "Identify accounts marked with the 'Important' icon.",
            "Check the 'Email Domain Inventory' to verify gateway protection status."
          ],
          scenario: "During an audit, the security team uses Email Asset Inventory and discovers 50 new email accounts that do not have 'email sensor detection' enabled. They quickly select the accounts and enable the sensor.",
          commonMistakes: [
            "Neglecting the 'Available Actions' tab, which highlights accounts requiring immediate administrator intervention.",
            "Assuming all email servers are cloud-based, ignoring the 'Email Server Inventory' for on-premises relays."
          ],
          summary: "Email Asset Inventory organizes email accounts, domains, and servers, making it easy to monitor protection coverage and take administrative actions."
        },
        quiz: {
          questions: [
            {
              question: "Which tab in the Email Asset Inventory displays on-premises email servers protected by connected solutions?",
              options: [
                "Email Account Inventory",
                "Email Domain Inventory",
                "Email Server Inventory",
                "Available Actions"
              ],
              correct: 2,
              hint: "This tab specifically lists servers, such as those running ScanMail."
            }
          ]
        }
      },
      {
        id: "em-sensor",
        title: "Managing Email Sensor Detection",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The Email Sensor collects metadata and telemetry from email traffic (like sender, recipient, attachments, and links) and sends it to Trend Vision One.",
          whyItMatters: "Unlike active protection which blocks emails, the sensor provides the deep telemetry required to trace the spread of an email-borne campaign retrospectively.",
          whatYouWillLearn: [
            "The purpose of the Email Sensor.",
            "How to enable the sensor for Exchange Online and Gmail.",
            "How to manage sensor settings in the inventory."
          ],
          steps: [
            "Open the Email Account Inventory.",
            "Locate the 'Email sensor detection' management button.",
            "Select the target mailboxes and toggle the sensor to 'Enabled'.",
            "Verify that telemetry is flowing by checking the log status."
          ],
          scenario: "A suspicious PDF is identified as malicious hours after delivery. Because the Email Sensor was enabled, the analyst runs a search in Vision One and immediately identifies the 12 users who received the PDF, allowing them to delete the file from the mailboxes.",
          commonMistakes: [
            "Disabling the email sensor to save credits, which completely disables email-based XDR threat hunting.",
            "Not configuring the sensor for high-profile executive accounts."
          ],
          summary: "The Email Sensor is enabled via the Email Account Inventory, providing the metadata required for cross-layer XDR investigations."
        },
        quiz: {
          questions: [
            {
              question: "What is the primary benefit of enabling the Email Sensor?",
              options: [
                "It automatically responds to user calendar invites",
                "It provides the detailed email metadata needed for threat hunting and XDR correlation",
                "It speeds up the user's internet browsing speed",
                "It backs up all user attachments to local storage"
              ],
              correct: 1,
              hint: "Sensors are designed to gather telemetry to enable search and correlation."
            }
          ]
        }
      },
      {
        id: "em-detections",
        title: "Reviewing Email Detections",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Reviewing detections involves analyzing the alerts generated by Cloud App Security and the Email Sensor to understand the scope of email threats.",
          whyItMatters: "Analyzing detections helps identify targeted campaigns (like phishing waves targeting finance) and take immediate response actions like quarantining messages.",
          whatYouWillLearn: [
            "How to find email detections in the console.",
            "How to interpret email threat details (malware names, phishing indicators).",
            "The response actions available for email assets."
          ],
          steps: [
            "Go to Email and Collaboration Security -> Reviewing Detections (or check Workbench alerts).",
            "Select an email detection to view the sender, recipient, and threat type.",
            "Right-click the message and select 'Quarantine Message' to remove it from the user's inbox."
          ],
          scenario: "An alert indicates a credential phishing attempt. The analyst reviews the detection, sees that the email was delivered to 5 users, and immediately uses the response action to quarantine the email from all 5 inboxes before the users can click the link.",
          commonMistakes: [
            "Ignoring email alerts assuming the endpoint agent will block the threat if clicked.",
            "Not checking the sender's domain reputation during the investigation."
          ],
          summary: "Reviewing email detections allows analysts to understand the context of email threats and take direct actions like quarantining messages to prevent user exposure."
        },
        quiz: {
          questions: [
            {
              question: "Which response action can be taken directly on a detected malicious email message from the console?",
              options: [
                "Delete the user's entire email account",
                "Quarantine the specific message",
                "Format the sender's mail server",
                "Forward the email to all employees"
              ],
              correct: 1,
              hint: "This action removes the threat from the mailbox without destroying the account."
            }
          ]
        }
      }
    ]
  },
  {
    id: "asm",
    title: "Attack Surface Management",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "as-exposure",
        title: "Understanding Exposure & Attack Surface",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Attack Surface Management (ASM) involves continuously discovering and assessing all internal and internet-facing assets in your organization.",
          whyItMatters: "You cannot secure what you do not know. Discovering rogue assets, forgotten subdomains, and unmanaged devices is the first step to reducing exposure.",
          whatYouWillLearn: [
            "The definition of an attack surface.",
            "How Trend Vision One discovers assets.",
            "The difference between internal and internet-facing assets."
          ],
          steps: [
            "Go to Cyber Risk Exposure Management -> Cyber Risk Overview.",
            "Look at the 'Risk Overview' section.",
            "Identify the counts for Devices, Internet-facing Assets, and Cloud Assets."
          ],
          scenario: "A marketing team launches a temporary campaign website on a cloud server without notifying IT. Trend Vision One's ASM automatically discovers this new internet-facing asset, scans it, and alerts the security team to its existence.",
          commonMistakes: [
            "Assuming your asset inventory is static and does not require continuous discovery.",
            "Only focusing on internal devices while ignoring internet-facing domains and cloud storage."
          ],
          summary: "Attack Surface Management continuously discovers assets across your environment, providing the visibility needed to manage exposure."
        },
        quiz: {
          questions: [
            {
              question: "Why is continuous discovery important in Attack Surface Management?",
              options: [
                "To increase the speed of the local network",
                "To automatically find new, unmanaged, or forgotten assets as they appear",
                "To generate billing invoices for the IT department",
                "To shut down unauthorized endpoints automatically"
              ],
              correct: 1,
              hint: "Environments are dynamic; new assets are added constantly."
            }
          ]
        }
      },
      {
        id: "as-risk-scores",
        title: "Risk Scores & Contributing Factors",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Asset risk scores are determined by evaluating contributing factors: vulnerabilities, system configurations (misconfigurations), and user behavior.",
          whyItMatters: "Understanding what drives an asset's risk score allows you to apply the most effective remediation, rather than guessing.",
          whatYouWillLearn: [
            "The three primary contributing factors to asset risk.",
            "How user behavior (like accessing risky sites) affects risk scores.",
            "How vulnerability severity (CVE impact) is factored in."
          ],
          steps: [
            "Navigate to the Exposure Overview on the Cyber Risk Overview dashboard.",
            "Identify which assets have the highest risk scores.",
            "Click on a high-risk asset to view the breakdown of contributing factors (e.g., 3 critical CVEs, 2 misconfigurations)."
          ],
          scenario: "A laptop's risk score spikes to 'Critical'. The administrator reviews the details and sees it is due to a combination of an unpatched remote code execution vulnerability (CVE) and the user repeatedly visiting known phishing domains.",
          commonMistakes: [
            "Assuming risk scores are based solely on unpatched software, ignoring misconfigurations and user actions.",
            "Not prioritizing remediation for assets with critical contributing factors."
          ],
          summary: "Risk scores are dynamically calculated based on software vulnerabilities, configuration issues, and risky user behaviors."
        },
        quiz: {
          questions: [
            {
              question: "Which of the following is a contributing factor to an asset's risk score?",
              options: [
                "The physical weight of the endpoint device",
                "Vulnerabilities, system configurations, and user activity/behavior",
                "The brand of the local network router",
                "The number of emails sent by the user"
              ],
              correct: 1,
              hint: "Recall the three areas evaluated in the Exposure Overview."
            }
          ]
        }
      },
      {
        id: "as-prioritizing",
        title: "Prioritizing & Remediation",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Prioritizing involves identifying the most critical exposure issues and following recommended remediation actions to resolve them.",
          whyItMatters: "Organizations have thousands of vulnerabilities. Prioritization helps you focus on the 1% that pose the greatest immediate threat (e.g., actively exploited CVEs).",
          whatYouWillLearn: [
            "How Trend Vision One prioritizes vulnerabilities.",
            "Where to find recommended remediation actions.",
            "How to track remediation progress."
          ],
          steps: [
            "Go to Cyber Risk Exposure Management -> Detected Vulnerabilities.",
            "Filter by 'Global Exploit Potential' to find CVEs actively used in the wild.",
            "Select a vulnerability and review the 'Recommended Actions' (e.g., apply patch, deploy virtual patch)."
          ],
          scenario: "A SOC is faced with 2,000 open vulnerabilities. Using Trend Vision One, they filter for vulnerabilities with 'High Global Exploit Potential'. The list shrinks to 5 critical CVEs. The team patches these first, immediately neutralizing the highest risks.",
          commonMistakes: [
            "Attempting to patch vulnerabilities in chronological order instead of prioritizing by exploit potential.",
            "Ignoring the recommended remediation steps provided in the console."
          ],
          summary: "Prioritizing exposure issues based on exploit potential and business impact allows teams to execute targeted, high-impact remediations."
        },
        quiz: {
          questions: [
            {
              question: "How should a security team prioritize patching vulnerabilities?",
              options: [
                "By patching the oldest vulnerabilities first",
                "By focusing on vulnerabilities with high global exploit potential and active exploits",
                "By patching alphabetical by software name",
                "By patching only the systems used by the IT team"
              ],
              correct: 1,
              hint: "Focus on the threats that attackers are actively using in the real world."
            }
          ]
        }
      },
      {
        id: "as-compliance",
        title: "Compliance Management",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Compliance Management offers a centralized overview of your organization's configurations compared against specific security frameworks and standards.",
          whyItMatters: "It helps organizations identify gaps, measure progress towards compliance, and prepare for audits without manual spreadsheets.",
          whatYouWillLearn: [
            "The purpose of Compliance Management.",
            "How the compliance pass rate is calculated.",
            "How to manually trigger a configuration check."
          ],
          steps: [
            "Go to Cyber Risk Exposure Management -> Cyber Governance & Risk Compliance -> Compliance Management.",
            "Review the pass rates for your active frameworks (e.g., NIST, CIS).",
            "Click the 'Check configurations' button to run a manual assessment.",
            "Export the analysis results using TrendAI Companion."
          ],
          scenario: "Before an annual audit, the compliance officer uses Trend Vision One to check their CIS Benchmarks pass rate. They identify three servers failing the password complexity check, fix the settings, rerun the check, and export a clean PDF report.",
          commonMistakes: [
            "Assuming that a 100% pass rate in the tool guarantees legal compliance (it only checks technical configurations, not organizational processes).",
            "Not realizing that manual configuration checks can take up to a day to reflect accurately in the pass/fail rates."
          ],
          summary: "Compliance Management tracks your configuration alignment with industry standards, calculating a pass rate based on enabled security features and settings."
        },
        quiz: {
          questions: [
            {
              question: "How is the pass rate calculated in Compliance Management?",
              options: [
                "By dividing the number of managed endpoints by unmanaged ones",
                "As the percentage of successful configuration checks out of all checks made for a framework",
                "By the number of hours the console has been active without an alert",
                "Based on the administrator's score in this training course"
              ],
              correct: 1,
              hint: "The pass rate measures how many security controls successfully match the framework requirements."
            }
          ]
        }
      }
    ]
  },
  {
    id: "search-investigations",
    title: "Search & Investigations",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "si-basics",
        title: "Search Basics & Query Builder",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Search allows you to proactively query activity data (telemetry, metadata, NetFlow) collected from endpoint, email, network, and cloud layers.",
          whyItMatters: "Threat hunting requires searching for indicators of compromise (IoCs) that may not have triggered automated alerts, allowing you to find hidden threats.",
          whatYouWillLearn: [
            "How to use the simple query builder.",
            "The types of telemetry data available for search.",
            "How to build, save, and reuse search queries."
          ],
          steps: [
            "Go to Agentic SIEM and XDR -> Search.",
            "Use the query builder to search for a specific file name (e.g., `malicious.exe`).",
            "Add a filter to restrict the search to the last 24 hours.",
            "Save the query as 'Daily Malware Sweep' for future use."
          ],
          scenario: "A threat intelligence feed warns of a new registry key used by an espionage group. The analyst uses the query builder to search for that registry key across all endpoints. Within seconds, they verify that no systems contain the key.",
          commonMistakes: [
            "Running overly broad queries over long time ranges, which slows down search results.",
            "Not saving frequently used queries, requiring them to be rebuilt manually every time."
          ],
          summary: "The Search tool enables proactive threat hunting by querying cross-layer telemetry using a flexible, savable query builder."
        },
        quiz: {
          questions: [
            {
              question: "What can you do with a search query once you have built it in the Search app?",
              options: [
                "You can only run it once and it is deleted",
                "You can build, save, and reuse it for future threat hunting",
                "It automatically deletes matching files on endpoints",
                "It requires exporting to a third-party tool to run"
              ],
              correct: 1,
              hint: "Look at the benefits of the query builder described in the introduction."
            }
          ]
        }
      },
      {
        id: "si-xdr-explorer",
        title: "XDR Data Explorer",
        estimatedMins: 5,
        content: {
          whatThisMeans: "XDR Data Explorer is an advanced search tool that allows you to run raw queries against specific log types (Activity or Detection) across all data sources.",
          whyItMatters: "It provides deep, granular access to the raw logs, allowing advanced analysts to perform complex investigations and construct custom widgets.",
          whatYouWillLearn: [
            "The difference between Activity and Detection logs.",
            "How data sources are grouped in XDR Data Explorer.",
            "How to navigate and filter query results."
          ],
          steps: [
            "Go to Agentic SIEM and XDR -> XDR Data Explorer.",
            "Select the 'Endpoint' data source and 'Activity' log type.",
            "Enter a query string targeting process executions and click 'Run Query'.",
            "Review the resulting log fields like `processName` and `endpointHostName`."
          ],
          scenario: "An analyst needs to investigate a suspicious network connection from a web server. They open XDR Data Explorer, select the 'Network' layer, and query for outbound connections from that server's IP, finding the exact timestamp and destination port.",
          commonMistakes: [
            "Confusing 'Activity' logs (all recorded telemetry) with 'Detection' logs (only events matching security rules).",
            "Not selecting the correct data source before running a query, leading to empty results."
          ],
          summary: "XDR Data Explorer provides raw log access across all security layers, categorized by Activity and Detection log types, for advanced security analysis."
        },
        quiz: {
          questions: [
            {
              question: "What are the two primary Log Types you can select in XDR Data Explorer?",
              options: [
                "System and Application",
                "Activity and Detection",
                "Security and Audit",
                "Local and Remote"
              ],
              correct: 1,
              hint: "Look at the steps for creating a custom widget or running a query in XDR Data Explorer."
            }
          ]
        }
      },
      {
        id: "si-finding",
        title: "Finding Devices & Users (IoC Sweeping)",
        estimatedMins: 5,
        content: {
          whatThisMeans: "IoC Sweeping involves searching your entire environment for specific Indicators of Compromise (like file hashes, IPs, or domain names) associated with known threats.",
          whyItMatters: "When a new threat is announced globally, IoC sweeping is the fastest way to answer the critical question: 'Are we affected?'",
          whatYouWillLearn: [
            "How to perform an IoC sweep.",
            "The types of IoCs you can search for.",
            "How to interpret sweeping results."
          ],
          steps: [
            "Obtain a list of SHA-1 file hashes from a threat advisory.",
            "Paste the hashes into the Search tool or XDR Data Explorer.",
            "Run the query to sweep all endpoint activity logs.",
            "Identify any devices or user accounts associated with a matching hash."
          ],
          scenario: "US-CERT releases an advisory about a new ransomware campaign containing five file hashes. The security team runs an IoC sweep in Trend Vision One. The search returns zero results, confirming the organization has not encountered the threat.",
          commonMistakes: [
            "Sweeping only the last hour of data when the threat might have entered the network days ago.",
            "Searching for partial hashes instead of complete, valid SHA-1 or SHA-256 values."
          ],
          summary: "IoC sweeping utilizes file hashes, IPs, and domains to search across all endpoint and network logs, quickly identifying compromised devices and users."
        },
        quiz: {
          questions: [
            {
              question: "What is the primary goal of performing an IoC sweep?",
              options: [
                "To update the operating system on all endpoints",
                "To search the environment for specific indicators (like hashes or IPs) to see if a threat is present",
                "To back up user databases to the cloud",
                "To check if the administrator's password has expired"
              ],
              correct: 1,
              hint: "IoC sweeping is a reactive search for known threat indicators."
            }
          ]
        }
      },
      {
        id: "si-sandbox",
        title: "Sandbox Analysis",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Sandbox Analysis allows you to submit suspicious files or URLs to be executed in a secure, isolated virtual environment to observe their behavior.",
          whyItMatters: "Traditional signature-based detection cannot identify zero-day malware. A sandbox identifies threats by what they *do* when executed.",
          whatYouWillLearn: [
            "How to manually submit objects to the sandbox.",
            "The different risk levels assigned by the sandbox.",
            "The safety precautions required when downloading sandbox samples."
          ],
          steps: [
            "Go to Agentic SIEM and XDR -> Sandbox Analysis.",
            "Click 'Submit Object' and upload a suspicious email attachment.",
            "Wait for the analysis to complete and review the assigned risk level (High, Medium, Low).",
            "Examine the detailed behavior report, including modified registry keys and network connections."
          ],
          scenario: "An analyst receives an unusual PDF from a user. The local antivirus says it's clean, but the analyst is suspicious. They upload it to the Sandbox. The sandbox runs it, observes it attempting to inject code into another process, and flags it as High Risk.",
          commonMistakes: [
            "Downloading suspicious file objects from the sandbox to a production endpoint without isolation (can infect your machine).",
            "Assuming a 'Low' risk level means a file is guaranteed safe, ignoring that advanced malware can detect and evade sandboxes."
          ],
          summary: "Sandbox Analysis executes files and URLs in a secure virtual environment, analyzing their behavior to identify zero-day threats and assign risk levels."
        },
        quiz: {
          questions: [
            {
              question: "What warning is associated with downloading file objects from Sandbox Analysis?",
              options: [
                "It will consume all your monthly internet bandwidth",
                "Downloading suspicious samples may potentially harm your endpoint if executed",
                "It requires a physical hardware dongle to download",
                "It will automatically delete your user account"
              ],
              correct: 1,
              hint: "Review the 'WARNING' box in the Sandbox Analysis documentation."
            }
          ]
        }
      }
    ]
  },
  {
    id: "response-actions",
    title: "Response Actions",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "ra-contextual",
        title: "Contextual Response & Right-Click Menu",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Trend Vision One provides a context menu (accessed by right-clicking) to execute immediate response actions directly from the Workbench or Search results.",
          whyItMatters: "Every second counts during an active breach. Right-click actions eliminate the need to navigate to separate management consoles to block a threat.",
          whatYouWillLearn: [
            "Where the context menu can be accessed.",
            "The categories of actions available (General, Analysis, Response).",
            "How to initiate a response action on a file or IP."
          ],
          steps: [
            "Open an active Workbench alert.",
            "Right-click on a suspicious file name in the Highlights section.",
            "Hover over 'Response' and observe the options (e.g., Add to Block List, Terminate Process)."
          ],
          scenario: "An analyst is reviewing threat hunting logs and sees an unknown executable running. They right-click the file hash in the search results and select 'Add to Suspicious Object List', blocking it across all company endpoints instantly.",
          commonMistakes: [
            "Not realizing that right-click options change depending on the object type (you cannot isolate an IP, and you cannot block an endpoint's email address).",
            "Forgetting that some response actions require administrative approval before executing."
          ],
          summary: "The right-click context menu provides immediate, contextually aware response choices for endpoints, files, IPs, and emails directly within the workflow."
        },
        quiz: {
          questions: [
            {
              question: "In which apps can you access the right-click context menu in Trend Vision One?",
              options: [
                "Only in the User Accounts app",
                "In Attack Surface Discovery, Endpoint Inventory, Workbench, Observed Attack Techniques, and XDR Data Explorer",
                "Only in the Reports app",
                "In the License Activation screen only"
              ],
              correct: 1,
              hint: "Review the 'Context menu' section under the Introduction documentation."
            }
          ]
        }
      },
      {
        id: "ra-isolation",
        title: "Isolating Endpoints",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Isolate Endpoint is a critical response action that severs an endpoint's network connections, except for its communication with the Trend Vision One console.",
          whyItMatters: "When a device is infected with ransomware or malware, isolating it prevents the threat from spreading laterally to other systems on the network.",
          whatYouWillLearn: [
            "What happens to an endpoint's network traffic during isolation.",
            "How to isolate an endpoint from the console.",
            "How to restore an isolated endpoint's connection."
          ],
          steps: [
            "Go to Endpoint Inventory and select a compromised endpoint.",
            "Click on 'Response actions' and select 'Isolate Endpoint'.",
            "To restore the connection, go to the Response Management app, locate the isolation task, and select 'Restore Connection'."
          ],
          scenario: "A server begins encrypting files. The SOC analyst immediately triggers 'Isolate Endpoint'. The server is cut off from the local network, stopping the ransomware from reaching the company's file shares, while the analyst remains connected to investigate.",
          commonMistakes: [
            "Attempting to restore an isolated endpoint directly from the Endpoint Inventory (restoration must be done via the Response Management app).",
            "Isolating a critical domain controller without considering the business impact."
          ],
          summary: "Isolating an endpoint blocks all non-security network traffic to contain threats, and the connection must be restored via the Response Management app."
        },
        quiz: {
          questions: [
            {
              question: "Where must an administrator go to restore the network connection of an isolated endpoint?",
              options: [
                "The endpoint's local physical keyboard",
                "The Response Management app, by locating the specific Isolate Endpoint task",
                "The License Information screen",
                "The Sandbox Analysis history"
              ],
              correct: 1,
              hint: "Check the note under 'Endpoint actions' in the Endpoint Inventory documentation."
            }
          ]
        }
      },
      {
        id: "ra-remote",
        title: "Remote Shell & Custom Scripts",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Remote Shell and Custom Scripts allow administrators to execute commands and run scripts (Bash or PowerShell) directly on managed endpoints from the cloud.",
          whyItMatters: "It provides incident responders with direct access to collect custom forensics, terminate rogue processes, or apply emergency configurations without physical access.",
          whatYouWillLearn: [
            "The purpose of the Start Remote Shell Session action.",
            "How to upload and execute custom response scripts.",
            "The security controls surrounding remote scripting."
          ],
          steps: [
            "Select an endpoint in the Endpoint Inventory.",
            "Click 'Response actions' and select 'Start Remote Shell Session' to open a secure CLI.",
            "Alternatively, navigate to Response Management -> Response Scripts.",
            "Click 'Add script' to upload a custom PowerShell script, then deploy it to the endpoint."
          ],
          scenario: "A rogue registry key is persisting malware. The responder starts a Remote Shell session to the endpoint, queries the registry, deletes the malicious key, and restarts the system—all within a secure command-line interface in their browser.",
          commonMistakes: [
            "Running unverified scripts that could damage the operating system or delete critical files.",
            "Not realizing that custom scripts must be uploaded in the Response Management app before they can be executed on endpoints."
          ],
          summary: "Remote Shell and Custom Scripts enable direct command-line access and script execution on endpoints for advanced remediation and forensics."
        },
        quiz: {
          questions: [
            {
              question: "Where do you upload custom Bash or PowerShell scripts before running them on endpoints?",
              options: [
                "Directly into the Search query builder",
                "Under the Response Scripts tab in the Response Management app",
                "In the Sandbox Analysis upload screen",
                "In the local endpoint's web browser settings"
              ],
              correct: 1,
              hint: "Review the 'Response Scripts' section of the Response Management documentation."
            }
          ]
        }
      },
      {
        id: "ra-mitigation",
        title: "Threat Mitigation & Exception Lists",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Threat mitigation involves blocking suspicious objects (IPs, domains, URLs, hashes) company-wide. The Exception List ensures safe objects are not blocked.",
          whyItMatters: "Exception lists prevent business disruption by ensuring that legitimate internal tools or safe files are not accidentally blocked by security engines.",
          whatYouWillLearn: [
            "The supported object types in the Exception List.",
            "How exceptions apply to Trend Vision One vs local endpoint engines.",
            "The maximum number of exceptions allowed."
          ],
          steps: [
            "Go to Agentic SIEM and XDR -> Exception List (or via Detection Model Management).",
            "Click 'Add' to open the Add Exception screen.",
            "Enter a file SHA-256 hash or a trusted internal domain (e.g., `internal.local`).",
            "Save the exception and verify it appears in the list."
          ],
          scenario: "A custom internal accounting tool is flagged as suspicious by the XDR engine. To prevent it from being blocked, the administrator adds the file's SHA-256 hash to the Exception List. The tool now runs without generating alerts.",
          commonMistakes: [
            "Assuming an exception will stop a local antivirus engine from blocking a file (exceptions only suppress Trend Vision One cloud-managed detections).",
            "Exceeding the 5,000 exception limit by adding unnecessary items."
          ],
          summary: "The Exception List supports up to 5,000 domains, hashes, IPs, and URLs, suppressing cloud-managed detections for trusted objects."
        },
        quiz: {
          questions: [
            {
              question: "Do exceptions in the Trend Vision One Exception List suppress detections made independently by local endpoint antivirus engines?",
              options: [
                "Yes, they disable all local antivirus scanning entirely",
                "No, if a local engine (like AV or Behavior Monitoring) detects a file as malicious, it will still take action",
                "Yes, but only for Linux endpoints",
                "No, exceptions only apply to email servers"
              ],
              correct: 1,
              hint: "Review the important note in the 'Exception list' documentation regarding local endpoint engines."
            }
          ]
        }
      }
    ]
  },
  {
    id: "reports-dashboards",
    title: "Reports & Custom Widgets",
    icon: "",
    estimatedMins: 20,
    isAdvanced: false,
    lessons: [
      {
        id: "rp-generating",
        title: "Generating Reports",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Generating reports involves using pre-built templates or custom configurations to present an overview of your organization's security status.",
          whyItMatters: "Security reports are essential for communicating risk, demonstrating compliance, and sharing security metrics with stakeholders and executives.",
          whatYouWillLearn: [
            "How to find and use report templates.",
            "The formats available for generated reports (CSV, PDF).",
            "How to create a custom report combining data from multiple apps."
          ],
          steps: [
            "Go to Dashboards and Reports -> Reports.",
            "On the 'Report Templates' tab, click on a template title (e.g., Endpoint Inventory).",
            "Click 'View PDF sample' to preview the layout.",
            "Configure the report parameters and click 'Generate'."
          ],
          scenario: "An administrator needs to show the executive board the company's patching progress. They select the 'Vulnerability Assessment' report template, generate a polished PDF containing charts and metrics, and email it to the board.",
          commonMistakes: [
            "Creating multiple separate reports when a single 'Custom Report' could combine data from endpoint, email, and network layers.",
            "Assuming all report templates are available, ignoring that some require specific app licenses."
          ],
          summary: "The Reports app allows you to generate PDF and CSV reports from templates or custom configurations to share security data with stakeholders."
        },
        quiz: {
          questions: [
            {
              question: "Which format is best suited for sharing polished, visual security summaries with executives?",
              options: [
                "TXT",
                "CSV",
                "PDF",
                "JSON"
              ],
              correct: 2,
              hint: "This format supports charts, tables, and structured layouts."
            }
          ]
        }
      },
      {
        id: "rp-scheduling",
        title: "Scheduled Reports",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Scheduling reports allows you to configure the system to automatically generate and distribute reports on a recurring basis (daily, weekly, monthly).",
          whyItMatters: "Automation saves time. Scheduling ensures that stakeholders receive regular updates without the administrator having to manually generate them every week.",
          whatYouWillLearn: [
            "How to configure a scheduled report.",
            "Where to manage and edit scheduled report settings.",
            "How deleting a generated report affects its schedule."
          ],
          steps: [
            "Go to the 'Scheduled Report Settings' tab in the Reports app.",
            "Click 'Create custom report' and select 'Schedule' under generation options.",
            "Define the recurrence (e.g., Every Monday at 9:00 AM) and enter recipient emails.",
            "Save the schedule and verify it appears in the list."
          ],
          scenario: "To keep the network team informed of rogue devices, the security admin schedules a weekly 'Network Inventory' report. Every Monday morning, the network team automatically receives a CSV list of newly discovered assets.",
          commonMistakes: [
            "Assuming that deleting a generated PDF report also deletes its recurrence schedule (schedules must be deleted separately).",
            "Scheduling reports for accounts that do not have permission to view the underlying data."
          ],
          summary: "Scheduled reports automate the recurring generation and distribution of security data, managed via the Scheduled Report Settings tab."
        },
        quiz: {
          questions: [
            {
              question: "Does deleting a generated PDF report from the 'Generated reports' tab delete the corresponding schedule?",
              options: [
                "Yes, it deletes both the file and the schedule",
                "No, deleting a report only deletes the generated file and does not delete any related schedules",
                "No, but it pauses the schedule",
                "Yes, but only if the report was exported as a CSV"
              ],
              correct: 1,
              hint: "Review the note under the 'Generated reports' section in the Reports documentation."
            }
          ]
        }
      },
      {
        id: "rp-widgets",
        title: "Creating Custom Widgets",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Custom widgets allow you to visualize and analyze search data from XDR Data Explorer through configurable aggregations, groupings, and chart types.",
          whyItMatters: "Pre-built widgets may not show the exact metrics your SOC needs. Custom widgets let you build a dashboard tailored to your specific monitoring requirements.",
          whatYouWillLearn: [
            "How to initiate custom widget creation from XDR Data Explorer.",
            "The available aggregation functions (Count, Sum, Avg, etc.).",
            "How the grouping method determines the available chart types."
          ],
          steps: [
            "Go to Agentic SIEM and XDR -> XDR Data Explorer.",
            "Run a query (e.g., counting failed logins by user).",
            "Click the 'Custom Widget' icon in the results pane.",
            "Configure the aggregation (Count) and Group By (Field: `duser`).",
            "Click 'Fetch Data' to preview, select 'Bar Chart', and click 'Save'."
          ],
          scenario: "An organization wants to monitor brute-force attempts. The admin queries failed logins in XDR Data Explorer, groups them by user, and creates a custom bar chart widget. They place this widget on the main SOC dashboard for real-time monitoring.",
          commonMistakes: [
            "Saving a custom widget without clicking 'Fetch Data' first to verify the configuration and preview the chart.",
            "Choosing a chart type that isn't supported by your grouping method (e.g., trying to display a time-series line chart without selecting Time Binning)."
          ],
          summary: "Custom widgets are created from XDR Data Explorer query results, using aggregations and groupings to display data as bar, pie, line, or table charts."
        },
        quiz: {
          questions: [
            {
              question: "Which chart types are available if you select the 'Field' grouping method for a custom widget?",
              options: [
                "Line Chart, Time Series Chart, Table",
                "Bar Chart, Pie Chart, Table",
                "Pie Chart and Line Chart only",
                "Bar Chart and Time Series Chart only"
              ],
              correct: 1,
              hint: "Check the 'Chart types' table in the Custom Widget documentation."
            }
          ]
        }
      },
      {
        id: "rp-executive",
        title: "Executive Reporting & TrendAI Companion",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Executive reporting involves using advanced tools like TrendAI Companion to generate high-level compliance and risk reports using natural language.",
          whyItMatters: "Executives need clear summaries, not raw logs. TrendAI Companion translates complex security data into easy-to-understand summaries and exports them.",
          whatYouWillLearn: [
            "The role of TrendAI Companion in reporting.",
            "How to generate reports within Compliance Management.",
            "How to export executive summaries."
          ],
          steps: [
            "Open the Compliance Management screen.",
            "Click on the TrendAI Companion icon in the side panel.",
            "Ask the Companion: 'Generate a PDF compliance report for our NIST framework.'",
            "Review the summary and download the generated PDF."
          ],
          scenario: "The CISO needs a quick status update on PCI DSS compliance. The administrator opens TrendAI Companion, asks for a summary of PCI compliance gaps, and immediately receives a bulleted list and a download link for a CSV report.",
          commonMistakes: [
            "Using technical logs for executive presentations instead of the summarized reports generated by TrendAI Companion.",
            "Assuming TrendAI Companion can modify security configurations directly from the chat (it is primarily an analysis and reporting assistant)."
          ],
          summary: "TrendAI Companion provides natural-language assistance to analyze data and generate CSV or PDF compliance reports directly from the console."
        },
        quiz: {
          questions: [
            {
              question: "How can you generate a compliance report using TrendAI Companion?",
              options: [
                "By writing a SQL query in the console settings",
                "By clicking the Companion icon on the Framework details screen and asking it to generate the report",
                "By calling the billing department",
                "By downloading the agent installer script"
              ],
              correct: 1,
              hint: "Review the 'Generate a compliance report...' action in the Compliance Management documentation."
            }
          ]
        }
      }
    ]
  },
  {
    id: "final-assessment",
    title: "Final Assessment",
    icon: "",
    estimatedMins: 15,
    isAdvanced: false,
    lessons: [
      {
        id: "fa-quiz",
        title: "Vision One Core Knowledge Check",
        estimatedMins: 15,
        content: {
          whatThisMeans: "The Final Assessment is a comprehensive 10-question exam covering all core modules. Passing this exam unlocks your Vision One Specialist Certificate.",
          whyItMatters: "Verifying your knowledge ensures you are fully prepared to operate the Trend Vision One console and respond to real-world security incidents.",
          whatYouWillLearn: [
            "How to apply the concepts learned in modules 0-9.",
            "How to analyze scenario-based security questions.",
            "How to generate and print your completion certificate."
          ],
          steps: [
            "Review the key summaries of the previous 10 modules.",
            "Answer all 10 questions in the quiz below.",
            "Achieve a score of 80% or higher to pass.",
            "Enter your name to generate your personalized certificate."
          ],
          scenario: "After completing all 10 core modules, the analyst takes the Final Assessment. They pass with a score of 90% and print their certificate, which they present to their manager to fulfill their annual security training requirement.",
          commonMistakes: [
            "Rushing through the questions without reading the scenario details.",
            "Forgetting to enter your name before printing the certificate."
          ],
          summary: "Pass the 10-question final assessment to verify your core Trend Vision One expertise and earn your completion certificate."
        },
        quiz: {
          questions: [
            {
              question: "Which component is the single source of truth for investigating correlated threat activities across endpoint, network, and email layers?",
              options: [
                "Exception List",
                "Workbench",
                "Agent Resource Monitoring",
                "License Activation Service"
              ],
              correct: 1,
              hint: "This is where correlated alerts are triaged and visualized."
            },
            {
              question: "If an endpoint is isolated, which communication remains active?",
              options: [
                "All internet traffic is allowed, but local network traffic is blocked",
                "Only communication with the Trend Vision One console is permitted",
                "All network traffic is blocked, including the connection to the console",
                "Only email traffic via Microsoft Exchange is allowed"
              ],
              correct: 1,
              hint: "Isolation cuts off the threat but maintains administrator control."
            },
            {
              question: "How is the overall alert score in the Workbench calculated?",
              options: [
                "By averaging the CPU usage of all endpoints",
                "By combining the severity of the matched detection model with the impact scope",
                "Based on the number of days since the license was activated",
                "By counting the number of custom widgets on the dashboard"
              ],
              correct: 1,
              hint: "Model severity and impact scope are the two key factors."
            },
            {
              question: "Where must you go to restore network access to an isolated endpoint?",
              options: [
                "Endpoint Inventory",
                "Response Management app (Task List)",
                "Sandbox Analysis history",
                "Console Settings"
              ],
              correct: 1,
              hint: "All response task tracking and secondary actions happen here."
            },
            {
              question: "What is the maximum number of exceptions you can add to the Exception List?",
              options: [
                "100",
                "1,000",
                "5,000",
                "10,000"
              ],
              correct: 2,
              hint: "Check the Exception List limits."
            },
            {
              question: "Which Log Types are queried in XDR Data Explorer?",
              options: [
                "System and Application",
                "Activity and Detection",
                "Security and Audit",
                "Local and Remote"
              ],
              correct: 1,
              hint: "These represent the raw telemetry and the triggered rules."
            },
            {
              question: "What does the Company Risk Index evaluate to determine its score?",
              options: [
                "Only the number of active malware alerts",
                "Exposure, attacks, and security configurations across the organization",
                "The number of administrative user accounts",
                "The data center region storage capacity"
              ],
              correct: 1,
              hint: "It is a comprehensive score evaluating multiple security aspects."
            },
            {
              question: "How long is data retained for Network Sensors in the Network Inventory?",
              options: [
                "30 days",
                "90 days",
                "180 days",
                "365 days"
              ],
              correct: 2,
              hint: "Review the Network Inventory retention period."
            },
            {
              question: "Does deleting a generated report from the Reports app delete the schedule that created it?",
              options: [
                "Yes, it deletes both",
                "No, deleting the file does not affect the recurring schedule",
                "No, but it pauses the schedule",
                "Yes, but only for PDF formats"
              ],
              correct: 1,
              hint: "Generated files and schedules are managed independently."
            },
            {
              question: "What is the purpose of the Email Sensor?",
              options: [
                "To encrypt all outgoing user emails",
                "To collect email metadata and telemetry for threat hunting and XDR correlation",
                "To host the company's exchange server in the cloud",
                "To automatically reply to phishing emails"
              ],
              correct: 1,
              hint: "Sensors gather metadata to enable search and correlation."
            }
          ]
        }
      }
    ]
  },
  {
    id: "adv-ai-security",
    title: "Advanced: AI Security",
    icon: "",
    estimatedMins: 15,
    isAdvanced: true,
    lessons: [
      {
        id: "ai-blueprint",
        title: "AI Security Blueprint",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The AI Security Blueprint dashboard delivers guidance across Trend Vision One to protect your AI stacks and users of AI services.",
          whyItMatters: "As organizations adopt AI, they introduce new risks like prompt injection, model theft, and data leakage. The blueprint provides visibility across the entire AI lifecycle.",
          whatYouWillLearn: [
            "The phases of the AI Security Blueprint (Develop, Deploy, Runtime).",
            "How to tag AI-related assets in Attack Surface Discovery.",
            "How to monitor Kubernetes clusters running AI workloads."
          ],
          steps: [
            "Go to AI Security -> AI Security Blueprint.",
            "Click 'Manage AI asset tags' to tag a model workload in your inventory.",
            "Click 'View code repository inventory' to check for exposed secrets in AI code.",
            "Monitor runtime AI infrastructure under the Runtime and Production section."
          ],
          scenario: "A company is developing a custom customer-service chatbot. Using the AI Security Blueprint, they scan their code repository for exposed API keys, validate the container image before deployment, and monitor the model's runtime CPU/Memory for anomalies.",
          commonMistakes: [
            "Only protecting AI models in production while ignoring vulnerabilities in the development pipeline and code repositories.",
            "Failing to tag AI assets, which prevents them from being factored into the AI security posture."
          ],
          summary: "The AI Security Blueprint provides end-to-end security visibility for AI development, deployment, and runtime environments."
        },
        quiz: {
          questions: [
            {
              question: "Which phase of the AI Security Blueprint involves scanning code repositories for vulnerabilities and exposed secrets?",
              options: [
                "Develop",
                "Deploy",
                "Runtime",
                "Assess"
              ],
              correct: 0,
              hint: "Scanning code happens during the initial creation/development phase."
            }
          ]
        }
      },
      {
        id: "ai-app-security",
        title: "AI Application Security: Scanner & Guard",
        estimatedMins: 5,
        content: {
          whatThisMeans: "AI Application Security consists of AI Scanner (scans models for vulnerabilities) and AI Guard (runtime inspection of inputs and outputs).",
          whyItMatters: "It prevents users from sending sensitive data (like PII) in prompts, blocks prompt injection attacks, and ensures model responses do not contain malicious URLs.",
          whatYouWillLearn: [
            "The difference between AI Scanner and AI Guard.",
            "The deployment options (Trend-hosted vs Self-hosted).",
            "What types of content violations are detected."
          ],
          steps: [
            "Navigate to AI Security -> AI Application Security.",
            "Select 'Set up AI Scanner' to configure a scan for a local LLM.",
            "Select 'Integrate AI Guard' to enable prompt inspection.",
            "Choose 'Self-hosted' to keep all prompt data within your local network."
          ],
          scenario: "An employee asks a public LLM to summarize a database containing customer credit card numbers. AI Guard inspects the prompt, detects the sensitive data leakage, blocks the request, and alerts the SOC.",
          commonMistakes: [
            "Assuming Trend-hosted is the only option, when organizations with strict data residency must use the Self-hosted deployment.",
            "Enabling AI Guard but not configuring templates for sensitive data loss."
          ],
          summary: "AI Scanner checks models for vulnerabilities, while AI Guard inspects prompts and responses in real-time to prevent data leakage and prompt injection."
        },
        quiz: {
          questions: [
            {
              question: "If an organization has strict data residency requirements and cannot send prompts to the cloud, which deployment option should they choose for AI Guard?",
              options: [
                "Trend-hosted",
                "Self-hosted",
                "SaaS-only",
                "No deployment is possible"
              ],
              correct: 1,
              hint: "This option runs the scanner/guard locally within the customer's environment."
            }
          ]
        }
      },
      {
        id: "ai-secure-access",
        title: "AI Secure Access Monitoring",
        estimatedMins: 5,
        content: {
          whatThisMeans: "AI Secure Access monitors and controls user and device access to public generative AI services, providing widgets to track attempts and content violations.",
          whyItMatters: "It helps organizations understand which AI tools are being used (shadow AI) and block access to unapproved or risky AI services.",
          whatYouWillLearn: [
            "The widgets available in the AI Secure Access dashboard.",
            "The categories of detected AI content violations.",
            "How to view detailed access history."
          ],
          steps: [
            "Go to AI Security -> AI Secure Access.",
            "Review the 'Total Detected AI Content Violations' widget.",
            "Identify the top 10 users with AI content violations.",
            "Click on a user's violation count to view the raw logs in Secure Access History."
          ],
          scenario: "The CISO wants to know if employees are using unapproved AI services. The admin opens AI Secure Access and shows a list of attempts. They see several blocks for an unapproved writing assistant, confirming policy enforcement.",
          commonMistakes: [
            "Not monitoring the 'Sensitive data loss' widget, which shows if intellectual property is leaving the company via AI prompts.",
            "Assuming all AI services are blocked by default without configuring active access rules."
          ],
          summary: "AI Secure Access tracks and controls generative AI usage, highlighting content violations like data loss, prompt injections, and inappropriate responses."
        },
        quiz: {
          questions: [
            {
              question: "Which violation type is recorded when a user attempts to upload a file containing proprietary source code into a public AI prompt?",
              options: [
                "Potential prompt injection",
                "Sensitive data loss",
                "Response containing malicious URL",
                "Inappropriate content"
              ],
              correct: 1,
              hint: "Sending proprietary code or PII outside the company represents a leakage of sensitive information."
            }
          ]
        }
      }
    ]
  },
  {
    id: "adv-cloud-network",
    title: "Advanced: Cloud & Network",
    icon: "",
    estimatedMins: 20,
    isAdvanced: true,
    lessons: [
      {
        id: "cn-accounts",
        title: "Connecting Cloud Accounts",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The Cloud Accounts app is the central location to connect and manage access permissions for AWS, Azure, Google Cloud, OCI, and Alibaba Cloud.",
          whyItMatters: "Connecting cloud accounts allows Trend Vision One to discover cloud assets, monitor configurations, and deploy workload protection.",
          whatYouWillLearn: [
            "Which cloud providers are supported.",
            "How to navigate to the Cloud Accounts app.",
            "The purpose of XDR for Cloud."
          ],
          steps: [
            "Go to Cloud Security -> Cloud Accounts.",
            "Click 'Connect Account' and select 'AWS'.",
            "Follow the integration wizard to deploy the required IAM roles via CloudFormation.",
            "Verify the connection status shows as 'Connected' in the console."
          ],
          scenario: "An organization moves its web application to AWS. By connecting their AWS account to Trend Vision One, they immediately gain visibility into all EC2 instances, S3 buckets, and IAM users on their main security dashboard.",
          commonMistakes: [
            "Failing to update IAM permissions in the cloud provider when Trend Vision One releases new scanning features.",
            "Connecting only production accounts and neglecting staging or development cloud environments."
          ],
          summary: "The Cloud Accounts app connects AWS, Azure, GCP, OCI, and Alibaba Cloud to enable centralized cloud asset discovery and threat monitoring."
        },
        quiz: {
          questions: [
            {
              question: "Which of the following cloud providers can be connected to the Cloud Accounts app?",
              options: [
                "Only AWS and Azure",
                "AWS, Azure, Google Cloud, Oracle Cloud Infrastructure (OCI), and Alibaba Cloud",
                "Only local private VMware installations",
                "Any public website hosting provider"
              ],
              correct: 1,
              hint: "Review the 'Cloud Accounts' section in the Cloud Security documentation."
            }
          ]
        }
      },
      {
        id: "cn-risk-management",
        title: "Cloud Risk Management",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Cloud Risk Management provides continuous monitoring, compliance tracking, and risk assessment to identify and remediate cloud misconfigurations.",
          whyItMatters: "Most cloud breaches are caused by simple misconfigurations (like an open S3 bucket). Continuous scanning identifies these before attackers can exploit them.",
          whatYouWillLearn: [
            "The purpose of Cloud Risk Management.",
            "How it scans connected cloud resources.",
            "How to find and remediate misconfigurations."
          ],
          steps: [
            "Go to Cloud Security -> Cloud Risk Management.",
            "Review the compliance score against standards like CIS or PCI.",
            "Identify resources marked as 'Failed' (e.g., an S3 bucket with public read access).",
            "Follow the step-by-step remediation guide to secure the resource in your AWS console."
          ],
          scenario: "A developer accidentally makes an S3 bucket containing backup databases public. Cloud Risk Management detects the misconfiguration during its next scan, flags it as a critical risk, and provides the exact CLI command to close public access.",
          commonMistakes: [
            "Assuming that connecting a cloud account automatically fixes security issues (you must actively review and remediate the findings).",
            "Ignoring compliance scores until an audit is scheduled."
          ],
          summary: "Cloud Risk Management continuously scans cloud resources to detect misconfigurations, assess compliance, and provide remediation guidance."
        },
        quiz: {
          questions: [
            {
              question: "What is the primary goal of Cloud Risk Management?",
              options: [
                "To reduce the monthly billing cost of cloud servers",
                "To identify and remediate cloud misconfigurations before they lead to security incidents",
                "To speed up the deployment of cloud databases",
                "To replace the cloud provider's physical hardware"
              ],
              correct: 1,
              hint: "Misconfigurations are the primary target of posture management."
            }
          ]
        }
      },
      {
        id: "cn-network-inventory",
        title: "Network Inventory & Sensors",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Network Inventory manages connected network security products (Virtual Network Sensors, Deep Discovery Inspector, TippingPoint) and enables the Network Sensor feature.",
          whyItMatters: "Network sensors monitor raw network traffic, providing the visibility required to detect command-and-control communications and lateral movement.",
          whatYouWillLearn: [
            "The products managed in Network Inventory.",
            "The purpose of the Network Sensor feature.",
            "How data retention works for network sensors."
          ],
          steps: [
            "Go to Network Security -> Network Inventory.",
            "Select the 'Inventory' tab to see connected appliances.",
            "Click on 'Monitored throughput' to check bandwidth usage.",
            "Verify that the Network Sensor feature is enabled on your Deep Discovery Inspector."
          ],
          scenario: "An attacker bypasses endpoint security by using an unmanaged laptop. However, as they attempt to scan the network, a Virtual Network Sensor detects the scanning traffic and alerts the SOC, exposing the attacker.",
          commonMistakes: [
            "Forgetting that Network Inventory retains sensor data for 180 days.",
            "Not allocating sufficient bandwidth licenses for connected Deep Discovery Inspector appliances."
          ],
          summary: "Network Inventory manages physical and virtual network appliances, enabling network sensors to capture traffic telemetry for XDR analysis."
        },
        quiz: {
          questions: [
            {
              question: "For how many days does Network Inventory retain data for all Network Sensors?",
              options: [
                "30 days",
                "90 days",
                "180 days",
                "365 days"
              ],
              correct: 2,
              hint: "Check the retention statement in the Network Inventory documentation."
            }
          ]
        }
      },
      {
        id: "cn-network-analysis",
        title: "Network Analysis & Topography",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Network Analysis Configuration allows you to define your network topography, configure active scanners, and manage scanning settings.",
          whyItMatters: "Defining your network topography (IP ranges for critical servers, trusted apps) helps the XDR engine determine the severity of suspicious network behaviors.",
          whatYouWillLearn: [
            "How to define network topography in the console.",
            "The purpose of the Active Network Scanner.",
            "How to manage packet capture and detection rules."
          ],
          steps: [
            "Go to Network Security -> Network Analysis Configuration.",
            "Navigate to 'Network Resources' and add your internal domain controllers and database servers.",
            "Configure the 'Active Network Scanner' to discover unmanaged devices on your subnets.",
            "Set up packet capture exceptions for high-volume, trusted communications."
          ],
          scenario: "An administrator defines their critical database servers under 'Network Resources'. Later, when an endpoint attempts an unusual SQL connection to one of these servers, the system flags it as a high-severity alert due to the asset's defined importance.",
          commonMistakes: [
            "Not defining critical servers, which causes the XDR engine to treat attacks on vital infrastructure with the same severity as attacks on testing environments.",
            "Enabling Active Network Scanner on sensitive OT subnets where discovery traffic could disrupt devices."
          ],
          summary: "Network Analysis Configuration uses network topography definitions and active scanning to identify assets and accurately assess the severity of suspicious network behavior."
        },
        quiz: {
          questions: [
            {
              question: "Why should an administrator define critical servers under 'Network Resources'?",
              options: [
                "To back up the server data to the cloud",
                "To help Trend Vision One accurately determine the source and severity of suspicious behavior targeting those assets",
                "To block all network traffic to those servers automatically",
                "To bypass security scanning on those servers"
              ],
              correct: 1,
              hint: "Defining topography provides context that influences threat scoring."
            }
          ]
        }
      }
    ]
  },
  {
    id: "adv-workflow",
    title: "Advanced: Workflow & Automation",
    icon: "",
    estimatedMins: 15,
    isAdvanced: true,
    lessons: [
      {
        id: "wa-integrations",
        title: "Third-Party Integrations",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Third-Party Integrations connect Trend Vision One with external security applications like SIEMs (Splunk), SOARs, and identity providers.",
          whyItMatters: "A modern SOC uses multiple tools. Integrating them ensures secure, automated data exchange, allowing you to orchestrate responses across your entire ecosystem.",
          whatYouWillLearn: [
            "The layout of the Third-Party Integrations screen.",
            "The difference between Inbound, Outbound, and Bi-directional integrations.",
            "The role of the Service Gateway in integrations."
          ],
          steps: [
            "Go to Workflow and Automation -> Third-Party Integrations.",
            "Browse the card-based layout to locate the 'Splunk' integration card.",
            "Identify whether the integration type is Inbound, Outbound, or Bi-directional.",
            "Review the requirements (e.g., whether a Service Gateway is required)."
          ],
          scenario: "An organization uses Splunk as their central SIEM. They configure the Outbound integration. Now, whenever Trend Vision One triggers a Workbench alert, the alert details are automatically sent to Splunk, allowing analysts to click a link and open the visualization.",
          commonMistakes: [
            "Assuming all integrations work over the public internet without realizing some require a local Service Gateway relay.",
            "Not enabling third-party integration on the Service Gateway appliance itself."
          ],
          summary: "Third-Party Integrations support inbound, outbound, and bi-directional data flows to connect Trend Vision One with SIEM, SOAR, and other security platforms."
        },
        quiz: {
          questions: [
            {
              question: "What does an 'Outbound' integration type indicate?",
              options: [
                "Trend Vision One retrieves data from the third-party service",
                "Trend Vision One shares data with the third-party application or service",
                "Data flows both ways simultaneously",
                "The integration only works for endpoints outside the corporate network"
              ],
              correct: 1,
              hint: "Think about the direction: outbound means sending data out."
            }
          ]
        }
      },
      {
        id: "wa-response-mgmt",
        title: "Response Management & Custom Scripts",
        estimatedMins: 5,
        content: {
          whatThisMeans: "The Response Management app allows you to execute, track, and approve response tasks, as well as manage custom scripts, osquery queries, and YARA rules.",
          whyItMatters: "It acts as the audit log and control center for all actions taken in the environment, ensuring that powerful actions (like running scripts) are tracked and authorized.",
          whatYouWillLearn: [
            "How to filter and view task statuses in Response Management.",
            "How to manage custom scripts, osquery, and YARA rules.",
            "Which features require multi-factor authentication (MFA)."
          ],
          steps: [
            "Go to Workflow and Automation -> Response Management.",
            "On the 'Task List' tab, check the status of a recent 'Isolate Endpoint' command.",
            "Switch to the 'Response Scripts' tab.",
            "Observe the options to add custom scripts, osquery queries, or upload YARA rule files."
          ],
          scenario: "An analyst wants to sweep the network for a specific memory pattern using a YARA rule. They go to Response Management, upload the YARA rule file (verifying via MFA), and trigger the 'Run YARA rules' task across 100 endpoints, tracking the progress in the task list.",
          commonMistakes: [
            "Assuming a 'Successful' task status means the endpoint agent executed the command, when it only indicates the managing server successfully received and sent the command.",
            "Attempting to add osquery queries or YARA rules without having MFA configured on your account (MFA is required)."
          ],
          summary: "Response Management tracks all response tasks and provides a secure platform to manage custom scripts, osquery, and YARA rules, requiring MFA for sensitive actions."
        },
        quiz: {
          questions: [
            {
              question: "Which of the following actions in Response Management requires Multi-Factor Authentication (MFA)?",
              options: [
                "Filtering the task list by status",
                "Adding osquery queries and YARA rules",
                "Exporting the task list to CSV",
                "Viewing the details of a completed task"
              ],
              correct: 1,
              hint: "Review the 'Note' boxes under the Response Scripts tab in the documentation."
            }
          ]
        }
      },
      {
        id: "wa-service-gateway",
        title: "Service Gateway Overview",
        estimatedMins: 5,
        content: {
          whatThisMeans: "A Service Gateway is a local virtual appliance that acts as a relay between Trend Vision One in the cloud and on-premises or third-party products.",
          whyItMatters: "It reduces internet bandwidth by caching updates locally (ActiveUpdate) and enables secure communication for on-premises systems without opening direct internet access.",
          whatYouWillLearn: [
            "How a Service Gateway operates in a hybrid network.",
            "The services provided by the virtual appliance.",
            "How to monitor gateway status in the console."
          ],
          steps: [
            "Go to Workflow and Automation -> Service Gateway Management.",
            "Review the list of deployed Service Gateway virtual appliances.",
            "Check the status of services like 'Smart Protection Services' and 'ActiveUpdate'.",
            "Verify the list of connected local endpoints routing through the gateway."
          ],
          scenario: "A secure manufacturing facility has 500 endpoints with no internet access. The administrator deploys a Service Gateway in the local network. The endpoints download their antivirus patterns from the gateway, which updates itself from the Trend cloud.",
          commonMistakes: [
            "Assuming the Service Gateway is a cloud-only service, forgetting it requires a locally deployed virtual appliance.",
            "Not monitoring the connection status of the gateway, which can halt updates for on-premises agents."
          ],
          summary: "The Service Gateway acts as a local relay and caching server, providing update and intelligence synchronization services to hybrid network assets."
        },
        quiz: {
          questions: [
            {
              question: "What is a primary benefit of deploying a Service Gateway in a local network?",
              options: [
                "It replaces the need for local endpoint agents",
                "It acts as a relay, reducing internet traffic by caching updates and sharing intelligence locally",
                "It automatically encrypts the local network router",
                "It provides wireless internet access to guest users"
              ],
              correct: 1,
              hint: "Think about the role of a 'relay' and 'caching' in a hybrid network."
            }
          ]
        }
      }
    ]
  },
  {
    id: "adv-zero-trust",
    title: "Advanced: Zero Trust",
    icon: "",
    estimatedMins: 20,
    isAdvanced: true,
    lessons: [
      {
        id: "zt-principles",
        title: "Zero Trust Principles",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Zero Trust is a security framework based on the premise: 'Never trust, always verify'. Access is granted based on continuous verification of user and device risk.",
          whyItMatters: "Traditional perimeter security (VPNs) assumes anyone inside the network is safe. Zero Trust prevents attackers who compromise one device from accessing everything.",
          whatYouWillLearn: [
            "The core philosophy of Zero Trust.",
            "How risk-based access control works.",
            "The difference between traditional perimeter security and Zero Trust."
          ],
          steps: [
            "Review the Zero Trust Secure Access overview in the console.",
            "Identify the different access control services available.",
            "Observe how user and device risk scores are integrated into access decisions."
          ],
          scenario: "An employee logs in from a corporate laptop and accesses the finance database. A minute later, they attempt to access the same database from a personal tablet. The Zero Trust engine detects the unmanaged device and blocks access, despite valid credentials.",
          commonMistakes: [
            "Assuming Zero Trust is a single software product rather than an architectural framework.",
            "Only verifying identity at login, failing to perform continuous verification throughout the session."
          ],
          summary: "Zero Trust Secure Access enforces granular, risk-based policies, continuously verifying users and devices to protect corporate resources."
        },
        quiz: {
          questions: [
            {
              question: "What is the core premise of the Zero Trust security framework?",
              options: [
                "Trust but verify",
                "Never trust, always verify",
                "Verify once at login and trust thereafter",
                "Trust all internal network devices"
              ],
              correct: 1,
              hint: "This framework assumes no user or device is inherently trusted, regardless of location."
            }
          ]
        }
      },
      {
        id: "zt-private-access",
        title: "Private Access (ZTNA)",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Private Access is a Zero Trust Network Access (ZTNA) solution that controls access to internal applications, data centers, and cloud environments.",
          whyItMatters: "It replaces traditional VPNs. Instead of placing users on the entire network, ZTNA connects users only to the specific applications they are authorized to use.",
          whatYouWillLearn: [
            "The role of Private Access Connectors.",
            "How the Secure Access Module works on end-user devices.",
            "The purpose of the User Portal."
          ],
          steps: [
            "Go to Zero Trust Secure Access -> Private Access.",
            "Configure a 'Private Access Connector' in your local data center.",
            "Define a rule: 'Allow finance users to access the Accounting App'.",
            "Install the Secure Access Module on a test laptop and verify access."
          ],
          scenario: "A contractor needs access to an internal bug tracking system. Instead of giving them a VPN account, the admin configures a ZTNA rule. The contractor can open the bug tracker in their browser via the User Portal, but cannot ping any other server on the network.",
          commonMistakes: [
            "Not deploying Private Access Connectors in the networks hosting your internal applications.",
            "Assuming ZTNA requires opening inbound firewall ports (connectors establish outbound tunnels to the Trend cloud)."
          ],
          summary: "Private Access uses connectors and a device module to provide secure, application-specific access to internal resources, replacing traditional VPNs."
        },
        quiz: {
          questions: [
            {
              question: "How does ZTNA differ from a traditional VPN?",
              options: [
                "ZTNA requires physical cables to connect the user",
                "A VPN places the user on the network, while ZTNA grants access only to specific authorized applications",
                "ZTNA does not encrypt network traffic",
                "VPNs are only used for mobile devices"
              ],
              correct: 1,
              hint: "Think about the scope of access granted by each solution."
            }
          ]
        }
      },
      {
        id: "zt-internet-access",
        title: "Internet Access (SWG)",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Internet Access is a Secure Web Gateway (SWG) solution that secures user access to external websites and cloud applications.",
          whyItMatters: "It protects roaming users from downloading malware, blocks access to phishing sites, and enforces corporate web usage policies regardless of location.",
          whatYouWillLearn: [
            "The purpose of the Internet Access Gateway.",
            "How traffic is forwarded (Secure Access Module vs PAC files).",
            "How internet access rules are evaluated."
          ],
          steps: [
            "Go to Zero Trust Secure Access -> Internet Access.",
            "Create an access rule to block 'Gambling' and 'Malware' categories.",
            "Configure a PAC (Proxy Auto-Config) file to forward browser traffic to the gateway.",
            "Test the rule by attempting to visit a blocked category on a managed device."
          ],
          scenario: "An employee working from a hotel attempts to click a link in a phishing email. The Secure Access Module forwards the connection to the Internet Access Gateway. The gateway identifies the URL as a known threat and displays a block page.",
          commonMistakes: [
            "Assuming SWG only works when users are in the office, forgetting that the Secure Access Module secures them anywhere.",
            "Not updating PAC files when local network configurations change."
          ],
          summary: "Internet Access acts as a cloud-based Secure Web Gateway, using PAC files or a device module to filter web traffic and block external threats."
        },
        quiz: {
          questions: [
            {
              question: "Which component is installed on end-user devices to forward connection attempts to the Internet Access Gateway?",
              options: [
                "Private Access Connector",
                "Secure Access Module",
                "Service Gateway",
                "Active Update Agent"
              ],
              correct: 1,
              hint: "Review the 'End-User Components' listed for Internet Access."
            }
          ]
        }
      },
      {
        id: "zt-ai-secure-access",
        title: "AI Secure Access Rules",
        estimatedMins: 5,
        content: {
          whatThisMeans: "AI Secure Access rules utilize advanced content inspection to ensure secure usage of public and private generative AI services.",
          whyItMatters: "It prevents prompt injection attacks, blocks malicious LLM exploits, and prevents data leakage by inspecting prompts and responses in real-time.",
          whatYouWillLearn: [
            "The public AI services supported (ChatGPT, Claude, Gemini, DeepSeek, Perplexity, Copilot).",
            "How content filtering prevents data leakage in prompts.",
            "How traffic is forwarded for inspection."
          ],
          steps: [
            "Go to Zero Trust Secure Access -> AI Secure Access.",
            "Create a rule: 'Block prompts containing credit card numbers'.",
            "Enable inspection for 'ChatGPT' and 'Google Gemini'.",
            "Submit a test prompt containing dummy credit card data and verify it is blocked."
          ],
          scenario: "An employee attempts to paste a customer list into ChatGPT to format it. The AI Secure Access gateway inspects the prompt, detects the customer names and email addresses, blocks the submission, and logs a content violation.",
          commonMistakes: [
            "Assuming AI Secure Access only blocks access to the AI websites, when it actually performs deep inspection of the text inside the prompts and responses.",
            "Not configuring rules for newly popular AI services like DeepSeek."
          ],
          summary: "AI Secure Access rules perform deep text inspection on prompts and responses for supported AI services like ChatGPT, Gemini, and Claude to prevent data loss and exploits."
        },
        quiz: {
          questions: [
            {
              question: "Which of the following generative AI services is supported by AI Secure Access for content inspection?",
              options: [
                "Only ChatGPT",
                "ChatGPT, Claude, Google Gemini, Microsoft Copilot, DeepSeek, and Perplexity",
                "Only locally hosted custom AI models",
                "No public AI services are supported"
              ],
              correct: 1,
              hint: "Review the list of supported public generative AI services in the Zero Trust documentation."
            }
          ]
        }
      }
    ]
  },
  {
    id: "adv-threat-intel",
    title: "Advanced: Threat Intelligence",
    icon: "",
    estimatedMins: 15,
    isAdvanced: true,
    lessons: [
      {
        id: "ti-reports",
        title: "Intelligence Reports & Curated Intel",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Intelligence Reports allows you to leverage threat indicators (IoCs) from both Trend Micro's curated intelligence and your own custom intelligence reports.",
          whyItMatters: "Using curated intelligence ensures your environment is continuously compared against the latest threat actor campaigns, identifying advanced threats early.",
          whatYouWillLearn: [
            "The difference between curated and custom intelligence reports.",
            "How threat intelligence sweeping generates alerts.",
            "The role of the Threat Intelligence Sweeping model in the Workbench."
          ],
          steps: [
            "Go to Threat Intelligence -> Intelligence Reports.",
            "Browse the list of curated reports published by Trend Research.",
            "Click on a report to view the associated MITRE ATT&CK techniques and IoCs.",
            "Verify that the 'Threat Intelligence Sweeping' model is enabled in the Workbench."
          ],
          scenario: "Trend Research publishes a report on a new APT group. The report contains 20 file hashes. Trend Vision One automatically ingests these and sweeps your environment. An hour later, an alert appears in the Workbench showing a match on a backup server.",
          commonMistakes: [
            "Disabling the 'Threat Intelligence Sweeping' model in Detection Model Management, which stops automated sweeping.",
            "Ignoring custom intelligence reports, which are crucial for importing localized threat data."
          ],
          summary: "Intelligence Reports uses curated and custom threat data to perform automated sweeping, generating high-fidelity alerts in the Workbench when matches occur."
        },
        quiz: {
          questions: [
            {
              question: "Where do alerts generated by the Threat Intelligence Sweeping model appear for investigation?",
              options: [
                "Only in the Exception List",
                "In the Workbench",
                "In the License Activation Service",
                "In the local endpoint's event viewer"
              ],
              correct: 1,
              hint: "This is the central application for triaging all security detections."
            }
          ]
        }
      },
      {
        id: "ti-sweeping",
        title: "Custom Intelligence & Sweeping",
        estimatedMins: 5,
        content: {
          whatThisMeans: "Custom Intelligence allows you to upload your own IoC lists (STIX/TAXII or CSV) and configure manual or automated sweeps across your environment.",
          whyItMatters: "If you receive proprietary threat intelligence from an industry sharing group (like an ISAC), you can upload it to scan your network for those specific threats.",
          whatYouWillLearn: [
            "How to import custom intelligence reports.",
            "The difference between automatic and manual sweeping.",
            "How to check sweeping results."
          ],
          steps: [
            "In the Intelligence Reports app, click 'Add Custom Report'.",
            "Upload a STIX file containing IoCs from your industry ISAC.",
            "Select the report and click 'Sweep Now' to trigger a manual sweep.",
            "Once complete, review the 'Sweeping Results' tab for any indicator matches."
          ],
          scenario: "A banking ISAC shares an urgent list of IP addresses associated with a active campaign. The bank's security administrator uploads the list as a Custom Intelligence Report, triggers an immediate sweep, and confirms no endpoints have contacted those IPs.",
          commonMistakes: [
            "Uploading malformed STIX or CSV files, which prevents the sweeping engine from parsing indicators.",
            "Assuming manual sweeps run continuously (manual sweeps are one-time; you must configure auto-sweeping for ongoing coverage)."
          ],
          summary: "Custom Intelligence enables organizations to import external threat data and run manual or automated sweeps to detect specific indicators of compromise."
        },
        quiz: {
          questions: [
            {
              question: "Which file format is commonly used to import custom threat intelligence reports into Trend Vision One?",
              options: [
                "EXE",
                "STIX or CSV",
                "PDF or DOCX",
                "MP4"
              ],
              correct: 1,
              hint: "This is the standard structured format for sharing cyber threat intelligence."
            }
          ]
        }
      },
      {
        id: "ti-sharing",
        title: "STIX-Shifter & Third-Party Intelligence",
        estimatedMins: 5,
        content: {
          whatThisMeans: "STIX-Shifter and Third-Party Intelligence allow Trend Vision One to query external data sources (like TAXII servers or MISP instances) and share threat data.",
          whyItMatters: "It enables collaborative threat analysis. By connecting external intelligence feeds, you can centralize threat hunting across both Trend and non-Trend data sources.",
          whatYouWillLearn: [
            "How to use STIX-Shifter to query external sources.",
            "How to connect TAXII and MISP sources.",
            "How to configure suspicious object sharing."
          ],
          steps: [
            "Go to Threat Intelligence -> Third-Party Intelligence.",
            "Click 'Connect Source' and select 'TAXII'.",
            "Enter the API URL and credentials for your external threat feed.",
            "Under Suspicious Object Management, configure rules to automatically share blocked hashes with your local firewalls."
          ],
          scenario: "An organization uses a MISP instance to collect threat intelligence. By connecting MISP to Trend Vision One, the XDR engine can automatically query the MISP database during threat hunting, correlating internal telemetry with global community data.",
          commonMistakes: [
            "Not configuring authentication credentials correctly, causing connection failures to the TAXII server.",
            "Expecting third-party intelligence to sweep your environment without enabling the corresponding detection models."
          ],
          summary: "Third-Party Intelligence connects TAXII and MISP feeds to Trend Vision One, using STIX-Shifter to enable federated searching and collaborative threat analysis."
        },
        quiz: {
          questions: [
            {
              question: "What technology does Trend Vision One use to query third-party data sources using curated intelligence?",
              options: [
                "STIX-Shifter",
                "ActiveUpdate",
                "Apex One Agent",
                "TippingPoint SMS"
              ],
              correct: 0,
              hint: "Review the 'Intelligence Reports' section in the Threat Intelligence documentation."
            }
          ]
        }
      }
    ]
  }
];
