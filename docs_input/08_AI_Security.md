# Trend Vision One – AI Security

> **Source:** https://docs.trendmicro.com/en-us/documentation/trend-vision-one/
> **Scraped:** 2025-06-27

---

## AI Security Blueprint | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-ai-security-blueprint-overview

| 
 | 

###### Important

This is a "Pre-release" feature and is not considered an official release. Please
                              review the
                              Pre-release disclaimer
                              before using the feature.

The AI Security Blueprint dashboard delivers guidance across TrendAI Vision One™ to protect your AI stacks and users of AI services. This dashboard enables visibility
               into your AI assets including services, models, workloads, data storage, and entitlements
               in addition to code repositories and container images.

- 
Services and users: View service usage and user access across AI services. Deploy
                     secure access policies to control connections based on device, network, or location
                     parameters.

- 
Develop: Track code repositories for AI-related code and scan for vulnerabilities,
                     malware, and exposed secrets. Access your repository inventory for detailed visibility
                     of risks.

- 
Deploy: View counts for continuous integration and continuous delivery (CI/CD) pipelines
                     and container images that include AI packages. Enable artifact validation and threat
                     monitoring in deployments. Scan your AI models for known attack techniques.

- 
Runtime and production: Monitor AI infrastructure, cloud assets, and workloads. Generate
                     risk events when TrendAI Vision One™ detects threats or misconfigurations. Review clusters and workloads for security
                     compliance, vulnerabilities, and incident trends.

 | 

 | Action
 | Description

 | 
Add and update AI asset tags

 | 
Click Manage AI asset tags to tag and categorize your AI-related assets in Attack Surface Discovery for better organization, tracking, and vulnerability management across your security
                              posture. AI category tags include Workload, Model, Data storage, Entitlement, and
                              Service.

 | 
Configure Code Security

 | 
Click Configure next to Code Security to set up and customize your code security scanning policies, enabling detection
                              of vulnerabilities, malware, and exposed secrets in your code repositories.

 | 
Connect or manage a code repository

 | 
Click View code repository inventory to see and manage repositories containing AI-related packages, dependencies, and
                              codebase in Code Security so you can assess code risk and track security issues.

 | 
View AI-related CI/CD artifacts

 | 
Click View CI/CD artifacts to see continuous integration and continuous delivery pipelines and container images
                              that include AI packages in Code Security.

 | 
Configure Container Security

 | 
Click Configure next to Container Security to set up container scanning policies, enabling detection of vulnerabilities and
                              threats within container images used in your AI infrastructure.

 | 
View containers with AI-related packages

 | 
Click View container image logs in Container Security to examine containers that include AI-related packages. Container Security provides
                              detailed visibility into container contents, vulnerabilities, and security compliance.

 | 
Set up AI Scanner

 | 
Click Set up next to AI Application Security: AI Scanner to configure automated scanning for AI models and applications, enabling detection
                              of known attack techniques and vulnerabilities in your AI systems.

 | 
View AI Scanner results

 | 
Click View AI Scanner results to open AI Scanner scan results and review comprehensive scan findings, vulnerability assessments, and security recommendations
                              for your AI applications and models.

 | 
Configure Cloud Risk Management

 | 
Click Configure required features next to Cloud Risk Management to enable cloud security scanning, threat detection, and risk assessment across your
                              cloud infrastructure supporting AI workloads.

 | 
Manage AI security posture

 | 
Click Manage AI security posture to enable and manage Cloud Security Posture so you can monitor and improve the overall security configuration and compliance
                              status of your AI infrastructure.

 | 
Configure AI Detection and Response

 | 
Click Configure required features next to AI Detection and Response to enable threat detection capabilities, configure
                              Cloud Accounts, and set up automated response mechanisms for AI-related security incidents.

 | 
View Workbench insights

 | 
Click View Workbench insights to access centralized dashboard displaying AI security analytics, threat intelligence,
                              and actionable recommendations for improving your AI security posture.

 | 
View runtime cluster log

 | 
Click View runtime cluster log to monitor and analyze runtime activities, container behavior, security events, and
                              operational logs from your Kubernetes clusters running AI workloads in Container Security.

 | 
Set up AI Guard

 | 
