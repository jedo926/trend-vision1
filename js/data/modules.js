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
          whatThisMeans: "Trend Vision One is a unified, cloud-native enterprise cybersecurity platform that brings prevention, detection, and response together in one place. The word 'unified' is the key idea: instead of running a separate tool for endpoints, another for email, and another for the network, you operate them all from a single console. 'Cloud-native' means the platform itself runs in Trend Micro's cloud, so there is no large on-premises server for you to maintain or patch. The capability that ties it together is XDR, which stands for Extended Detection and Response, a method of collecting activity data from many security layers and automatically connecting related events into a single picture. For a newcomer, the simplest way to think about Vision One is as the 'control tower' that watches every part of your environment at once.",
          whyItMatters: "In a traditional security setup, each protection tool reports into its own console, so an analyst has to manually jump between screens and mentally stitch the clues together. This fragmentation creates visibility gaps where an attack can slip between the cracks, and it slows down response because no single tool sees the whole attack. Vision One solves this by consolidating those siloed tools into one 'single pane of glass' where related events are already correlated for you. The business impact is faster detection, fewer missed threats, and far less time wasted switching contexts. Without a unified platform, a breach that touches email, then an endpoint, then the network can look like three unrelated minor events instead of one serious incident.",
          whatYouWillLearn: [
            "The precise definition of Trend Vision One and what 'unified', 'cloud-native', and 'XDR' each mean.",
            "Why consolidating security tools into one console reduces visibility gaps and response time.",
            "The main security layers the platform protects: endpoints, network, email, cloud, identity, and OT.",
            "How telemetry from each layer flows into the platform to be correlated.",
            "How a single correlated alert can replace dozens of disconnected individual alerts.",
            "The difference between a standalone antivirus product and a full XDR platform.",
            "How to recognize the unified view when you first log in to the console."
          ],
          steps: [
            "Open your web browser and sign in to the Trend Vision One console using your account credentials. The console is fully web-based, so there is no software to install on your own machine just to access it.",
            "Look at the main dashboard that loads after login. This is the unified view; spend a moment noticing that data from endpoints, email, and network all appear together here rather than in separate products.",
            "Identify the different security layers feeding data into the platform by looking at the widgets and the left-hand navigation menu. Each connected sensor, such as an endpoint agent or an email connector, is a source of the activity data that makes correlation possible."
          ],
          scenario: "An analyst at a mid-sized manufacturing company starts their morning facing three separate consoles: one for email security, one for the firewall, and one for endpoint antivirus. Each shows a handful of low-priority alerts that, on their own, look like routine noise. What none of them reveals is that the same attacker sent a phishing email, the user clicked it, and an endpoint then reached out to a malicious server. After the company adopts Trend Vision One, those same three events arrive as one correlated alert that reads like a story from start to finish. The analyst immediately understands the full scope of the attack and contains it in minutes instead of spending hours manually comparing logs across tools.",
          commonMistakes: [
            "Treating Trend Vision One as just another endpoint antivirus manager instead of understanding it as a cross-layer XDR platform.",
            "Failing to connect all available security layers, such as email or network sensors, which leaves visibility blind spots the correlation engine cannot fill.",
            "Assuming the platform requires a large on-premises server, when it is actually delivered as a cloud-native service.",
            "Expecting to log in to many separate product consoles instead of using the single unified pane of glass.",
            "Underestimating the value of correlation and continuing to investigate each layer's alerts in isolation."
          ],
          summary: "Trend Vision One is a unified, cloud-native enterprise cybersecurity platform that centralizes cyber risk management, security operations, and layered protection. Its core strength is XDR, which collects activity data from endpoints, email, network, cloud, identity, and OT, then correlates related events into a single, coherent picture. By replacing many siloed consoles with one pane of glass, it removes visibility gaps and accelerates both detection and response. For a beginner, the essential takeaway is that Vision One is the central control tower for your entire security environment, not a single-purpose tool."
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
          whatThisMeans: "Choosing Trend Vision One means adopting a platform built to help you predict, prevent, and respond to threats faster than siloed tools allow. It does this by combining three ingredients: global threat intelligence gathered by Trend Research from attacks seen worldwide, AI-powered detection models that recognize suspicious behavior patterns, and automatic correlation that links related events. 'Global threat intelligence' simply means that when an attack is discovered anywhere in the world, the knowledge of how to spot it is shared with your environment automatically. 'AI-powered detection' means the platform flags behavior that looks malicious even when there is no exact signature for it yet. Together these reduce the manual effort an analyst must spend hunting for threats.",
          whyItMatters: "In cybersecurity, the time between an attacker getting in and being stopped, often called dwell time, directly determines how much damage they can do. Every extra hour an intruder remains undetected gives them more chance to steal data, spread to other systems, or deploy ransomware. Vision One shortens that window by surfacing threats earlier and automating the first stages of response, which lowers both the impact and the financial cost of an incident. It also fights 'alert fatigue', the exhaustion analysts feel when buried under thousands of low-value alerts, by correlating many small events into a few meaningful ones. Without this, a security team can be so overwhelmed by noise that they miss the one alert that actually mattered.",
          whatYouWillLearn: [
            "The concrete business and operational benefits of adopting Trend Vision One.",
            "What 'dwell time' is and why reducing it lowers the cost of a breach.",
            "How global threat intelligence from Trend Research is automatically applied to your own telemetry.",
            "The role of AI-powered detection models in catching threats that have no known signature.",
            "How correlation reduces the total number of alerts an analyst must investigate.",
            "Why a lower alert count after enabling correlation is a sign of success, not failure.",
            "How automated sweeping answers the question 'are we affected?' in minutes."
          ],
          steps: [
            "Review the Cyber Risk Index on the home page to get a single, high-level measure of your organization's current risk. This number gives leadership an at-a-glance sense of whether security posture is improving or worsening.",
            "Observe how global threat intelligence feeds are automatically applied to your telemetry without any manual import. New indicators discovered by Trend Research are continuously matched against your environment in the background.",
            "Check how correlated alerts reduce the absolute number of tickets to investigate by comparing a Workbench alert to the many individual events it contains. Notice that one alert can represent dozens of underlying detections already grouped for you."
          ],
          scenario: "On a Friday afternoon, news breaks of a zero-day vulnerability being actively exploited, and Trend Research quickly publishes a set of new Indicators of Compromise tied to the campaign. In a traditional environment, the security team would have to manually log in to every server and search for those indicators one by one, a process that could take all weekend. With Trend Vision One, the platform automatically sweeps the entire environment against the new intelligence the moment it is published. Within minutes, the team receives a single alert showing that three endpoints in the finance department already contain a matching file. Instead of a frantic weekend of manual searching, the analysts isolate those three machines before the attacker can move further.",
          commonMistakes: [
            "Ignoring the automated sweeping results and continuing to perform slow manual threat hunting for indicators the platform already checked.",
            "Assuming that a low alert count means the platform is not working, when it actually indicates that correlation has successfully reduced noise.",
            "Failing to set the company size and industry, which weakens the relevance of the Cyber Risk Index benchmark.",
            "Treating AI-powered detections as less trustworthy than signature detections and dismissing them without investigation.",
            "Overlooking the value of shared global intelligence by relying only on locally observed threats."
          ],
          summary: "Trend Vision One helps organizations stop adversaries faster, prioritize cyber risk, and simplify day-to-day operations. It achieves this by combining worldwide threat intelligence, AI-powered detection, and automatic event correlation into one workflow. The result is shorter dwell time, lower incident cost, and far less analyst alert fatigue. The key beginner insight is that fewer, higher-quality alerts are a feature of good correlation, not a sign that protection is missing something."
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
          whatThisMeans: "Trend Vision One bundles a set of features that together cover the full lifecycle of a security investigation. These include alert notifications that tell you when something needs attention, correlated detection models that decide when scattered events add up to a real threat, the Workbench where analysts triage those alerts, attack visualization that draws the threat as a diagram, threat hunting tools for proactive searching, and integrated response actions to neutralize the threat. The Workbench is the heart of daily operations, the screen where alerts are prioritized and worked. An 'execution profile' is a detailed view of exactly what a suspicious process did on a specific endpoint, step by step. Understanding how these pieces connect is the foundation for everything else in the platform.",
          whyItMatters: "When investigation and response features live in separate products, an analyst loses precious time copying indicators between tools and re-authenticating to different consoles. By integrating everything, Vision One lets an analyst move from noticing an alert, to understanding the attack visually, to blocking the threat, all without leaving the screen. This tight loop dramatically shortens response time during an active incident, where seconds matter. Attack visualization in particular turns dense, hard-to-read log text into an intuitive diagram that even a junior analyst can interpret quickly. Without these integrated features, teams rely on manual log reading and tool-switching, which is slow, error-prone, and exhausting.",
          whatYouWillLearn: [
            "The main built-in features of the Trend Vision One console and how they fit together.",
            "What the Workbench is and why it is the central hub for alert triage.",
            "How attack visualization converts raw logs into an easy-to-read diagram of an attack.",
            "What an execution profile shows about a process running on an endpoint.",
            "How threat hunting lets you search proactively for threats that have not yet alerted.",
            "How integrated response actions let you remediate without switching tools.",
            "Why the right-click context menu speeds up response during an active incident."
          ],
          steps: [
            "Open the Workbench app from the left navigation menu. This is where all correlated alerts gather, and it is the screen most analysts spend the majority of their day in.",
            "Select an alert to open its interactive attack visualization graph. The graph draws each object involved, such as files, processes, and IP addresses, as nodes connected by arrows that show how the attack flowed.",
            "Identify the execution profile of a suspicious process on an endpoint by drilling into the affected system. The execution profile lays out the precise sequence of actions the process took, helping you confirm whether the behavior is malicious."
          ],
          scenario: "An analyst opens a high-priority Workbench alert and is immediately presented with a visual tree rather than a wall of log text. The diagram tells a clear story: a malicious email arrived in a user's inbox, the user clicked a link, a PowerShell script silently executed, and that script then tried to contact an unfamiliar external IP address. Because the whole chain is laid out visually, the analyst grasps the attack in seconds instead of reconstructing it from raw logs. They right-click the external IP node directly inside the graph and choose to block it, cutting off the attacker's communication instantly. The same screen that explained the attack is also where it gets stopped, with no tool-switching required.",
          commonMistakes: [
            "Neglecting the attack visualization tool and trying to reconstruct the attack from raw text logs instead.",
            "Not using the right-click context menu, which forces slow navigation to separate screens to take a response action.",
            "Overlooking the execution profile and therefore missing the precise sequence of actions a malicious process performed.",
            "Confusing individual detection events with the correlated alert that groups them, and triaging each event separately.",
            "Failing to use threat hunting proactively and only ever reacting to alerts that the system raises."
          ],
          summary: "Trend Vision One's key features, including correlated detection models, Workbench triage, attack visualization, execution profiles, threat hunting, and integrated response, work together as one continuous workflow. The Workbench is the central hub where alerts are prioritized and investigated, while attack visualization turns complex log data into an understandable diagram. Integrated response actions let analysts contain a threat from the same screen where they investigate it. The takeaway for a beginner is that these features are designed to keep you in one place from the first alert to final remediation."
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
          whatThisMeans: "Trend Vision One does not generate security data on its own; it analyzes 'telemetry', the stream of activity data collected by sensor products deployed across your environment. These sensors include endpoint products such as Apex One and Server & Workload Protection, email products such as Cloud App Security, and network products such as Deep Discovery Inspector. A 'sensor' is simply any connected product that observes activity and forwards what it sees to the platform. Some agents provide full active protection plus telemetry, while others act as sensor-only data sources. The breadth of sensors you connect directly determines how complete the platform's view of your environment can be.",
          whyItMatters: "Sensors are the eyes and ears of Vision One, and correlation can only connect events that it actually receives data about. If you connect only endpoint sensors, the platform is blind to email-borne and network-based stages of an attack, so a multi-stage intrusion may never be fully reconstructed. The more layers you instrument, the richer the telemetry and the more accurate and high-fidelity the correlated detections become. Version requirements matter too, because older agent versions may not emit the detailed XDR telemetry the correlation engine depends on. In short, under-deploying sensors quietly undermines the entire value of the platform even though it appears to be working.",
          whatYouWillLearn: [
            "Which Trend Micro products act as sensors that feed data into Vision One.",
            "The difference between a sensor that also actively protects and a sensor-only data source.",
            "Why minimum agent version requirements exist and how outdated agents limit XDR telemetry.",
            "How endpoint, email, network, and cloud sensors each contribute different parts of the attack picture.",
            "How connecting multiple layers enables cross-layer correlation that single-layer tools cannot achieve.",
            "Where in the console to check the status and version of connected product sensors.",
            "How to spot sensors that need updating to keep telemetry complete."
          ],
          steps: [
            "Go to Administration and open the Product Instance area where connected Trend Micro products are listed. This is the inventory of every sensor currently feeding data to the platform.",
            "Check the status of each connected product sensor to confirm it is healthy and actively reporting. A sensor that shows as disconnected is no longer contributing telemetry, creating a blind spot.",
            "Identify any agents that require updates to meet the minimum version requirements. Older versions may still run but fail to send the detailed activity data that XDR correlation needs, so updating them restores full visibility."
          ],
          scenario: "An organization initially connects only Apex One as a Service, giving Vision One visibility into endpoint activity. Later, the security team also connects Cloud App Security, which protects their Microsoft 365 email. Soon after, malware is detected on one employee's laptop. Because both sensors are now connected, the platform automatically checks whether the same malicious file was also delivered by email to other employees. It discovers the attachment reached eight more inboxes, allowing the team to quarantine it everywhere before anyone else opens it. Had only the endpoint sensor been connected, the team would have cleaned one laptop and never realized eight other people were still at risk.",
          commonMistakes: [
            "Deploying outdated agent versions that run fine but do not support the detailed XDR sensor telemetry correlation depends on.",
            "Connecting only endpoint sensors and neglecting network or email telemetry, which leaves entire attack stages invisible.",
            "Assuming a sensor-only agent provides active blocking, when it only observes and reports activity.",
            "Forgetting to monitor sensor connection status, so a silently disconnected sensor creates an unnoticed blind spot.",
            "Believing more sensors add cost without value, when broader coverage is what makes high-fidelity correlation possible."
          ],
          summary: "Trend Vision One relies on telemetry from endpoint, email, network, and cloud sensor products such as Apex One, Cloud App Security, and Deep Discovery to power its detections. The platform can only correlate the data it actually receives, so the breadth and health of your connected sensors determine how complete its view is. Outdated agent versions and missing layers both create blind spots that weaken correlation. The beginner takeaway is that deploying and maintaining a wide set of healthy, up-to-date sensors is what makes cross-layer detection work."
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
          whatThisMeans: "Activation is the one-time process that turns your purchased license into a live Trend Vision One environment, also called a 'tenant'. It begins when you click the activation link in the confirmation email Trend Micro sends after purchase, then create or sign in with a Primary User Account. The Primary User Account is the very first administrator account and the owner of the entire environment, so it carries the highest level of authority. During activation you also choose a 'data center region', which is the geographic location where all of your security data will physically be stored and processed. For a newcomer, the most important thing to understand is that activation establishes the foundational settings that everything else builds on.",
          whyItMatters: "The data center region you select is permanent and cannot be changed later, which makes it the single most consequential decision during activation. It governs data residency, meaning whether your telemetry stays within a particular legal jurisdiction such as the European Union, and that has direct implications for regulations like GDPR. Choosing the wrong region can create compliance violations that are expensive and difficult to unwind. The Primary User Account matters because it is the root of trust for the whole tenant, and creating a duplicate account by mistake can fragment your environment. Getting activation right the first time avoids painful rework and ensures your data lives where the law and your policies require.",
          whatYouWillLearn: [
            "The complete step-by-step process of activating a Trend Vision One license.",
            "What a tenant is and how activation creates it.",
            "Why the Primary User Account is the most privileged account in the environment.",
            "What a data center region is and why the choice is permanent.",
            "How data residency relates to compliance regulations such as GDPR.",
            "Why the email verification code is time-limited and how to handle expiry.",
            "How to configure your local time zone so timestamps and license periods are accurate."
          ],
          steps: [
            "Click the activation link in your confirmation email to begin setup. This link is unique to your purchase and starts the process of creating your tenant.",
            "Sign in with an existing Primary User Account, or create one if this is your organization's first environment. Be careful to reuse an existing account rather than accidentally creating a second, duplicate business account.",
            "Verify your email address by entering the verification code that is emailed to you. This code expires after about three minutes, so check your inbox promptly and enter it before it lapses.",
            "Select your data center region and click Confirm. Because this choice permanently determines where your data is stored, confirm it matches your organization's compliance requirements before proceeding, then set your local time zone."
          ],
          scenario: "A security administrator at a healthcare company headquartered in Frankfurt receives the activation email after the organization purchases Vision One. Knowing that patient-related data must remain within the European Union to satisfy GDPR, she pauses at the region selection step and deliberately chooses the Germany data center rather than accepting a default. She enters the email verification code quickly so it does not expire, confirms the region, and sets the time zone to Central European Time so that all future alert timestamps align with her SOC's working hours. Months later, during a regulatory audit, she is able to demonstrate that every piece of telemetry has stayed inside the EU. The few extra seconds of care during activation save the company a serious compliance headache.",
          commonMistakes: [
            "Creating a duplicate business account instead of signing in with the organization's existing Primary User Account.",
            "Letting the three-minute email verification code expire, which forces a restart of the verification step.",
            "Selecting a data center region without checking compliance requirements, an error that cannot be reversed later.",
            "Skipping or ignoring the time zone setting, which causes alert timestamps and license periods to appear incorrect.",
            "Rushing through activation without recording the Primary User Account credentials securely."
          ],
          summary: "License activation creates your Trend Vision One tenant by having you click the activation link, sign in with or create the Primary User Account, verify your email with a short-lived code, and select a data center region. The region choice is permanent and dictates data residency, making it critical for compliance with regulations like GDPR. Configuring the correct local time zone ensures timestamps and license periods are accurate. The beginner takeaway is that these one-time activation choices set the foundation for the entire environment, so they deserve careful attention."
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
          whatThisMeans: "Trend Vision One is offered in two access tiers that determine which applications you can use. Essential Access is the entry tier, included automatically with your Trend Micro product licenses, and it unlocks a limited set of core apps. Advanced Access is the full tier that unlocks the complete platform suite, and it operates on a 'credit-based' model where a pool of purchased credits funds usage of advanced capabilities. Credits are a flexible currency that you spend across features rather than buying each feature separately. Knowing which tier you are on, and how credits are consumed, is essential for planning what your team can actually do in the console.",
          whyItMatters: "Understanding your tier prevents unpleasant surprises, such as discovering during an incident that a feature you need is locked behind Advanced Access. It also helps you manage your credit balance so you do not unexpectedly run out mid-month. Most importantly, understanding the license expiration lifecycle protects you from catastrophic data loss. When a license lapses there is a grace period, then a lockout period, and finally a permanent purge of all tenant data, so missing these deadlines can erase your entire environment. Tracking expiration dates and renewing in time is therefore not just an administrative chore but a safeguard against losing everything.",
          whatYouWillLearn: [
            "The practical difference between Essential Access and Advanced Access tiers.",
            "Which apps are included with Essential Access versus unlocked by Advanced Access.",
            "How the credit-based model funds advanced features and how credits are consumed.",
            "The sequence of the grace period, the lockout period, and the final data purge.",
            "Why allowing the lockout period to end results in permanent loss of tenant data.",
            "Where in the console to check your tier, expiration dates, and credit balance.",
            "How to plan renewals to avoid both feature loss and data purge."
          ],
          steps: [
            "Navigate to Administration and open License Information, the central screen for everything about your subscription. This is where tier, dates, and credits are all displayed.",
            "Identify your current access tier, shown as either Essential or Advanced. This tells you immediately which set of applications your team is entitled to use.",
            "Check the expiration dates and credit balance carefully. Note the renewal deadline and set your own reminder well before the grace and lockout periods begin, because missing them risks losing access and ultimately all data."
          ],
          scenario: "A growing retailer has been using Advanced Access to run Zero Trust Secure Access and advanced threat hunting, all funded by their credit pool. Due to a procurement delay, their credits expire before renewal is approved. The environment automatically drops to Essential Access, so the team can still run basic searches and generate reports, but the Zero Trust features they relied on go dark overnight. The security manager checks License Information, sees the environment has entered the grace period, and escalates the renewal urgently. They complete the purchase before the subsequent lockout period ends, narrowly avoiding the point at which all tenant data would have been permanently purged. The incident becomes a lesson in tracking expiration dates proactively.",
          commonMistakes: [
            "Allowing the 30-day grace period and the subsequent 30-day lockout period to end without renewing, which results in the permanent purge of all tenant data.",
            "Assuming all features are available in the Essential Access tier and being caught off guard when advanced apps are locked.",
            "Failing to monitor the credit balance and running out of credits in the middle of a billing period.",
            "Not setting renewal reminders, so expiration deadlines pass unnoticed.",
            "Treating the License Information screen as unimportant rather than as a safeguard against data loss."
          ],
          summary: "Trend Vision One has two access tiers: Essential Access, included with product licenses and limited to core apps, and Advanced Access, which unlocks the full suite through a credit-based model. The License Information screen shows your tier, expiration dates, and credit balance. The expiration lifecycle moves through a grace period, a lockout period, and finally a permanent data purge, so timely renewal is critical. The beginner takeaway is that knowing your tier protects feature access while tracking expiration protects your data from being erased."
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
          whatThisMeans: "Vision One controls who can do what through Role-Based Access Control, commonly abbreviated RBAC. Instead of granting permissions to each person individually, you assign people to 'roles' that bundle a defined set of permissions, which keeps access consistent and easy to audit. Alongside roles, 'Asset Visibility Management' lets you define an asset visibility scope, controlling not just what actions a user can take but which devices, users, and domains they are even allowed to see. The platform also supports SAML-based accounts, an industry standard for single sign-on, which lets users authenticate through your corporate identity provider and switch between different business accounts. Together, roles and visibility scopes form the two dimensions of access: what you can do, and what you can see.",
          whyItMatters: "Granting every analyst broad access violates the 'principle of least privilege', the security best practice that people should have only the access their job genuinely requires. Over-provisioning access increases the damage an attacker can do if any single account is compromised, and it raises the risk of accidental or malicious misuse. Asset visibility scopes are especially important in large or regulated organizations where a regional analyst should not see data from other regions for legal or privacy reasons. Properly scoped roles also make audits straightforward because you can clearly demonstrate who could access what. Without these controls, a single leaked credential could expose your entire environment to an outsider.",
          whatYouWillLearn: [
            "What Role-Based Access Control is and how roles bundle permissions.",
            "How to create user accounts and assign predefined roles.",
            "What Asset Visibility Management is and how scopes limit what a user can see.",
            "The difference between what a user can do and what a user can view.",
            "How the principle of least privilege reduces risk from compromised accounts.",
            "How SAML accounts enable single sign-on and switching between business accounts.",
            "Why over-assigning the Master Administrator role is dangerous."
          ],
          steps: [
            "Go to Administration and open User Accounts, the central directory of everyone with access to the console. This is where all account and role management happens.",
            "Create a new user account and assign a predefined role that matches the person's job function. Choosing a least-privilege role rather than a broad administrator role keeps their access appropriate to their duties.",
            "Configure an Asset Visibility Scope to restrict the user to specific endpoint groups, domains, or users. This ensures they can only see the assets relevant to their responsibilities, not the entire organization's data."
          ],
          scenario: "A multinational company hires a new security analyst dedicated to its Asia-Pacific branch. The global administrator creates the analyst's account and, rather than granting blanket access, assigns a role with only the permissions the analyst needs. Crucially, they also set an Asset Visibility Scope limited to the APAC endpoint group. When the analyst logs in, they can investigate and respond to incidents on APAC machines, but European server telemetry simply does not appear in their console at all. This satisfies data-privacy expectations between regions and means that even if the analyst's credentials were stolen, the attacker could only see a slice of the environment rather than the whole company.",
          commonMistakes: [
            "Assigning the Master Administrator role to every user instead of using least-privilege roles tailored to each job.",
            "Forgetting to configure asset visibility scopes, which lets all users see all corporate data regardless of their role.",
            "Creating individual ad hoc permissions instead of leveraging consistent, reusable roles.",
            "Overlooking SAML integration and managing passwords manually when single sign-on would be more secure.",
            "Failing to review and revoke access when employees change roles or leave the organization."
          ],
          summary: "Trend Vision One uses Role-Based Access Control to assign bundled permissions through roles, and Asset Visibility Management to control which assets each user can see. Together these enforce the principle of least privilege, limiting both what users can do and what they can view. SAML accounts add single sign-on and the ability to switch between business accounts. The beginner takeaway is that secure access has two dimensions, actions and visibility, and both must be scoped tightly to reduce risk."
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
          whatThisMeans: "Console Settings is the administration area where you configure parameters that apply across the entire environment. Three of the most important are the system time zone, multi-factor authentication, and IP access restrictions. The time zone governs how every timestamp and license period is displayed, so aligning it with your security operations center keeps records consistent. Multi-factor authentication, or MFA, requires a second proof of identity beyond a password, dramatically reducing the risk of account takeover. IP access restrictions, often called an IP allow list, let you specify exactly which network addresses are permitted to reach the console at all.",
          whyItMatters: "Passwords alone are no longer sufficient protection, because credentials are routinely stolen through phishing or leaked in data breaches. MFA and IP restrictions add layers that make a stolen password far less useful to an attacker. Restricting console access to specific IP addresses means that even someone holding valid credentials cannot log in unless they are coming from a trusted network, such as behind the corporate VPN. Getting the time zone wrong may seem minor, but it causes confusing discrepancies in alert timestamps that can derail an investigation and misalign license periods. Configuring these settings correctly hardens the front door of your entire security platform.",
          whatYouWillLearn: [
            "What Console Settings controls and why these parameters are environment-wide.",
            "How to configure the console time zone to match your SOC location.",
            "What multi-factor authentication is and how it protects against stolen passwords.",
            "How to enable and reset MFA for users.",
            "How IP allow lists restrict console access to trusted networks.",
            "Why IP restrictions stop logins even when credentials are valid.",
            "How to avoid locking yourself out when enabling IP restrictions."
          ],
          steps: [
            "Go to Administration and open Console Settings, the hub for environment-wide configuration. Most security hardening for the console starts here.",
            "Verify that the system time zone matches your organization's primary SOC location. A correct time zone keeps alert timestamps and license periods consistent, which is essential during investigations.",
            "Navigate to Console Access and add your corporate VPN egress IP addresses to the allow list before enabling restrictions. Always include your own current IP first, otherwise you risk locking yourself out the moment the restriction takes effect."
          ],
          scenario: "A financial services firm decides to tighten console security after a phishing campaign targets its staff. The administrator enables the option to restrict console access to specified IP addresses, carefully adding the corporate VPN egress addresses, including her own, to the allow list first. Shortly after, an analyst tries to log in from an airport's public Wi-Fi without first connecting to the VPN. Even though the analyst types the correct username and password, the console refuses the connection because the airport's IP is not on the allow list. The analyst connects to the corporate VPN, is now seen as coming from a trusted address, and logs in successfully. A stolen password alone would have been useless to an outside attacker.",
          commonMistakes: [
            "Not configuring the correct time zone, leading to confusing discrepancies in alert timestamps and license periods.",
            "Enabling IP restrictions without first adding the current administrator's IP, which causes an immediate self-lockout.",
            "Relying on passwords alone and skipping multi-factor authentication entirely.",
            "Forgetting that IP restrictions also affect mobile app access, then being puzzled when the mobile app cannot connect.",
            "Adding overly broad IP ranges to the allow list, which weakens the protection the restriction was meant to provide."
          ],
          summary: "Console Settings is where you configure environment-wide parameters, most importantly the time zone, multi-factor authentication, and IP access restrictions. MFA defends against stolen passwords by requiring a second factor, while IP allow lists block logins from untrusted networks even when credentials are valid. A correct time zone keeps timestamps and license periods consistent across investigations. The beginner takeaway is to always include your own IP before enabling restrictions, and to treat these settings as the hardened front door to the entire platform."
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
          whatThisMeans: "The main dashboard is the first screen most people see, and it gives an at-a-glance summary of your organization's overall security posture. It is built from 'widgets', which are small, focused panels that each visualize one type of information, such as the riskiest devices or recent alert volume. The dashboard is customizable, meaning you can choose which widgets appear and how they are arranged to suit your role. Importantly, the data a widget shows is filtered by your asset visibility scope, so two people may see different numbers in the same widget depending on what they are permitted to view. Think of the dashboard as a configurable summary report that updates continuously rather than a static page.",
          whyItMatters: "Security teams are flooded with data, and a well-designed dashboard distills that flood into the few signals that matter most right now. It lets a SOC manager spot an emerging problem, such as a user whose risk score just spiked, within seconds of logging in, without digging through raw logs. Because widgets respect asset visibility scopes, each analyst naturally sees the slice of the environment they are responsible for, which keeps their attention focused. A dashboard that is ignored or left at defaults wastes this opportunity and forces analysts to hunt for information that could have been surfaced automatically. In short, the dashboard is the difference between proactively noticing trouble and reactively discovering it too late.",
          whatYouWillLearn: [
            "What the main dashboard is and how widgets compose it.",
            "The purpose of the common default widgets.",
            "How asset visibility scopes filter the data each widget displays.",
            "What the Top High-Risk Devices and Top High-Risk Users widgets reveal.",
            "What the Workbench Alert Overview widget summarizes and over what period.",
            "How to drill from a widget directly into the underlying details.",
            "Why two users may legitimately see different values in the same widget."
          ],
          steps: [
            "Navigate to Dashboards and Reports and open the Dashboards app. This is the home of all your dashboards and widgets.",
            "Review the default widgets on the Overview tab to understand what each one reports. Notice widgets such as Top High-Risk Devices, Top High-Risk Users, and Workbench Alert Overview, which together summarize your posture.",
            "Hover over the Top High-Risk Devices widget to see which endpoints currently carry the highest risk scores. From there you can click an entry to drill straight into that asset's risk details rather than searching for it manually."
          ],
          scenario: "A SOC manager begins her day, as always, on the main dashboard with her morning coffee. Within seconds her eye is drawn to the Top High-Risk Users widget, which now shows a new entry with a critical risk score that was not there yesterday. Rather than opening a separate investigation tool, she clicks the user's name directly in the widget and is taken straight to that user's risk details, where she sees the spike was caused by repeated visits to a phishing domain combined with an unpatched vulnerability. Because the dashboard surfaced the change immediately, she begins remediation before the user's next login. The same information existed in the raw logs, but the dashboard is what made it impossible to miss.",
          commonMistakes: [
            "Assuming all users see identical dashboard data, forgetting that asset visibility scopes filter each widget's contents.",
            "Overlooking high-risk device and user counts that the dashboard surfaces specifically to draw attention.",
            "Leaving the dashboard at its defaults instead of tailoring widgets to your actual role.",
            "Treating the dashboard as a static report rather than a live, continuously updating summary.",
            "Reading widget numbers without drilling into the underlying details to understand what is driving them."
          ],
          summary: "The main dashboard presents an at-a-glance view of security posture using widgets such as Top High-Risk Devices, Top High-Risk Users, and Workbench Alert Overview. Each widget's data is filtered by the viewer's asset visibility scope, so different analysts may see different values. Widgets are interactive, letting you click straight through to underlying details. The beginner takeaway is that the dashboard is a live, role-aware summary designed to surface the few signals that need your attention right now."
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
          whatThisMeans: "The Company Risk Index is a single number that summarizes your organization's overall cyber risk at a glance. It is calculated dynamically by continuously assessing several categories of risk factors, primarily your exposure to vulnerabilities, evidence of active attacks, and the strength of your security configurations. Rather than being a one-time snapshot, the index recalculates automatically on a regular cadence, every four hours, so it stays current as your environment changes. You can also trigger a manual recalculation when you want to see the effect of a change sooner, though even a manual recalculation takes up to an hour to complete. Conceptually, it is a credit-score-style metric for your security posture.",
          whyItMatters: "A single, trackable risk number is powerful because it lets both analysts and executives see at a glance whether security is trending in the right direction. Over time, the historical trend reveals whether your remediation efforts are actually reducing risk or whether new exposures are outpacing your fixes. To be meaningful, the index also benchmarks you against peers, which only works if you configure your company size and industry, otherwise the comparison is inaccurate. Understanding that recalculation is not instant prevents the common frustration of patching something and expecting the score to drop immediately. Used well, the index turns an abstract sense of 'are we secure?' into a concrete, measurable trend.",
          whatYouWillLearn: [
            "What the Company Risk Index represents and which factors feed into it.",
            "The three main categories evaluated: exposure, attacks, and security configurations.",
            "How often the index recalculates automatically.",
            "How and when to trigger a manual recalculation, and why it still takes up to an hour.",
            "How to read the historical trend to judge whether risk is improving.",
            "Why configuring company size and industry is required for accurate peer benchmarking.",
            "Why the score does not change the instant you take a remediation action."
          ],
          steps: [
            "Locate the Company Risk Index widget on the dashboard, where the current score and its rating are displayed. This is your headline measure of overall posture.",
            "Observe the historical trend of your company's risk score over time to judge whether your efforts are reducing risk or whether new issues keep appearing. The trend line is often more informative than any single day's value.",
            "Click the Recalculate button when you want to refresh the index after a significant change. Be aware that even a manual recalculation can take up to an hour to finish, so the new value will not appear instantly."
          ],
          scenario: "Over a tense weekend, a security team patches a critical remote-code-execution vulnerability across 500 servers, a huge effort, and the manager wants to prove to leadership that it moved the needle. Knowing the index updates automatically every four hours but wanting confirmation sooner, the team clicks Recalculate on the Company Risk Index widget. Nothing changes immediately, which initially worries a junior analyst until the manager explains that recalculation takes up to an hour. About fifty minutes later the index drops from Medium to Low, and the historical trend line shows a clear downward step. The team now has a concrete, visual way to demonstrate the value of the weekend's work to executives.",
          commonMistakes: [
            "Expecting the Risk Index to update instantly after a remediation action, when recalculation takes up to an hour.",
            "Failing to configure company size and industry, which prevents accurate benchmarking against peer organizations.",
            "Reading only the current score while ignoring the historical trend that reveals direction.",
            "Disabling or excluding assets from assessment, which artificially lowers the index without actually reducing risk.",
            "Assuming the index measures only active attacks, when it also weighs exposure and security configuration."
          ],
          summary: "The Company Risk Index is a dynamic, credit-score-style number that summarizes overall cyber risk by evaluating exposure, active attacks, and security configurations. It recalculates automatically every four hours, and you can trigger a manual recalculation that still takes up to an hour to complete. Configuring company size and industry enables meaningful benchmarking against peers, and the historical trend reveals whether risk is improving. The beginner takeaway is to treat the index as a trend to manage over time, not a number that flips instantly after a single fix."
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
          whatThisMeans: "Customizing dashboards means building views tailored to a specific person or purpose rather than relying on the defaults. You can create entirely new dashboards, either from scratch or by starting from a pre-built template, and then populate them with widgets chosen from the Widget Catalog. The catalog is a library of every available widget, and you can add up to 20 widgets to a single dashboard. Once added, widgets can be individually edited to change their settings and rearranged by dragging and dropping them into the layout you prefer. The result is a personalized command center that shows exactly the information a given role needs.",
          whyItMatters: "Different roles care about completely different information, so a one-size-fits-all dashboard serves no one well. An executive wants high-level risk trends and compliance posture, while a SOC analyst wants live alert counts and the latest detections, and an incident responder wants threat-hunting tools front and center. Tailoring dashboards to these roles means each person sees what matters to them the moment they log in, without scrolling past irrelevant panels. Knowing the 20-widget limit helps you design focused dashboards instead of cramming everything onto one cluttered page. Investing a little time in customization pays back every single day in faster orientation and fewer missed signals.",
          whatYouWillLearn: [
            "How to create a custom dashboard from scratch or from a template.",
            "What the Widget Catalog is and how to add widgets from it.",
            "The maximum number of widgets allowed on a single dashboard.",
            "How to edit an individual widget's settings after adding it.",
            "How to rearrange layout using drag and drop.",
            "Why tailoring dashboards to specific roles improves daily efficiency.",
            "How to design focused dashboards rather than overcrowded ones."
          ],
          steps: [
            "Click the add icon, shown as a plus sign, in the Dashboards app to begin a new dashboard. This starts the creation flow.",
            "Select 'Create your own dashboard' to build from scratch, or choose a template to start from a sensible pre-built layout. Templates are a fast way to get a useful dashboard without designing it entirely yourself.",
            "Open the Widget Catalog, browse the available widgets, and add up to 20 of them. Staying well under the limit keeps the dashboard focused and readable rather than cluttered.",
            "Drag and drop the widgets to organize your layout, placing the most important panels at the top where they are seen first. You can also edit each widget's individual settings to refine what it shows."
          ],
          scenario: "An incident responder finds the default dashboards too general for the fast-paced work of active threat hunting. She clicks the add icon and chooses to create her own dashboard, naming it 'Threat Hunting'. From the Widget Catalog she selects widgets for recent XDR search activity, sandbox submission results, and observed attack techniques, deliberately keeping the total small and focused rather than near the 20-widget limit. She drags the observed attack techniques widget to the very top so it is the first thing she sees, since that is where new leads tend to surface. Now, whenever an incident breaks, her purpose-built dashboard gives her every hunting tool at a glance instead of forcing her to navigate around panels meant for executives.",
          commonMistakes: [
            "Trying to add more than 20 widgets to a single dashboard, which exceeds the platform limit.",
            "Using generic default dashboards instead of tailoring views to specific operational roles.",
            "Cramming too many widgets onto one dashboard, making it cluttered and hard to read.",
            "Forgetting that individual widgets can be edited, and leaving them on settings that do not fit your needs.",
            "Placing the least important widgets at the top where the most critical information should be."
          ],
          summary: "Dashboard customization lets you create new dashboards from scratch or templates, add up to 20 widgets from the Widget Catalog, edit each widget's settings, and rearrange the layout by dragging and dropping. Tailoring dashboards to specific roles ensures executives, analysts, and responders each see what matters to them immediately. Keeping dashboards focused rather than overcrowded improves readability. The beginner takeaway is that a few minutes spent designing role-specific dashboards pays back every day in faster orientation."
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
          whatThisMeans: "The Cyber Risk Overview is the screen that breaks the single Company Risk Index number down into its component parts so you can see what is actually driving it. It organizes posture into key areas: overall Risk, Exposure, Attack, and Security Configuration. 'Exposure' measures how much attackable surface you have, primarily unpatched vulnerabilities and weak points an attacker could target. 'Attack' reflects evidence of active or attempted malicious activity in your environment right now. 'Security Configuration' evaluates the health of your defenses themselves, such as agent deployment coverage, agent versions, and whether key protective features are turned on. Together these turn a vague score into a diagnosis you can act on.",
          whyItMatters: "A single risk number tells you something is wrong but not what to fix, and this breakdown closes that gap. By separating exposure, attack, and configuration, it lets you direct remediation precisely instead of guessing. For example, a high score driven by exposure calls for patching, while one driven by configuration calls for deploying or updating agents and enabling features. This distinction matters because teams often fixate on active attacks while quietly neglecting the poor configurations that make future attacks easy. The overview also explains your posture to auditors and executives in concrete terms, replacing 'our risk is high' with 'our risk is high because these specific servers run outdated agents'.",
          whatYouWillLearn: [
            "How the Cyber Risk Overview decomposes the overall risk score into parts.",
            "The main sections: Risk, Exposure, Attack, and Security Configuration.",
            "What the Exposure score represents in terms of vulnerabilities and attack surface.",
            "What the Attack score reflects about active malicious activity.",
            "What the Security Configuration score evaluates, including agent versions and feature adoption.",
            "How to use the breakdown to choose the right remediation for the actual problem.",
            "Why disabling assets from assessment artificially lowers, rather than truly reduces, your risk."
          ],
          steps: [
            "Go to Cyber Risk Exposure Management and open the Cyber Risk Overview. This is where the headline risk score is decomposed into its contributing areas.",
            "Review the Exposure Overview to identify outstanding vulnerabilities and the assets carrying them. A high exposure score points you toward patching and surface-reduction work.",
            "Check the Security Configuration Overview to see whether key protective features, such as predictive machine learning, are adopted and whether agents are deployed and up to date. Gaps here reveal defenses that are weaker than they should be even if no attack is currently underway."
          ],
          scenario: "During an annual audit, an auditor challenges the security team about why the Company Risk Index is sitting at a high rating. Rather than offering a vague explanation, the administrator opens the Cyber Risk Overview and walks through the breakdown on screen. The Attack score is reassuringly low, confirming there is no active malware in the environment, but the Exposure and Security Configuration scores are elevated because several legacy servers are running outdated agent versions that lack current protections. The auditor now sees exactly what is wrong and why, and the team leaves with a precise to-do list: update the agents on those specific legacy servers. The breakdown turned an uncomfortable question into a clear, defensible answer.",
          commonMistakes: [
            "Focusing only on the Attack score while ignoring poor security configurations that leave the organization open to future attacks.",
            "Not realizing that disabling assets from assessment artificially lowers the displayed Risk Index without reducing real risk.",
            "Treating the single risk number as actionable on its own instead of using the breakdown to diagnose the cause.",
            "Overlooking the Exposure score and leaving known vulnerabilities unpatched.",
            "Assuming agents are healthy without checking the Security Configuration view for outdated versions or missing features."
          ],
          summary: "The Cyber Risk Overview decomposes the Company Risk Index into Risk, Exposure, Attack, and Security Configuration so you can see what is driving your score. Exposure reflects vulnerabilities and attack surface, Attack reflects active malicious activity, and Security Configuration reflects agent coverage, versions, and feature adoption. This breakdown lets you target the right remediation and explain posture clearly to auditors. The beginner takeaway is that the overview converts a single vague number into a precise, actionable diagnosis."
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
          whatThisMeans: "An alert in Trend Vision One is raised when a 'detection model' recognizes a pattern of suspicious activity across one or more security layers. A detection model is essentially a rule or piece of logic that says 'if these conditions occur together, it is worth flagging'. Each alert carries a 'score', a single number that represents its overall severity and helps you decide what to work on first. That score is not simply copied from the model; it is calculated dynamically by combining the model's own severity with the 'impact scope', meaning how many systems or users the activity touched. The platform caps this score at a maximum of 99. Understanding this calculation is the foundation of effective triage.",
          whyItMatters: "Analysts cannot investigate everything at once, so prioritization is the core skill of security operations, and the alert score is the primary prioritization signal. If you misunderstand how the score works, you may waste time on a low-impact alert while a widespread one festers. Knowing that impact scope inflates the score explains why the same underlying detection can appear as a moderate alert in one case and a near-maximum alert in another. This prevents the mistake of assuming a high-severity model always produces the same score. Ultimately, reading scores correctly is what lets a team focus its limited attention on the threats that can do the most damage.",
          whatYouWillLearn: [
            "What a detection model is and how it triggers an alert.",
            "What the alert score represents and why it drives prioritization.",
            "The difference between a model's intrinsic severity and the final alert score.",
            "What impact scope means and how it raises the score.",
            "Why the same model can produce different scores in different situations.",
            "The maximum possible alert score defined by the platform.",
            "How to use the Score column to decide what to investigate first."
          ],
          steps: [
            "Open the Workbench and look at the Score column, which appears next to each alert. This column is your at-a-glance ranking of which alerts are most urgent.",
            "Note how the score is calculated by combining the matched model's severity with the alert's impact scope. The same detection affecting more systems will carry a higher score than one affecting a single system.",
            "Verify the maximum possible alert score, which the platform caps at 99. Knowing the ceiling helps you interpret how serious a high-scoring alert really is."
          ],
          scenario: "An analyst opens the Workbench and sees two alerts that, confusingly at first, were triggered by the very same high-severity detection model. The first has a score of 70 and affects just one endpoint, while the second has a score of 99 and affects fifty endpoints across the company. A newcomer might expect identical scores since the model is the same, but the analyst understands that impact scope drives the difference: the second alert is far more dangerous because the malicious behavior is spreading widely. He prioritizes the 99-scored alert immediately, treating it as a potential mass compromise, and returns to the single-endpoint alert afterward. The scoring system has correctly steered his attention to where the damage could be greatest.",
          commonMistakes: [
            "Assuming a high-severity model always results in a score of 99 regardless of how many systems are affected.",
            "Treating the model's severity and the final alert score as the exact same value.",
            "Ignoring impact scope and underestimating an alert that has spread across many systems.",
            "Working alerts in the order they arrived instead of by score-based priority.",
            "Forgetting that the score is capped at 99, and misreading what a near-maximum score implies."
          ],
          summary: "Alerts are raised when detection models recognize suspicious patterns across security layers, and each alert carries a severity score capped at 99. That score is calculated dynamically by combining the model's intrinsic severity with the impact scope, meaning how many systems or users are affected. This is why the same model can produce very different scores in different situations. The beginner takeaway is to triage by score, remembering that wide impact pushes an alert toward the maximum and demands attention first."
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
          whatThisMeans: "Triage is the disciplined process of working an alert from the moment it appears to a documented conclusion, and the Workbench is where that happens. Every alert moves through three primary statuses: 'Open' when it is new and untouched, 'In Progress' when someone is actively investigating it, and 'Closed' when the investigation is complete. You also assign an 'owner', the analyst responsible for the alert, so the team knows who is handling it. When closing an alert you must record a 'finding', the verdict of your investigation, chosen from categories such as True Positive, False Positive, Benign True Positive, and Noteworthy. These findings are the structured record of what each alert actually turned out to be.",
          whyItMatters: "Without a clear status and owner, multiple analysts can unknowingly investigate the same alert while others go untouched, wasting effort and leaving gaps. The status field is how a team coordinates so work is neither duplicated nor dropped. The finding you select when closing matters far beyond the single alert, because findings feed historical reporting and metrics that reveal how much of your alert volume is genuine versus noise. Closing alerts without a finding quietly corrupts those metrics and makes it impossible to tune detection over time. Good triage hygiene is therefore what keeps the whole SOC organized, measurable, and continuously improving.",
          whatYouWillLearn: [
            "What triage is and why it is the daily core of SOC work.",
            "The three primary alert statuses: Open, In Progress, and Closed.",
            "How and why to assign an owner to an alert.",
            "The investigation finding categories and what each one means.",
            "When to use Benign True Positive versus True Positive or False Positive.",
            "How findings feed historical reporting and detection tuning.",
            "Why closing an alert without a finding damages your metrics."
          ],
          steps: [
            "Select an open alert in the Workbench to begin working it. An Open status signals that no one has started the investigation yet.",
            "Change the status from Open to In Progress and assign yourself as the owner. This tells the rest of the team that the alert is actively being handled by you, preventing duplicated effort.",
            "After completing your investigation, set the status to Closed and select the appropriate finding, such as True Positive for a confirmed threat. Always choose a finding, because it both documents your verdict and feeds the SOC's reporting and tuning metrics."
          ],
          scenario: "An analyst notices a fresh Open alert in the Workbench flagging suspicious credential dumping on a server, behavior often associated with attackers stealing passwords. She immediately changes the status to In Progress and assigns herself as owner, so a colleague glancing at the queue knows it is covered and moves on to other alerts. Digging in, she discovers the activity originated from the security team's own scheduled penetration test, meaning the detection was real but not malicious. She closes the alert with a finding of Benign True Positive, accurately recording that a genuine technique was detected but the activity was authorized. Months later, that precise finding helps the team show auditors how their detections perform and avoids misclassifying the event as a missed attack.",
          commonMistakes: [
            "Leaving investigated alerts in Open status, which confuses the SOC about what has and has not been handled.",
            "Closing alerts without selecting a finding, which corrupts historical reporting and detection-tuning metrics.",
            "Failing to assign an owner, so two analysts unknowingly investigate the same alert.",
            "Mislabeling an authorized-but-real detection as a False Positive instead of a Benign True Positive.",
            "Reopening or duplicating alerts instead of updating the status of the existing one."
          ],
          summary: "Triage moves each Workbench alert through Open, In Progress, and Closed statuses, with an assigned owner so work is coordinated and never duplicated. Closing an alert requires choosing a finding, such as True Positive, False Positive, Benign True Positive, or Noteworthy, which documents the verdict and feeds reporting and tuning metrics. A Benign True Positive captures a real detection from authorized activity. The beginner takeaway is that disciplined status and finding hygiene is what keeps the entire SOC organized and measurable."
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
          whatThisMeans: "When you open an alert, the alert details screen gives you everything needed to understand it in one place. It includes a summary of what happened, a Highlights section listing the specific objects that triggered the detection, a timeline showing the order of events, and an interactive Observable Graph. The Observable Graph is the centerpiece: it draws each object involved, such as endpoints, IP addresses, files, and emails, as 'nodes', and connects them with arrows that show how data and actions flowed between them. The direction of each arrow tells you which object acted on which, turning a tangle of logs into a readable map. Learning to read this screen is what separates slow log-reading from fast, confident investigation.",
          whyItMatters: "Modern attacks involve many steps across many objects, and reconstructing them from raw text logs is slow and error-prone. The Observable Graph collapses that complexity into a picture a human can grasp in seconds, revealing the attacker's entry point and path at a glance. The direction of the arrows is critical information, because it distinguishes the source of an attack from its victim, which changes how you respond. The Connection Details view behind each link lets you drop from the high-level map down to the exact transaction logs when you need proof. By making complex attacks visually obvious, the details screen lets even less experienced analysts investigate accurately and quickly.",
          whatYouWillLearn: [
            "The components of the alert details screen: summary, Highlights, timeline, and Observable Graph.",
            "What the Highlights section lists and why those objects matter.",
            "How to read Observable Graph nodes as objects and arrows as flows.",
            "Why the direction of an arrow distinguishes attacker from victim.",
            "How to click nodes to highlight related events across the graph.",
            "How to open Connection Details to see the underlying transaction logs.",
            "What special details appear for Threat Intelligence Sweeping alerts."
          ],
          steps: [
            "Click on an alert in the Workbench to open its details screen. This is where the full story of the alert is assembled for you.",
            "Review the Highlights section to see the specific objects that triggered the detection, such as a particular file or IP address. These are the concrete starting points for your investigation.",
            "Interact with the Observable Graph by clicking nodes to highlight their related events, and pay attention to the direction of the arrows between them. Click the Connection Details icon on a link to drill into the exact transaction logs behind that relationship."
          ],
          scenario: "An analyst is handed a ransomware alert and, instead of scrolling through pages of logs, opens the Observable Graph on the alert details screen. The map immediately shows an arrow pointing from an external malicious IP address to one of the company's web servers, and from that server an arrow to a newly written executable file. Reading the arrow directions, she understands the sequence in seconds: the attacker reached in from the internet, compromised the web server, and dropped the ransomware payload there. She clicks the Connection Details icon on the first link to pull the exact transaction logs as evidence. Within moments she has identified the entry point and can focus containment on that web server, a process that would have taken far longer from raw logs alone.",
          commonMistakes: [
            "Ignoring the direction of the arrows in the Observable Graph, which indicates the flow of each transaction and distinguishes source from target.",
            "Not clicking the Connection Details icon to view the specific transaction logs behind a link.",
            "Relying on raw text logs while overlooking the graph that summarizes the same data visually.",
            "Skipping the Highlights section and missing the precise objects that triggered the detection.",
            "Failing to click individual nodes to reveal the related events connected to them."
          ],
          summary: "The alert details screen combines a summary, a Highlights list of triggering objects, a timeline, and an interactive Observable Graph that maps the attack. In the graph, nodes are objects like files and IPs, and arrows show the direction of data and action between them, distinguishing attacker from victim. Connection Details lets you drop from the visual map into the exact transaction logs. The beginner takeaway is that reading the graph and its arrow directions turns a complex attack into an obvious story you can investigate quickly."
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
          whatThisMeans: "Observed Attack Techniques, usually shortened to OAT, is a detailed log of individual suspicious events detected across your environment. These events are far more granular than alerts; many of them are minor on their own and never rise to the level of a Workbench alert. Each OAT event is typically mapped to a tactic or technique, often aligned with the MITRE ATT&CK framework, so you can see what kind of malicious behavior it represents. You can filter the list by attributes such as event severity or tactic, and you can take a single event and add it to an existing Workbench insight or case. In short, OAT is the fine-grained raw material of behavior that analysts mine during deep investigations.",
          whyItMatters: "Attackers deliberately operate quietly, taking many small actions that individually look harmless but together form an intrusion. If you only ever look at Workbench alerts, you miss these low-severity breadcrumbs, which is exactly where OAT becomes essential. It lets you find reconnaissance, probing, and other early-stage behaviors that did not cross the threshold to trigger an alert but are meaningful in context. By pulling relevant OAT events into a Workbench insight, an analyst can assemble a complete timeline of an attack that no single alert captured. Without OAT, investigations stop at the loud events and overlook the quiet ones that often reveal the attacker's full footprint.",
          whatYouWillLearn: [
            "What Observed Attack Techniques is and how granular its events are.",
            "The difference between an OAT event and a Workbench alert.",
            "Why many OAT events never become alerts on their own.",
            "How OAT events map to tactics and techniques like MITRE ATT&CK.",
            "How to filter the OAT list by event severity or tactic to find relevant behavior.",
            "How to add an OAT event to an existing Workbench insight or case.",
            "Why the hidden objects list resets when you leave the OAT screen."
          ],
          steps: [
            "Go to Agentic SIEM and XDR and open Observed Attack Techniques. This is the detailed event log beneath the higher-level alerts.",
            "Filter the list by Event severity or Tactic ID to narrow it down to the behaviors relevant to your current investigation. Filtering is essential because the raw OAT stream is large.",
            "Right-click an event of interest and select the option to add it to a Workbench Insight, which attaches that granular event to your ongoing case so it becomes part of the unified timeline."
          ],
          scenario: "An analyst is investigating a host she suspects is compromised, but the original Workbench alert only captured one loud action. She opens Observed Attack Techniques and filters to that host, where she finds several low-severity reconnaissance events: directory listings, account enumeration, and network scanning that each individually were too minor to trigger their own alert. Recognizing these as the attacker's quiet preparation stage, she right-clicks each one and adds it to the main Workbench insight. The investigation's timeline now stretches back hours earlier than the original alert suggested, revealing how the attacker first explored the environment. What looked like a single isolated event is now understood as the tail end of a longer intrusion.",
          commonMistakes: [
            "Expecting every event in OAT to have a corresponding Workbench alert, when most are intentionally too granular to alert on their own.",
            "Forgetting that the hidden objects list resets when you leave the Observed Attack Techniques screen, so hidden filters are not saved permanently.",
            "Browsing OAT without filtering, then being overwhelmed by the sheer volume of events.",
            "Failing to add relevant low-severity events to a Workbench insight, leaving the investigation timeline incomplete.",
            "Dismissing reconnaissance-style events as unimportant instead of recognizing them as early attack stages."
          ],
          summary: "Observed Attack Techniques is a granular log of individual suspicious events, many of which are too minor to trigger a Workbench alert on their own but are mapped to tactics and techniques for context. Analysts filter OAT by severity or tactic and add relevant events to Workbench insights to build a complete attack timeline. The hidden objects list resets when you leave the screen. The beginner takeaway is that OAT holds the quiet breadcrumbs that turn an isolated alert into the full story of an intrusion."
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
          whatThisMeans: "Endpoint security is about protecting the individual computers, servers, and virtual machines, collectively called 'endpoints', that make up your environment. You protect them by deploying an 'agent', a piece of software that runs on each machine to monitor activity, enforce security policy, and report back to Vision One. There are two broad kinds of agent: a full protection agent that actively blocks threats and provides security features, and a 'sensor-only' agent that only observes and forwards activity data without actively blocking. Both kinds collect 'telemetry', the detailed record of process, file, and network activity that XDR correlation depends on. Choosing the right agent type for each machine is a core endpoint-security decision.",
          whyItMatters: "Endpoints are where users click links, open attachments, and run programs, which makes them the most common entry point and the most common target for attackers. Monitoring them closely is what lets you detect malicious code execution and 'lateral movement', the technique attackers use to spread from one machine to others. The telemetry agents collect is the raw fuel for cross-layer detection, so an unmonitored endpoint is a blind spot where an attacker can operate unseen. Understanding the difference between protection and sensor-only agents matters because deploying the wrong type can leave you expecting blocking that never happens. Matching the agent to the machine, including respecting system requirements, is what turns a fleet of computers into a visible, defendable environment.",
          whatYouWillLearn: [
            "What an endpoint is and what an agent does on it.",
            "The difference between a full protection agent and a sensor-only agent.",
            "What telemetry is and why agents collect it for XDR analysis.",
            "Why endpoints are the most common target for attackers.",
            "What lateral movement is and how endpoint monitoring detects it.",
            "Where to find and download agent installers for Windows, Linux, and macOS.",
            "Why operating system requirements and supported versions matter."
          ],
          steps: [
            "Go to Endpoint Security and open Endpoint Inventory, the central list of all your managed and discovered machines. This is the starting point for deploying and managing agents.",
            "Click the Agent Installer button to access the downloadable installer packages. This is how you obtain the software that turns a machine into a managed endpoint.",
            "Review the available installer packages for Windows, Linux, and macOS, and confirm the target machine meets the system requirements. Choosing a supported package and version ensures the agent installs correctly and emits full telemetry.",
            "Hands-on OS-level prevention: harden the operating system alongside the agent. On Windows, use Group Policy to disable System Restore so malware cannot hide in restore points, disable AutoRun and AutoPlay on all drives, and keep systems patched through WSUS. On macOS, keep the OS updated and never disable System Integrity Protection. Across all platforms, train users not to click untrusted links and reinforce it with phishing simulation exercises, since user behavior is the most common entry point."
          ],
          scenario: "A company runs several aging legacy servers that handle critical workloads but cannot spare the CPU for a full antivirus engine without risking performance problems. Rather than leaving these servers as unmonitored blind spots, the security team deploys the sensor-only agent on them. The sensor-only agent uses minimal resources, so it does not disrupt the servers' performance, yet it still forwards detailed telemetry to Trend Vision One. Weeks later, an attacker who compromised a workstation attempts to move laterally onto one of these legacy servers, and the sensor-only telemetry captures the suspicious connection and process activity. The team detects the lateral movement they would otherwise have been blind to, even though those servers could not run full protection.",
          commonMistakes: [
            "Assuming a sensor-only agent will actively block malware, when it only monitors and reports activity.",
            "Deploying agents on unsupported operating system versions, which can cause installation failure or incomplete telemetry.",
            "Leaving some machines without any agent, creating blind spots where attackers can operate unseen.",
            "Choosing a full protection agent for performance-sensitive legacy systems where sensor-only would have been appropriate.",
            "Overlooking lateral movement detection by failing to monitor servers as closely as workstations."
          ],
          summary: "Endpoint security protects computers, servers, and virtual machines by deploying agents that monitor activity, enforce policy, and forward telemetry to Vision One. Full protection agents actively block threats, while sensor-only agents observe and report without blocking, which suits performance-sensitive systems. Because endpoints are attackers' favorite target, this telemetry is essential for detecting malicious execution and lateral movement. The beginner takeaway is to deploy a supported agent on every machine and match the agent type, protection or sensor-only, to each system's needs."
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
          whatThisMeans: "Endpoint Inventory is the central console for seeing and managing every endpoint in your environment, both 'managed' machines that have an agent installed and 'unmanaged' ones that have been discovered but are not yet protected. From here you can locate specific machines, organize them into groups, filter the list by attributes such as operating system, and take direct action on any of them. The inventory surfaces each endpoint's status, using indicators like 'Sensor disabled' or 'Sensor update recommended' to flag machines that need attention. An 'Available Actions' view highlights endpoints that require administrator intervention. In essence, it is the single source of truth for the health and coverage of your endpoint fleet.",
          whyItMatters: "You cannot protect machines you cannot see, and Endpoint Inventory is what gives you that complete visibility. It lets an administrator quickly spot the dangerous gaps: machines missing an agent entirely, sensors that have been disabled, and agents running outdated versions that no longer send full telemetry. Catching unmanaged endpoints is especially important because each one is an unguarded door into your network. The status indicators turn a manual auditing chore into an at-a-glance health check, so problems are found before attackers exploit them. Without this central inventory, coverage gaps accumulate silently until an incident reveals them the hard way.",
          whatYouWillLearn: [
            "What Endpoint Inventory is and the difference between managed and unmanaged endpoints.",
            "How to navigate the inventory's tabs, including the Available Actions view.",
            "The meaning of statuses such as Sensor disabled and Sensor update recommended.",
            "How to filter the inventory to focus on a subset, such as only Linux servers.",
            "How to organize endpoints into groups for easier management.",
            "Why sensor-only endpoints cannot be placed into endpoint groups.",
            "Why removing an endpoint from the inventory does not uninstall its agent."
          ],
          steps: [
            "Open Endpoint Inventory to see the full list of managed and discovered machines. This is your fleet-wide view of endpoint coverage and health.",
            "Select the Available Actions tab to see the endpoints the platform has flagged as needing attention, such as disabled sensors or recommended updates. This focuses you on the machines that actually have problems.",
            "Use the Add filters button to narrow the list, for example to display only Linux servers, so you can work on a specific subset efficiently.",
            "Select an endpoint and explore its available response actions to understand what you can do to a machine directly from the console, from updating it to isolating it.",
            "Hands-on XDR Endpoint Sensor: upgrade endpoints from the legacy Endpoint Sensor to the XDR Endpoint Sensor so they integrate with Vision One, enabling it through Inventory Management and Endpoint Inventory in the console, then turn on event recording and attack discovery so each machine contributes the rich telemetry XDR correlation depends on.",
            "Hands-on Connected Threat Defense: configure suspicious object scan actions so files are quarantined and suspicious IPs, URLs, and domains are blocked, and apply these actions to all present and future objects so newly shared indicators are enforced automatically."
          ],
          scenario: "During a routine review, an administrator opens Endpoint Inventory and notices that 15 unmanaged endpoints have recently been discovered on the corporate network, machines with no agent and therefore no protection. Recognizing each as a potential entry point, she exports the list of these 15 devices to a CSV file directly from the inventory. She then shares the export with the desktop support team and coordinates a campaign to push the agent installer to all 15 machines. Within a day, every one of them appears as managed in the inventory, their sensors reporting telemetry. A set of silent blind spots has been turned into fully monitored, defendable endpoints.",
          commonMistakes: [
            "Trying to move sensor-only endpoints into endpoint groups, which is not supported for that agent type.",
            "Assuming that removing an endpoint from the inventory uninstalls the agent, when it only removes it from the console view and an active agent will reconnect.",
            "Ignoring discovered unmanaged endpoints, leaving unguarded machines on the network.",
            "Overlooking status flags like Sensor disabled or Sensor update recommended that signal coverage gaps.",
            "Browsing the entire inventory without filtering, making it hard to focus on the machines that need work."
          ],
          summary: "Endpoint Inventory is the central console for viewing and managing all managed and unmanaged endpoints, with grouping, filtering, and direct actions. Its status indicators and Available Actions view surface machines that are missing agents, have disabled sensors, or need updates, turning auditing into an at-a-glance check. Removing an endpoint only clears it from the view rather than uninstalling the agent, and sensor-only endpoints cannot be grouped. The beginner takeaway is to use the inventory regularly to find and close coverage gaps before attackers do."
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
          whatThisMeans: "A 'policy' is a defined set of security settings, such as real-time scanning behavior, firewall rules, and intrusion prevention, that the platform applies to endpoints. Policies are normally assigned to groups of endpoints so that many machines share consistent settings without configuring each one individually. An 'override' is a way to apply custom settings to a specific endpoint that differ from the group policy it belongs to. Overrides affect only the individual endpoints you select, not the whole group, and they can be removed at any time to restore the standard policy. This gives you a precise tool for handling exceptions without disturbing everyone else.",
          whyItMatters: "In real environments, a small number of machines often have legitimate special needs, such as a developer workstation that runs unusual tools or a database server that scanning slows down. Without overrides, your only options would be to weaken the policy for the entire group, which is unsafe, or to leave the problem machine misconfigured. Overrides let you make a targeted exception for just the machines that need it while every other endpoint keeps the standard, secure settings. Because overrides are removable, they are easy to clean up once the special situation ends. Understanding overrides keeps you from the trap of loosening protection broadly to solve a narrow problem.",
          whatYouWillLearn: [
            "What an endpoint security policy is and which settings it controls.",
            "How policies are assigned to endpoint groups for consistency.",
            "What an override is and how it differs from changing the group policy.",
            "How to configure a policy override for a specific endpoint.",
            "Why overrides affect only selected endpoints, not the entire group.",
            "How to remove overrides to restore the standard group policy.",
            "When a dedicated group is a better long-term choice than a lingering override."
          ],
          steps: [
            "Select an endpoint in the Endpoint Inventory list to target it for a custom setting. Overrides always start from choosing the specific machine.",
            "Click Endpoint security policy and choose the option to override the endpoint security policy. This tells the platform you want this machine to deviate from its group's settings.",
            "Configure the specific scan or intrusion prevention setting you need to change, leaving everything else inherited from the group policy. Only the settings you override change; the rest stay standard.",
            "Hands-on scan configuration: in the Apex One Security Agent policy, set the scan method to Smart Scan so detection is cloud-assisted and lighter on the endpoint. For Real-time Scan, scan files that are created, modified, and retrieved, scan the boot sector and all removable storage when a USB device is plugged in, quarantine malware variants detected in memory, and enable both IntelliTrap and CVE exploit scanning for web and email downloads. Schedule a full scan at least weekly that scans all files and the boot area, and cap CPU usage at Medium so it pauses when usage exceeds 50 percent.",
            "Hands-on malware actions and exclusions: set per-type actions so jokes, Trojans, packers, and probable malware are quarantined, while viruses are cleaned and then quarantined, always backing up files before cleaning and using Advanced Cleanup for Damage Cleanup Services. Add scan exclusions for the directories where Trend Micro products are installed, and for large compressed files skip archives over 10 MB and scan only the first 30 files inside an archive.",
            "Hands-on Web Reputation: enable Web Reputation for both internal and external agents, turn on HTTPS URL checking, set the security level to Medium, enable Browser Exploit Prevention to block pages carrying malicious scripts, and send agent logs to the server so detections are visible centrally.",
            "Hands-on C&C and Suspicious Connections: enable the Suspicious Connection Service on Windows desktops and servers, block connections to the Global C&C IP list and connections matching malware network fingerprinting, and turn on Clean suspicious connections when a C&C callback is detected.",
            "Hands-on Behavior Monitoring and ransomware: enable Malware Behavior Blocking set to Known and potential threats, and turn on Ransomware Protection to guard documents against unauthorized encryption, automatically back up files changed by suspicious programs, block ransomware-associated processes, and inspect programs for compromised executables. Enable Anti-Exploit Protection to terminate programs showing exploit-style behavior, and prompt the user on newly encountered programs downloaded via HTTP or email.",
            "Hands-on Predictive Machine Learning and fileless protection: ensure the Advanced Protection Service, Unauthorized Change Prevention Service, and Real-Time Scan are all enabled, then set Predictive Machine Learning to quarantine on file detection and terminate on process detection. For fileless malware, combine Anti-Exploit Protection and Program Inspection in Behavior Monitoring with the Real-Time Scan option to quarantine malware variants detected in memory.",
            "Hands-on hardening: enable Device Control for internal and external agents, block the Autorun function on USB storage, and set appropriate USB access permissions. Use Application Control to block execution from temp folders such as %TEMP% and the local AppData Temp path, from Startup folders, and from network share download folders, and use SHA-1 or SHA-256 hash blocking for known malicious executables. Enable Vulnerability Protection in Security Priority mode with recommended Intrusion Prevention rules applied, and turn on Trend Micro Smart Feedback to strengthen global detection.",
            "Hands-on agent self-protection and global settings: configure separate complex passwords for unloading and uninstalling the agent, disable Independent Mode for LAN-connected machines, enable the Certified Safe Software Service, enable automatic restart of the Security Agent service if it terminates, and enable AES-256 encryption for server-to-agent communication.",
            "To revert later, select the endpoint again and click Remove override settings, which restores the machine to its full group policy and cleans up the exception."
          ],
          scenario: "A production database server starts suffering noticeable performance degradation every time a scheduled scan runs, because the scanner repeatedly inspects the large, constantly changing database files. Rather than weakening the scan policy for the entire server group, which would expose dozens of other machines, the administrator selects just that one server in Endpoint Inventory and applies a policy override. The override excludes the specific database directory from real-time scanning while leaving all other protections intact. The performance problem disappears immediately, and the rest of the group keeps its full, unchanged protection. Months later, when the database is migrated elsewhere, the administrator removes the override to return the server to standard settings.",
          commonMistakes: [
            "Leaving overrides active indefinitely instead of updating the main policy or creating a dedicated group for machines with shared needs.",
            "Assuming an override applies to all devices in the group, when it affects only the selected endpoints.",
            "Weakening the entire group policy to solve a problem that affects a single machine.",
            "Overriding more settings than necessary, drifting a machine further from the secure baseline than intended.",
            "Forgetting which endpoints have overrides, making the fleet's configuration hard to audit."
          ],
          summary: "Endpoint policies define security settings applied to groups of endpoints, while overrides let you apply custom settings to specific machines without changing the group policy. Overrides affect only the endpoints you select and can be removed to restore the standard settings. They are the right tool for narrow exceptions, such as excluding a database directory from scanning, rather than loosening protection for everyone. The beginner takeaway is to use overrides surgically and clean them up, considering a dedicated group when many machines share the same special need."
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
          whatThisMeans: "Agent Resource Monitoring is a feature that shows how much CPU and memory the security agent itself consumes on each endpoint. Security software does real work, scanning files and inspecting behavior, and that work uses system resources; this feature makes that consumption visible and measurable. It breaks usage down by the specific security processes responsible, such as coreServiceShell.exe, the Anti-Malware Scan process on Windows endpoints. It also surfaces detail like the most frequently scanned files and paths on a machine, so you can see exactly what the agent is spending its time on. Because it is a pre-release feature, it requires recent agent versions and may only be available in certain regions.",
          whyItMatters: "When users complain that their machine is slow, security software is often blamed first, sometimes fairly and sometimes not, and this feature lets you replace guesswork with evidence. By showing which security process is using resources and what files it is repeatedly scanning, it pinpoints the real cause of a slowdown. Often the culprit is the agent scanning a large, frequently changing file over and over, which you can resolve with a targeted exclusion rather than disabling protection. It also helps you spot a security process behaving abnormally, which can itself be a sign of a problem. Used well, it keeps endpoints both protected and performant, which is what keeps users from trying to disable security entirely.",
          whatYouWillLearn: [
            "What Agent Resource Monitoring measures and why it is a pre-release feature.",
            "How to access the monitoring dashboard where it is available.",
            "How to read average CPU and memory trends over the past 7 days.",
            "The primary security processes monitored on Windows and Linux, including coreServiceShell.exe.",
            "How to open an endpoint's Detailed Resource View to investigate a specific machine.",
            "How to identify the most frequently scanned files and paths driving resource use.",
            "Why filtering by a security process only shows endpoints where that process is running."
          ],
          steps: [
            "Go to Endpoint Security and open Agent Resource Monitoring, if it is available in your region and your agents are a supported version. This is the dashboard for agent performance data.",
            "Review the average CPU and Memory trends for the past 7 days to spot endpoints whose agents are consuming unusually high resources. Trends over a week reveal sustained problems rather than momentary spikes.",
            "Click a high-resource endpoint to open its Detailed Resource View, which breaks down usage by security process for that specific machine.",
            "Examine the Top 10 Anti-malware scanned files and paths list to find what the agent is repeatedly scanning, which often reveals the exact file you can exclude to fix a slowdown."
          ],
          scenario: "A user files a ticket complaining that their laptop has become frustratingly slow, and as usual suspicion falls on the security agent. Instead of guessing or disabling protection, the administrator opens Agent Resource Monitoring and drills into that laptop's Detailed Resource View. There he sees that coreServiceShell.exe, the Windows Anti-Malware Scan process, is consuming around 80 percent of the CPU. Checking the Top 10 scanned files list, he discovers the agent is repeatedly scanning a large local database file that the user's application rewrites constantly. He adds a targeted scan exclusion for that single file, and the CPU usage drops back to normal. The laptop is fast again, protection remains fully enabled everywhere else, and the diagnosis took minutes instead of a back-and-forth investigation.",
          commonMistakes: [
            "Expecting resource data from older agent versions, when the feature requires recent versions such as Server & Workload Protection 202503 or later.",
            "Forgetting that filtering by a security process only displays endpoints where that process is actively running.",
            "Disabling the security agent entirely to fix a slowdown instead of finding and excluding the specific file responsible.",
            "Reacting to a momentary spike instead of reviewing the 7-day trend for a sustained problem.",
            "Overlooking the scanned files and paths list, which usually pinpoints the root cause of high usage."
          ],
          summary: "Agent Resource Monitoring is a pre-release feature that reveals how much CPU and memory the security agent uses on each endpoint, broken down by process such as coreServiceShell.exe and by the most frequently scanned files. It turns vague slowness complaints into precise diagnoses, often leading to a targeted file exclusion that restores performance without weakening protection. It requires recent agent versions and may be region-limited. The beginner takeaway is to use it to keep endpoints both fast and protected, so users never feel the need to disable security."
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
          whatThisMeans: "Email security protects the collaboration platforms your organization runs on, such as Microsoft 365 and Google Workspace, from email-borne threats. Those threats include phishing, which tricks users into revealing credentials, spam, malicious attachments carrying malware, and business email compromise, abbreviated BEC, where an attacker impersonates a trusted person to authorize fraudulent actions. In Trend Vision One, this protection is delivered largely through Cloud App Security, which connects directly to your email and collaboration services to scan messages. Beyond blocking threats, it feeds what it sees into the broader XDR engine so email events can be correlated with activity on endpoints and the network. Email security is therefore both a gatekeeper and a source of investigation data.",
          whyItMatters: "Email remains the single most common entry point for cyberattacks, because it delivers an attacker's message straight to a human who can be tricked into clicking. Stopping a threat in the inbox prevents the entire downstream attack, which is far cheaper than cleaning up after a user has clicked. Built-in provider filters catch ordinary spam but often miss the advanced, targeted attacks like spear-phishing and BEC that cause the largest losses. Integrating email security with endpoint and network telemetry is what lets you trace a threat that does get through, answering questions like who else received the same malicious attachment. Without dedicated email security feeding the XDR engine, the most likely entry point in your environment is also your biggest blind spot.",
          whatYouWillLearn: [
            "The common types of email-based threats, including phishing, spam, malicious attachments, and BEC.",
            "What business email compromise is and why it is so damaging.",
            "How Cloud App Security connects to Microsoft 365 and Google Workspace to scan messages.",
            "Why email is the most common entry point for attacks.",
            "The role of email security as both a gatekeeper and a telemetry source.",
            "How email events correlate with endpoint and network activity in XDR.",
            "Why built-in provider filters are not sufficient against targeted attacks."
          ],
          steps: [
            "Open the Trend Vision One console and sign in. All email security management lives within the unified console.",
            "Navigate to Email and Collaboration Security, the area dedicated to protecting your mail and collaboration platforms. This is where email detections and configuration are found.",
            "Review the latest detections of phishing and malicious URLs to see what threats have been caught reaching your organization. This gives you a sense of the email attacks currently targeting your users."
          ],
          scenario: "An attacker researches a company and sends a carefully crafted spear-phishing email to a finance employee, containing a link to a fake login page designed to harvest credentials. The message is targeted enough that an ordinary spam filter might let it through, but Cloud App Security inspects the link, recognizes it as a credential-harvesting site, and blocks the email before it ever reaches the inbox. The event is logged in Trend Vision One, where it becomes part of the XDR data. Because no user ever saw the message, there was no click, no stolen password, and no follow-on intrusion. The same event also lets analysts check whether anyone else was targeted by the same campaign.",
          commonMistakes: [
            "Assuming standard email provider filters are sufficient to block advanced, targeted BEC and spear-phishing attacks.",
            "Not integrating email security events with endpoint and network telemetry for cross-layer correlation.",
            "Treating email security as a standalone spam filter rather than a source of XDR investigation data.",
            "Underestimating BEC because it often carries no malware, only social engineering.",
            "Leaving collaboration platforms like Google Workspace unprotected while securing only Microsoft 365."
          ],
          summary: "Email security protects collaboration platforms such as Microsoft 365 and Google Workspace from phishing, spam, malicious attachments, and business email compromise, primarily through Cloud App Security. It acts as a gatekeeper that blocks threats in the inbox and as a telemetry source that feeds the XDR engine for cross-layer correlation. Because email is the most common attack entry point, this protection is critical, and built-in provider filters alone miss the most dangerous targeted attacks. The beginner takeaway is that securing email both prevents attacks and provides the data to investigate the ones that slip through."
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
          whatThisMeans: "Email Asset Inventory is the central place to see and manage all of your email-related assets, organized into three main sections: an Email Account Inventory of individual mailboxes, an Email Domain Inventory of your email domains, and an Email Server Inventory of mail servers, including on-premises relays. From here you can review the security configuration of each asset and take action on it. 'Unmanaged email accounts' are mailboxes the platform has discovered but which do not yet have protection or sensor coverage enabled. An Available Actions view highlights the accounts that need immediate administrator attention. Together these views give you a complete map of your email attack surface and its protection status.",
          whyItMatters: "Just as with endpoints, you cannot protect mailboxes you do not know about, and Email Asset Inventory is what gives you that visibility. It lets you quickly find unprotected mailboxes, unmanaged domains, and unhealthy servers, each of which is a potential gap an attacker could exploit. The separate server inventory matters because many organizations still run on-premises mail relays that are easy to forget when you assume everything is in the cloud. Identifying important accounts, such as executives, helps you prioritize protecting the highest-value targets. Without this inventory, coverage gaps in email, your most-attacked channel, can persist unnoticed until they are exploited.",
          whatYouWillLearn: [
            "The three main sections of Email Asset Inventory: accounts, domains, and servers.",
            "What unmanaged email accounts represent and why they are a risk.",
            "How to find mailboxes that lack sensor or protection coverage.",
            "How to view the details and gateway protection status of your domains.",
            "Why the Email Server Inventory matters for on-premises mail relays.",
            "How the Available Actions view surfaces accounts needing intervention.",
            "How marking important accounts helps prioritize high-value targets."
          ],
          steps: [
            "Go to Email and Collaboration Security Operations and open Email Asset Inventory, the central map of your email assets. This is where coverage and configuration are managed.",
            "Select the Email Account Inventory tab to see all discovered mailboxes and their protection status. This reveals which accounts are managed and which are unmanaged.",
            "Identify accounts marked with the Important icon, which flags high-value mailboxes such as executives that deserve priority protection.",
            "Check the Email Domain Inventory to verify the gateway protection status of your domains, and review the Email Server Inventory for any on-premises relays that also need coverage."
          ],
          scenario: "While preparing for a security audit, the team opens Email Asset Inventory to verify that every mailbox is properly covered. In the Email Account Inventory they discover 50 newly created email accounts, likely from a recent department expansion, that do not have email sensor detection enabled. Each of these is effectively a blind spot for email threat hunting. The team selects all 50 accounts at once and enables the sensor, bringing them under full coverage in a single action. They also glance at the Email Server Inventory and confirm an on-premises relay they had nearly forgotten is still protected. The audit proceeds with confidence that no mailboxes or servers are quietly unmonitored.",
          commonMistakes: [
            "Neglecting the Available Actions tab, which highlights the accounts requiring immediate administrator intervention.",
            "Assuming all email servers are cloud-based and ignoring the Email Server Inventory for on-premises relays.",
            "Leaving discovered unmanaged accounts without enabling sensor or protection coverage.",
            "Failing to mark or prioritize important accounts such as executives, who are the most common targets.",
            "Reviewing only the account inventory while overlooking domain-level protection status."
          ],
          summary: "Email Asset Inventory organizes your email accounts, domains, and servers into one place so you can monitor protection coverage and act on gaps. It surfaces unmanaged mailboxes, lets you verify domain gateway protection, and includes on-premises mail servers that are easy to overlook. The Available Actions view and Important markers help you prioritize. The beginner takeaway is to use this inventory regularly to ensure no mailbox, domain, or server in your most-attacked channel is left unprotected."
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
          whatThisMeans: "The Email Sensor is the component that collects metadata and telemetry from your email traffic, such as who sent a message, who received it, what attachments it carried, and what links it contained, and forwards that data to Trend Vision One. It is important to understand that the sensor is about visibility, not blocking; it observes and records rather than actively stopping messages, which is the job of active protection. This recorded telemetry is what makes email part of XDR, allowing you to search historical email activity during an investigation. You enable the sensor on mailboxes through the Email Account Inventory, and it works across services like Exchange Online and Gmail. The sensor is essentially the email equivalent of an endpoint sensor agent.",
          whyItMatters: "Active protection stops the threats it recognizes at the moment they arrive, but some malicious messages are only identified as dangerous hours or days later, after they have already been delivered. The Email Sensor is what lets you go back in time and answer the critical question: who else received this? Without it, when a file is belatedly found to be malicious, you have no way to trace its spread through the organization. The sensor's metadata enables fast, retrospective threat hunting and cross-layer correlation, linking an email to whatever happened next on the endpoint. Disabling it to save credits silently removes your ability to investigate email-borne campaigns, which is a poor trade against your most-attacked channel.",
          whatYouWillLearn: [
            "What the Email Sensor collects and how it differs from active protection.",
            "Why the sensor is about visibility and retrospective investigation, not blocking.",
            "How enabling the sensor makes email part of XDR threat hunting.",
            "How to enable the sensor for mailboxes on Exchange Online and Gmail.",
            "How to manage sensor settings from the Email Account Inventory.",
            "How to verify that sensor telemetry is actually flowing.",
            "Why disabling the sensor to save credits cripples email investigations."
          ],
          steps: [
            "Open the Email Account Inventory, where mailbox-level sensor settings are managed. This is the control point for enabling email telemetry.",
            "Locate the Email sensor detection management control. This is where you turn the sensor on for specific mailboxes.",
            "Select the target mailboxes, including high-profile executive accounts, and toggle the sensor to Enabled. Covering the highest-value accounts ensures you can investigate attacks against the people most likely to be targeted.",
            "Verify that telemetry is flowing by checking the log status, confirming the sensor is actively recording email metadata rather than just configured."
          ],
          scenario: "A PDF attachment slips past initial scanning and is delivered to several employees, only to be identified as malicious several hours later when new threat intelligence arrives. In an environment without the Email Sensor, the team would have no record of who received it and would be reduced to guessing. But because the Email Sensor was enabled across the organization, the analyst runs a single search in Vision One for that file and immediately gets a precise list of the 12 users who received it. With that list in hand, she uses a response action to delete the malicious PDF from all 12 mailboxes before anyone opens it. The sensor's historical metadata turned a potential scramble into a five-minute, complete cleanup.",
          commonMistakes: [
            "Disabling the email sensor to save credits, which completely removes the ability to do email-based XDR threat hunting.",
            "Not enabling the sensor for high-profile executive accounts, the most likely targets of email attacks.",
            "Confusing the sensor with active protection and expecting it to block messages.",
            "Enabling the sensor but never verifying that telemetry is actually flowing.",
            "Leaving large groups of mailboxes uncovered, creating gaps in retrospective investigation."
          ],
          summary: "The Email Sensor collects email metadata such as sender, recipient, attachments, and links and forwards it to Vision One, enabling retrospective threat hunting rather than active blocking. Enabled per mailbox through the Email Account Inventory across services like Exchange Online and Gmail, it is what lets you answer who else received a message that is later found malicious. Disabling it to save credits cripples email investigation. The beginner takeaway is that the sensor is the email equivalent of an endpoint sensor, providing the visibility that makes fast, complete cleanup possible."
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
          whatThisMeans: "Reviewing detections is the practice of analyzing the email threats that Cloud App Security and the Email Sensor have flagged, in order to understand each threat and respond to it. A detection record tells you the key facts of a malicious message: who sent it, who received it, and what kind of threat it is, such as a malware name or a phishing indicator. From the detection you can take direct response actions on the message itself, the most common being to quarantine it, which removes it from the user's inbox so they cannot interact with it. These detections appear in the Email and Collaboration Security area and can also surface as Workbench alerts. Reviewing them is how email threats move from being detected to being neutralized.",
          whyItMatters: "Detecting a threat is only half the job; the value comes from acting on it before a user is harmed. Reviewing detections lets an analyst see the full scope of an attack, for example that a single phishing message was actually delivered to several people, and then remove it from every affected inbox at once. This is especially powerful against targeted campaigns, such as a phishing wave aimed at the finance department, where speed prevents anyone from clicking. Checking details like the sender's domain reputation during review helps confirm whether something is genuinely malicious. Ignoring email detections in the hope that an endpoint agent will catch the threat later is a gamble that often fails, because the damage from a phishing click happens instantly.",
          whatYouWillLearn: [
            "What an email detection record contains and how to read it.",
            "How to find email detections in the console and in Workbench alerts.",
            "How to interpret threat details such as malware names and phishing indicators.",
            "How to see the full scope of a message, including everyone who received it.",
            "The response actions available for email, especially quarantining a message.",
            "Why checking sender domain reputation strengthens an investigation.",
            "Why relying on the endpoint agent to catch email threats is risky."
          ],
          steps: [
            "Go to Email and Collaboration Security and open the detections view, or check related Workbench alerts. This is where flagged email threats are listed for review.",
            "Select an email detection to view its details, including the sender, the recipients, and the threat type. These facts tell you what the threat is and how far it spread.",
            "Right-click the message and choose to quarantine it, which removes it from the affected inboxes so users cannot open or click it. Quarantining the message neutralizes the threat without harming the user's account."
          ],
          scenario: "An alert surfaces indicating a credential phishing attempt has reached the organization. The analyst opens the detection and reviews the details, confirming it is a fake login link and, importantly, seeing that the same message was delivered to five different users. Rather than warning each person individually and hoping none of them clicks first, she immediately uses the quarantine response action to pull the email from all five inboxes at once. She also checks the sender's domain reputation, which confirms it is a known-bad domain, validating her decision. Within a minute the threat is gone from every inbox, and not one of the five users ever had the chance to click the malicious link.",
          commonMistakes: [
            "Ignoring email alerts on the assumption that the endpoint agent will block the threat if a user clicks it.",
            "Not checking the sender's domain reputation during the investigation.",
            "Quarantining the message from only one inbox while leaving copies in the other recipients' inboxes.",
            "Treating a phishing detection as low priority, when a click can cause instant credential theft.",
            "Failing to review the full recipient list and underestimating the scope of a campaign."
          ],
          summary: "Reviewing email detections means analyzing the threats Cloud App Security and the Email Sensor flag, understanding the sender, recipients, and threat type, and responding directly. The most common response is quarantining the message, which removes it from every affected inbox before users can interact with it. Checking details like sender domain reputation confirms malicious intent. The beginner takeaway is to act on email detections promptly and across all recipients, because the damage from a phishing click happens the instant a user clicks."
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
          whatThisMeans: "Your 'attack surface' is the total set of all assets an attacker could potentially target: every device, server, domain, cloud resource, and user account in your organization. Attack Surface Management, abbreviated ASM, is the practice of continuously discovering and assessing all of those assets, both internal ones and internet-facing ones. 'Internet-facing' assets are especially significant because they are reachable from the public internet, making them the first thing an outside attacker probes. The word 'continuously' is key: ASM does not assume your inventory is a fixed list but keeps finding new and changed assets as your environment evolves. In short, ASM is about always knowing everything you have that could be attacked.",
          whyItMatters: "There is a foundational security truth: you cannot secure what you do not know exists. Organizations constantly spin up new cloud servers, register forgotten subdomains, and connect unmanaged devices, and any of these can become an unguarded entry point. Attackers actively scan the internet for exactly these overlooked assets, so a forgotten test server can become your breach. Continuous discovery means these rogue and shadow assets are found by your own team before an attacker finds them. Treating your inventory as static, or focusing only on internal devices while ignoring internet-facing domains and cloud storage, leaves blind spots that grow over time. ASM closes those blind spots by keeping an always-current picture of your full exposure.",
          whatYouWillLearn: [
            "What an attack surface is and what assets it includes.",
            "What Attack Surface Management means and why discovery must be continuous.",
            "The difference between internal and internet-facing assets.",
            "Why internet-facing assets are an attacker's first target.",
            "How Trend Vision One automatically discovers new and changed assets.",
            "Where to see counts of devices, internet-facing assets, and cloud assets.",
            "Why a static inventory inevitably develops dangerous blind spots."
          ],
          steps: [
            "Go to Cyber Risk Exposure Management and open the Cyber Risk Overview. This is where your discovered attack surface is summarized.",
            "Look at the Risk Overview section to see the high-level picture of what the platform has discovered. This is your current snapshot of everything that could be attacked.",
            "Identify the counts for Devices, Internet-facing Assets, and Cloud Assets to understand the size and shape of your attack surface. Watching these counts over time reveals when new, possibly unsanctioned, assets appear."
          ],
          scenario: "A marketing team, eager to launch a time-sensitive campaign, spins up a temporary promotional website on a cloud server and never tells the IT or security team about it. In a traditional setup this server would be a complete unknown, an internet-facing machine quietly exposed with no one watching it. Instead, Trend Vision One's continuous discovery automatically finds the new internet-facing asset shortly after it appears, scans it, and surfaces it to the security team. The analysts now know the server exists, can assess whether it is configured securely, and can bring it under management. What would otherwise have been an invisible, unguarded door into the company is caught and secured, all without anyone manually reporting it.",
          commonMistakes: [
            "Assuming your asset inventory is static and does not require continuous discovery.",
            "Only focusing on internal devices while ignoring internet-facing domains and cloud storage.",
            "Overlooking shadow assets that business teams create without informing IT.",
            "Treating discovered internet-facing assets as low priority despite their public exposure.",
            "Failing to watch asset counts over time, missing the appearance of new unsanctioned assets."
          ],
          summary: "Attack Surface Management continuously discovers and assesses every asset an attacker could target, both internal and internet-facing, across your environment. Because organizations constantly create new cloud servers, subdomains, and devices, continuous discovery is what finds these before attackers do. The Cyber Risk Overview shows counts of devices, internet-facing assets, and cloud assets. The beginner takeaway is that you cannot secure what you do not know exists, and ASM keeps your knowledge of your exposure always current."
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
          whatThisMeans: "Every asset in your environment carries a risk score, and that score is built from several 'contributing factors' rather than a single measure. The three primary factors are vulnerabilities, system configurations, and user behavior. 'Vulnerabilities' are known software weaknesses, often identified by a CVE, which is a standardized identifier for a publicly disclosed flaw, and more severe CVEs raise the score more. 'System configurations' captures misconfigurations, meaning insecure settings that weaken a device. 'User behavior' accounts for the actions of the person using the asset, such as repeatedly visiting risky or known-malicious websites. The score is dynamic, recalculating as these factors change, so it always reflects the asset's current condition.",
          whyItMatters: "If you only know that an asset is risky but not why, you are left guessing at how to fix it, which wastes effort and may not reduce the risk at all. Understanding the contributing factors lets you apply the right remediation: patch a vulnerability, correct a misconfiguration, or coach a user, depending on what is actually driving the score. This breakdown also reveals that risk is not only about unpatched software; a perfectly patched laptop used recklessly can still be high risk. Prioritizing the assets with critical contributing factors ensures your limited time goes where it reduces the most danger. Reading risk by its factors turns a vague warning into a precise, actionable plan.",
          whatYouWillLearn: [
            "The three primary contributing factors to an asset's risk score.",
            "What a CVE is and how vulnerability severity is weighted.",
            "What system misconfigurations are and how they raise risk.",
            "How user behavior, such as visiting risky sites, affects the score.",
            "Why a fully patched asset can still be high risk.",
            "How to view the factor-by-factor breakdown for a specific asset.",
            "How to choose remediation that matches the actual cause of the risk."
          ],
          steps: [
            "Navigate to the Exposure Overview on the Cyber Risk Overview dashboard, where assets and their risk are surfaced. This is the entry point for risk-driven prioritization.",
            "Identify which assets currently have the highest risk scores so you know where to focus first. The riskiest assets are where remediation has the greatest impact.",
            "Click a high-risk asset to view the breakdown of its contributing factors, such as three critical CVEs and two misconfigurations. The breakdown tells you exactly which remediation, patching or reconfiguration or user coaching, will actually lower the score."
          ],
          scenario: "An administrator notices that a particular laptop's risk score has suddenly spiked to Critical and opens the asset to understand why. The factor breakdown reveals two things working together: the machine has an unpatched remote-code-execution vulnerability with a high-severity CVE, and the user has repeatedly visited known phishing domains. Neither problem alone would be as alarming, but combined they make this laptop a prime target, exposed and operated carelessly. Because the breakdown is explicit, the administrator knows precisely what to do: push the missing patch to close the vulnerability and arrange security awareness coaching for the user. Within a day both factors are addressed and the score falls back to a safe level, a fix that would have been impossible if all he knew was the single word Critical.",
          commonMistakes: [
            "Assuming risk scores are based solely on unpatched software, ignoring misconfigurations and user behavior.",
            "Not prioritizing remediation for the assets with critical contributing factors.",
            "Applying a patch when the real driver of the score is a misconfiguration or risky user behavior.",
            "Treating a fully patched asset as automatically safe regardless of how it is used.",
            "Reading only the top-line score without opening the factor breakdown that explains it."
          ],
          summary: "Asset risk scores are dynamically calculated from contributing factors: vulnerabilities measured by CVE severity, system misconfigurations, and risky user behavior. The factor breakdown reveals exactly why an asset is risky, so you can choose the right remediation rather than guessing. This also shows that risk is more than unpatched software, since careless use can make even a patched machine dangerous. The beginner takeaway is to always open the breakdown and address the specific factors that are driving an asset's score."
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
          whatThisMeans: "Prioritizing is the work of deciding which exposure issues to fix first, since you can never fix everything at once. Trend Vision One helps by ranking vulnerabilities not just by their theoretical severity but by 'Global Exploit Potential', a measure of how likely a vulnerability is to actually be attacked based on real-world exploit activity. A vulnerability that attackers are actively using in the wild is far more urgent than one that is severe on paper but never exploited. For each issue, the platform also provides Recommended Actions, concrete remediation steps such as applying a patch or deploying a virtual patch. A 'virtual patch' is a protective rule that blocks exploitation of a flaw even before the official software patch is installed. Prioritization turns an overwhelming list into a focused, ordered plan.",
          whyItMatters: "A typical organization has thousands of open vulnerabilities, and trying to address them all equally is both impossible and inefficient. The reality is that only a small fraction are realistically going to be attacked, so the goal is to find and fix that critical slice first. Prioritizing by exploit potential concentrates your effort on the issues that attackers are actually weaponizing right now, neutralizing the greatest danger with the least work. Patching in the wrong order, such as chronologically or alphabetically, means the truly dangerous flaws may sit open for weeks while you address harmless ones. Following the platform's recommended actions, including virtual patching when an immediate patch is not possible, lets you reduce real risk quickly and measurably.",
          whatYouWillLearn: [
            "Why fixing every vulnerability equally is impossible and why prioritization is essential.",
            "What Global Exploit Potential measures and why it beats raw severity.",
            "The difference between a vulnerability being severe and being actively exploited.",
            "Where to find and filter detected vulnerabilities in the console.",
            "What Recommended Actions are and how to follow them.",
            "What a virtual patch is and when to use it instead of an immediate patch.",
            "How to track remediation progress over time."
          ],
          steps: [
            "Go to Cyber Risk Exposure Management and open Detected Vulnerabilities, the consolidated list of weaknesses found across your assets. This is where prioritization begins.",
            "Filter by Global Exploit Potential to surface the CVEs that are being actively exploited in the wild. This dramatically shrinks the list to the issues that matter most right now.",
            "Select a high-priority vulnerability and review its Recommended Actions, such as applying the official patch or deploying a virtual patch as immediate protection. Following these steps remediates the risk and lets you track progress as issues are closed."
          ],
          scenario: "A SOC team opens Detected Vulnerabilities and is confronted with roughly 2,000 open issues across the environment, a number so large it feels paralyzing. Instead of starting at the top and grinding through them, they filter by High Global Exploit Potential to isolate the vulnerabilities attackers are actually exploiting in the real world. The list collapses from 2,000 down to just 5 critical CVEs. The team focuses entirely on these five, applying patches where they can and deploying virtual patches on the systems that cannot be taken offline immediately. In a single afternoon they neutralize the handful of flaws that posed by far the greatest real danger, achieving more security improvement than weeks of unprioritized patching would have delivered.",
          commonMistakes: [
            "Attempting to patch vulnerabilities in chronological or alphabetical order instead of prioritizing by exploit potential.",
            "Ignoring the recommended remediation steps the console provides for each issue.",
            "Treating raw severity as the only signal and overlooking whether a flaw is actually being exploited.",
            "Failing to use virtual patching to protect systems that cannot be patched immediately.",
            "Not tracking remediation progress, so it is unclear whether the critical issues have actually been closed."
          ],
          summary: "Prioritizing exposure means fixing the most dangerous issues first by ranking vulnerabilities on Global Exploit Potential, which reflects real-world exploitation rather than theoretical severity. The platform provides Recommended Actions for each issue, including virtual patches that protect against exploitation before an official patch is applied. This shrinks an overwhelming list down to the critical few that warrant immediate attention. The beginner takeaway is to let exploit potential, not chronology, drive the order of remediation so your effort neutralizes the greatest real risk first."
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
          whatThisMeans: "Compliance Management compares your organization's actual security configurations against the requirements of established frameworks and standards, such as NIST and the CIS Benchmarks. A 'framework' is a published set of recommended security controls, and being compliant means your settings match those recommendations. The tool expresses your alignment as a 'pass rate', calculated as the percentage of configuration checks that succeed out of all the checks made for a given framework. You can let it assess automatically or click to run a manual configuration check, though results can take up to a day to fully reflect. It centralizes what used to be tracked in manual spreadsheets into one continuously updated view.",
          whyItMatters: "Demonstrating compliance is a real business requirement, often tied to contracts, regulations, and customer trust, and doing it manually is slow and error-prone. Compliance Management lets you identify gaps continuously, measure progress over time, and walk into an audit with current evidence rather than a last-minute scramble. It is important to understand its scope, however: it checks technical configurations, not organizational processes, so a 100 percent pass rate proves your settings are aligned but does not by itself guarantee full legal or regulatory compliance. Knowing that manual checks take time to update prevents you from misreading a stale pass rate. Used correctly, it transforms compliance from a periodic spreadsheet ordeal into an ongoing, measurable practice.",
          whatYouWillLearn: [
            "What Compliance Management does and what a security framework is.",
            "How the pass rate is calculated as successful checks over total checks.",
            "Which frameworks can be tracked, such as NIST and CIS.",
            "How to review pass rates for your active frameworks.",
            "How to manually trigger a configuration check and why results may take up to a day.",
            "Why a 100 percent technical pass rate does not equal full legal compliance.",
            "How to export compliance results for audits."
          ],
          steps: [
            "Go to Cyber Risk Exposure Management, then Cyber Governance and Risk Compliance, and open Compliance Management. This is the central view of your configuration alignment.",
            "Review the pass rates for your active frameworks, such as NIST or CIS, to see where you stand against each standard. The pass rate is your headline measure of technical alignment.",
            "Click the Check configurations button to run a manual assessment when you have made changes, keeping in mind the results can take up to a day to fully reflect.",
            "Export the analysis results, for example using TrendAI Companion, to produce a report you can share with auditors and stakeholders."
          ],
          scenario: "With an annual audit a few weeks away, the compliance officer opens Compliance Management to check the organization's standing against the CIS Benchmarks instead of assembling spreadsheets by hand. The pass rate is high but not perfect, and drilling in she finds that three specific servers are failing the password-complexity check. She corrects the password policy settings on those servers, then runs a manual configuration check, remembering that the pass rate may take up to a day to update. The next day the rerun confirms all three now pass, and she exports a clean report as audit evidence. What once took days of manual data-gathering is now a guided, verifiable process completed in a couple of sittings.",
          commonMistakes: [
            "Assuming a 100 percent pass rate guarantees legal compliance, when it only verifies technical configurations and not organizational processes.",
            "Not realizing that manual configuration checks can take up to a day to accurately reflect in the pass and fail rates.",
            "Waiting until an audit is imminent instead of tracking compliance continuously.",
            "Fixing a failing setting but never rerunning the check to confirm it now passes.",
            "Reviewing the overall pass rate without drilling into which specific controls are failing."
          ],
          summary: "Compliance Management compares your security configurations against frameworks like NIST and CIS, expressing alignment as a pass rate of successful checks over total checks. It replaces manual spreadsheets with a continuously updated view that helps you find gaps, measure progress, and prepare for audits. Manual checks can take up to a day to update, and a perfect technical score does not by itself prove full legal compliance. The beginner takeaway is to track compliance continuously, drill into failing controls, and always rerun the check to confirm a fix."
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
          whatThisMeans: "Search is the tool that lets you proactively ask questions of the activity data collected from across your environment. That data, broadly called 'telemetry', includes detailed records of process, file, and network activity, message metadata, and NetFlow, which is a summary of network traffic flows. It is gathered from the endpoint, email, network, and cloud layers, so a single search can span your whole environment. A 'query builder' provides a guided way to construct searches without memorizing raw syntax, and you can save useful queries to rerun them later. The activity it searches is the same telemetry that powers automated detection, but here you are the one deciding what to look for.",
          whyItMatters: "Automated detection catches the threats it is designed to recognize, but determined attackers work hard to stay below those thresholds, which is exactly where proactive 'threat hunting' comes in. Threat hunting means searching for indicators of compromise, or IoCs, such as a specific file name or registry key, that may not have triggered any alert. Search is what makes hunting possible, letting you confirm in seconds whether a newly disclosed threat is present in your environment. Saving frequently used queries turns a one-time investigation into a repeatable routine, like a daily sweep. Without a search capability, you are limited to reacting to alerts and blind to the quiet threats that never raised one.",
          whatYouWillLearn: [
            "What Search does and what telemetry it can query.",
            "What terms like telemetry, metadata, and NetFlow mean.",
            "How the query builder lets you construct searches without raw syntax.",
            "What threat hunting is and how it differs from reacting to alerts.",
            "What an indicator of compromise is and how to search for one.",
            "How to add time-range filters to keep searches fast and focused.",
            "How to save and reuse queries for repeatable routines."
          ],
          steps: [
            "Go to Agentic SIEM and XDR and open Search, the tool for proactively querying your collected activity data. This is the starting point for threat hunting.",
            "Use the query builder to search for a specific indicator, such as a file name like malicious.exe, across your environment. The builder guides you so you do not need to write raw query syntax.",
            "Add a filter to restrict the search to a focused time range, such as the last 24 hours, which keeps results fast and relevant. Overly broad time ranges slow searches down significantly.",
            "Save the query under a clear name, such as Daily Malware Sweep, so you can rerun it later without rebuilding it from scratch."
          ],
          scenario: "A threat intelligence feed publishes a warning that a particular espionage group plants a distinctive registry key on the systems it compromises. Rather than waiting to see whether an alert fires, the analyst treats this as a hunt: she opens Search and uses the query builder to look for that exact registry key across all endpoints. She scopes the search to a sensible time range so it returns quickly, and within seconds the results come back empty, confirming that no system in the environment contains the key. She saves the query so she can rerun it instantly if the threat resurfaces. In minutes she has answered the question every leader asks during a scare, are we affected, with evidence rather than guesswork.",
          commonMistakes: [
            "Running overly broad queries over very long time ranges, which slows results to a crawl.",
            "Not saving frequently used queries, forcing them to be rebuilt manually every time.",
            "Relying only on automated alerts and never proactively hunting for quiet threats.",
            "Searching for an incomplete or malformed indicator, which causes matches to be missed.",
            "Forgetting to scope a search by layer or time, making results harder to interpret."
          ],
          summary: "Search lets you proactively query the cross-layer telemetry collected from endpoints, email, network, and cloud using a guided query builder, and save useful queries for reuse. It is the foundation of threat hunting, finding indicators of compromise that may never have triggered an automated alert. Scoping searches by time and layer keeps them fast and focused. The beginner takeaway is that Search shifts you from passively reacting to alerts to actively confirming whether a threat is present in your environment."
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
          whatThisMeans: "XDR Data Explorer is the advanced, power-user search tool for analysts who need to work directly with raw logs. Unlike the simpler Search builder, it lets you write more precise queries against a chosen 'data source', such as the endpoint, email, or network layer, and a chosen 'log type'. The two log types are the key concept: 'Activity' logs contain all recorded telemetry, every observed action whether or not it was suspicious, while 'Detection' logs contain only the events that matched a security rule. Choosing the right data source and log type before querying is what determines whether you get meaningful results or none at all. Data Explorer is also where custom dashboard widgets are built from query results.",
          whyItMatters: "Deep investigations often require looking at the complete, unfiltered record of what happened, not just the events that already triggered a rule. Activity logs give you that full picture, letting you trace exactly what a process or connection did even when nothing alerted. Detection logs, by contrast, let you focus narrowly on rule matches when that is what you need. Understanding the difference prevents a common and frustrating error: searching Detection logs for an action that was never flagged, getting empty results, and wrongly concluding nothing happened. Because Data Explorer also feeds custom widgets, mastering it lets you turn ad hoc investigations into reusable visualizations. It is the tool that gives advanced analysts complete, granular control over the data.",
          whatYouWillLearn: [
            "What XDR Data Explorer is and how it differs from the simpler Search tool.",
            "What a data source is and how layers are grouped.",
            "The crucial difference between Activity logs and Detection logs.",
            "Why selecting the correct data source and log type determines your results.",
            "How to write and run a query against a chosen source and log type.",
            "How to read returned log fields such as processName and endpointHostName.",
            "How Data Explorer query results can become custom dashboard widgets."
          ],
          steps: [
            "Go to Agentic SIEM and XDR and open XDR Data Explorer, the advanced raw-log query tool. This is where precise, granular searches are run.",
            "Select the data source, such as Endpoint, and the log type, such as Activity, before querying. This choice is critical, because Activity logs hold all telemetry while Detection logs hold only rule matches.",
            "Enter a query string targeting what you are investigating, for example process executions, and run the query. A well-scoped query returns the specific events you need rather than an unmanageable flood.",
            "Review the resulting log fields, such as processName and endpointHostName, to extract the details of each event. These fields are the raw evidence you build your investigation on."
          ],
          scenario: "An analyst suspects that a web server made a suspicious outbound connection but no alert was raised, so there is nothing in the Detection logs to look at. He opens XDR Data Explorer and deliberately selects the Network data source with the Activity log type, knowing that the full record of connections lives there regardless of whether any rule fired. He queries for outbound connections originating from that server's IP address and immediately gets results showing the exact timestamp and destination port of the connection in question. Had he searched Detection logs instead, he would have found nothing and wrongly assumed the server was clean. By understanding the difference between the two log types, he uncovers the evidence that the activity actually occurred.",
          commonMistakes: [
            "Confusing Activity logs, which hold all recorded telemetry, with Detection logs, which hold only events that matched a security rule.",
            "Not selecting the correct data source before running a query, which leads to empty or irrelevant results.",
            "Searching Detection logs for an action that was never flagged and wrongly concluding nothing happened.",
            "Writing an unscoped query that returns an overwhelming flood of events.",
            "Overlooking that Data Explorer results can be saved as reusable custom widgets."
          ],
          summary: "XDR Data Explorer is the advanced tool for querying raw logs directly, requiring you to choose a data source and a log type. The pivotal distinction is that Activity logs contain all telemetry while Detection logs contain only rule matches, so picking the right one determines whether you find the evidence you need. It also feeds custom dashboard widgets. The beginner takeaway is that for deep investigation you usually want Activity logs, because the absence of a detection does not mean the absence of activity."
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
          whatThisMeans: "An Indicator of Compromise, or IoC, is a specific, concrete piece of evidence tied to a known threat, such as a file hash, an IP address, or a domain name. A 'file hash' is a unique fingerprint of a file, so matching a hash means finding that exact malicious file. 'IoC sweeping' is the act of searching your entire environment for a set of these indicators at once to see whether any of them are present. You perform a sweep by taking the indicators from a threat advisory and running them through Search or XDR Data Explorer across your logs. The results tell you which devices or user accounts, if any, are associated with a match. Sweeping is one of the most common and important reactive investigation techniques.",
          whyItMatters: "When a major threat is disclosed, whether by a government agency, a vendor, or an intelligence feed, the very first question leadership asks is simply, are we affected? IoC sweeping is the fastest way to answer that question with evidence rather than speculation. A clean sweep provides genuine reassurance, and a sweep that finds matches immediately tells you which systems need urgent attention. Getting the time range right is essential, because a threat may have entered the network days or weeks earlier, so sweeping only the last hour can produce a false sense of safety. Using complete, valid indicators rather than partial ones ensures you do not miss a real match. Sweeping turns a frightening headline into a concrete, answerable investigation.",
          whatYouWillLearn: [
            "What an Indicator of Compromise is and the common types.",
            "What a file hash is and why matching one identifies an exact file.",
            "What IoC sweeping is and when to use it.",
            "How to perform a sweep using Search or XDR Data Explorer.",
            "Why the time range of a sweep must cover when the threat could have arrived.",
            "Why complete, valid hash values matter and partial ones fail.",
            "How to interpret sweep results, including what a clean result means."
          ],
          steps: [
            "Obtain a list of indicators, such as SHA-1 file hashes, from a trusted threat advisory. These are the exact fingerprints you will search your environment for.",
            "Paste the indicators into the Search tool or XDR Data Explorer to build your sweep query. These tools can match many indicators across your collected data at once.",
            "Run the query across your endpoint activity logs, choosing a time range that reaches back far enough to cover when the threat might have first entered. A range that is too short can miss an older compromise.",
            "Identify any devices or user accounts associated with a matching indicator, which become your immediate investigation targets. A result with zero matches indicates the indicators were not found in the scoped data."
          ],
          scenario: "A national CERT releases an urgent advisory about a fast-spreading ransomware campaign and lists five file hashes used by the malware. The security team does not wait to see if an alert fires; they immediately copy the five hashes into Vision One and run an IoC sweep across their endpoint activity logs, deliberately setting the time range to cover the past several weeks rather than just the last hour. The sweep completes and returns zero matches, giving the team evidence-based confidence that none of those malicious files have touched their environment. They document the clean result for leadership and save the query in case the campaign evolves. In under ten minutes, a scary headline has been turned into a concrete, reassuring answer.",
          commonMistakes: [
            "Sweeping only the last hour of data when the threat might have entered the network days or weeks earlier.",
            "Searching for partial hashes instead of complete, valid SHA-1 or SHA-256 values, causing real matches to be missed.",
            "Assuming a clean sweep of a too-narrow time range means the environment is definitely safe.",
            "Sweeping for only one indicator type when the advisory provides hashes, IPs, and domains together.",
            "Failing to act quickly on a device that the sweep flags as a match."
          ],
          summary: "IoC sweeping searches your entire environment for specific indicators of compromise, such as file hashes, IP addresses, and domains, drawn from a threat advisory. Run through Search or XDR Data Explorer, it is the fastest way to answer the urgent question of whether a newly disclosed threat is present. Choosing a time range that reaches back far enough and using complete, valid indicators are essential for an accurate result. The beginner takeaway is that sweeping converts a frightening threat announcement into a concrete, evidence-based answer about your own environment."
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
          whatThisMeans: "A 'sandbox' is a secure, isolated virtual environment where a suspicious file or URL can be safely opened and run, completely separated from your real systems. Sandbox Analysis lets you submit an object to that environment and watch exactly what it does, such as which registry keys it modifies and which network connections it attempts. Based on the observed behavior, the sandbox assigns a risk level, typically High, Medium, or Low. This approach is called behavioral or 'dynamic' analysis, because it judges a file by its actions rather than by matching it against a list of known-bad signatures. It is one of the most powerful tools for confirming whether something unknown is actually malicious.",
          whyItMatters: "Traditional signature-based detection can only recognize threats it has seen before, which means brand-new 'zero-day' malware, malware with no existing signature, can slip right past it. A sandbox closes that gap by catching threats based on what they do when executed, so even never-before-seen malware reveals itself through its malicious behavior. This lets an analyst get a definitive answer about a suspicious file that the regular antivirus called clean. Safety precautions matter intensely here: sample files in the sandbox are real, live malware, so downloading them to an ordinary machine can infect it. Understanding that even a Low rating is not an absolute guarantee, since advanced malware can detect and evade sandboxes, keeps your judgment appropriately cautious.",
          whatYouWillLearn: [
            "What a sandbox is and how isolated dynamic analysis works.",
            "How to manually submit a suspicious file or URL for analysis.",
            "Why behavioral analysis catches zero-day malware that signatures miss.",
            "What the High, Medium, and Low risk levels mean.",
            "How to read a behavior report, including registry changes and network connections.",
            "The serious safety precautions required when downloading sandbox samples.",
            "Why even a Low rating is not an absolute guarantee of safety."
          ],
          steps: [
            "Go to Agentic SIEM and XDR and open Sandbox Analysis, the tool for safely detonating suspicious objects. This is where unknown files and URLs are tested.",
            "Click Submit Object and upload the suspicious item, such as an email attachment, for analysis. The object runs in the isolated environment, never on your real systems.",
            "Wait for the analysis to complete and review the assigned risk level of High, Medium, or Low. This rating is the sandbox's verdict based on the behavior it observed.",
            "Examine the detailed behavior report, including modified registry keys and attempted network connections, to understand exactly what the object did and why it earned its rating."
          ],
          scenario: "A user forwards an unusual PDF to the security team, and the local antivirus on their machine reports it as clean, which initially seems reassuring. The analyst, however, is suspicious of the context in which it arrived and decides not to trust the signature-based verdict alone. She submits the PDF to Sandbox Analysis, where it runs in a fully isolated environment. There the sandbox observes the PDF attempting to inject code into another process, a classic malicious behavior that no signature had yet been written for, and flags it as High Risk. The behavior report gives her concrete evidence of the injection attempt. What the antivirus missed as an unknown file, the sandbox caught by watching what it actually tried to do.",
          commonMistakes: [
            "Downloading suspicious file objects from the sandbox to a production endpoint without isolation, which can infect your own machine.",
            "Assuming a Low risk level guarantees a file is safe, ignoring that advanced malware can detect and evade sandboxes.",
            "Trusting a clean signature-based antivirus result and never sandboxing a genuinely suspicious file.",
            "Reading only the risk level and skipping the behavior report that explains it.",
            "Handling live sandbox samples carelessly, forgetting they are real, functioning malware."
          ],
          summary: "Sandbox Analysis runs suspicious files and URLs in a secure, isolated virtual environment and judges them by their behavior, assigning a risk level of High, Medium, or Low. This dynamic analysis catches zero-day malware that signature-based detection misses, because it watches what an object actually does. Sample files are live malware, so downloading them without isolation is dangerous, and even a Low rating is not an absolute guarantee. The beginner takeaway is to sandbox anything genuinely suspicious, read the behavior report, and treat samples with extreme caution."
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
          whatThisMeans: "Throughout Trend Vision One, you can right-click on an object, such as a file, an IP address, an endpoint, or an email, to open a 'context menu' of actions you can take on it. This menu is 'contextual', meaning the options it shows depend on the type of object you clicked, because some actions only make sense for certain objects. The actions are organized into categories, commonly General, Analysis, and Response, where Response actions are the ones that actually counter a threat, such as adding an object to a block list or terminating a process. The menu is available across many apps, including the Workbench, Search results, Observed Attack Techniques, and others. It puts the power to act right next to the evidence you are looking at.",
          whyItMatters: "During an active breach, every second matters, and forcing an analyst to leave the investigation, navigate to a separate management console, and re-find the object would waste critical time. The right-click context menu collapses that gap, letting you respond to a threat from the exact screen where you discovered it. This keeps the analyst in flow, reduces mistakes from copying indicators between tools, and dramatically shortens response time. Understanding that the available options change by object type prevents confusion about why a particular action is or is not offered. Knowing that some actions require administrative approval helps you anticipate the proper workflow rather than being surprised mid-response.",
          whatYouWillLearn: [
            "What the right-click context menu is and which apps it appears in.",
            "Why the menu is contextual and changes based on the object type.",
            "The categories of actions: General, Analysis, and Response.",
            "How to initiate a response action on a file, IP, endpoint, or email.",
            "Why responding from the investigation screen saves critical time.",
            "Why some actions are unavailable for certain object types.",
            "Why some response actions require administrative approval before executing."
          ],
          steps: [
            "Open an active Workbench alert, or any view such as Search results that lists objects. The context menu is available wherever objects are displayed.",
            "Right-click on a suspicious object, such as a file name in the Highlights section, to open its context menu. The menu shows only the actions valid for that object type.",
            "Hover over the Response category and review the available options, such as adding the object to a block list or terminating a process, then select the action you need to counter the threat."
          ],
          scenario: "An analyst is calmly working through threat-hunting logs in Search when she spots an unknown executable running on several machines, something that should not be there. Instead of opening a separate endpoint console, copying the file hash, and hunting for the right setting, she simply right-clicks the file hash directly in the search results. The context menu appears with response options appropriate for a file, and she selects the action to add it to the Suspicious Object List. With that single click, the executable is blocked across every endpoint in the company at once. The whole response takes seconds and never breaks her concentration, because the action lived right next to the evidence that prompted it.",
          commonMistakes: [
            "Not realizing that right-click options change by object type, such as expecting to isolate an IP or block an endpoint's email address.",
            "Forgetting that some response actions require administrative approval before they execute.",
            "Leaving the investigation to use a separate console when the same action was available via right-click.",
            "Copying indicators between tools by hand and introducing transcription errors.",
            "Overlooking the Response category and using only the General or Analysis options."
          ],
          summary: "The right-click context menu provides immediate, contextually aware actions on objects like files, IPs, endpoints, and emails, available across apps such as the Workbench, Search, and Observed Attack Techniques. Its options change by object type and are grouped into General, Analysis, and Response categories. By letting you respond from the exact screen where you found the evidence, it saves crucial time during an incident. The beginner takeaway is to reach for the right-click menu first, remembering that available actions depend on the object and some may need approval."
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
          whatThisMeans: "Isolate Endpoint is a containment action that cuts off a machine's network connections, with one deliberate exception: it preserves the machine's communication with the Trend Vision One console. In other words, the endpoint can no longer talk to other systems, the internet, or file shares, but you can still reach it to investigate and, later, to release it. This is sometimes called network containment or quarantining the host. The action is initiated from the console and is reversible, but the reversal, restoring the connection, must be done from the Response Management app rather than from the Endpoint Inventory. Isolation is one of the most important and decisive tools in incident response.",
          whyItMatters: "When a machine is actively compromised, especially by ransomware, the single most urgent goal is to stop the threat from spreading 'laterally' to other systems and file shares. Isolation accomplishes exactly that by severing the infected machine's ability to reach anything else, freezing the blast radius. Crucially, because the console connection is preserved, the analyst does not lose the ability to investigate the machine or run further response actions on it while it is contained. The reason restoration is handled in Response Management is that all response tasks are tracked there as auditable records, so you reconnect a host by acting on its isolation task. Knowing this workflow, and weighing the business impact before isolating critical infrastructure, separates a controlled response from a disruptive one.",
          whatYouWillLearn: [
            "What network traffic is blocked and what is preserved during isolation.",
            "Why the console connection remains active while everything else is cut off.",
            "What lateral movement is and how isolation stops it.",
            "How to isolate an endpoint from the console.",
            "Why restoration must be performed from the Response Management app, not Endpoint Inventory.",
            "How to locate an isolation task and restore the connection.",
            "Why you should weigh business impact before isolating critical systems."
          ],
          steps: [
            "Go to Endpoint Inventory and select the compromised endpoint you need to contain. This is where you act on a specific machine.",
            "Click Response actions and select Isolate Endpoint to sever its network connections while preserving the link to the console. The machine is now contained but still reachable by you for investigation.",
            "When the threat is resolved, go to the Response Management app, locate the specific Isolate Endpoint task, and select Restore Connection. Restoration is done here, not from Endpoint Inventory, because all response tasks are tracked and reversed in Response Management."
          ],
          scenario: "A SOC analyst watches an alert escalate as a server begins rapidly encrypting files, the unmistakable signature of an active ransomware attack. Knowing that every passing second risks the infection spreading to the company's shared drives, she immediately selects the server in Endpoint Inventory and triggers Isolate Endpoint. The server is instantly cut off from the local network, halting the ransomware before it can reach any file shares, yet because the console connection is preserved she remains fully able to investigate the machine. She gathers forensic evidence and confirms the threat is contained, all while the rest of the network stays safe. Later, after the server is cleaned and verified, she opens Response Management, finds its isolation task, and restores the connection in a controlled, documented way.",
          commonMistakes: [
            "Attempting to restore an isolated endpoint directly from Endpoint Inventory, when restoration must be done via the Response Management app.",
            "Isolating a critical system such as a domain controller without first considering the business impact.",
            "Forgetting that the console connection remains active, and assuming the machine is now completely unreachable.",
            "Hesitating to isolate a ransomware-infected machine, allowing the threat time to spread laterally.",
            "Failing to track the isolation task, making the eventual restoration harder to manage."
          ],
          summary: "Isolating an endpoint severs all of its network traffic except the connection to the Trend Vision One console, containing a threat while keeping the machine reachable for investigation. It is the decisive action for stopping ransomware and other threats from spreading laterally to other systems and file shares. Restoration is performed from the Response Management app, where all response tasks are tracked. The beginner takeaway is that isolation freezes the blast radius without blinding you to the host, and you reconnect it through Response Management once the threat is resolved."
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
          whatThisMeans: "Remote Shell and Custom Scripts give administrators a secure way to run commands and scripts directly on a managed endpoint from the cloud console, without physically touching the machine. A 'remote shell' is a live command-line session, opened in your browser, that connects straight to the endpoint so you can type commands and see results in real time. 'Custom scripts' are reusable Bash or PowerShell programs that you upload once and can then deploy to endpoints to automate a remediation. A key workflow detail is that custom scripts must first be uploaded in the Response Management app before they can be executed on any endpoint. Together these tools give incident responders hands-on control of a machine remotely.",
          whyItMatters: "During an incident, a responder often needs to do something specific that no built-in button covers, such as collecting an unusual piece of forensic data, killing a particular rogue process, or applying an emergency configuration change. Remote Shell and Custom Scripts provide exactly that flexibility, granting direct access without dispatching someone to the physical machine, which may be in another building or country. This dramatically speeds up deep remediation and investigation. Because this power is significant, it is wrapped in security controls, and running unverified scripts is genuinely dangerous since a bad command can damage the operating system or delete critical files. Understanding both the capability and its guardrails lets you use it confidently and safely.",
          whatYouWillLearn: [
            "What a remote shell session is and how it connects to an endpoint.",
            "The purpose of the Start Remote Shell Session action.",
            "What custom scripts are and how Bash and PowerShell are used.",
            "Why custom scripts must be uploaded in Response Management before execution.",
            "How to deploy an uploaded script to a target endpoint.",
            "The security controls and care required around remote scripting.",
            "Why running unverified scripts can damage a system."
          ],
          steps: [
            "Select an endpoint in the Endpoint Inventory that you need hands-on access to. This identifies the target machine for your session or script.",
            "Click Response actions and select Start Remote Shell Session to open a secure command-line interface to the machine directly in your browser. From here you can run commands and see results live.",
            "For reusable automation, navigate to Response Management and open the Response Scripts area instead. This is the required home for custom scripts.",
            "Click Add script to upload a custom Bash or PowerShell script, then deploy it to the target endpoint. Remember that a script must be uploaded here before it can run anywhere."
          ],
          scenario: "An incident responder determines that malware is persisting on an endpoint through a rogue registry key that keeps relaunching it, and no standard cleanup action removes that specific key. Rather than asking someone to physically visit the machine, he selects it in Endpoint Inventory and starts a Remote Shell session that opens a secure command line right in his browser. He queries the registry to confirm the malicious key, deletes it precisely, and restarts the affected service, all interactively and carefully. Because he is working in a controlled, audited session, every command he runs is tracked. The persistence mechanism is gone within minutes, and he never had to leave his desk or touch the physical hardware.",
          commonMistakes: [
            "Running unverified scripts that could damage the operating system or delete critical files.",
            "Not realizing that custom scripts must be uploaded in the Response Management app before they can be executed on endpoints.",
            "Using a remote shell to run destructive commands without first confirming exactly what they will do.",
            "Treating remote shell and scripting as routine tools rather than powerful, audited capabilities.",
            "Skipping verification of a script's source, exposing endpoints to a malicious or buggy script."
          ],
          summary: "Remote Shell and Custom Scripts let responders run commands and Bash or PowerShell scripts directly on managed endpoints from the cloud, without physical access. A remote shell is a live, browser-based command line, while custom scripts are reusable programs that must be uploaded in Response Management before they can be deployed. These tools enable deep, flexible remediation and forensics. The beginner takeaway is that they offer powerful hands-on control wrapped in security controls, so scripts and commands must always be verified before running to avoid damaging a system."
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
          whatThisMeans: "Threat mitigation has two complementary sides. On one side, you block suspicious objects, such as IP addresses, domains, URLs, and file hashes, across the whole company so they cannot cause harm. On the other side, the 'Exception List' lets you mark objects you trust so they are not blocked or flagged. The Exception List supports those same object types, domains, hashes, IPs, and URLs, up to a maximum of 5,000 entries. A crucial nuance is scope: exceptions suppress detections made by Trend Vision One's cloud-managed engine, but they do not override a local endpoint engine, so if the on-device antivirus or behavior monitoring independently determines a file is malicious, it will still act. Understanding this boundary is essential to using exceptions correctly.",
          whyItMatters: "Security engines occasionally flag legitimate things, such as a custom internal tool that behaves unusually, and if those false positives are left to block freely they can disrupt real business operations. The Exception List is how you prevent that, telling the platform that a specific trusted object is safe so it stops generating noise or blocks around it. Without this safety valve, analysts would be flooded with alerts about known-good software and might be tempted to weaken protection broadly. Knowing that exceptions apply only to the cloud-managed layer, not local engines, prevents the confusing situation of adding an exception and still seeing a file blocked on the endpoint. Respecting the 5,000-entry limit keeps the list manageable and meaningful rather than bloated with unnecessary items.",
          whatYouWillLearn: [
            "The two sides of threat mitigation: blocking suspicious objects and excepting trusted ones.",
            "The object types supported in the Exception List.",
            "The maximum number of exceptions allowed.",
            "How an exception suppresses cloud-managed detections.",
            "Why exceptions do not override independent local endpoint engines.",
            "How to add an exception such as a SHA-256 hash or trusted domain.",
            "Why keeping the list lean avoids hitting the entry limit unnecessarily."
          ],
          steps: [
            "Go to Agentic SIEM and XDR and open the Exception List, also reachable via Detection Model Management. This is where trusted objects are recorded.",
            "Click Add to open the Add Exception screen, where you specify the object you want the platform to treat as safe.",
            "Enter the object, such as a file SHA-256 hash or a trusted internal domain like internal.local, choosing the correct type for what you are excepting.",
            "Save the exception and verify it appears in the list, confirming the cloud-managed engine will now suppress detections for that object."
          ],
          scenario: "A company has built a custom internal accounting tool that, because it automates unusual file and system operations, gets repeatedly flagged as suspicious by the XDR engine. Each flag generates noise and threatens to block a tool the finance team depends on daily. The administrator confirms the tool is genuinely safe, then adds its file SHA-256 hash to the Exception List so the cloud-managed engine stops flagging it. The accounting tool now runs smoothly without generating alerts, and analysts are no longer distracted by a known-good application. The administrator also notes that if any endpoint's local antivirus independently flagged the same file, that would need to be handled separately, because the cloud exception does not silence local engines.",
          commonMistakes: [
            "Assuming an exception will stop a local antivirus or behavior-monitoring engine, when exceptions only suppress Trend Vision One cloud-managed detections.",
            "Exceeding the 5,000 exception limit by adding unnecessary or duplicate items.",
            "Excepting an object without first confirming it is genuinely safe.",
            "Entering the wrong object type, so the exception does not match what the engine detects.",
            "Using broad exceptions to silence alerts instead of investigating why something is being flagged."
          ],
          summary: "Threat mitigation pairs company-wide blocking of suspicious objects with an Exception List that marks trusted objects as safe. The list supports domains, hashes, IPs, and URLs up to 5,000 entries, and it suppresses only Trend Vision One cloud-managed detections, not independent local endpoint engines. This safety valve prevents legitimate tools from being blocked while keeping analyst noise down. The beginner takeaway is to except only verified-safe objects, keep the list lean, and remember that a cloud exception does not silence a local engine."
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
          whatThisMeans: "Generating a report means producing a packaged summary of your security data that can be shared outside the live console. Trend Vision One offers pre-built 'templates', ready-made report layouts for common needs such as endpoint inventory or vulnerability assessment, as well as custom reports you configure yourself. Reports can be produced in different formats, most commonly PDF for polished, visual summaries and CSV for raw, spreadsheet-friendly data. A custom report can combine data from multiple apps, such as endpoint, email, and network, into one document rather than forcing recipients to read several separate reports. In short, reporting turns the platform's continuous data into shareable artifacts for people who do not log in to the console.",
          whyItMatters: "Security work only creates value when its results are communicated, and not everyone who needs that information uses the console. Reports are how you communicate risk to executives, demonstrate compliance to auditors, and share operational metrics with other teams. A well-chosen format matters: a PDF with charts is persuasive in a boardroom, while a CSV is better when another team needs to manipulate the data. Knowing how to build a single custom report that spans multiple layers saves you from stitching together several documents by hand. Without effective reporting, the insights the platform produces stay locked inside the SOC and never inform the decisions they should.",
          whatYouWillLearn: [
            "What report templates are and how to find and use them.",
            "The difference between PDF and CSV output and when to use each.",
            "How to preview a template's layout before generating.",
            "How to configure report parameters and generate a report.",
            "How to build a custom report combining data from multiple apps.",
            "Why some templates require specific app licenses to be available.",
            "How reports communicate risk and compliance to non-console audiences."
          ],
          steps: [
            "Go to Dashboards and Reports and open the Reports app, the home for all report generation. This is where templates and custom reports live.",
            "On the Report Templates tab, click a template title, such as Endpoint Inventory, to begin working from a ready-made layout. Templates save you from designing a report from scratch.",
            "Click View PDF sample to preview the layout before committing, so you know exactly what the recipients will see.",
            "Configure the report parameters, such as the time range and scope, and click Generate to produce the finished report in your chosen format."
          ],
          scenario: "An administrator is asked to present the company's vulnerability-patching progress to the executive board, an audience that will never log in to the security console. Rather than exporting raw logs, she opens the Reports app and selects the Vulnerability Assessment template, which is designed exactly for this purpose. She previews the PDF sample to confirm the layout is clean, sets the time range to the last quarter, and generates a polished PDF full of charts and clear metrics. She emails the single document to the board, who can immediately see the downward trend in open vulnerabilities without needing any technical explanation. The platform's data has been translated into a form that drives an executive decision to fund further remediation.",
          commonMistakes: [
            "Creating multiple separate reports when a single custom report could combine endpoint, email, and network data.",
            "Assuming all report templates are available, when some require specific app licenses.",
            "Choosing CSV for an executive audience that needs a polished, visual PDF, or vice versa.",
            "Generating a report without previewing the layout and sending an unsuitable document.",
            "Exporting raw logs to stakeholders instead of using a purpose-built report template."
          ],
          summary: "The Reports app generates shareable summaries of your security data from pre-built templates or custom configurations, in formats such as PDF for polished visuals and CSV for raw data. Custom reports can combine multiple layers into one document, and previewing a template ensures the output fits its audience. Some templates depend on specific app licenses. The beginner takeaway is that reporting is how the platform's insights reach the executives, auditors, and teams who need them but never open the console."
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
          whatThisMeans: "A scheduled report is one that the platform generates and distributes automatically on a recurring basis, such as daily, weekly, or monthly, instead of you producing it by hand each time. You define the report once, set its recurrence and its email recipients, and the system handles every future delivery. Scheduled reports are managed under the Scheduled Report Settings tab in the Reports app, which is separate from the list of already-generated report files. An important distinction is that the schedule and the individual generated files are managed independently: deleting a generated file does not delete the schedule that created it. Scheduling turns reporting from a repeated manual chore into a hands-off, reliable routine.",
          whyItMatters: "Stakeholders often need information on a regular cadence, such as a weekly security summary, and manually generating and emailing it every single week is tedious and easy to forget. Automation through scheduling guarantees those updates arrive on time, every time, without consuming an administrator's attention. This reliability builds trust with the teams who depend on the reports and frees the SOC to focus on actual security work. Understanding that schedules and generated files are separate prevents the surprise of deleting an old file and wrongly believing you have stopped future deliveries. It also matters to schedule reports only for recipients permitted to see the underlying data, so automation does not accidentally leak information.",
          whatYouWillLearn: [
            "What a scheduled report is and how recurrence works.",
            "How to configure a scheduled report with recipients and a cadence.",
            "Where to manage and edit scheduled report settings.",
            "Why schedules and generated report files are managed independently.",
            "Why deleting a generated file does not delete its schedule.",
            "How scheduling guarantees timely, hands-off delivery to stakeholders.",
            "Why recipients must have permission to view the underlying data."
          ],
          steps: [
            "Go to the Scheduled Report Settings tab in the Reports app, which is where recurring reports are created and managed. This is distinct from the list of generated files.",
            "Click Create custom report and choose the Schedule option under generation settings to make the report recurring rather than one-time.",
            "Define the recurrence, for example every Monday at 9:00 AM, and enter the recipient email addresses who should receive each delivery.",
            "Save the schedule and verify it appears in the list, confirming the platform will now generate and send the report automatically on the chosen cadence."
          ],
          scenario: "The security administrator wants the network team to stay continuously aware of newly discovered rogue devices, but he does not want to remember to send a list every week. He opens the Scheduled Report Settings tab and creates a custom Network Inventory report, choosing CSV so the network team can sort and filter the data themselves. He sets it to recur every Monday at 9:00 AM and adds the network team's distribution list as recipients. From then on, every Monday morning the team automatically finds a fresh CSV of newly discovered assets in their inbox, with no action required from the administrator. Weeks later he deletes some old generated files to tidy up, and the schedule keeps running untouched, exactly because schedules and files are managed separately.",
          commonMistakes: [
            "Assuming that deleting a generated report file also deletes its recurrence schedule, when schedules must be deleted separately.",
            "Scheduling reports for accounts or addresses that do not have permission to view the underlying data.",
            "Setting up a schedule but never verifying it appears in the list and actually runs.",
            "Choosing an inappropriate cadence, flooding recipients or leaving them with stale information.",
            "Confusing the Scheduled Report Settings tab with the generated reports list and editing the wrong thing."
          ],
          summary: "Scheduled reports automate the recurring generation and distribution of security data on a daily, weekly, or monthly cadence, configured under the Scheduled Report Settings tab. The schedule and the individual generated files are managed independently, so deleting a file does not stop future deliveries. Scheduling guarantees stakeholders receive timely updates without manual effort, provided recipients are permitted to see the data. The beginner takeaway is that scheduling makes reporting reliable and hands-off, but you manage the recurring schedule separately from the files it produces."
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
          whatThisMeans: "A custom widget is a dashboard panel you build yourself from a query in XDR Data Explorer, so it shows exactly the metric you care about. Creating one involves a few concepts. An 'aggregation' is a math operation applied to your query results, such as Count, Sum, or Average, that turns many raw records into a single meaningful number per group. 'Grouping', or Group By, decides how the data is divided up, for example by user or by time. The grouping method you choose then determines which 'chart types' are available, because some visualizations only make sense for certain groupings, such as a time-series line chart requiring time-based grouping. The result is a tailored visualization you can place on any dashboard.",
          whyItMatters: "The pre-built widgets cover common needs, but every SOC has questions unique to its environment that the defaults simply do not answer. Custom widgets let you turn any investigative query into a permanent, at-a-glance monitor on your dashboard. For example, you can convert a one-time hunt for failed logins into a live chart that surfaces brute-force attempts continuously. Understanding aggregations and groupings is what lets you shape raw data into a clear, meaningful picture rather than an unreadable jumble. Knowing that grouping constrains chart type prevents the frustration of choosing a visualization that your data cannot support. Custom widgets are how you make the dashboard truly your own.",
          whatYouWillLearn: [
            "What a custom widget is and how it originates from an XDR Data Explorer query.",
            "What an aggregation is and the common functions like Count, Sum, and Average.",
            "What grouping, or Group By, does to your data.",
            "How the grouping method determines which chart types are available.",
            "Why time-based charts require time-based grouping.",
            "How to preview a widget with Fetch Data before saving it.",
            "How to place a finished custom widget on a dashboard for live monitoring."
          ],
          steps: [
            "Go to Agentic SIEM and XDR and open XDR Data Explorer, the source of custom widget data. Widgets are built from queries you run here.",
            "Run a query that captures the metric you want to monitor, for example counting failed logins by user. The query defines the raw data behind the widget.",
            "Click the Custom Widget icon in the results pane to begin turning the query into a visualization.",
            "Configure the aggregation, such as Count, and the Group By field, such as the user field, so the data is summarized the way you intend.",
            "Click Fetch Data to preview the result, choose a compatible chart type such as Bar Chart, and click Save. Previewing first confirms the configuration produces the chart you expect."
          ],
          scenario: "A SOC wants to keep a constant eye on brute-force login attempts, but no built-in widget shows precisely this. An analyst opens XDR Data Explorer and runs a query for failed logins, then clicks the Custom Widget icon to turn that query into a dashboard panel. She sets the aggregation to Count and groups the results by user, so the widget will show how many failed logins each account has accumulated, the classic fingerprint of a brute-force attack. She clicks Fetch Data to preview, confirms the bar chart looks right, and saves it. Finally she places the new widget on the main SOC dashboard, where it now updates continuously, instantly highlighting any account suddenly racking up failed logins. A one-time query has become a permanent early-warning monitor.",
          commonMistakes: [
            "Saving a custom widget without clicking Fetch Data first to verify the configuration and preview the chart.",
            "Choosing a chart type that the grouping method does not support, such as a time-series line chart without time-based grouping.",
            "Picking an aggregation that does not match the question, producing a meaningless number.",
            "Grouping by a field with too many distinct values, creating an unreadable chart.",
            "Building a useful widget but never placing it on a dashboard where the team will see it."
          ],
          summary: "Custom widgets are built from XDR Data Explorer query results using an aggregation such as Count or Sum and a Group By field, then visualized as a bar, pie, line, or table chart. The grouping method determines which chart types are available, so time-series charts need time-based grouping. Previewing with Fetch Data before saving confirms the result. The beginner takeaway is that custom widgets turn any one-time investigative query into a permanent, tailored monitor on your dashboard."
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
          whatThisMeans: "Executive reporting is about producing clear, high-level summaries of risk and compliance for leaders who need conclusions rather than raw data. TrendAI Companion is an AI assistant built into the console that you interact with using natural language, meaning you simply type a request in plain English rather than configuring fields or writing queries. You can ask it to summarize your posture or generate a compliance report, and it produces an easy-to-understand result you can export as a PDF or CSV. It is primarily an analysis and reporting assistant, so it helps you understand and communicate data rather than directly changing security configurations. Think of it as a knowledgeable helper that translates complex security data into executive-ready language on demand.",
          whyItMatters: "Executives and board members make funding and strategy decisions, but they neither have the time nor the need to read raw security logs, so information must be distilled for them. TrendAI Companion bridges that gap, turning dense data into concise summaries and polished reports in seconds, using nothing more than a typed question. This dramatically lowers the effort of producing the high-level updates leadership constantly requests, and it does so in plain language that non-specialists understand. Knowing the assistant's scope, that it analyzes and reports rather than reconfiguring the platform, sets correct expectations and prevents misuse. By making executive communication fast and clear, it helps the security team secure the support and budget it needs.",
          whatYouWillLearn: [
            "What executive reporting is and why leaders need summaries, not logs.",
            "What TrendAI Companion is and how natural-language interaction works.",
            "The role of the Companion in analyzing data and generating reports.",
            "How to generate a compliance report from within Compliance Management.",
            "How to export executive summaries as PDF or CSV.",
            "The scope of the assistant as an analysis and reporting helper.",
            "Why the Companion does not directly change security configurations."
          ],
          steps: [
            "Open the Compliance Management screen, where framework and compliance data the Companion can summarize is available. This is a natural place to generate executive compliance reports.",
            "Click the TrendAI Companion icon in the side panel to open the assistant. This is where you interact with it in plain language.",
            "Ask the Companion in natural language for what you need, such as a request to generate a PDF compliance report for your NIST framework. Clear, specific requests produce the most useful results.",
            "Review the summary the Companion returns and download the generated PDF or CSV to share with stakeholders."
          ],
          scenario: "The CISO stops by the security team's desk needing a quick status update on PCI DSS compliance before a meeting in fifteen minutes. Instead of manually digging through configuration checks and assembling a document, the administrator opens TrendAI Companion and simply types a request for a summary of the organization's PCI compliance gaps. Within moments the assistant returns a clear, bulleted list of the outstanding issues along with a download link for a CSV report. The administrator hands the CISO a concise, accurate summary in plain language, produced in under a minute, that is perfectly suited to the upcoming meeting. What would have been a stressful scramble becomes a single natural-language question.",
          commonMistakes: [
            "Using raw technical logs for executive presentations instead of the summarized reports the Companion generates.",
            "Assuming TrendAI Companion can modify security configurations directly from the chat, when it is primarily an analysis and reporting assistant.",
            "Asking vague questions that produce unfocused results instead of specific, well-scoped requests.",
            "Overlooking the ability to export the Companion's output as a shareable PDF or CSV.",
            "Manually assembling executive summaries by hand when the Companion could produce them in seconds."
          ],
          summary: "TrendAI Companion is an AI assistant that uses natural language to analyze security data and generate executive-ready compliance and risk reports, exportable as PDF or CSV. It distills complex data into clear summaries for leaders who need conclusions rather than logs, all from a typed request. Its scope is analysis and reporting, not directly reconfiguring the platform. The beginner takeaway is that the Companion turns the constant demand for high-level updates into a quick, plain-language question with a polished, shareable answer."
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
          whatThisMeans: "The Final Assessment is a comprehensive ten-question exam that draws on every core module you have completed. Rather than testing one topic in isolation, it mixes questions across the whole platform, from alerts and the Workbench to endpoint isolation, exception limits, and reporting. Several questions are scenario-based, meaning they describe a realistic situation and ask you to apply your knowledge rather than simply recall a fact. Passing requires a score of 80 percent or higher, after which you can enter your name to generate a personalized completion certificate. It is the capstone that confirms you have absorbed the core curriculum as a connected whole.",
          whyItMatters: "Working knowledge of a security platform is only valuable if it is reliable, and an assessment is how you and your organization verify that reliability before a real incident puts it to the test. Passing confirms you can not only remember individual features but apply them correctly under the pressure of a realistic scenario. The certificate provides tangible proof of competency, often used to satisfy an organization's annual security training requirements and to demonstrate readiness to managers and auditors. The scenario format matters because real incidents never arrive as neat single-fact questions; they require connecting concepts across layers. Treating the assessment seriously is the final step in turning study into operational confidence.",
          whatYouWillLearn: [
            "How to apply concepts from across all of the core modules together.",
            "How to analyze scenario-based questions rather than relying on rote recall.",
            "How to connect knowledge across endpoints, alerts, response, and reporting.",
            "How to identify the key detail in a scenario that determines the answer.",
            "What passing threshold is required to earn the certificate.",
            "How to generate and print your personalized completion certificate.",
            "How to gauge your own readiness to operate the console in real situations."
          ],
          steps: [
            "Review the key summaries of the previous modules to refresh the concepts the exam will draw on. A quick review across all topics prepares you for the mixed question set.",
            "Answer all ten questions in the quiz below, reading each scenario carefully to identify the detail that drives the correct choice. Scenario questions reward careful reading over speed.",
            "Achieve a score of 80 percent or higher to pass the assessment. If you fall short, revisit the relevant modules and try again.",
            "Enter your name to generate your personalized certificate, then save or print it as proof of completion."
          ],
          scenario: "After working through all of the core modules, an analyst sits down to take the Final Assessment as the last step of her training. She does not rush; for each scenario question she pauses to find the single detail that matters, such as recognizing that isolation preserves only the console connection or that exceptions do not stop local engines. Drawing on what she learned across endpoints, alerts, and response, she connects concepts rather than guessing, and finishes with a score of 90 percent. She enters her name, generates her completion certificate, and presents it to her manager to satisfy the company's annual security training requirement. More importantly, she now feels genuinely ready to operate the console during a real incident.",
          commonMistakes: [
            "Rushing through the questions without carefully reading the scenario details that determine the answer.",
            "Forgetting to enter your name before generating and printing the certificate.",
            "Relying on rote memorization instead of understanding how concepts connect across modules.",
            "Skipping the review of module summaries before starting the exam.",
            "Treating a passing score as the goal rather than as confirmation of real operational readiness."
          ],
          summary: "The Final Assessment is a ten-question, scenario-based exam spanning every core module, requiring 80 percent or higher to pass and earn a personalized completion certificate. Its mixed, situational format tests whether you can apply and connect concepts the way a real incident demands, not just recall isolated facts. The certificate serves as proof of competency for training requirements and managers. The beginner takeaway is to read each scenario carefully, connect what you learned across modules, and treat passing as confirmation that you are ready to operate the console for real."
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
          whatThisMeans: "The AI Security Blueprint is a dashboard that guides you in securing both the AI systems your organization builds and the AI services your people use. It organizes protection around the AI lifecycle, commonly broken into phases such as Develop, Deploy, and Runtime. The Develop phase covers the creation of AI, including scanning code repositories for vulnerabilities and exposed secrets like API keys. The Deploy phase covers validating what you ship, such as container images, before it goes live, and the Runtime phase covers monitoring AI infrastructure, including Kubernetes clusters, while it is in production. To bring AI systems into this view, you tag them as AI assets so the platform can factor them into your security posture.",
          whyItMatters: "Organizations are rapidly adopting AI, and in doing so they introduce a whole new category of risks that traditional security tools were not built for, such as prompt injection, model theft, and leakage of sensitive data through prompts. These risks span the entire AI lifecycle, not just production, so a vulnerability introduced during development, like a secret left in source code, can be just as damaging as a runtime attack. The Blueprint provides visibility across all of those phases in one place, so AI does not become an unmonitored shadow technology. Tagging AI assets is essential because untagged systems are invisible to your AI security posture. Without an end-to-end view, the fastest-growing part of many environments would also be the least secured.",
          whatYouWillLearn: [
            "What the AI Security Blueprint is and which AI risks it addresses.",
            "The phases of the AI lifecycle: Develop, Deploy, and Runtime.",
            "What happens in the Develop phase, including scanning code for exposed secrets.",
            "How the Deploy phase validates artifacts like container images before release.",
            "How the Runtime phase monitors AI infrastructure such as Kubernetes clusters.",
            "How to tag AI assets so they appear in your AI security posture.",
            "Why protecting only production AI leaves dangerous gaps in development."
          ],
          steps: [
            "Go to AI Security and open the AI Security Blueprint, the central dashboard for AI protection guidance. This is where the AI lifecycle view lives.",
            "Click Manage AI asset tags to tag a model or workload in your inventory, which brings it into the platform's AI security posture. Untagged AI assets remain invisible to this view.",
            "Click View code repository inventory to check your AI code for exposed secrets such as hard-coded API keys, addressing risk in the Develop phase.",
            "Monitor your live AI infrastructure under the Runtime and Production section to watch deployed models and clusters for anomalies."
          ],
          scenario: "A company is building a custom customer-service chatbot powered by a large language model, and the security team wants to protect it across its entire lifecycle rather than only after launch. In the Develop phase they use the Blueprint to scan the chatbot's code repository and catch an API key that a developer had accidentally hard-coded, removing it before it could leak. As the project moves toward release, they validate the container image in the Deploy phase to ensure nothing malicious was introduced. Once the chatbot is live, they monitor its runtime infrastructure, watching CPU and memory for anomalies that could indicate abuse or attack. Because they tagged the chatbot as an AI asset from the start, every one of these checks feeds into a single, coherent AI security posture.",
          commonMistakes: [
            "Only protecting AI models in production while ignoring vulnerabilities in the development pipeline and code repositories.",
            "Failing to tag AI assets, which prevents them from being factored into the AI security posture.",
            "Leaving exposed secrets like API keys in AI code repositories during development.",
            "Deploying container images without validating them first.",
            "Treating AI systems as ordinary workloads and missing AI-specific risks like prompt injection and model theft."
          ],
          summary: "The AI Security Blueprint provides end-to-end visibility for securing AI across the Develop, Deploy, and Runtime phases of its lifecycle. It guides you to scan code for exposed secrets, validate artifacts before deployment, and monitor live AI infrastructure such as Kubernetes clusters, all anchored by tagging your AI assets. This addresses new risks like prompt injection, model theft, and data leakage that traditional tools miss. The beginner takeaway is that AI must be secured across its whole lifecycle, not just in production, and tagging is what makes it visible to your AI posture."
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
          whatThisMeans: "AI Application Security protects the AI applications you build using two complementary components. 'AI Scanner' examines AI models themselves for vulnerabilities, a mostly static check of the model. 'AI Guard' works at runtime, inspecting the inputs (prompts) going into a model and the outputs (responses) coming out, in real time as the application is used. AI Guard is what catches a user pasting sensitive data into a prompt, a prompt-injection attempt designed to hijack the model, or a response that contains a malicious URL. There are two deployment options: Trend-hosted, where the inspection runs in Trend Micro's cloud, and Self-hosted, where it runs entirely within your own network so prompt data never leaves. Choosing the right component and deployment is the core of securing an AI application.",
          whyItMatters: "AI applications introduce risks that have no equivalent in traditional software: a user can leak confidential data simply by typing it into a prompt, and an attacker can manipulate a model's behavior through cleverly crafted input. AI Guard addresses these by inspecting every prompt and response, preventing sensitive data loss and blocking injection attacks before they take effect. AI Scanner complements this by finding weaknesses in the model before it is ever exposed. The deployment choice matters enormously for organizations with strict data residency requirements, because for them, sending prompts to any external cloud may be unacceptable, making Self-hosted the only viable option. Configuring the protections, such as templates that define what counts as sensitive data, is what makes the guard actually effective rather than just enabled.",
          whatYouWillLearn: [
            "The difference between AI Scanner and AI Guard and what each protects.",
            "How AI Guard inspects prompts and responses at runtime.",
            "The kinds of violations detected, including data leakage, prompt injection, and malicious URLs.",
            "The two deployment options: Trend-hosted and Self-hosted.",
            "Why organizations with strict data residency must choose Self-hosted.",
            "How to set up AI Scanner for a model and integrate AI Guard.",
            "Why configuring sensitive-data templates is necessary for AI Guard to be effective."
          ],
          steps: [
            "Navigate to AI Security and open AI Application Security, the home for AI Scanner and AI Guard. This is where you protect the AI apps you build.",
            "Select Set up AI Scanner to configure a vulnerability scan of your model, such as a locally hosted large language model. This checks the model itself for weaknesses.",
            "Select Integrate AI Guard to enable real-time inspection of prompts and responses, and configure templates that define the sensitive data you want to prevent from leaking.",
            "Choose the Self-hosted deployment if your organization has strict data residency requirements, so that all prompt data stays within your own network rather than going to the cloud."
          ],
          scenario: "An employee, trying to be efficient, asks the company's AI assistant to summarize a database export that happens to contain customer credit card numbers, pasting the sensitive data straight into the prompt. Without protection, those card numbers would flow into the model and potentially out of the organization's control. Instead, AI Guard inspects the prompt in real time, recognizes the credit card numbers as sensitive data based on the configured templates, and blocks the request before it reaches the model. It simultaneously alerts the SOC, so the security team is aware of the attempted data exposure. Because this particular company has strict data residency rules, AI Guard was deployed Self-hosted, ensuring even the inspection happened entirely inside their own network.",
          commonMistakes: [
            "Assuming Trend-hosted is the only option, when organizations with strict data residency must use the Self-hosted deployment.",
            "Enabling AI Guard but never configuring templates for sensitive data, so it has nothing defined to catch.",
            "Relying on AI Scanner alone and skipping the runtime protection that AI Guard provides.",
            "Overlooking prompt-injection and malicious-URL risks and focusing only on data leakage.",
            "Sending prompt data to an external cloud in an environment where data residency rules forbid it."
          ],
          summary: "AI Application Security pairs AI Scanner, which checks models for vulnerabilities, with AI Guard, which inspects prompts and responses in real time to stop data leakage, prompt injection, and malicious URLs. It can be deployed Trend-hosted or Self-hosted, with Self-hosted required for strict data residency since prompt data stays in your network. Configuring sensitive-data templates is what makes AI Guard effective. The beginner takeaway is that protecting an AI application means both scanning the model and guarding every prompt and response, deployed in the way your data rules allow."
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
          whatThisMeans: "AI Secure Access is the capability that monitors and controls how your users and devices access public generative AI services, the consumer AI tools available on the internet. Its dashboard provides widgets that track access attempts and 'content violations', meaning prompts or responses that break your policies, such as sensitive data loss, prompt injection, or inappropriate content. A central concept here is 'shadow AI', the unapproved AI tools employees adopt on their own without IT's knowledge or sanction. AI Secure Access reveals this shadow usage and lets you block access to unapproved or risky services. It also keeps a detailed Secure Access History so you can drill into the raw logs behind any violation.",
          whyItMatters: "Employees eager to be productive will try whatever AI tools they can find, and without visibility an organization has no idea what data might be flowing into unvetted external services. AI Secure Access turns that invisible shadow-AI usage into a clear, monitorable picture, showing which tools are in use and who is using them. This matters because the biggest danger is often quiet data leakage, where intellectual property or customer data leaves the company embedded in an AI prompt. By tracking violations like sensitive data loss and enforcing access rules, the organization can both block risky services and coach the users responsible. Without this, generative AI becomes an uncontrolled channel through which confidential information can silently escape.",
          whatYouWillLearn: [
            "What AI Secure Access monitors and controls.",
            "What shadow AI is and why unapproved tools are a risk.",
            "The widgets available in the AI Secure Access dashboard.",
            "The categories of AI content violations, including sensitive data loss and prompt injection.",
            "How to identify the users with the most violations.",
            "How to drill into the Secure Access History for raw logs.",
            "Why the sensitive data loss widget is critical for protecting intellectual property."
          ],
          steps: [
            "Go to AI Security and open AI Secure Access, the dashboard for generative AI usage monitoring and control. This is where shadow AI becomes visible.",
            "Review the Total Detected AI Content Violations widget to gauge the overall volume of policy-breaking AI activity. This is your headline measure of AI risk exposure.",
            "Identify the top users with AI content violations to see who is driving the risk and may need coaching or closer attention.",
            "Click a user's violation count to open the Secure Access History and view the raw logs behind their violations, revealing exactly what occurred."
          ],
          scenario: "The CISO grows concerned that employees might be using unapproved AI services and asks the security team for a clear answer. The administrator opens AI Secure Access and pulls up the dashboard, which immediately surfaces a list of access attempts and content violations. Among them are several blocked attempts to use an unapproved third-party writing assistant, confirming that the access rules are actively enforcing policy. Drilling into one user's history, the administrator finds an attempt that triggered a sensitive data loss violation, showing that proprietary text was nearly pasted into the external tool. The CISO now has concrete evidence of both the shadow-AI usage and the protection working, and the team follows up with targeted coaching for the users involved.",
          commonMistakes: [
            "Not monitoring the sensitive data loss widget, which reveals whether intellectual property is leaving the company through AI prompts.",
            "Assuming all AI services are blocked by default without actually configuring active access rules.",
            "Ignoring shadow AI usage until a data leak has already occurred.",
            "Reviewing only the total violation count without drilling into the users and history behind it.",
            "Treating every violation as malicious instead of recognizing many stem from well-meaning but careless users."
          ],
          summary: "AI Secure Access monitors and controls user and device access to public generative AI services, exposing shadow AI and tracking content violations such as sensitive data loss, prompt injection, and inappropriate content. Its dashboard widgets and Secure Access History let you measure AI risk, identify the users driving it, and drill into raw logs. The sensitive data loss view is especially important for protecting intellectual property. The beginner takeaway is that AI Secure Access turns invisible, uncontrolled AI usage into a monitorable, enforceable channel."
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
          whatThisMeans: "The Cloud Accounts app is where you connect your organization's cloud provider accounts to Trend Vision One and manage the permissions that connection uses. It supports the major providers: AWS, Azure, Google Cloud, Oracle Cloud Infrastructure (OCI), and Alibaba Cloud. Connecting an account grants the platform read access through provider-native mechanisms, such as IAM roles in AWS deployed via a CloudFormation template, where 'IAM' refers to the provider's Identity and Access Management system. Once connected, Vision One can discover your cloud assets, monitor their configurations, and extend protection to your workloads. This app is the foundational first step before any cloud security capability can work.",
          whyItMatters: "Cloud environments are dynamic and sprawling, often containing thousands of resources spun up and torn down constantly, and you cannot secure what the platform cannot see. Connecting your cloud accounts is what gives Vision One visibility into those resources, bringing assets like virtual machines, storage buckets, and user identities onto your central security dashboard. Without this connection, your cloud is a blind spot entirely separate from the rest of your monitored environment. It is also important to connect not just production but staging and development accounts, since attackers happily exploit a forgotten dev environment. Keeping the granted permissions current matters too, because new scanning features may require additional access to function.",
          whatYouWillLearn: [
            "What the Cloud Accounts app does and why it is the foundational first step.",
            "Which cloud providers are supported, including AWS, Azure, GCP, OCI, and Alibaba Cloud.",
            "What IAM roles are and how a connection grants access.",
            "How connecting an account enables asset discovery and workload protection.",
            "How to connect an account using the integration wizard.",
            "Why staging and development accounts should be connected, not just production.",
            "Why granted permissions must be updated as new features are released."
          ],
          steps: [
            "Go to Cloud Security and open the Cloud Accounts app, the central place to connect and manage cloud providers. Nothing in cloud security works until an account is connected here.",
            "Click Connect Account and select your provider, such as AWS. This starts the guided integration for that provider.",
            "Follow the integration wizard to deploy the required IAM roles, for AWS typically via a CloudFormation template, granting the platform the access it needs to read your environment.",
            "Verify the connection status shows as Connected in the console, confirming that asset discovery and monitoring can now begin."
          ],
          scenario: "An organization migrates its main web application to AWS, instantly creating a large new cloud footprint that none of its existing security tooling can see. The cloud team opens the Cloud Accounts app, clicks Connect Account, and selects AWS, then follows the wizard to deploy the necessary IAM roles through a CloudFormation template. Within minutes the connection status flips to Connected. Almost immediately, the security dashboard begins populating with the organization's EC2 instances, S3 storage buckets, and IAM users, all now visible alongside their on-premises assets. What had been an opaque, separately managed cloud environment is now part of their unified security picture, ready to be assessed for misconfigurations and threats.",
          commonMistakes: [
            "Failing to update the granted IAM permissions when Trend Vision One releases new scanning features that require additional access.",
            "Connecting only production accounts and neglecting staging or development cloud environments.",
            "Assuming the cloud is secure on its own and never connecting it for monitoring at all.",
            "Stopping after deployment without verifying the connection status shows Connected.",
            "Granting the connection but never reviewing the assets it discovers."
          ],
          summary: "The Cloud Accounts app connects AWS, Azure, Google Cloud, OCI, and Alibaba Cloud to Trend Vision One, using provider-native IAM roles to grant the access needed for discovery and protection. It is the foundational first step that brings cloud assets like virtual machines, storage, and identities onto your central dashboard. Connecting non-production accounts and keeping permissions current are both essential. The beginner takeaway is that you must connect every cloud account before the platform can see or secure anything in your cloud."
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
          whatThisMeans: "Cloud Risk Management continuously inspects your connected cloud resources to find security problems, especially 'misconfigurations', which are insecure settings such as a storage bucket left open to the public internet. It compares your cloud setup against recognized standards and benchmarks like CIS and PCI, producing a compliance score, and it flags individual resources as passing or failing specific checks. Critically, it does not just identify problems; for each finding it provides step-by-step remediation guidance, sometimes including the exact command to fix the issue. This category of tool is often called cloud security posture management. It runs continuously, so new misconfigurations are caught shortly after they appear rather than at audit time.",
          whyItMatters: "The large majority of cloud breaches are not caused by sophisticated attacks but by simple mistakes, a publicly exposed storage bucket, an overly permissive access rule, an unencrypted database. These misconfigurations are easy to make and easy for attackers to find, since they scan the internet for exactly these errors constantly. Continuous scanning means your own team discovers and closes these gaps before an attacker exploits them, rather than learning about them from a breach notification. The remediation guidance turns finding a problem into fixing it quickly, even for staff who are not cloud experts. Crucially, connecting a cloud account only provides visibility; you must actively act on the findings, because the platform identifies risks but does not silently fix them for you.",
          whatYouWillLearn: [
            "What Cloud Risk Management does and what a misconfiguration is.",
            "Why misconfigurations cause the majority of cloud breaches.",
            "How the tool compares your cloud against standards like CIS and PCI.",
            "How to read the compliance score and find failing resources.",
            "How the remediation guidance helps you fix each finding.",
            "Why continuous scanning catches problems before attackers do.",
            "Why connecting an account provides visibility but not automatic fixes."
          ],
          steps: [
            "Go to Cloud Security and open Cloud Risk Management, the tool for finding and fixing cloud misconfigurations. This is where your cloud posture is assessed.",
            "Review the compliance score against standards such as CIS or PCI to gauge your overall cloud security posture at a glance.",
            "Identify resources marked as Failed, such as a storage bucket with public read access, to find the specific problems that need attention.",
            "Follow the step-by-step remediation guidance to secure each failing resource in your cloud provider's console, then confirm the fix on the next scan."
          ],
          scenario: "A developer, rushing to share a file, accidentally changes the permissions on a storage bucket that happens to contain database backups, making it readable by anyone on the internet, a serious exposure of sensitive data. Before any attacker stumbles upon it, Cloud Risk Management detects the change during its next continuous scan and immediately flags the bucket as a critical risk failing a public-access check. The finding comes with precise remediation guidance, including the exact command to remove public access. The security team applies the fix within the hour, and the following scan confirms the bucket now passes. A mistake that could have become a major data breach is caught and closed by the team itself, not discovered later by an outsider.",
          commonMistakes: [
            "Assuming that connecting a cloud account automatically fixes security issues, when you must actively review and remediate the findings.",
            "Ignoring compliance scores until an audit is scheduled instead of acting on them continuously.",
            "Treating a flagged misconfiguration as low priority despite public exposure of sensitive data.",
            "Fixing a finding but never confirming it passes on the next scan.",
            "Focusing only on production resources while leaving development cloud accounts misconfigured."
          ],
          summary: "Cloud Risk Management continuously scans connected cloud resources to detect misconfigurations, measure compliance against standards like CIS and PCI, and provide step-by-step remediation guidance. Because simple misconfigurations cause most cloud breaches, this continuous detection lets your team close gaps before attackers exploit them. Connecting an account provides visibility, but you must act on the findings, as the platform does not fix them automatically. The beginner takeaway is to treat cloud findings as an ongoing to-do list, remediating and verifying each one rather than waiting for an audit."
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
          whatThisMeans: "Network Inventory is where you manage the network security products connected to Trend Vision One and turn on the Network Sensor feature that lets them feed telemetry to the platform. These products include Virtual Network Sensors, which are software appliances, as well as hardware appliances such as Deep Discovery Inspector and TippingPoint. A network sensor monitors raw network traffic, the actual packets flowing between systems, giving a vantage point that endpoint agents do not have. The inventory lets you see your connected appliances, check their monitored throughput, and confirm the sensor feature is enabled. It is worth remembering that Network Inventory retains sensor data for 180 days, which defines how far back network-based investigations can reach.",
          whyItMatters: "Some attacker activity is only visible on the network, not on any individual endpoint, particularly 'command-and-control' communications, where malware phones home to an attacker's server, and 'lateral movement', where an intruder probes and spreads across systems. Network sensors provide the visibility to catch these behaviors even when the attacker is operating from an unmanaged device with no agent installed. This makes the network layer a powerful complement to endpoint monitoring, closing gaps that endpoint visibility alone leaves open. The 180-day retention matters because investigations sometimes need to reach back weeks to trace an attacker's earliest network activity. Properly managing appliances and bandwidth licensing ensures the sensors can actually keep up with your traffic.",
          whatYouWillLearn: [
            "What Network Inventory manages and which products it supports.",
            "The difference between Virtual Network Sensors and hardware appliances like Deep Discovery Inspector.",
            "What the Network Sensor feature does with raw network traffic.",
            "What command-and-control and lateral movement are, and why the network reveals them.",
            "Why network sensors catch attackers operating from unmanaged devices.",
            "How long Network Inventory retains sensor data.",
            "Why bandwidth licensing must match your traffic volume."
          ],
          steps: [
            "Go to Network Security and open Network Inventory, the management hub for connected network appliances. This is where network visibility is configured.",
            "Select the Inventory tab to see your connected appliances, both virtual and hardware, and their status.",
            "Click Monitored throughput to check how much bandwidth each appliance is handling, ensuring it is licensed and sized for your traffic.",
            "Verify that the Network Sensor feature is enabled on your appliances, such as Deep Discovery Inspector, so they actually forward traffic telemetry for XDR analysis."
          ],
          scenario: "An attacker manages to get onto the corporate network using an unmanaged personal laptop that has no endpoint agent, making them invisible to endpoint monitoring. Confident they are unseen, they begin scanning the network to map out targets for lateral movement. What they do not realize is that a Virtual Network Sensor is watching the raw traffic, and it recognizes the telltale pattern of network scanning. The sensor raises an alert to the SOC, exposing the intruder despite their unmanaged device. Because Network Inventory retains this telemetry for 180 days, the analysts can also look back to reconstruct exactly when the laptop first appeared and everything it touched. The network layer caught what the endpoint layer never could.",
          commonMistakes: [
            "Forgetting that Network Inventory retains sensor data for 180 days, and assuming older network activity is unavailable.",
            "Not allocating sufficient bandwidth licenses for connected Deep Discovery Inspector appliances.",
            "Relying solely on endpoint monitoring and leaving attackers on unmanaged devices invisible.",
            "Connecting appliances but never enabling the Network Sensor feature that forwards telemetry.",
            "Ignoring monitored throughput until an appliance is overwhelmed by traffic."
          ],
          summary: "Network Inventory manages connected network appliances such as Virtual Network Sensors, Deep Discovery Inspector, and TippingPoint, and enables the Network Sensor feature that captures raw traffic telemetry for XDR. This network vantage point reveals command-and-control and lateral movement, even from unmanaged devices with no endpoint agent. Sensor data is retained for 180 days, and appliances must be licensed for your bandwidth. The beginner takeaway is that network sensors close the visibility gaps endpoint monitoring leaves, catching attackers the endpoints never see."
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
          whatThisMeans: "Network Analysis Configuration is where you teach the platform about the shape of your network so it can interpret traffic intelligently. 'Network topography' means describing your environment, such as which IP ranges belong to critical servers like domain controllers and databases, and which applications are trusted. You also configure the 'Active Network Scanner', a tool that actively probes your subnets to discover unmanaged devices, and you manage settings like packet-capture exceptions for high-volume trusted traffic. Defining this context transforms raw network data from a meaningless stream into something the XDR engine can reason about. In short, it gives the detection engine a map and a sense of what matters.",
          whyItMatters: "The same network behavior can be harmless or alarming depending on which asset it targets, and without context the engine cannot tell the difference. By defining your critical servers, you let the platform assign higher severity to suspicious activity aimed at vital infrastructure than to identical activity in a disposable test environment. This focuses analyst attention where the stakes are highest. The Active Network Scanner helps you find unmanaged devices that would otherwise be blind spots, though it must be used carefully on sensitive networks. Packet-capture exceptions keep the system efficient by not drowning in trusted, high-volume traffic. Providing this context is what makes network alerts meaningful rather than uniformly noisy.",
          whatYouWillLearn: [
            "What network topography is and how defining it adds context.",
            "How to designate critical servers as Network Resources.",
            "Why asset importance changes the severity of suspicious behavior.",
            "What the Active Network Scanner does and how it discovers unmanaged devices.",
            "How to manage packet-capture exceptions for trusted high-volume traffic.",
            "Why active scanning must be used cautiously on sensitive OT subnets.",
            "How context turns a raw traffic stream into meaningful detections."
          ],
          steps: [
            "Go to Network Security and open Network Analysis Configuration, where you describe your network to the detection engine. This is where context is defined.",
            "Navigate to Network Resources and add your critical assets, such as internal domain controllers and database servers, so the engine knows which systems are most important.",
            "Configure the Active Network Scanner to discover unmanaged devices on your subnets, while being cautious about enabling it on sensitive networks where probing could cause harm.",
            "Set up packet-capture exceptions for high-volume, trusted communications so the system stays efficient and focuses capture on traffic that matters."
          ],
          scenario: "An administrator takes the time to define the organization's critical database servers under Network Resources, marking them as high-importance assets. Weeks later, an endpoint that normally has no business touching those databases attempts an unusual SQL connection to one of them. Because the platform knows these servers are critical infrastructure, it does not treat the event as routine; it raises a high-severity alert that immediately draws analyst attention. Had the servers not been defined, the same connection might have been scored no higher than a probe against a throwaway test box and buried in the noise. The context the administrator provided is exactly what elevated a quiet anomaly into a prioritized alert, catching a potential intrusion early.",
          commonMistakes: [
            "Not defining critical servers, so the XDR engine treats attacks on vital infrastructure with the same severity as attacks on test environments.",
            "Enabling the Active Network Scanner on sensitive OT subnets where discovery traffic could disrupt fragile devices.",
            "Leaving network topography undefined, leaving the detection engine without the context it needs.",
            "Failing to set packet-capture exceptions, letting trusted high-volume traffic overwhelm the system.",
            "Defining assets once and never updating them as the network changes."
          ],
          summary: "Network Analysis Configuration lets you define your network topography, including critical Network Resources, configure the Active Network Scanner to find unmanaged devices, and manage packet-capture settings. This context lets the XDR engine score suspicious behavior by the importance of the asset targeted, elevating attacks on vital infrastructure above noise. Active scanning must be used carefully on sensitive OT subnets. The beginner takeaway is that defining your network's shape and its crown-jewel assets is what makes network detections meaningful and correctly prioritized."
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
          whatThisMeans: "Third-Party Integrations let Trend Vision One exchange data with the other security tools your organization runs, presented as a catalog of integration cards you can browse and configure. Common partners include SIEMs like Splunk, which is a 'Security Information and Event Management' system that centralizes logs, SOAR platforms that automate response, and identity providers. Each integration has a direction: 'Inbound' means Vision One pulls data in from the other tool, 'Outbound' means Vision One pushes its data out to the other tool, and 'Bi-directional' means data flows both ways. Some integrations communicate directly over the internet, while others require a Service Gateway, a local relay appliance, to bridge to on-premises systems. Understanding the direction and requirements of an integration is key to setting it up correctly.",
          whyItMatters: "No security team runs on a single tool; a modern SOC stitches together many products, and their value multiplies when they share data automatically rather than living in isolation. Integrations enable that secure, automated exchange, letting you feed Vision One's high-fidelity alerts into a central SIEM or trigger responses in a SOAR. This orchestration across your whole ecosystem is what lets analysts work from one place instead of constantly switching tools. Knowing the integration direction prevents misconfiguration, such as expecting data to arrive when you actually set up an outbound flow. Recognizing when a Service Gateway is required avoids the frustration of an integration that silently fails because it had no path to an on-premises system.",
          whatYouWillLearn: [
            "What Third-Party Integrations are and how the integration catalog is laid out.",
            "What a SIEM and a SOAR are in the context of integrations.",
            "The difference between Inbound, Outbound, and Bi-directional integration types.",
            "How to locate and inspect a specific integration card such as Splunk.",
            "How to read an integration's requirements before configuring it.",
            "When a Service Gateway is needed to reach on-premises systems.",
            "Why integrating tools enables orchestrated, cross-ecosystem response."
          ],
          steps: [
            "Go to Workflow and Automation and open Third-Party Integrations, the catalog of available connections. This is where all integrations are configured.",
            "Browse the card-based layout to locate the integration you need, such as the Splunk card. Each card represents one product you can connect.",
            "Identify whether the integration type is Inbound, Outbound, or Bi-directional, since this determines which way data will flow once configured.",
            "Review the requirements, including whether a Service Gateway is needed to reach an on-premises system, before you begin setup."
          ],
          scenario: "An organization runs Splunk as the central SIEM where all of its security data is aggregated and analysts spend their day. They want Vision One's alerts to appear there automatically, so in Third-Party Integrations they open the Splunk card and configure an Outbound integration, understanding that Outbound means Vision One will push data to Splunk. From then on, whenever Vision One raises a Workbench alert, the alert details flow automatically into Splunk, where an analyst can click a link to jump straight back into the Vision One visualization for deeper investigation. The two tools now work as one connected workflow rather than two separate consoles. Recognizing the integration was Outbound saved them from wrongly expecting Splunk data to appear inside Vision One.",
          commonMistakes: [
            "Assuming all integrations work over the public internet without realizing some require a local Service Gateway relay.",
            "Not enabling third-party integration on the Service Gateway appliance itself when one is required.",
            "Misreading the integration direction and expecting data to flow the opposite way from how it was configured.",
            "Configuring an integration without first reviewing its listed requirements.",
            "Leaving security tools siloed instead of connecting them for orchestrated response."
          ],
          summary: "Third-Party Integrations connect Trend Vision One with external tools like SIEMs, SOARs, and identity providers through a catalog of integration cards, each with an Inbound, Outbound, or Bi-directional data flow. Some communicate directly while others require a Service Gateway to reach on-premises systems. Integrating tools enables automated data exchange and orchestrated response across the whole security ecosystem. The beginner takeaway is to confirm the integration's direction and requirements first, so data flows the way you intend and any needed Service Gateway is in place."
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
          whatThisMeans: "The Response Management app is the control center and audit log for every response action taken in your environment. Its Task List tab tracks the status of all response tasks, such as an Isolate Endpoint command, so you can see what was done, when, and whether it succeeded. A separate Response Scripts area lets you manage advanced response tooling: custom scripts, osquery queries, and YARA rules. 'osquery' is a tool that lets you query endpoints like a database to inspect their state, and 'YARA' is a language for writing rules that match patterns in files or memory, often used to hunt for malware. Because these capabilities are powerful, several of them, including adding osquery queries and YARA rules, require multi-factor authentication to use.",
          whyItMatters: "Powerful response capabilities must be controlled and accountable, because in the wrong hands or by mistake they could disrupt systems or be abused. Response Management provides that accountability by tracking every task in one auditable place, so there is always a record of who did what. It also gates the most sensitive actions behind MFA, ensuring that running scripts or deploying YARA rules cannot happen from a merely stolen password. Understanding task statuses precisely matters too, because a Successful status means the managing server sent the command, not necessarily that the endpoint agent finished executing it, a subtle distinction that affects how you verify a response. This control center is what makes advanced response both possible and safe to use at scale.",
          whatYouWillLearn: [
            "What the Response Management app does as a control center and audit log.",
            "How to filter and read task statuses on the Task List tab.",
            "What the Successful status actually confirms, and what it does not.",
            "What custom scripts, osquery, and YARA rules are.",
            "How to manage and deploy these advanced response tools.",
            "Which actions require multi-factor authentication.",
            "Why gating sensitive actions behind MFA protects the environment."
          ],
          steps: [
            "Go to Workflow and Automation and open Response Management, the central place to execute, track, and approve response tasks. This is the audit hub for all actions.",
            "On the Task List tab, check the status of a recent command such as Isolate Endpoint, remembering that Successful means the server sent the command, not necessarily that the agent finished it.",
            "Switch to the Response Scripts area to work with advanced tooling. This is where custom scripts, osquery, and YARA rules are managed.",
            "Review the options to add custom scripts, osquery queries, or upload YARA rule files, noting that adding osquery and YARA rules requires multi-factor authentication on your account."
          ],
          scenario: "An analyst learns of a malware family identifiable by a specific pattern in memory and wants to sweep the fleet for it using a YARA rule. She opens Response Management, goes to the Response Scripts area, and uploads the YARA rule file, completing the multi-factor authentication challenge that this sensitive action requires. With the rule in place, she triggers a Run YARA rules task targeting 100 endpoints at once. She then watches the Task List tab as the task progresses, understanding that a Successful status confirms each command was dispatched, and she follows up to verify the actual scan results on the endpoints. Every step she took is recorded in the audit log, so the powerful sweep is fully accountable.",
          commonMistakes: [
            "Assuming a Successful task status means the endpoint agent fully executed the command, when it only indicates the managing server received and sent it.",
            "Attempting to add osquery queries or YARA rules without having MFA configured, which is required for those actions.",
            "Treating Response Management as optional rather than the authoritative audit log of all response activity.",
            "Running advanced response tooling without verifying the actual outcome on the endpoints.",
            "Overlooking the Task List when trying to confirm whether a response action took place."
          ],
          summary: "Response Management is the control center and audit log for all response tasks, with a Task List that tracks statuses and a Response Scripts area for custom scripts, osquery, and YARA rules. Adding osquery and YARA rules requires multi-factor authentication, reflecting how powerful these actions are. A Successful status confirms the server sent the command, not that the agent finished executing it. The beginner takeaway is that Response Management makes advanced response both accountable and safe, and you should always verify outcomes beyond the dispatch status."
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
          whatThisMeans: "A Service Gateway is a virtual appliance you deploy inside your own local network that acts as a relay between the Trend Vision One cloud and your on-premises or third-party systems. Because it lives locally, it can bridge to systems that have little or no direct internet access, passing communication securely on their behalf. It also provides shared services such as ActiveUpdate, which downloads security pattern updates once and caches them locally, and Smart Protection Services, which supplies threat reputation lookups. In effect, the gateway is a local hub that the cloud talks to once, and that then serves many local agents. It is a key building block for hybrid networks that mix cloud management with on-premises assets.",
          whyItMatters: "Many environments cannot or should not give every internal machine direct internet access, whether for security, bandwidth, or isolation reasons, and the Service Gateway solves this. It lets hundreds of local agents stay current and protected by routing through one local relay instead of each reaching the internet independently. This dramatically reduces internet bandwidth, because updates are downloaded once to the gateway and then distributed locally rather than fetched repeatedly. It also enables secure communication for on-premises systems without opening risky direct internet access on each one. Because so many agents depend on it, monitoring the gateway's status is essential, since if it goes offline, updates and services for everything behind it can quietly halt.",
          whatYouWillLearn: [
            "What a Service Gateway is and that it is a locally deployed appliance.",
            "How the gateway relays between the cloud and on-premises systems.",
            "What ActiveUpdate and Smart Protection Services provide.",
            "How local caching reduces internet bandwidth.",
            "How the gateway enables protection for systems with no direct internet access.",
            "How to monitor the gateway's status and connected services in the console.",
            "Why a failed gateway can halt updates for everything behind it."
          ],
          steps: [
            "Go to Workflow and Automation and open Service Gateway Management, the console area for your deployed gateways. This is where gateway health is monitored.",
            "Review the list of deployed Service Gateway virtual appliances to confirm each one is present and reporting. Remember the gateway is a locally deployed appliance, not a cloud-only service.",
            "Check the status of the services it provides, such as Smart Protection Services and ActiveUpdate, to ensure local agents are being served correctly.",
            "Verify the list of connected local endpoints routing through the gateway, so you know which systems depend on it staying healthy."
          ],
          scenario: "A secure manufacturing facility runs 500 endpoints on an isolated network that, by design, has no direct internet access to protect sensitive operational systems. Without a way to update them, those endpoints would quickly fall behind on protection. The administrator deploys a Service Gateway as a virtual appliance inside the local network, and it becomes the single point that talks to the Trend cloud. The 500 endpoints now download their antivirus patterns from the local gateway, which in turn keeps itself current from the cloud via ActiveUpdate. Internet bandwidth use plummets because the patterns are fetched once rather than 500 times, and the isolated machines stay fully protected without ever being exposed to the internet. The administrator keeps an eye on the gateway's status, knowing all 500 agents depend on it.",
          commonMistakes: [
            "Assuming the Service Gateway is a cloud-only service, forgetting it requires a locally deployed virtual appliance.",
            "Not monitoring the connection status of the gateway, which can silently halt updates for every on-premises agent behind it.",
            "Giving each internal machine direct internet access instead of routing efficiently through a gateway.",
            "Deploying a gateway but never verifying which endpoints actually depend on it.",
            "Overlooking the bandwidth savings that local caching provides at scale."
          ],
          summary: "A Service Gateway is a locally deployed virtual appliance that relays between the Trend Vision One cloud and on-premises or third-party systems, providing services like ActiveUpdate and Smart Protection Services. By caching updates locally it slashes internet bandwidth and lets isolated systems stay protected without direct internet access. Because many agents depend on it, monitoring its status is critical. The beginner takeaway is that the gateway is the local hub that keeps hybrid and isolated networks current and secure through a single trusted relay."
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
          whatThisMeans: "Zero Trust is a security framework built on one core premise: never trust, always verify. Rather than assuming anyone or anything inside the network is safe, it treats every access request as potentially hostile and verifies it based on the current risk of the user and the device making it. Crucially, this verification is 'continuous', happening throughout a session rather than only once at login, because trust can change moment to moment. It is important to understand that Zero Trust is an architectural framework, a way of designing security, not a single product you install. In Trend Vision One, the framework is delivered through a set of access-control services known as Zero Trust Secure Access. The guiding idea is that access is always earned through verification, never granted by default.",
          whyItMatters: "Traditional perimeter security works like a castle wall: once you are inside via a VPN, you are largely trusted to roam, which means an attacker who compromises a single device can often reach everything. This assumption has caused countless breaches, because one foothold becomes total access. Zero Trust dismantles that assumption by verifying every request against current risk, so a compromised device or account is stopped at each resource rather than waved through. Continuous verification matters because an account that was safe at login can become risky mid-session, and checking only once would miss that. By granting the least access necessary and re-checking constantly, Zero Trust dramatically limits how far any single compromise can spread.",
          whatYouWillLearn: [
            "The core premise of Zero Trust: never trust, always verify.",
            "Why Zero Trust is an architectural framework, not a single product.",
            "How risk-based access control uses user and device risk in decisions.",
            "What continuous verification means and why it matters.",
            "How Zero Trust differs from traditional perimeter and VPN security.",
            "Why one compromised device should not grant access to everything.",
            "How Zero Trust Secure Access delivers the framework in Vision One."
          ],
          steps: [
            "Review the Zero Trust Secure Access overview in the console to understand how the framework is delivered as a set of services. This orients you to the available capabilities.",
            "Identify the different access-control services available, such as those governing internal applications and internet access, so you know which tool addresses which need.",
            "Observe how user and device risk scores feed into access decisions, illustrating that access is continuously earned through verification rather than granted by default."
          ],
          scenario: "An employee logs in from her managed corporate laptop and accesses the finance database without issue, because both her identity and her device check out as low risk. A minute later, the same employee, using the same valid credentials, tries to reach that finance database from her personal tablet, an unmanaged device the security team knows nothing about. Under old perimeter thinking, valid credentials might have been enough to get in. Instead, the Zero Trust engine evaluates the request in real time, recognizes the unmanaged, higher-risk device, and blocks the access despite the correct password. The credentials alone were not enough; access had to be continuously earned through verification of both the user and the device, and the risky device failed that test.",
          commonMistakes: [
            "Assuming Zero Trust is a single software product rather than an architectural framework delivered through multiple services.",
            "Only verifying identity at login and failing to perform continuous verification throughout the session.",
            "Trusting any device or user simply because they are inside the network perimeter.",
            "Granting broad access on valid credentials alone without considering device risk.",
            "Believing a VPN provides Zero Trust, when it actually embodies the perimeter model Zero Trust replaces."
          ],
          summary: "Zero Trust is the framework of never trust, always verify, granting access based on the continuous evaluation of user and device risk rather than network location. It is an architecture, not a single product, delivered in Vision One through Zero Trust Secure Access services. Unlike perimeter security, where one compromised device can reach everything, Zero Trust verifies every request and re-checks constantly, containing any single compromise. The beginner takeaway is that under Zero Trust, valid credentials are never enough on their own, access must be continuously earned."
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
          whatThisMeans: "Private Access is Trend Vision One's implementation of Zero Trust Network Access, abbreviated ZTNA, which controls how users reach internal applications in your data centers and cloud environments. It has a few moving parts. A 'Private Access Connector' is a component you deploy in the network that hosts your internal apps; it establishes an outbound tunnel to the Trend cloud so the apps can be reached without exposing them directly. The 'Secure Access Module' is software on the end user's device that routes their access requests through the Zero Trust system, and the 'User Portal' is a web page where users can launch the applications they are permitted to use. Together these give a user access to specific applications, and nothing more.",
          whyItMatters: "Traditional VPNs work by placing a connected user onto the network, which means they can potentially reach every system on it, a dangerous level of access if their device or account is compromised. ZTNA replaces this model by connecting a user only to the individual applications they are authorized to use, never to the broader network. This sharply limits the damage a compromised user can do, since they cannot scan or pivot to other systems. The connectors using outbound tunnels is a key security advantage, because it means you do not have to open inbound firewall ports that attackers could probe. Replacing broad VPN access with precise, application-level access is one of the most impactful steps toward a Zero Trust architecture.",
          whatYouWillLearn: [
            "What Private Access and ZTNA are and what they control.",
            "The role of a Private Access Connector and how its outbound tunnel works.",
            "How the Secure Access Module on a device routes access requests.",
            "What the User Portal is and how users launch permitted apps.",
            "How ZTNA grants access to specific applications rather than the whole network.",
            "Why ZTNA does not require opening inbound firewall ports.",
            "How application-level access limits the damage from a compromise."
          ],
          steps: [
            "Go to Zero Trust Secure Access and open Private Access, the area for configuring ZTNA to your internal apps. This is where application-level access is defined.",
            "Configure a Private Access Connector in the network or data center that hosts your internal applications, so it can establish an outbound tunnel to the Trend cloud without exposing the apps directly.",
            "Define an access rule that grants a specific group access to a specific application, such as allowing finance users to reach the accounting app, embodying least-privilege access.",
            "Install the Secure Access Module on a test device and verify the user can reach the permitted application through the User Portal but nothing else."
          ],
          scenario: "A contractor is brought on for a short project and needs access to the company's internal bug-tracking system, but giving an outside contractor a full VPN account would let them roam the entire corporate network. Instead, the administrator configures a ZTNA rule in Private Access that grants this contractor access to the bug tracker alone. The contractor installs the Secure Access Module and opens the bug tracker through the User Portal, working normally. When, out of curiosity or malice, they try to reach any other server on the network, they cannot even ping it, because ZTNA never placed them on the network at all. The contractor gets exactly the access they need and not a byte more, and the company never had to open an inbound firewall port to make it work.",
          commonMistakes: [
            "Not deploying Private Access Connectors in the networks that actually host your internal applications.",
            "Assuming ZTNA requires opening inbound firewall ports, when connectors establish outbound tunnels to the Trend cloud.",
            "Granting a VPN account for a need that application-level ZTNA access would serve far more safely.",
            "Defining overly broad access rules instead of scoping each to specific apps and users.",
            "Forgetting to install the Secure Access Module on the end-user device that needs access."
          ],
          summary: "Private Access is Trend Vision One's ZTNA solution, using Private Access Connectors, the Secure Access Module on devices, and the User Portal to grant users access to specific internal applications rather than the whole network. Connectors use outbound tunnels, so no inbound firewall ports need to be opened. By replacing broad VPN access with precise application-level access, it sharply limits the blast radius of any compromise. The beginner takeaway is that ZTNA connects users to applications, not networks, which is far safer than a traditional VPN."
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
          whatThisMeans: "Internet Access is a Secure Web Gateway, often abbreviated SWG, which is a security checkpoint that all of a user's web traffic passes through on its way to external websites and cloud applications. The cloud-based Internet Access Gateway inspects that traffic and applies your rules, such as blocking malicious sites or unwanted content categories. To route traffic to the gateway, you use one of two methods: the Secure Access Module installed on the device, which secures the user wherever they go, or a PAC file, which stands for Proxy Auto-Config and tells a browser to send its traffic to the gateway. Access rules are then evaluated against each request to decide whether to allow or block it. This brings consistent web security to users no matter where they are working.",
          whyItMatters: "Users browse the web from everywhere now, from the office, from home, from hotels, and threats like malware downloads and phishing sites do not care about location. A Secure Web Gateway protects roaming users wherever they are, blocking dangerous sites and enforcing acceptable-use policies consistently rather than only when someone is behind the office firewall. The Secure Access Module is key to this because it secures a user even on untrusted networks far from headquarters, which is exactly where they are most exposed. Filtering web traffic centrally also stops malware before it ever downloads, rather than relying on catching it on the endpoint afterward. Understanding the two forwarding methods helps you deploy protection that actually follows your users instead of staying tied to the office.",
          whatYouWillLearn: [
            "What a Secure Web Gateway is and what the Internet Access Gateway does.",
            "How web traffic is forwarded via the Secure Access Module or a PAC file.",
            "What a PAC file is and how it directs browser traffic.",
            "How internet access rules are evaluated to allow or block requests.",
            "How to block content categories such as malware or gambling.",
            "Why the Secure Access Module protects users anywhere, not just in the office.",
            "Why PAC files must be updated when network configurations change."
          ],
          steps: [
            "Go to Zero Trust Secure Access and open Internet Access, the area for configuring your Secure Web Gateway. This is where web traffic policy is defined.",
            "Create an access rule to block unwanted or dangerous content categories, such as Gambling and Malware, so requests in those categories are denied.",
            "Choose a forwarding method, either deploying the Secure Access Module on devices or configuring a PAC file to direct browser traffic to the gateway.",
            "Test the rule by attempting to visit a blocked category on a managed device, confirming the gateway returns a block page as expected."
          ],
          scenario: "An employee is traveling and working from a hotel network, far from any corporate firewall, when a convincing phishing email arrives and he clicks the link inside it. Because the Secure Access Module is installed on his laptop, the connection is automatically forwarded to the cloud-based Internet Access Gateway rather than going straight to the malicious site. The gateway inspects the destination URL, recognizes it as a known threat, and immediately displays a block page instead of letting the page load. The employee is protected exactly as thoroughly as he would be in the office, even though he is on an untrusted hotel network. The phishing attempt fails not because of where he was, but because his web traffic was secured wherever he went.",
          commonMistakes: [
            "Assuming the Secure Web Gateway only works in the office, forgetting that the Secure Access Module secures users anywhere.",
            "Not updating PAC files when local network configurations change, which can break traffic forwarding.",
            "Relying on endpoint cleanup to catch web threats instead of blocking them at the gateway before download.",
            "Configuring block rules but never testing that they actually return a block page.",
            "Deploying only PAC-file forwarding for roaming users who would be better protected by the Secure Access Module."
          ],
          summary: "Internet Access is a cloud-based Secure Web Gateway that inspects users' web traffic and enforces rules, blocking malicious sites and unwanted categories. Traffic is forwarded to the gateway either by the Secure Access Module, which protects users anywhere, or by a PAC file that directs browser traffic. This brings consistent web protection to roaming users regardless of location. The beginner takeaway is that an SWG stops web threats before they reach the user, and the Secure Access Module ensures that protection follows the user even on untrusted networks."
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
          whatThisMeans: "AI Secure Access rules apply deep content inspection specifically to generative AI services, both public and private, to ensure they are used safely. The crucial point is that this is not simply allowing or blocking the AI websites; it inspects the actual text inside the prompts users send and the responses the AI returns. This lets it catch sensitive data being pasted into a prompt, prompt-injection attempts designed to manipulate the model, and other exploits. It supports a range of popular public AI services, including ChatGPT, Claude, Google Gemini, Microsoft Copilot, DeepSeek, and Perplexity. Traffic is forwarded for inspection through the same Zero Trust Secure Access mechanisms, so the AI gateway can read and evaluate the content in real time. In essence, it is a content-aware checkpoint sitting between your users and AI services.",
          whyItMatters: "Generative AI has become a powerful productivity tool, but it is also a new and easy channel for confidential data to leak out, often by well-meaning employees who paste sensitive information into a prompt without thinking. Simply blocking AI sites outright is heavy-handed and pushes users to find workarounds, while allowing them freely risks data loss; content inspection threads the needle by permitting safe use and blocking only the dangerous content. Inspecting prompts in real time also defends against prompt-injection and exploit attempts that target the AI itself. As new AI services rapidly gain popularity, configuring rules for them, not just the established ones, keeps coverage from falling behind. This turns generative AI from an uncontrolled risk into a safely usable tool.",
          whatYouWillLearn: [
            "What AI Secure Access rules inspect and why it goes beyond allow or block.",
            "How deep inspection reads the text inside prompts and responses.",
            "Which public AI services are supported, including ChatGPT, Claude, Gemini, Copilot, DeepSeek, and Perplexity.",
            "How content filtering prevents sensitive data leakage in prompts.",
            "How prompt-injection and exploit attempts are detected.",
            "How traffic is forwarded for real-time inspection.",
            "Why rules must be kept current as new AI services emerge."
          ],
          steps: [
            "Go to Zero Trust Secure Access and open AI Secure Access, the area for governing generative AI usage with content inspection. This is where AI-specific rules are built.",
            "Create a content rule, such as blocking prompts that contain credit card numbers, so sensitive data cannot be sent to an AI service.",
            "Enable inspection for the specific AI services your users use, such as ChatGPT and Google Gemini, and add newer services like DeepSeek as they gain popularity.",
            "Test the rule by submitting a prompt containing dummy sensitive data and verifying the gateway blocks it, confirming inspection works on the prompt content itself."
          ],
          scenario: "An employee wants to quickly reformat a messy customer list and decides to paste it into ChatGPT, not realizing the list contains customer names and email addresses that must never leave the company. As he submits the prompt, the AI Secure Access gateway inspects the text in real time and recognizes the personal data inside it. Rather than merely allowing or denying access to ChatGPT as a whole, it blocks this specific submission because of what the prompt contains, and logs a content violation for the security team. The employee is stopped from leaking customer data, but he is not cut off from using AI for legitimate, safe tasks. Content-aware inspection caught exactly the dangerous prompt while leaving normal productivity untouched.",
          commonMistakes: [
            "Assuming AI Secure Access only blocks access to AI websites, when it actually performs deep inspection of the text inside prompts and responses.",
            "Not configuring rules for newly popular AI services like DeepSeek, leaving coverage gaps.",
            "Blocking AI services outright, which pushes users toward unmonitored workarounds.",
            "Defining data rules but never testing them against a sample sensitive prompt.",
            "Focusing only on outbound data leakage and overlooking prompt-injection and exploit risks."
          ],
          summary: "AI Secure Access rules perform deep, content-aware inspection of the prompts and responses exchanged with generative AI services such as ChatGPT, Claude, Gemini, Copilot, DeepSeek, and Perplexity. Rather than simply allowing or blocking AI sites, they catch sensitive data leakage and prompt-injection exploits in the actual text, in real time. Keeping rules current as new AI services emerge is essential. The beginner takeaway is that this content inspection lets your organization use generative AI safely, blocking only the dangerous prompts while permitting legitimate productive use."
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
          whatThisMeans: "Intelligence Reports is where Trend Vision One puts threat intelligence to work, drawing on two sources. 'Curated intelligence' is the steady stream of reports produced by Trend Research, the company's global threat-research team, describing active threat actor campaigns along with their indicators of compromise. 'Custom intelligence' is threat data you supply yourself, such as reports relevant to your specific industry or region. Each report typically maps its activity to MITRE ATT&CK techniques, a standardized catalog of attacker behaviors, and lists concrete IoCs like file hashes. The platform uses this intelligence to automatically 'sweep' your environment, and when an indicator matches, a special detection model raises a Threat Intelligence Sweeping alert in the Workbench. It is the bridge between global threat knowledge and your own telemetry.",
          whyItMatters: "Knowing about a threat in the abstract is useless unless you can check whether it is in your environment, and Intelligence Reports automates exactly that check continuously. Because curated intelligence is updated as Trend Research discovers new campaigns, your environment is constantly re-compared against the very latest threats without any manual effort. This catches advanced and targeted attacks early, often before they would trigger behavior-based detection. Custom intelligence matters because no single vendor sees everything, so importing localized or industry-specific threat data fills gaps the global feed may not cover. If the Threat Intelligence Sweeping model is disabled, all of this automation silently stops, which is why understanding and protecting it is important.",
          whatYouWillLearn: [
            "What Intelligence Reports does and the two sources of intelligence it uses.",
            "The difference between curated and custom intelligence reports.",
            "What Trend Research and the MITRE ATT&CK framework are.",
            "How threat intelligence sweeping automatically checks your environment.",
            "How a sweeping match becomes an alert in the Workbench.",
            "The role of the Threat Intelligence Sweeping detection model.",
            "Why disabling that model stops all automated sweeping."
          ],
          steps: [
            "Go to Threat Intelligence and open Intelligence Reports, the hub for curated and custom threat intelligence. This is where global threat knowledge meets your environment.",
            "Browse the list of curated reports published by Trend Research to see the active campaigns the platform is watching for. These update continuously as new threats are discovered.",
            "Click a report to view its associated MITRE ATT&CK techniques and IoCs, which describe how the threat operates and the concrete indicators to hunt for.",
            "Verify that the Threat Intelligence Sweeping model is enabled in the Workbench, since this model is what turns indicator matches into alerts and disabling it would halt automated sweeping."
          ],
          scenario: "Trend Research publishes a new intelligence report on an emerging advanced persistent threat group, including 20 file hashes the group is known to use. Without anyone on the security team lifting a finger, Trend Vision One ingests these indicators and automatically sweeps the entire environment against them, comparing them to the telemetry it has collected. About an hour later, a Threat Intelligence Sweeping alert appears in the Workbench, flagging a match for one of those hashes on a backup server that had been quietly overlooked. The team investigates and confirms the server was indeed touched by the campaign, allowing them to contain it early. A report published anywhere in the world became an actionable, environment-specific alert in their own console within the hour.",
          commonMistakes: [
            "Disabling the Threat Intelligence Sweeping model in Detection Model Management, which silently stops all automated sweeping.",
            "Ignoring custom intelligence reports, which are crucial for importing localized or industry-specific threat data.",
            "Treating curated intelligence as a one-time check rather than a continuously updated feed.",
            "Reading a report's IoCs without verifying the sweeping model is actually enabled to act on them.",
            "Assuming the global feed covers every threat relevant to your specific industry."
          ],
          summary: "Intelligence Reports applies both Trend Research curated intelligence and your own custom intelligence to automatically sweep your environment for indicators of compromise, mapping threats to MITRE ATT&CK techniques. When an indicator matches, the Threat Intelligence Sweeping model raises a high-fidelity alert in the Workbench. Disabling that model stops the automation, and custom reports fill gaps the global feed may miss. The beginner takeaway is that this feature continuously turns worldwide threat knowledge into environment-specific alerts with no manual effort."
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
          whatThisMeans: "Custom Intelligence lets you bring your own threat indicators into Trend Vision One and sweep your environment for them. You import these indicators as a report, typically formatted as STIX or CSV, where 'STIX' is a standardized structured format for sharing cyber threat intelligence and CSV is a simple comma-separated list. Once imported, you can sweep in two ways: a 'manual sweep', which you trigger on demand and runs one time, or an 'automated sweep', which you configure to run continuously for ongoing coverage. After a sweep completes, the Sweeping Results show whether any of your indicators matched activity in your environment. This puts the same automated-hunting machinery used for curated intelligence at your disposal for indicators you obtain yourself.",
          whyItMatters: "Organizations frequently receive valuable, proprietary threat intelligence that the global feeds do not carry, for example from an industry sharing group known as an ISAC, an Information Sharing and Analysis Center. Custom Intelligence is how you act on that data, scanning your own network for the specific threats your peers are warning about. Understanding the difference between manual and automated sweeps is important, because a manual sweep answers the question once but leaves you blind to indicators that arrive later, while automated sweeping keeps watching. Getting the file format right matters too, since a malformed STIX or CSV file cannot be parsed and the indicators are simply never checked. This capability turns shared community intelligence into concrete protection for your environment.",
          whatYouWillLearn: [
            "What Custom Intelligence is and how to import your own indicators.",
            "What the STIX and CSV formats are for sharing threat data.",
            "What an ISAC is and why its intelligence is valuable.",
            "The difference between a one-time manual sweep and continuous automated sweeping.",
            "How to trigger a manual sweep on demand.",
            "How to review the Sweeping Results for indicator matches.",
            "Why malformed files prevent indicators from being checked."
          ],
          steps: [
            "In the Intelligence Reports app, click Add Custom Report to begin importing your own threat intelligence. This is the entry point for community or proprietary indicators.",
            "Upload a properly formatted STIX or CSV file containing the IoCs, for example a list shared by your industry ISAC. A correctly formatted file ensures every indicator is parsed and checked.",
            "Select the imported report and click Sweep Now to trigger an immediate manual sweep, and configure automated sweeping if you need ongoing coverage rather than a one-time check.",
            "Once the sweep completes, review the Sweeping Results tab for any indicator matches, which become your investigation targets."
          ],
          scenario: "A banking ISAC sends out an urgent advisory listing IP addresses tied to an active campaign currently hitting financial institutions, intelligence that has not yet appeared in any global feed. The bank's security administrator does not wait; she takes the list, formats it correctly, and uploads it through Add Custom Report as a Custom Intelligence Report. She immediately clicks Sweep Now to run a manual sweep across the environment and, within the hour, reviews the Sweeping Results to confirm that none of the bank's endpoints have contacted those IP addresses. For lasting protection she also configures automated sweeping on the report, so if any system reaches out to those IPs in the future it will be caught. Community intelligence shared minutes ago is now actively defending her bank.",
          commonMistakes: [
            "Uploading malformed STIX or CSV files, which prevents the sweeping engine from parsing the indicators so they are never checked.",
            "Assuming manual sweeps run continuously, when they are one-time and you must configure automated sweeping for ongoing coverage.",
            "Ignoring shared ISAC or community intelligence that the global feed does not carry.",
            "Running a manual sweep once and never revisiting it as the threat evolves.",
            "Failing to review the Sweeping Results, so a real match goes unnoticed."
          ],
          summary: "Custom Intelligence lets you import your own threat indicators in STIX or CSV format and sweep your environment for them, either once with a manual sweep or continuously with automated sweeping. It is how organizations act on proprietary or community intelligence, such as ISAC advisories, that global feeds do not carry. Correct file formatting is essential, and automated sweeping provides lasting coverage that a one-time manual sweep cannot. The beginner takeaway is that Custom Intelligence turns shared threat data into active, ongoing protection for your own environment."
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
          whatThisMeans: "Third-Party Intelligence connects Trend Vision One to external threat-data sources so it can both query them and share data with them. Two common source types are 'TAXII' servers, a standard protocol for delivering threat intelligence feeds, and 'MISP' instances, a popular open-source threat-intelligence sharing platform used by many communities. The underlying technology that makes querying diverse sources possible is 'STIX-Shifter', a tool that translates a single search so it can run across many different external data sources in their own formats. You can also configure Suspicious Object Management to automatically share indicators, such as blocked file hashes, outward to other defenses like your local firewalls. Together these turn Vision One into a hub that both consumes and contributes threat intelligence.",
          whyItMatters: "Effective threat defense is increasingly collaborative, because no organization sees every threat and sharing intelligence multiplies everyone's protection. By connecting external feeds like TAXII and MISP, you can centralize threat hunting across both Trend and non-Trend data, correlating your internal telemetry against the broader community's knowledge in one place. STIX-Shifter is what makes this practical, letting one query reach many sources without you learning each one's query language. Sharing your own suspicious objects outward closes the loop, automatically pushing protection to other tools so a hash blocked in one place is blocked everywhere. The result is a richer, federated view of threats and a defense that improves as it shares.",
          whatYouWillLearn: [
            "What Third-Party Intelligence connects and why it enables collaboration.",
            "What TAXII servers and MISP instances are.",
            "What STIX-Shifter is and how it queries many sources with one search.",
            "How to connect an external source such as a TAXII feed.",
            "How federated searching correlates internal telemetry with community data.",
            "How to configure suspicious object sharing to other defenses.",
            "Why detection models must be enabled for third-party intelligence to act."
          ],
          steps: [
            "Go to Threat Intelligence and open Third-Party Intelligence, the area for connecting external threat-data sources. This is where collaboration with outside feeds is set up.",
            "Click Connect Source and select the source type, such as TAXII, to begin integrating an external feed.",
            "Enter the API URL and authentication credentials for the external source carefully, since incorrect credentials are the most common cause of connection failures.",
            "Under Suspicious Object Management, configure rules to automatically share blocked indicators such as hashes outward to your local firewalls and other defenses, closing the loop on shared protection."
          ],
          scenario: "An organization runs a MISP instance where it and its industry peers collect and share threat intelligence, but until now that data lived separately from its security operations. By connecting MISP to Trend Vision One through Third-Party Intelligence, the team links the two worlds together. Now, during threat hunting, the XDR engine can query the MISP database directly, automatically correlating the organization's own internal telemetry against the global community's indicators. A suspicious domain seen on an endpoint can be instantly checked against what peers have reported, turning an ambiguous observation into a confirmed threat. Using STIX-Shifter, a single hunt reaches across both Trend and community data without the analyst needing to learn MISP's query syntax, and the organization's own blocked indicators flow back out to strengthen its other defenses.",
          commonMistakes: [
            "Not configuring authentication credentials correctly, the most common cause of connection failures to a TAXII server.",
            "Expecting third-party intelligence to sweep your environment without enabling the corresponding detection models.",
            "Connecting external feeds but never configuring suspicious object sharing to push protection outward.",
            "Treating community intelligence as one-directional and forgetting to contribute your own indicators back.",
            "Assuming each source must be queried separately, when STIX-Shifter federates a single search across them."
          ],
          summary: "Third-Party Intelligence connects Trend Vision One to external sources like TAXII servers and MISP instances, using STIX-Shifter to run a single search across many sources in their own formats. This enables federated threat hunting that correlates your internal telemetry with community knowledge, while Suspicious Object Management shares your indicators outward to other defenses. Detection models must be enabled for the intelligence to act. The beginner takeaway is that this turns Vision One into a collaborative hub that both consumes and contributes threat intelligence, strengthening defense for everyone."
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