Click Set up next to AI Application Security: AI Guard to configure runtime protection and monitoring for AI applications, enabling detection
                              and prevention of threats during execution.

 | 
View AI Guard results

 | 
Click View AI Guard results to review runtime threat detection findings, security incidents, and recommendations
                              for your AI applications in production environments.

 | 
Configure Data Security Posture

 | 
Click Configure required features next to Data Security Posture to enable data classification, discovery of sensitive information, and data protection
                              policies for AI-related data and models.

 | 
View assets with sensitive data

 | 
Click View Data Security Posture to identify and monitor data storage locations and databases containing sensitive
                              or personally identifiable information (PII) used in your AI systems with Data Security Posture.

 | 
Configure AI Secure Access

 | 
Click Configure next to AI Secure Access to set up secure access controls, authentication mechanisms, and access policies
                              for protecting access to AI services, models, and infrastructure.

 | 
View Secure Access

 | 
Click View Secure Access to review AI service access activity, connection status, and usage patterns for your
                              deployed AI Secure Access policies.

---

## AI Application Security | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-ai-scanner-ai-guard

Scan your AI models for common attack techniques, attack objectives, and harmful or
               sensitive content in inputs and outputs.
AI Application Security enables you to intercept malicious inputs and block potentially harmful outputs from
               your AI models, which helps to prevent exploitative usage and maintain regulatory
               compliance. If your data needs to remain local, choose self-hosted instead of hosted
               by TrendAI™
.

#### Deployment options for AI Scanner settings

You can configure AI scan settings in two ways, depending on your deployment scenario:

- 
Trend-hosted: Use TrendAI™'s cloud infrastructure to run scans.

- 
Self-hosted: Deploy and run the scanner in your own environment (e.g., on-premises or private
                        cloud).

 | 
 | 

###### Tip

Choose the option that best fits your data residency and operational requirements.

#### AI Guard integration options

You can integrate AI Guard in two ways, depending on your deployment scenario:

- 
Trend-hosted: Use TrendAI™'s cloud infrastructure to integrate AI Guard.

- 
Self-hosted: Deploy and integrate AI Guard in your own environment.

 | 
 | 

###### Tip

Choose the integration option that best fits your data residency and operational requirements.

#### Get started with AI Application Security

- 
Configure Trend hosted AI scan settings: Scan your AI models for common attack techniques and objectives to prevent malicious
                        use and ensure regulatory compliance.

- 
Configure self-hosted AI scan settings: Deploy and configure the scanner in your own environment.

- 
Review AI Scanner scan results: Learn how to interpret and act on scan results.

- 
Integrate Trend-hosted AI Guard: Configure settings to scan your AI usage for harmful content generation, sensitive
                        information leakage, and prompt injections.

- 
Integrate self-hosted AI Guard: Deploy and integrate AI Guard in your own environment.

- 
AI Guard API Reference and Code Examples: Reference for API integration and sample code in multiple languages.

- 
Estimated Deployment Costs for AWS: Review cost estimates for deploying AI Application Security on AWS.

---

## AI Secure Access | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-ai-service-access

Gain insights into activities regarding access to AI services and AI content violations
            from your users and devices.

The following table outlines the widgets available displaying information about AI
               secure access.

 | 

 | 
Widget

 | 
Description

 | 
Total AI Secure Access Attempts

 | 
Total number of AI Secure access attempts broken down by AI secure

 | 
Total Detected AI Content Violations

 | 
Total number of AI content violations based on advanced generative AI content inspection
                              settings, broken down by individual AI service
                              
- 
File upload to AI service: Total files users attempted to upload in prompts

- 
Sensitive data loss: Total detections of sensitive data being sent through prompts

- 
Potential prompt injection: Total detections of potential malicious prompts

- 
Response containing inappropriate content: Total responses with content violating
                                       AI content inspection templates

- 
Response containing malicious URL: Total responses with URLs determined to be malicious
                                       by TrendAI™ threat experts

 | 
Top 10 AI Secure Users

 | 
Lists the top 10 users of AI services in your organization. Click on the number of
                              access attempts to see details in Secure Access History.

 | 
Top 10 Users with AI Content Violations

 | Lists the top 10 users in your organization that have logged AI secure content violations.
                           Click on the number of violations to see details in Secure Access History.

---
