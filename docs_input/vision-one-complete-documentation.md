# TrendAI Vision One™ – Complete Documentation Reference

> Auto-scraped from https://docs.trendmicro.com/en-us/documentation/trend-vision-one/
> Generated: 2026-06-26T16:38:12.031Z
> Total pages: 55

## Table of Contents

1. **Introduction**
   - TrendAI Vision One – Proactive security starts here
   - Features and benefits
   - TrendAI supported products
   - Platform Directory
   - Introduction
   - Account Settings
   - Checking the TrendAI Vision One service status
   - SERVICE LEVEL OBJECTIVES FOR TREND VISION ONE (herein this “SLO”)
2. **Getting Started**
   - Getting started with TrendAI Vision One
   - Activate your TrendAI Vision One license
   - TrendAI Vision One access tiers
   - Essential Access
   - Activate TrendAI Vision One with Essential Access
   - Advanced Access
   - Update TrendAI Vision One to the Foundation Services release
   - Foundation Services update considerations
   - Connect your IdP solutions
   - Configure user roles and accounts
   - Firewall exception requirements for TrendAI Vision One
   - Connect existing products to product instance
3. **Cyber Risk Exposure Management**
   - Cyber Risk Overview
   - Continuous Risk Management
   - Cyber Attack Prediction
   - Vulnerability Management
   - Cyber Governance, Risk, & Compliance
   - Security Awareness
4. **AI Security**
   - AI Security Blueprint
   - AI Application Security
   - AI Secure Access
5. **Agentic SIEM & XDR**
   - Detection Model Management
6. **Endpoint Security**
   - Endpoint Inventory
7. **Cloud Security**
   - Cloud Risk Management
8. **Network Security**
   - Network Inventory
   - Network Analysis Configuration
   - Intrusion Prevention Configuration
   - Agent Resource Monitoring
9. **Zero Trust Secure Access**
   - Get started with Zero Trust Secure Access
   - What is Zero Trust Secure Access?
   - Deployment guides
10. **Email and Collaboration Security**
   - Email Asset Inventory
   - Cloud Email and Collaboration Protection
   - Cloud Email Gateway Protection
11. **Data Security**
   - Data Security Posture
   - Sensitive Data Overview
12. **Threat Intelligence**
   - Threat Intelligence Hub
   - Suspicious Object Management
   - Sandbox Analysis
13. **Managed Services**
   - Managed Services
   - Response actions
14. **Administration**
   - Audit Logs
   - Console Settings
   - Getting Help and Troubleshooting
15. **Privacy and Compliance**
   - Privacy and personal data collection disclosure
   - TrendAI Vision One data privacy, security, and compliance
   - PCI Security Standards

---

# Introduction – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## TrendAI Vision One – Proactive security starts here

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-trend-Vision-One-About

TrendAI Vision One™ is an Enterprise Cybersecurity Platform designed to empower organizations to proactively manage and mitigate cyber risks in today’s complex digital environments. This platform offers a unified approach to cybersecurity, streamlining operations and accelerating security outcomes.

As the only enterprise cybersecurity platform that centralizes cyber risk exposure management, security operations, and robust layered protection, TrendAI Vision One™ helps you predict and prevent threats, accelerating proactive security outcomes.

By integrating prevention, detection, and response capabilities into a single, cloud-native solution, TrendAI Vision One™ eliminates security silos and provides complete visibility across endpoints, networks, email, cloud, and operational technology (OT). Leveraging AI-powered threat detection and global threat intelligence, the platform enables earlier detection, faster response, and reduced risk for organizations of all sizes.

Highlights:

Centralized cyber risk exposure management: Continuous attack surface discovery, asset risk assessment, and automated risk mitigation.

Integrated security operations: Extended Detection and Response (XDR), Cyber Risk Exposure Management (CREM), and automation/orchestration of threat response workflows.

Robust layered protection: Comprehensive coverage for hybrid IT environments with seamless third-party integrations and expert managed services.

Actionable insights: High-fidelity alerts, impactful visualizations, and detailed reporting to help communicate risk status and drive business transformation.

By consolidating these capabilities, TrendAI Vision One™ simplifies and converges security operations, helping organizations stop adversaries faster, prioritize and communicate cyber risks, and strengthen their overall defense posture.

Related information

Features and benefits

TrendAI™ supported products

Platform Directory

Account Settings

Account Settings (Foundation Services release)

User account switch

Business Profile

Context menu

Simulations

---

## Features and benefits

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-features-benefits-trend-vision-one

Feature

Benefits

Alert notifications

When new alerts are detected, TrendAI Vision One™ can send you an email notification. Also as part of TrendAI™’s quality assurance process for threat detections, if our threat expert team identifies an alert in your environment that they believe to be critical or interesting, they will work with regional resources to help notify you directly. This will not occur for all alerts, and is at the discretion of the threat expert team as they do not review all alerts for all customers.

Correlated detection models

Advanced detection models written by TrendAI™ threat researchers correlate activities within or across security layers to find undiscovered attacks. The detection models, which generate the alert triggers, combine multiple rules and filters using a variety of analysis techniques including data stacking and machine learning. You can turn on and off individual models as appropriate for the organization’s risk tolerance and preferences.

Workbench and alert triage

View a list of alerts (workbenches) and drill down for further visibility. Workbenches are the investigation results for a detection, where you can look at the execution profile, identify the scope of impact and take response actions. This is where you prioritize and process the alerts and track what has been done (new, in progress, closed).

Attack visualization

Quickly understand the story of an attack with an interactive visual representation of events. Advanced analysis is available with:

The Execution Profile Analysis view to see the threat actions within an endpoint, server, or cloud workload

Network Analysis to replay network communications and see details of an attacker’s command and control communications or lateral movement

Search/Threat hunting

Proactively search through endpoint, email, network, and cloud workload activity data (for example, telemetry, NetFlow, metadata, etc.) using a simple query builder. Do IoC sweeping or custom searches using multiple parameters and filter down into things by adding additional search criteria. From a search result, you can initiate response or generate an Execution Profile. You can build, save, and reuse queries for basic threat hunting.

Proactively search through endpoint and cloud workload activity data (for example, telemetry, metadata, etc.) using a simple query builder. Do IoC sweeping or custom searches using multiple parameters and filter down into things by adding additional search criteria. From a search result, you can initiate response or generate an Execution Profile. You can build, save, and reuse queries for basic threat hunting.

Built-in threat intelligence

Detect threats sooner with automatic searching of your environment with indicators of compromise (IoCs) published by Trend Research. When there is a detection, built-in threat intel can help identify the associated campaign, target platform, associated MITRE ATT&CK™ TTPs, and can even provide links to related intelligence blog posts if available.

MITRE ATT&CK™ mapping

Mapping of techniques to the MITRE ATT&CK framework help organizations quickly understand and communicate what is happening in your environment. Hyperlinks from the workbench link to documentation for the MITRE ATT&CK framework.

Integrated response actions

Offers contextually aware response choices for quick action taken directly from within the platform, Start your response sooner by “right-clicking” on objects in the workbench or within threat hunting search results. In one location, you can initiate and track endpoint, email, server, and network responses.

Offers contextually aware response choices for quick action taken directly from within the platform, Start your response sooner by “right-clicking” on objects in the workbench or within threat hunting search results. In one location, you can initiate and track endpoint and server responses.

API integrations

A public API can be used by customers to integrate with various SIEM and SOAR tools. Out of the box, TrendAI Vision One™ provides a SIEM connector for alerts to be pulled into Splunk. Unlike regular syslog forwarding, this Splunk add-on calls the TrendAI Vision One™ API to get the list of alerts (workbenches). Analysts can click on the alert from within Splunk and be taken to the associated workbench in the TrendAI Vision One™ platform for additional visibility and investigation.

Software-as-a-Service solution

TrendAI Vision One™ is hosted and managed in the cloud to take advantage of cloud computing technologies. Plus, you do not have the overhead associated with managing local hardware.

---

## TrendAI supported products

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-supported-products

TrendAI Vision One™ analyzes activity data collected by sensor products to provide

intelligent, high-fidelity detections and alerts.

TrendAI Vision One™ for Government analyzes activity data collected by Trend Cloud One for Government

to provide intelligent, high-fidelity detections and alerts.

The following table lists the TrendAI™ products supported by TrendAI Vision One™ and the specific version requirements for each.

For detailed instructions about how to properly register and configure specific products,

see Connect existing products to Product Instance .

Product

Version

TrendAI™ Apex One™ as a Service with Endpoint Sensor XDR

edition

Windows Security Agent version 14.0.5156 (or later)

Mac Security Agent version 3.5.3 107 (or later)

Cloud App Security

Latest version

Cloud One

Agent 20.0.0-1681 (20 LTS Update 2021-01-04) or later

Note

Supported services:

Endpoint & Workload Security

Application Security

Network Security

Deep Discovery™ Inspector

5.6 Service Pack 1

Deep Discovery™ Director

5.1 Service Pack 1 with Hotfix 1088

Deep Discovery™ Director - Network Analytics as a Service

Latest version

TrendAI™ Web Security

Latest version

---

## Platform Directory

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-platform-directory

See all TrendAI Vision One™ solutions and apps, customize your home page and navigation bar, and opt in to or out of pre-release apps and features.

Platform Directory provides a central overview of all TrendAI Vision One™ apps, organized into app groups. Use the directory to discover all available apps and explore new features in the pre-release phase. You can also customize your view for quick access to your most-used solutions.

Tip

Choose your home page by clicking Change and selecting a TrendAI Vision One™ app.

To customize your navigation bar for convenient access to useful apps, click the pin icon () by any app group to add or remove the group from the navigation bar.

Once you choose an app for your home page, you cannot unpin the corresponding app group.

If you cannot pin an app group, your user account might not have access permissions for that group.

Resource Center and Help and Support always show in the navigation bar.

Under Directory, you can view all TrendAI Vision One™ apps available to your business.

The available apps depend on the access tier of your business.

Click any app name to go to the app. If you cannot go to an app, your user account might not have access permissions for that app.

Under AI Security, you can explore all available AI-related solutions and apps in TrendAI Vision One™.

Under Pre-release features, you can discover all TrendAI Vision One™ pre-release apps and features, and choose whether to opt in during the pre-release period.

Important

There is no charge for pre-release features before official release. For more information, see the Pre-release disclaimer.

By default, your business is not opted in to new pre-release apps and features. When you opt in to a pre-release app, the app appears in the navigation bar.

You can opt out of pre-release apps or features from Platform Directory at any time before official release. If you opt in to a pre-release app or feature and later opt out, you might lose access to related functionality, settings, and collected data after official release.

Only user accounts with the necessary permissions can opt in to or out of pre-release apps.

---

## Introduction

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-introduction-part-trend-vision-one

Related information

TrendAI Vision One™ – Proactive security starts here

TrendAI Vision One™ mobile app

Checking the TrendAI Vision One™ service status

---

## Account Settings

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-account-info-settings

View your account information, change your account password, and reset your two-factor authentication device.

Access the Account Settings screen using your profile picture in the upper-right corner of the TrendAI Vision One™ console.

To enhance your account security, TrendAI™ requires using an email address as the sign-in credential to access the TrendAI Vision One™ console. If you do not have an account email yet, click specify an email address to add and verify your email address.

Important

After your account email is added, you must use the account email to sign in to your other TrendAI™ SaaS offerings, including the Customer Licensing Portal. Your contact email also changes to the account email.

The following table outlines the options available in the Account Settings screen.

Setting

Description

Contact email

If you already have an account email, the contact email is your account email.

Note

You cannot change your contact email.

If you do not have an account email, the contact email is the email address that you registered in the Customer Licensing Portal.

You can click Edit email to change your contact email. The new contact email is also updated in the Customer Licensing Portal.

Password

Click Change password, specify the new password you want to use to access the TrendAI Vision One™ console, and click Save.

Note

For SAML account users, you can change the password only in your IdP system.

Multi-factor authentication

Click Reset to disassociate your connected device and receive the setup email instructions.

Note

For SAML account users, you can reset multi-factor authentication only in your IdP system.

---

## Checking the TrendAI Vision One service status

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-checking-service-status

The Service Status portal provides real-time updates for all your TrendAI™ services.

Maintenance and upgrade of TrendAI™ services normally occur without any impact to our customers. Periodically, service-impacting maintenance may be required. For customers that are unable to access TrendAI™ services and may not have noticed the scheduled maintenance notifications, you can check the real-time service status using the following website:

https://status.trendmicro.com/en-US/

TrendAI™ implements and adheres to specific Service Level Objectives (SLO) for your TrendAI Vision One™ Solution. View the SLO for TrendAI Vision One™ at any time by going to the following:

SERVICE LEVEL OBJECTIVES FOR TREND VISION ONE™ (herein this “SLO”)

Related information

SERVICE LEVEL OBJECTIVES FOR TREND VISION ONE™ (herein this “SLO”)

---

## SERVICE LEVEL OBJECTIVES FOR TREND VISION ONE (herein this “SLO”)

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-service-level-objectives

v. Oct 2021

Purpose. This SLO is applicable to each TrendAI Vision One™ Solution (herein, “Vision One Solution”) that is offered for sale by Trend Micro. This SLO describes certain internal objectives for the delivery of each Vision One Solution and does not apply to any other Trend Micro product or service. Access to and use of each Vision One Solution is subject to acceptance of and agreement to the terms and conditions of the applicable Terms of Use or Terms of Service, as may be applicable, for Vision One Solution(s) as published (collectively, the “Terms of Use”). In the event of any specific conflict between the Terms of Use and those of this Service Level Objectives, the conflicting terms set forth in this Service Level Agreement will prevail. Terms not defined herein shall have the meaning set forth in the Terms of Use.

Application. This SLO is only applicable to a Vision One Solution customer having a paid right to access and use one or more Vision One Solution(s) as evidenced by such customer having agreed to the Terms of Use for the relevant Vision One Solution that has not expired or been terminated by either party.

Definitions

“Scheduled Maintenance” means periods of downtime related to network, hardware, or service maintenance or upgrades. Trend Micro will publish notice or notify Company one (1) to two (2) weeks prior to the commencement of each Scheduled Maintenance.

“Emergency Maintenance” means unscheduled maintenance periods during which a Vision One Solution may be disrupted or prevented due to non-availability or any maintenance for which Trend Micro could not have reasonably prepared for the need for such maintenance, and failure to perform the maintenance would adversely impact the service.

“Service Availability” means access to the web administration console for a Vision One Solution using a web browser, programmatic access using Application Programming Interfaces (API’s), and connectivity between any software portion of the Vision One Solution installed in the customer environment (agents, clients, gateways, network appliances) and the portion of the Vision One Solution hosted on behalf of Trend Micro by its IaaS third party service providers.

Conditions of this SLO.

The customer must have and maintain an environment that has Internet access in order to use a Vision One Solution.

The customer must have and maintain access to a browser application supported by the Vision One Solution to use the Web-based administrative console.

The customer understands and agrees that its Vision One Solution security policies and security events are also logged or recorded by the Vision One Solution in the performance of the provided offering as agreed in the Terms of Use.

The customer must take all necessary measures to ensure that it and all of its employees are aware of and in compliance with any requirements, responsibilities and limitations set forth in the Terms of Use, including, without limitation, any applicable data privacy and data protection laws, rules, and regulations, as well as Trend Micro’s Acceptable Use Policy as published in the Terms of Use.

Service Availability.

Each Vision One Solution is hosted twenty-four (24) hours a day, seven (7) days a week in Trend Micro’s managed public IaaS environment hosted by its third party service providers. Each Vision One Solution systems, networks, and capacity are continually monitored by Trend Micro and its IaaS third party service providers to provide optimal availability and efficiency to Vision One Solution customers. The target Service Availability is 99.9% in each calendar year.

Trend Micro uses commercially reasonable efforts to make available each Vision One Solution on a 24 hours a day, 7 days a week basis. However, as described in this SLO, each Vision One Service may be unavailable due to scheduled maintenance, unscheduled downtime or unforeseen circumstances including suspension of a Vision One Solution to mitigate any malicious activities, in which event, Trend Micro shall use commercially reasonable efforts to reinstate the Vision One Solution as soon as possible.

Trend Micro strives to perform most, if not all, software upgrades without service impact to customers. Periodically, Trend Micro will schedule maintenance of a Vision One Solution by striving to provide customer at least seven (7) days’ notice since such maintenance may cause disruption of that Vision One Solution. Within any Scheduled Maintenance window Trend Micro can announce further extension of the outage period before 30 minutes of the end of the Scheduled Maintenance. An extension cannot exceed the maintenance time by more than 8 hours or double the planned maintenance time (whichever is less) unless a need for Emergency Maintenance arises. Scheduled maintenance shall not exceed more than eight (8) hours per calendar month except as may be imposed by any IaaS third party service providers over which Trend Micro has no control.

If at any time the continued availability of a Vision One Solution would compromise the security of such Vision One Solution due, but not limited, to hacking attempts, denial of service attacks, or other activities that may be malicious, due to negligence or misconfiguration, either directed at or originating from a customer’s environment, Trend Micro may temporarily suspend, in part or in whole, Vision One Solution(s) as to such customer and/or other customers. In such an event, Trend Micro will promptly inform affected customer(s) and will work to resolve such issues, reinstating the affected Vision One Solution(s) at the earliest opportunity.

Disaster Recovery. Trend Micro maintains, updates, and periodically tests, a disaster recovery plan in connection with each Vision One Solution. Because each Vision One Solution is a Web-based cloud service, there may be Excused Performance Events beyond the reasonable control of Trend Micro that may impact a Vision One Solution as is more fully described in the Terms of Use.

The following objectives are provided each Vision One Solution:

Recovery Time Objective (RTO) – No more than 5 hours

Recovery Point Objective (RPO) – No more than 24 hours.

Relationship to Third Parties. As is more fully described in the Terms of Use and documents referenced therein, Trend Micro utilizes the services of third party subprocessors in connection with each Vision One Solution. As such, the provision of Vision One Solution is somewhat dependent on the performance of each such subprocessor, each of which, provides Trend Micro the benefit of its service level agreements. For a list of subprocessors for each Vision One Solution, please visit https://www.trendmicro.com/en_us/about/trust-center/privacy/gdpr/subprocessors.html.

Modification & Enforcement. Trend Micro reserves the right to modify this document at any time without prior notice. Please note these are non-binding service level targets, and while reasonable efforts will be made to achieve these targets, failure to do so is not considered a material breach of any agreement, nor can Trend Micro be held liable, financially or otherwise, on missed targets.

---


# Getting Started – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Getting started with TrendAI Vision One

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-getting-started-trend-vision

Learn how to register TrendAI Vision One™, connect supported products, and configure the console to start receiving alerts.

Before you can start receiving alerts and performing investigations using TrendAI Vision One™, you may need to configure

related products and become familiar with the TrendAI Vision One™ console.

Related information

Activate your TrendAI Vision One™ license

TrendAI Vision One™ access tiers

Update TrendAI Vision One™ to the Foundation Services release

Connect your IdP solutions

Configure SAML single sign-on

Configure user roles and accounts

Firewall exception requirements for TrendAI Vision One™

Connect existing products to product instance

Review detection models

Check Workbench alerts

---

## Activate your TrendAI Vision One license

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-activate-product-licenses

Activate your licenses for credits and TrendAI Vision One™ solutions.

Note

The following instructions are for activating TrendAI Vision One™ with Advanced Access, which refers to a console with a complete suite of apps and credits.

If you are using an existing on-premises or SaaS product license to provision TrendAI Vision One™ with Essential Access, see the activation instructions for Essential Access instead.

Procedure

Click the activation link in the email confirming your purchase of a TrendAI Vision One™ license.

You are redirected to the TrendAI Vision One™ License Activation Service.

Create a Primary User Account to register your business with TrendAI Vision One™.

Important

Unless you want to register your business with TrendAI™ twice, make sure that you do not meet any of the following conditions before creating a Primary User Account:

Your business previously purchased TrendAI™ products and already has a Primary User Account (formerly TrendAI™ Account).

You have a Cloud One account. If so, you can type the sign-in credentials for that account as your Primary User Account in TrendAI Vision One™.

Your business previously purchased TrendAI™ products and has an account that can sign in to Customer Licensing Portal using a Registration Key. If so, you can sign in to the TrendAI Vision One™ License Activation Service using your Customer Licensing Portal account.

If you have completed the Advanced trial of TrendAI Vision One™, you do not need to create a new TrendAI Vision One™ account. Use the same account to ensure that your settings carry over.

If you have a Primary User Account, click Sign in, provide your sign-in credentials, and proceed directly to confirming your registration information.

If you have a Cloud One or Customer Licensing Portal account, provide your sign-in credentials and follow the steps to assign the account as your new Primary User Account. and sign in. Skip the following steps and proceed directly to confirming your registration information.

If your organization has no existing sign-in account for TrendAI™ products or you want to create a new account, specify the contact name, email address, and password to assign as the Primary User Account for your business under Account Information.

Click Verify Email.

Go to your email inbox and copy the verification code sent by TrendAI™ .

Back in the TrendAI Vision One™ License Activation Service, paste the verification code and click Submit to verify your email address.

Tip

You must verify your email address within three minutes. If you cannot verify your email address in time, click the link to resend the code, or clear your browser cache and start the license activation process from the beginning.

Specify the name and region of your business on the Provide your business information screen.

Click Complete Registration.

The Activate Your TrendAI™ Solutions window appears.

On the Activate Your TrendAI™ Solutions screen, confirm that the displayed information about your registered business and purchased licenses is correct.

Click Activate.

Your TrendAI Vision One™ license is activated, and the TrendAI Vision One™ License Activation Service redirects to TrendAI Vision One™.

Provision TrendAI Vision One™.

Sign in to TrendAI Vision One™ with your Primary User Account.

Select your data center region.

Note

This setting is only required the first time you sign in to TrendAI Vision One™.

Click Confirm.

When TrendAI Vision One™ finishes provisioning, you are signed in to the console.

Go to Administration → Console Settings to specify your time zone.

Note

This setting is only required the first time you sign in to TrendAI Vision One™.

If you do not specify your time zone, there might be discrepancies related to your TrendAI Vision One™ license period.

---

## TrendAI Vision One access tiers

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-accessing-your-console

Understand TrendAI Vision One™ access tiers and license expiration policies.

You can provision a TrendAI Vision One™ console for no additional charge if you hold a valid license for a supported product, a TrendAI Vision One™ app, the XDR add-on, or TrendAI Vision One™ credits.

Important

The TrendAI Vision One™ platform supports the latest versions of the following desktop browsers:

Google Chrome

Mozilla Firefox

Microsoft Edge (Chromium)

The TrendAI Vision One™ platform is not officially supported on mobile browsers (Android and iOS).

There are two access tiers available:

Essential Access: TrendAI™ provisions a TrendAI Vision One™ console with Essential Access apps and features to customers with licenses for supported on-premises and SaaS products.

Advanced Access: TrendAI™ provisions a TrendAI Vision One™ console with a complete suite of apps to customers with TrendAI Vision One™ credits or a supported Advanced Access license, such as the TrendAI Vision One™ XDR add-on or Zero Trust Secure Access.

The expiration date of TrendAI Vision One™ access aligns with the expiration date of the supported license that expires last, including licenses for TrendAI™ Flex (credits). For paid licenses, you will be notified that your credits are about to expire starting 30 days before the expiration date. Once the expiration date arrives, there is a 30-day grace period during which you can continue to access TrendAI Vision One™. After the grace period, there is a 30-day lockout period during which you cannot access TrendAI Vision One™ through the browser or API and you will not receive any notifications, but access is still recoverable. After the lockout period, TrendAI™ purges all associated data, and you lose access to TrendAI Vision One™. We advise that you purchase or renew a TrendAI™ Flex (credits) license before the end of the lockout period to retain your data and maintain access to TrendAI Vision One™.

Important

A user account is purged within 48 hours if it is no longer associated with at least one TrendAI Vision One™ or Trend Cloud One™ tenant. This happens in the following scenarios:

The license associated with the last TrendAI Vision One™ or Trend Cloud One™ tenant expires, and both the grace period and the 30-day lockout period end. In this scenario, the user account is purged within 48 hours of the 30-day lockout period ending, and an email notification is sent regarding the user account purge.

A customer administrator deletes the user account from the last remaining TrendAI Vision One™ or Trend Cloud One™ tenant. In this scenario, the user account is purged within 48 hours of the administrator deleting it from the tenant, and an email notification is sent regarding the user account purge.

For trial licenses, you receive a notification that your TrendAI Vision One™ is about to expire 15 days before the expiration date. Once the expiration date arrives, there is a 30-day lock period. There is no grace period for trial licenses.

Note

If your credits for Advanced Access expire and you still hold a valid license for Essential Access, you can continue using Essential Access apps and features until the associated license expires.

For details about your licensed TrendAI™ offerings that connect to the TrendAI Vision One™ console, see License Information.

For information on which TrendAI Vision One™ Trials are available to you, see Which trials can I access based on my TrendAI Vision One™ access tier?.

Related information

Essential Access

Advanced Access

---

## Essential Access

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-essential-access

Use an existing license to access a TrendAI Vision One™ console with a limited but powerful set of apps and features.

Essential Access grants you access to a limited but powerful set of apps and features in the TrendAI Vision One™ console. Essential Access is available to organizations with a valid license for a supported product.

Tip

If you currently have Essential Access but require an Advanced Access app or feature, contact your sales representative. You might be eligible to receive a free 30-day Advanced TrendAI Vision One™ trial.

The following table lists the licenses you can use to activate Essential Access.

Supported licenses

SaaS products

On-premises products

ApexOne as a Service

Cloud One

Cloud App Security

TrendAI™ Email Security

TrendAI™ Web Security

ApexOne / OfficeScan

Deep Security

Deep Discovery Inspector

Deep Discovery Analyzer

Deep Discovery Email Inspector

InterScan Messaging Security Virtual Appliance / InterScan Messaging Security Suite

InterScan Web Security Virtual Appliance / InterScan Web Security Suite

ScanMail for Microsoft Exchange

ScanMail for IBM Domino / ScanMail for Lotus Domino

PortalProtect for Microsoft SharePoint

TippingPoint Security Management System

The following table lists the apps and features available with Essential Access.

Essential access apps and features

App group

App/Feature

Cyber Risk Exposure Management

Cyber Risk Overview

Dashboards

Dashboards and Reports

Reports

XDR Threat Investigation

Search

Targeted Attack Detection

Threat Intelligence

Intelligence Reports

Suspicious Object Management

Third-Party Intelligence (TAXII, MISP)

Assessment

Security Assessment

Workflow and Automation

Service Gateway Management

Third-Party Integration

Email and Collaboration Security

Email Asset Inventory

Point Product Connections

Product Instance

Administration

User Roles

User Accounts

Notifications

Audit Logs

Console Settings

License Information

Credits & Billing

Support Settings

Note

Certain features within the included apps may require Advanced Access.

Related information

Activate TrendAI Vision One™ with Essential Access

---

## Activate TrendAI Vision One with Essential Access

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-activating-essential-access

Use an existing product license to activate TrendAI Vision One™ with Essential Access.

TrendAI™ provisions a TrendAI Vision One™ console with Essential Access apps and features to customers with valid licenses for supported on-premises and SaaS products. The expiration date of the TrendAI Vision One™ console aligns with the expiration date of the supported license that expires last.

Note

To activate TrendAI Vision One™ with Essential Access using a supported SaaS license, ensure you first activate the product by following the link in the activation email or visiting the Customer Licensing Portal.

Procedure

Go to the TrendAI Vision One™ sign in page.

Next to "Already a TrendAI™ customer but do not have TrendAI Vision One™ yet?", click Try here.

You are redirected to the TrendAI™ Activation Service.

To activate using an on-premises license, select On-premises product from the dropdown, paste the Activation Code from a supported license, and click Continue.

Tip

You can obtain the Activation Code from the license management screen of the supported product console. If you cannot locate the Activation Code, contact your support provider.

To activate using another SaaS license, select Other SaaS service from the dropdown, enter your Primary User Account (formerly TrendAI™ Account) name or email, and click Continue.

Important

If your company has more than one Primary User Account, ensure that you sign in to the account that holds the supported license to activate Essential Access.

To activate using a Cloud One license, select Cloud One from the dropdown, enter your Cloud One API key value, and click Continue.

Accept the license agreement and sign in with your Primary User Account.

TrendAI™ provisions your TrendAI Vision One™ console with Essential Access apps and features.

---

## Advanced Access

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-advanced-access

Access the full suite of TrendAI Vision One™ apps and features.

Advanced Access grants you access to the full suite of apps and features in the TrendAI Vision One™ console. Advanced Access is only available to organizations with TrendAI Vision One™ credits. Certain features within your Advanced Access entitlement require credit usage. To learn more about credits, see Credits.

Note

If your company has purchased or renewed licenses for XDR sensors or other TrendAI Vision One™ services that support credits, such licenses are automatically calculated into credits upon activation.

For more information, see Licenses converted into credits.

Tip

If you currently have Essential Access but require an Advanced Access app or feature, contact your sales representative. You might be eligible for a free TrendAI Vision One™ Trial of the full TrendAI Vision One™ platform.

---

## Update TrendAI Vision One to the Foundation Services release

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-update-foundation-services-release

Update your TrendAI Vision One™ to experience enhanced account and identity management, strengthened centralized management capabilities, improved compliance, and newly updated services.

Important

The Foundation Services release became officially available on July 3, 2023.

Complete the update before January 31, 2025 to continue using TrendAI Vision One™.

The TrendAI Vision One™ Foundation Services release includes the following benefits:

Enhanced identity management and role-based access control: Configure permissions for users, groups, and identity providers, and define custom asset visibility for users across all TrendAI Vision One™ apps and services in one centralized location.

Specific identity and access management features include the following:

The Foundation Services release supports configuring additional user account types.

Individual user accounts can belong to and switch between multiple businesses registered with TrendAI Vision One™.

Individual user email addresses can be associated with one SAML Account and multiple SAML Group Accounts, enabling the user to switch between SAML accounts within the same TrendAI Vision One™ tenant.

Configure multiple identity providers to enable IdP-initiated SAML single sign-on (SSO), direct mapping to third-party IdP user groups, and mapping of multiple roles to the same user account.

Asset Visibility Management allows asset visibility scopes to be created and assigned to users to determine which TrendAI Vision One™ assets they can view.

New centralized security capabilities: Take advantage of new security capabilities for email, cloud, network, mobile, identity, and data in the TrendAI Vision One™ platform.

Features unique to the Foundation Services release include the following:

Endpoint Security

Container Security

File Security

Email and Collaboration Security

Cloud Accounts

Identity Security

Data Security Posture

PCI DSS compliance: Adhere to Payment Card Industry (PCI) Security Standards to better secure transaction and credit card data.

Be ready for future releases: Gain immediate access to newly released features, including those limited to customers who have updated to the Foundation Services release.

Important

Be aware of the considerations for updating to the Foundation Services release and potential impacts on your user accounts before beginning the update.

Procedure

Sign in to TrendAI Vision One™ using the Primary User Account for your registered business.

Note

The owner of the Primary User Account (formerly "TrendAI™ Account") has licensing rights to all TrendAI™ solutions for your business. Only the Primary User Account owner can initiate the update to the Foundation Services release.

Go to Administration → Console Settings.

In the System Update section, click Get Started.

Review the System Update Notice.

Acknowledge that you understand the update notice by selecting I understand how the update will affect my system and agree to start the process.

Clicking Start the Update to begin updating.

If your Primary User Account does not use an email address to sign in, assign and verify an email address to use in accessing your update services.

Assign an email account to the Primary User Account and click Verify Email.

Check your email inbox and copy the verification code sent from TrendAI™.

Paste the verification code into the console and click Submit.

Update the Primary User Account password.

Sign in to TrendAI Vision One™ using the Primary User Account.

Note

Your updated sign-in email address and password are also your sign-in credentials for the Customer Licensing Portal, replacing your previous root account credentials.

Allow some time for the activation process to complete.

Related information

Foundation Services update considerations

Impacts of migrating user accounts from other TrendAI™ products

---

## Foundation Services update considerations

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-foundation-update-consider

Consider the impacts of updating TrendAI Vision One™ to the Foundation Services release.

The following table outlines considerations you should be aware of before updating.

Important

Post-update tasks:

Verify that your user accounts have the correct access permissions and roles in the new User Accounts app and resolve any role conflicts.

Check or establish your identity provider (IdP) connections in the Identity Providers app.

Consideration

Description

Permanent update

You cannot undo or stop the update once you begin.

Business-level migration

The migration is only supported at the business level for each console.

Communication interruptions and forced sign-out during update

Communication with any associates that access your TrendAI Vision One™ console is temporarily terminated as soon as the update process begins. TrendAI™ recommends finishing all ongoing tasks before starting the update.

After the update completes, you might need to update your user accounts before re-accessing the system. If an account update is required, the affected users receive an email notification with instructions on updating their accounts.

Required update of user account sign-in credentials

After updating to the Foundation Services release, the owner of the Primary User Account must update the sign-in account to a valid, unused email address. The account owner must also reset their password, and if applicable, their multi-factor authentication (MFA) credentials.

All TrendAI Vision One™ local accounts receive an email with a link to reset their password, and if applicable, their MFA credentials.

Note

If the email address associated with a TrendAI Vision One™ account was previously registered with a Cloud One account, the accounts and sign-in credentials merge. The user can sign in to TrendAI Vision One™ with the same credentials used to sign in to Cloud One.

After the update, SAML Account and SAML Group Account users are unable to sign in to TrendAI Vision One™ until an administrator configures the required identity provider in Identity Providers, and the users verify their sign-in email addresses.

Single sign-on (SSO) to licensed TrendAI™ solutions

After updating to the Foundation Services release, the Primary User Account can automatically sign in via SSO to all licensed TrendAI™ cloud services from the console links available in TrendAI Vision One™.

For security reasons, these console links are visible only to the Primary User Account. Other TrendAI Vision One™ users, including newly accounts created after the update, must access the external consoles via the normal sign-in screens.

Note

Access to any connected on-premises solutions always requires manual sign-in, and all users with permission to the view TrendAI Vision One™ apps can view the links.

Endpoint agent bandwidth usage

If you currently use the toggle-based Endpoint Inventory app, your endpoints automatically download an update package to enable access to new features in the Foundation Services release and Endpoint Security. The download package size can be up to 61 MB depending on your endpoint configuration.

Bandwidth usage during the update process might impact your network performance depending on the number of endpoints and if you previously configured bandwidth throttling.

Updating other TrendAI™ products

After updating to the Foundation Services release, all existing product connections remain visible in the Product Instance app.

To update your other TrendAI™ solutions after updating TrendAI Vision One™, select a product instance and begin the update manually.

For more information, see Impacts of migrating user accounts from other TrendAI™ products.

---

## Connect your IdP solutions

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-connecting-your-idp-solutions

TrendAI Vision One™ uses Identity Provider (IdP) solutions to support seamless, SAML-based, single sign-on (SSO) using your corporate account credentials.

An IdP is required to create SAML accounts. From the Identity Providers page, you can create multiple IdPs. Follow these steps to create IdPs for your accounts.

Procedure

On the TrendAI Vision One™ console, go to Administration → Identity Providers.

Click Download the metadata XML.

The TrendAI Vision One™ Service Provider metadata XML file downloads to your computer.

Configure your Identity Provider (IdP) and download the IdP metadata XML file.

For more information, see the topic below for your IdP.

Configure Active Directory Federation Services

Configure Microsoft Entra ID

Configure Okta

Configure Google Cloud Identity

On the TrendAI Vision One™ console, go back to Administration → Identity Providers.

Click Add Identity Provider.

Enter a name and description for the IdP, then upload the metadata XML file that you edited.

After the file successfully uploads, click Save.

Click Add SAML Users to go to the User Accounts page to add SAML accounts in TrendAI Vision One™.

For more information, see Configure accounts.

---

## Configure user roles and accounts

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-configuring-user-roles-accounts

With TrendAI Vision One™ you can configure user roles to grant app permissions and scope to user accounts. You can then create user accounts, like local accounts or SAML, single sign-on (SSO) accounts, for authorized users to access the TrendAI Vision One™ console and assign the user roles these accounts.

Configure user roles to grant app permissions to TrendAI Vision One™ user accounts. From the User Roles page, you can view the predefined roles that include built in permissions or create custom roles with specified permissions and scope.

Create and manage TrendAI Vision One™ user accounts to allow authorized users to access the console.

To learn how to configure user roles and accounts, see User Accounts and User Roles.

Related information

Configure user roles

Configure user accounts

---

## Firewall exception requirements for TrendAI Vision One

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-firewall-exception-requirements-for

To ensure that TrendAI Vision One™ can properly communicate with your environment, you must configure the appropriate allow rules in your firewall.

Firewall exception requirements differ depending on your TrendAI Vision One™ environment. Refer to the following topics to ensure you configure the correct allow rules.

Related information

Americas - firewall exceptions

Australia - firewall exceptions

Canada - firewall exceptions

Europe - firewall exceptions

India - firewall exceptions

Japan - firewall exceptions

Singapore - firewall exceptions

South Africa - firewall exceptions

South Africa - firewall exceptions

Middle East and Africa - firewall exceptions

United Kingdom - firewall exceptions

Legacy firewall exceptions

---

## Connect existing products to product instance

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-existing-products-instance

Important

If the product you want to connect is already connected to another TrendAI Vision One™ instance, before you can connect the product to your current console, you must first disconnect the product from the other TrendAI Vision One™ console.

Procedure

Go to Service Management → Product Instance.

Click Add existing product.

The Product Connection window appears.

Depending on the product, you can connect products to TrendAI Vision One™ automatically or via an enrollment token. Some products require additional settings for optimal performance.

Select one of the following products to automatically connect the product to TrendAI Vision One™ based on your business ID:

TrendAI™ Cloud App Security

Email Security

TrendAI™ Web Security

Select a product under Instance type.

You can add a description to identify the product instance.

Click Save.

The product instance connects automatically to TrendAI Vision One™.

Connect the following products using an enrollment token:

TippingPoint Security Management System

Cloud One

TrendAI™ Apex Central On-premises

Important

The connection process only transfers information related to the product instance and base agents, but not existing XDR Endpoint Sensors. TrendAI™ recommends transferring all product and base agent information to ensure that XDR Endpoint Sensor agents can be correctly associated with endpoints, then contacting support if necessary. For more information, see Endpoint Inventory update considerations for customers migrating multiple consoles .

Product Instance does not support hybrid environments. If you have connected both an on-premises and SaaS TrendAI™ Apex One server to your on-premises TrendAI™ Apex Central server, you must first disconnect, then reconnect the SaaS server in Product Instance.

Apex One as a Service

Important

The connection process only transfers information related to the product instance and base agents, but not existing XDR Endpoint Sensors. TrendAI™ recommends transferring all product and base agent information to ensure that XDR Endpoint Sensor agents can be correctly associated with endpoints, then contacting support if necessary. For more information, see Endpoint Inventory update considerations for customers migrating multiple consoles .

TrendAI™ Apex One On-premises

Important

TrendAI Vision One™ does not support a direct connection to an on-premises TrendAI™ Apex One server. Connect your Apex One servers to TrendAI Vision One™ through a TrendAI™ Apex Central management server connected to TrendAI Vision One™.

TrendAI™ Deep Discovery Analyzer

TrendAI™ Deep Discovery Email Inspector

TrendAI™ Deep Discovery Inspector

Tip

You can manage Deep Discovery Inspector appliance connections in Network Inventory.

TrendAI™ Deep Security

TrendAI™ Worry-Free Business Security Services

Select the product that you want to connect for Instance type.

Click Generate token to generate the enrollment token.

Copy the token into the console for the selected product.

Back in TrendAI Vision One™, click Save or Close to close the Product Connection window.

The product instance connects to TrendAI Vision One™.

---


# Cyber Risk Exposure Management – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Cyber Risk Overview

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-executive-dashboard

Get better insights into your company’s security posture by understanding your overall cyber risk index, asset risks, ongoing attacks, and all contributing risk factors.

Cyber Risk Overview provides information about your company's overall Cyber Risk Index, which is a comprehensive score based on the dynamic assessment of risk factors in your organization.

The Cyber Risk Index automatically updates every four hours. Changes to the status of risk events are reflected in the Cyber Risk Index after up to one hour. You may also manually recalculate the Cyber Risk Index by clicking Recalculate. Manual recalculations take up to one hour to display.

Note

When you use credits for Cyber Risk Exposure Management, only assets you have enabled for assessment are used to calculate the Cyber Risk Index. If you have recently enabled only desktop and server or cloud account assessment, your displayed Cyber Risk Index may drop significantly due to fewer assets available for assessment. To learn more about Cyber Risk Exposure Management credit requirements, see Credit requirements for TrendAI Vision One™ solutions.

To gain more comprehensive insights and accurate organizational comparisons, connect more data sources, and configure your industry and company size in your Company Profile.

Data availability depends on the asset visibility scope of the current user. For more information about asset visibility scope, see Asset Visibility Management.

The following table outlines the sections available in Cyber Risk Overview.

Option

Description

Risk Overview

Provides your company's overall Cyber Risk Index and insights into attack surface risk for your Devices, Internet-facing Assets, , Cloud Apps, and Cloud Assets

Exposure Overview

Provides your exposure score, which takes into account vulnerabilities, system configuration risks, and user activity and behavior

Attack Overview

Provides your attack score, which represents the overall intensity of cyber attacks on your organization

Security Configuration Overview

Provides your security configuration score, which is based on factors including agent and sensor deployment, key feature adoption, license health, and agent versions

Data sources

Allows you to view your connected data sources and configure new data sources for better insights

Manage reports

Allows you to create one-time or scheduled reports automatically specified based on the selected tab

Related information

Risk Overview

Exposure Overview

Attack Overview

Security Configuration Overview

Troubleshoot devices with no vulnerability assessment visibility

Cyber Risk Index algorithm updates

---

## Continuous Risk Management

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-continuous-risk-manage

Related information

Attack Surface Discovery

Threat and Exposure Management

Vulnerability Management

---

## Cyber Attack Prediction

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-cyber-attack-predicti

Related information

Attack Path Prediction

---

## Vulnerability Management

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-vuln-management-app

Scan for, assess, prioritize, and mitigate vulnerabilities throughout your organization's environment to proactively address risk and ensure environmental compliance and stability.

Related information

Vulnerability Overview

Network Vulnerability Scanner

---

## Cyber Governance, Risk, & Compliance

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-cyber-govern-risk-compliance

Related information

Compliance Management

Cyber Risk Quantification

---

## Security Awareness

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-security-awareness

Create phishing simulations to identify users who may need to strengthen their cybersecurity knowledge, and track the progress of training campaigns to educate your users about cyber threats.

Use Security Awareness to run phishing simulations and create training campaigns to educate your users about common attack methods used by cybercriminals. Phishing Simulations and Training campaigns work together to give your users the knowledge they need to stand as the first line of defense against cyber threats.

The following table describes the features available in Security Awareness.

Feature

Description

Phishing Simulations

Use realistic templates and landing pages in automated campaigns to make sure your employees know how to recognize real-world cyber threats.

To set up a realistic and safe phishing simulation:

Add Phishing Simulations to the allow list for your email provider.

Choose a predefined email template and landing page or create custom content.

Choose the recipients for the phishing simulation based on your connected data source.

Start the phishing simulation immediately or set up a schedule and duration for the simulation.

Set up follow-up notifications for participants.

Important

Phishing simulations are limited to 12 campaigns per year with a maximum of 200 recipients unless you upgrade your pricing package to Cyber Risk Exposure Management - Essentials.

Training Campaigns

Enroll your team in top-tier cybersecurity awareness training to arm your employees with the knowledge necessary to protect themselves and your organization.

To begin a training campaign for your organization:

Select a name for your campaign.

Choose a program from the available library of content or upload a custom program.

Select campaign participants based on your connected data source.

Send out invitations to your participants.

Schedule reminders to send to participants reminding them to complete the training program.

Related information

Security Awareness firewall exceptions

Get started with training campaigns

Get started with phishing simulations

Set up allow lists for Security Awareness

---


# AI Security – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## AI Security Blueprint

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-ai-security-blueprint-overview

Important

This is a "Pre-release" feature and is not considered an official release. Please review the Pre-release disclaimer before using the feature.

The AI Security Blueprint dashboard delivers guidance across TrendAI Vision One™ to protect your AI stacks and users of AI services. This dashboard enables visibility into your AI assets including services, models, workloads, data storage, and entitlements in addition to code repositories and container images.

Services and users: View service usage and user access across AI services. Deploy secure access policies to control connections based on device, network, or location parameters.

Develop: Track code repositories for AI-related code and scan for vulnerabilities, malware, and exposed secrets. Access your repository inventory for detailed visibility of risks.

Deploy: View counts for continuous integration and continuous delivery (CI/CD) pipelines and container images that include AI packages. Enable artifact validation and threat monitoring in deployments. Scan your AI models for known attack techniques.

Runtime and production: Monitor AI infrastructure, cloud assets, and workloads. Generate risk events when TrendAI Vision One™ detects threats or misconfigurations. Review clusters and workloads for security compliance, vulnerabilities, and incident trends.

Action	Description

Add and update AI asset tags

Click Manage AI asset tags to tag and categorize your AI-related assets in Attack Surface Discovery for better organization, tracking, and vulnerability management across your security posture. AI category tags include Workload, Model, Data storage, Entitlement, and Service.

Configure Code Security

Click Configure next to Code Security to set up and customize your code security scanning policies, enabling detection of vulnerabilities, malware, and exposed secrets in your code repositories.

Connect or manage a code repository

Click View code repository inventory to see and manage repositories containing AI-related packages, dependencies, and codebase in Code Security so you can assess code risk and track security issues.

View AI-related CI/CD artifacts

Click View CI/CD artifacts to see continuous integration and continuous delivery pipelines and container images that include AI packages in Code Security.

Configure Container Security

Click Configure next to Container Security to set up container scanning policies, enabling detection of vulnerabilities and threats within container images used in your AI infrastructure.

View containers with AI-related packages

Click View container image logs in Container Security to examine containers that include AI-related packages. Container Security provides detailed visibility into container contents, vulnerabilities, and security compliance.

Set up AI Scanner

Click Set up next to AI Application Security: AI Scanner to configure automated scanning for AI models and applications, enabling detection of known attack techniques and vulnerabilities in your AI systems.

View AI Scanner results

Click View AI Scanner results to open AI Scanner scan results and review comprehensive scan findings, vulnerability assessments, and security recommendations for your AI applications and models.

Configure Cloud Risk Management

Click Configure required features next to Cloud Risk Management to enable cloud security scanning, threat detection, and risk assessment across your cloud infrastructure supporting AI workloads.

Manage AI security posture

Click Manage AI security posture to enable and manage Cloud Security Posture so you can monitor and improve the overall security configuration and compliance status of your AI infrastructure.

Configure AI Detection and Response

Click Configure required features next to AI Detection and Response to enable threat detection capabilities, configure Cloud Accounts, and set up automated response mechanisms for AI-related security incidents.

View Workbench insights

Click View Workbench insights to access centralized dashboard displaying AI security analytics, threat intelligence, and actionable recommendations for improving your AI security posture.

View runtime cluster log

Click View runtime cluster log to monitor and analyze runtime activities, container behavior, security events, and operational logs from your Kubernetes clusters running AI workloads in Container Security.

Set up AI Guard

Click Set up next to AI Application Security: AI Guard to configure runtime protection and monitoring for AI applications, enabling detection and prevention of threats during execution.

View AI Guard results

Click View AI Guard results to review runtime threat detection findings, security incidents, and recommendations for your AI applications in production environments.

Configure Data Security Posture

Click Configure required features next to Data Security Posture to enable data classification, discovery of sensitive information, and data protection policies for AI-related data and models.

View assets with sensitive data

Click View Data Security Posture to identify and monitor data storage locations and databases containing sensitive or personally identifiable information (PII) used in your AI systems with Data Security Posture.

Configure AI Secure Access

Click Configure next to AI Secure Access to set up secure access controls, authentication mechanisms, and access policies for protecting access to AI services, models, and infrastructure.

View Secure Access

Click View Secure Access to review AI service access activity, connection status, and usage patterns for your deployed AI Secure Access policies.

---

## AI Application Security

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-ai-scanner-ai-guard

Scan your AI models for common attack techniques, attack objectives, and harmful or sensitive content in inputs and outputs.

AI Application Security enables you to intercept malicious inputs and block potentially harmful outputs from your AI models, which helps to prevent exploitative usage and maintain regulatory compliance. If your data needs to remain local, choose self-hosted instead of hosted by TrendAI™ .

Deployment options for AI Scanner settings

You can configure AI scan settings in two ways, depending on your deployment scenario:

Trend-hosted: Use TrendAI™'s cloud infrastructure to run scans.

Self-hosted: Deploy and run the scanner in your own environment (e.g., on-premises or private cloud).

Tip

Choose the option that best fits your data residency and operational requirements.

AI Guard integration options

You can integrate AI Guard in two ways, depending on your deployment scenario:

Trend-hosted: Use TrendAI™'s cloud infrastructure to integrate AI Guard.

Self-hosted: Deploy and integrate AI Guard in your own environment.

Tip

Choose the integration option that best fits your data residency and operational requirements.

Get started with AI Application Security

Configure Trend hosted AI scan settings: Scan your AI models for common attack techniques and objectives to prevent malicious use and ensure regulatory compliance.

Configure self-hosted AI scan settings: Deploy and configure the scanner in your own environment.

Review AI Scanner scan results: Learn how to interpret and act on scan results.

Integrate Trend-hosted AI Guard: Configure settings to scan your AI usage for harmful content generation, sensitive information leakage, and prompt injections.

Integrate self-hosted AI Guard: Deploy and integrate AI Guard in your own environment.

AI Guard API Reference and Code Examples: Reference for API integration and sample code in multiple languages.

Estimated Deployment Costs for AWS: Review cost estimates for deploying AI Application Security on AWS.

---

## AI Secure Access

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-ai-service-access

Gain insights into activities regarding access to AI services and AI content violations from your users and devices.

The following table outlines the widgets available displaying information about AI secure access.

Widget

Description

Total AI Secure Access Attempts

Total number of AI Secure access attempts broken down by AI secure

Total Detected AI Content Violations

Total number of AI content violations based on advanced generative AI content inspection settings, broken down by individual AI service

File upload to AI service: Total files users attempted to upload in prompts

Sensitive data loss: Total detections of sensitive data being sent through prompts

Potential prompt injection: Total detections of potential malicious prompts

Response containing inappropriate content: Total responses with content violating AI content inspection templates

Response containing malicious URL: Total responses with URLs determined to be malicious by TrendAI™ threat experts

Top 10 AI Secure Users

Lists the top 10 users of AI services in your organization. Click on the number of access attempts to see details in Secure Access History.

Top 10 Users with AI Content Violations

Lists the top 10 users in your organization that have logged AI secure content violations. Click on the number of violations to see details in Secure Access History.

---


# Agentic SIEM & XDR – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Detection Model Management

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-detection-model-management

Manage the detection models and filters TrendAI Vision One™ uses to detect events and trigger alerts.

Detection Model Management (Agentic SIEM and XDR → Detection Model Management) enables you to configure how TrendAI Vision One™ detects events in Observed Attack Techniques and generates alerts in Workbench.

The detection models combine multiple rules and filters using a variety of analysis techniques including data stacking and machine learning.

TrendAI™ refines and adds detection models and filters to improve threat detection capabilities and reduce false positive alerts on a regular basis.

The following table outlines the tabs available in Detection Model Management:

Tab

Description

Detection Models

View all predefined detection models provided by TrendAI Vision One™

Custom Models

Create, manage, edit, import, and export custom detection models

Filter custom detection models by severity, status, and time of last update

Search for custom detection models by model ID, name, or filters

Custom Filters

Create, manage, edit, import, and export custom filters

Filter custom filters by risk level, event type, and time of last update

Search for custom filters by filter ID, name, or query

Exceptions

Add, manage, and edit exceptions to detection models

Search for exceptions by name or criteria

Related information

Detection models

Custom models

Custom filters

Local response filters

Exceptions to detection models/filters

Creating filters and models for abnormal download behavior in SharePoint and OneDrive

---


# Endpoint Security – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Endpoint Inventory

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-endpoint-inventory-intro-part

Manage, locate, and take action on any endpoint in your environment or download the agent installer packages to deploy on more endpoints.

Use the Endpoint Inventory to manage the endpoints in your environment. You can quickly find and take action on endpoints that have issues, view detailed information about endpoints with agents installed, and download new agent packages.

The following table lists the options available in Endpoint Inventory.

Options

Location

Description

Available Actions

Displays all discoverable endpoints that may require attention

Click any status to display a list of the affected endpoints. Click any endpoint to see recommended remediation actions. Endpoint Inventory automatically hides actions that have zero (0) matching endpoints.

Immediate action required: An issue occurred on the endpoint that requires user intervention

Unmanaged endpoints: The endpoints are discoverable on your network but do not have any available protection or sensor agent program installed

Sensor disabled: The endpoints have the TrendAI Vision One™ sensor installed but not enabled, either through the sensor or policy settings

Sensor update recommended: The endpoint has an older version of the Endpoint Sensor component installed (including Activity Monitoring and Apex One Endpoint Sensor) and should update to the latest TrendAI Vision One™ version

Security Deployment

Displays all endpoints that have a protection or sensor agent installed

Click any status to view a list of all related endpoints. Click any endpoint to view detailed information about the endpoint and applied policies.

All managed endpoints: All endpoints on your network that have a protection or sensor agent installed

Standard Endpoint Protection: All endpoints that have the Standard Endpoint Protection agent installed (includes endpoints that also have the Endpoint sensor detection and response feature enabled)

Server & Workload Protection: All endpoints that have the Server & Workload agent installed (includes endpoints that also have the Endpoint sensor detection and response feature enabled)

Sensor only: All endpoints that only have the Sensor agent installed

Connected Endpoint Protection: All endpoints that have protection or sensor agent installed from a connected product.

Endpoint Management

Displays your Protection Managers, Endpoint Group Managers, and all endpoint groups for your business

Standard Endpoint Protection Management: Your provisioned Standard Endpoint Protection Manager and Endpoint Group Managers.

Server & Workload Protection Management: Your provisioned Server & Workload Protection Managers and Endpoint Group Managers

Connected Endpoint Protection Management: Your connected Trend Micro endpoint protection products.

For more information, see Endpoint Management.

Note

Sensor only endpoints are not included in any endpoint groups. Use the Add filters () button to locate the sensors you want to manage.

Endpoint actions

After selecting an endpoint from the displayed list, you can take the following actions. The actions available may vary depending on your region and if you have chosen to opt-in to certain pre-release features.

Tip

If you have a large number of connected endpoints, the select all option appears after selecting all endpoints on the current page, or at least 100 endpoints.

Move Endpoint: Select the new endpoint group that the endpoints belong to

Note

You can only move endpoints to other endpoint groups managed by the same Endpoint Group Manager.

Certain restrictions apply if you have updated TrendAI Vision One™ to the Foundation services release without unlocking the TrendAI Vision One™ Endpoint Security functionality. Specifically, you cannot move endpoints managed by on-premises servers or SaaS instances that have not yet updated to TrendAI Vision One™ Endpoint Security.

You cannot move sensor only endpoints to an endpoint group. Use the Add filters () button to locate the sensors you want to manage.

Remove Endpoint: Remove the selected endpoints from Endpoint Inventory

Removing an endpoint does not uninstall the TrendAI Vision One™ Endpoint Security agent. If the endpoint reconnects to your TrendAI Vision One™ instance within a year of removal, the endpoint is added to the inventory again. To uninstall agents, see Uninstall the TrendAI Vision One™ Endpoint Security agent.

For more information about removed endpoint behavior, see What happens when a removed endpoint reconnects to TrendAI Vision One™ Endpoint Security?.

Response actions: Create response tasks on specific endpoints and follow the task status using the Response Management app

Isolate Endpoint

Run Remote Custom Script

Start Remote Shell Session

Note

If you isolate an endpoint using the Isolate Endpoint task, you must go to the Response Management app and find the Isolate Endpoint task to restore the connection.

Endpoint security policy: Manage overrides for endpoint policy settings for the selected endpoints. Overrides help apply different settings to specific endpoints. You can chose the following actions:

Override endpoint security policy: Apply setting overrides to the selected endpoints

Remove override settings: Remove all setting overrides applied using the Override endpoint security policy action.

Remove Intrusion Prevention endpoint overrides: Remove any overrides configured for Intrusion Prevention in Server & Workload Protection → Computers

For more information about policy overrides, see Endpoint security policy overrides.

Agent Installer

Opens the Agent Installer window, which provides access to the different installer packages

Deploy agents using the installer package

Deploy agents using the offline installer package

Deploy agents using the deployment script

For more deployment options, see Deploy agents.

TrendAI Vision One™ Endpoint Security agent system requirements

Global Settings ()

Displays the option to configure your global agent settings

Global Settings: A collection of sensor and proxy settings that apply to all endpoints in your environment

Additional actions

Add filters (): Add filters to help locate endpoints based on criteria such as statuses, policies, operating systems, and more

To save applied filters as a custom filter, click Save (). You can save up to 20 custom filters per TrendAI Vision One™ user account.

Display Guides (): Reopens the Getting Started Guide for Endpoint Inventory

Manage Reports:

Export view to CSV: Exports all endpoints based on the current filters set in the current view

Endpoint Inventory: Creates a one-time or recurring report based on endpoint data using the Endpoint Inventory report template

Show/Hide Columns (): Customizes the columns that display in the list

For more information, see Endpoint Inventory table columns.

Related information

Endpoint Management

Global Settings

Endpoint security policy overrides

TrendAI Vision One™ Endpoint Security agent system requirements

Endpoint Inventory table columns

Updating the agent on virtual desktops

Uninstall the TrendAI Vision One™ Endpoint Security agent

TrendAI Vision One™ Endpoint Security Endpoint Inventory FAQ

---


# Cloud Security – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Cloud Risk Management

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-cloud-risk-management

Cloud Risk Management helps you maintain visibility and control over your cloud security posture across AWS, Azure, Google Cloud, Oracle Cloud Infrastructure, and Alibaba Cloud environments. The app provides continuous monitoring, compliance tracking, and risk assessment to identify and remediate misconfigurations before they become security incidents.

Get started with Cloud Risk Management

To use Cloud Risk Management, connect your cloud accounts through the Cloud Accounts app. Once connected, Cloud Risk Management automatically begins scanning your resources and providing insights into your security posture.

Access Cloud Risk Management from Cloud Security → Cloud Risk Management.

Related information

About Cloud Risk Management

---


# Network Security – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Network Inventory

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-network-inventory

View and manage connected security products and the network sensor feature which provides visibility into your network environment.

Use Network Inventory (Network Security → Network Inventory) to monitor, manage, and configure your connected TrendAI™ security products and enable the Network Sensor function. Network Inventory provides an overview of your connected Virtual Network Sensors, Deep Discovery Inspector appliances, and TippingPoint devices managed by your connected TippingPoint SMS. The Network Sensor is a feature deployed on supported products which allows your connected devices to monitor traffic and provide greater visibility for XDR detection and analysis.

Advanced Network Security features are located on the following screens, accessible from the navigation bar.

To configure advanced scanning settings and define your network topography, see Network Analysis Configuration.

To configure intrusion prevention settings including deploying virtual patches, see Intrusion Prevention Configuration.

Network Inventory retains data for all Network Sensors for 180 days.

The following table lists the options available in Network Inventory.

Options

Description

Inventory

Displays an overview of your network security environment and allows you to filter the list view by product type or assigned group

Click on any product name or group name to filter the table. Hover your mouse over an entry and click the options icon () to do the following group management actions.

Create group: Create a new appliance group or sub-group

Rename: Rename the appliance group or sub-group

Delete: Delete the appliance group or sub-group

Some actions are limited based on group type or level.

For more information about managing Virtual Network Sensor, see Virtual Network Sensor.

For more information about managing Deep Discovery Inspector, see Deep Discovery Inspector appliances.

For more information about managing TippingPoint appliances, see TippingPoint devices.

Common actions

Common Network Security actions that are available in all views

The buttons and links located at the top of the Network Inventory screen allow you to manage resources and policies that apply across appliance type.

Monitored throughput: Click to view a breakdown of your network throughput by sensor type and individual connected sensors.

Virtual Network Sensors and TippingPoint devices display the throughput monitored from the start of the billing cycle to the previous day.

Deep Discovery Inspector appliances display the allocated bandwidth for connected appliances with the Network Sensor feature turned on. Bandwidth allocation is fixed based on the purchased license.

You can view details about your actual scanned throughput with the Monitored Network Throughput widget in the Network Overview app.

Start free trial: Try XDR for Networks features for free to add TrendAI Vision One™ XDR capabilities to your network solutions.

This feature is available only for eligible users. For details, see Start a free trial of XDR for Networks.

Manage usage: View your current credit usage for XDR for Networks features

Simulations: Use demonstration scripts to simulate attacks and find out what TrendAI Vision One™ can uncover for you

Network appliance actions

Deploy or connect your network security appliances and take management actions on selected appliances

The actions available change depending on which product type you are viewing and if you have selected an appliance from the appliance list.

For more information, see the product specific topics:

Virtual Network Sensor

Deep Discovery Inspector appliances

TippingPoint devices

Other actions

Take additional actions for your appliance type

The actions available change depending on which product type you are viewing.

Setup Guide: Open the Virtual Network Sensor Getting Started Guide in the TrendAI Vision One™ console to review setup and deployment steps.

Manage: Manage appliance plans and the Virtual Analyzer image source for your connected Deep Discovery Inspector appliances

Refresh (): Refresh the current view

Inventory list

Displays the connected network security appliances based on which product type or group you selected from the Inventory section

Related information

Credit requirements for XDR for Networks

Start a free trial of XDR for Networks

Virtual Network Sensor

Deep Discovery Inspector appliances

TippingPoint devices

Network Inventory with Deep Discovery Director

---

## Network Analysis Configuration

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-network-analysis-configuration

Define your network topography and configure how network sensors monitor and scan your network traffic.

TrendAI Vision One™ Network Security lets you define your network topography, as well as manage how network sensors monitor and scan your network traffic:

Active Network Scanner identifies devices on your network using discovery traffic from network sensors. Discovered devices appear in Network Inventory and Attack Surface Discovery.

Monitoring / Scanning manages detection rules and exceptions, as well as packet capture, for connected Deep Discovery Inspector appliances.

Network Resources lists critical servers, trusted applications, and other network resources that TrendAI Vision One™ uses to determine the source and severity of suspicious behavior.

Related information

Active Network Scanner

Monitor and scan network traffic

Network Resources

---

## Intrusion Prevention Configuration

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-intrusion-prevention-configuration

Assess and prioritize your network vulnerabilities, and quickly deploy virtual patch filters for your most at-risk CVE detections.

Intrusion Prevention Configuration centralizes insights from across your network and assesses and prioritizes risk alongside other XDR sensor data. Intrusion Prevention Configuration provides policy recommendations and enables the deployment of virtual patch filters to stay ahead of critical CVEs.

Intrusion Prevention Configuration was formerly known as Network Intrusion Prevention - Policy Recommendations. You can view your connected TippingPoint devices by navigating to Network Security → Network Inventory.

Policy recommendations speed up your response to the most critical CVE threats affecting your network through the deployment of available TippingPoint Security Management System (SMS) virtual patch filters. You receive a customized display of the most critical CVEs currently affecting your network and the virtual patching filter status across your profiles.

Intrusion Prevention Configuration now supports policy enforcement on all TippingPoint SMS appliances connected to TrendAI Vision One™. If you have more than one SMS, use the dropdown menu to select which SMS to display for policy tuning. Information and policy configuration options for the SMS you select is displayed on the Policy Recommendations page.

In order for TippingPoint users to see Intrusion Prevention Data, they must first ensure Vulnerabilities is selected as a Risk Factor in Threat and Exposure Management. Because the Vulnerability Assessment service scans endpoints for vulnerabilities, TippingPoint users must also either install Endpoint Sensor or a third-party vulnerability scanning tool so that vulnerabilities will display in Threat and Exposure Management. The resulting vulnerabilities map to the corresponding TippingPoint filter and are shown as network vulnerabilities on the Intrusion Prevention Configuration display.

The following table outlines the options available on the Policy Recommendations tab (Network Security → Intrusion Prevention Configuration → Policy Recommendations (tab)).

Option

Description

Vulnerability Overview

Displays the current vulnerability status for your most at-risk unique CVEs and emerging ZDI vulnerabilities that have corresponding TippingPoint filters available for virtual patching.

Prioritized CVE threat list

Displays a prioritized list of CVEs and the filters available that you can enable and deploy to profiles to virtually patch existing threats.

Use the available filters to view case statuses, or locate specific CVEs and TippingPoint SMS profiles.

Mitigate the CVE risk by selecting filters and deploying policies directly to your TippingPoint SMS profiles.

View detailed CVE profiles by clicking the details icon ().

Policy deployment status

Displays the current progress of your policy deployment operations.

Export

Export filter recommendations to share and use virtual patching information in other existing processes and systems.

Related information

Deploy Virtual Patch filter policies to TippingPoint SMS

CVE profiles

---

## Agent Resource Monitoring

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-agent-resource-monitoring

Get an overview of how your deployed TrendAI Vision One™ Endpoint Security agents impact the system performance of your endpoints.

Important

Agent Resource Monitoring is a "Pre-release" feature and is not considered an official release. Please review the Pre-Release Disclaimer before using the feature.

This feature is not available in all regions.

Agent Resource Monitoring currently only supports TrendAI Vision One™ Endpoint Security agents with Server & Workload Protection version 202503 (feature version 20.0.2-4960) or later.

Agent Resource Monitoring requires enabling IoT Traffic in the Server & Workload Protection Manager. To learn how to enable IoT Traffic, contact your support provider.

Agent Resource Monitoring provides both a top-level overview of how TrendAI Vision One™ Endpoint Security agents impact performance in your environment and individualized details for each of your managed endpoints. You can use this information to help tailor security settings to your performance needs or quickly identify abnormal system behavior and diagnose issues.

Figure 1 shows the different sections of Agent Resource Monitoring.

Figure 1 - Agent Resource Monitoring Overview

Agent Resource Overview: This section provides a quick glance of how much CPU and Memory resources agents are using across your environment.

The CPU and Memory summary show the (a) calculated average resource usage of your agents across your environment for the past hour, and (b) how usage has trended, whether increasing or decreasing, over the past 7 days. See figure 2.

Figure 2 - CPU and memory overview

The Security Process overview provides the average resource usage of individual agent modules across your environment for the past hour.

Security Processes

Module

Description

Processes

Anti-Malware Scan

Includes the processes used to run anti-malware scans

Linux: ds_am

Windows: coreServiceShell.exe

Server & Workload Protection

Includes the processes and services used by the main endpoint protection module.

Linux: ds_agent

Windows: dsa.exe

Server & Workload Protection Connect

Includes the processes and services used to connect to TrendAI™ services.

Linux: dsa-connect

Windows: dsa-connect.exe

Net Module

Includes the processes and services used by network monitoring features.

Linux: tm_netagent

Windows: tm_netagent.exe

Note

The averages calculated for CPU and memory are calculated by finding the median total usage of each agent over the past hour and averaging across all managed endpoints.

Each module contains a number of processes and services which utilize CPU and memory resources on the endpoint. For more information about agent process for Server & Workload Protection, see the Success Portal.

The usage graph provides a visual representation of average resource usage across your environment. You can choose to view usage over the past seven days or 24 hours. Memory usage is measured in Megabytes.

The endpoint list displays the managed endpoints in your environment and the median CPU and memory usage for the past hour. You can filter the list or search for specific endpoints. Clicking an endpoint name opens the detailed resource view for that endpoint (see Figure 3).

Note

Filtering by Security Process only shows endpoints with non-zero resource usage for that process. For example, if you select Anti-malware scan, agents with the feature disabled do not appear in the list.

Figure 3 - Endpoint Detailed Resource View

The detailed resource view allows you to look at how agents are impacting the performance of individual endpoints.

The endpoint details provide a quick summary of information including the endpoint name, operating system, and last check-in. Click the link to view more details in Endpoint Inventory.

The resource overview provides the median memory and CPU usage for the past hour and the usage trend for the past seven days. Additionally, you can view the resource usage of each security process over the past hour.

The usage graph provides a visual representation of resource usage. You can choose to view usage over the past seven days or 24 hours.

The Top 10 Anti-malware scanned files and paths provides a list of the most frequently scanned files, processes, and folders on the endpoint. You can filter the list by object type.

Note

If Anti-malware Scan is not enabled on the endpoint, no data appears in the list.

---


# Zero Trust Secure Access – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Get started with Zero Trust Secure Access

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-getting-started-ztsa

Related information

What is Zero Trust Secure Access?

Prepare to deploy Private Access, Internet Access, and AI Secure Access services

Deployment guides

Ranges and limitations

---

## What is Zero Trust Secure Access?

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-what-is-zero-trust-secure-access

Ensure that only authenticated users and devices can access your corporate applications and internet sites based on granular rule-based security policies.

Zero Trust Secure Access protects your organization from unauthorized access to internal and external applications, and allows you to take immediate or automated action against possible access violations or risky user behaviors. Zero Trust Secure Access provides multiple access control services to provide the optimal protection against unwanted access.

Service

Description

End-User Components

Risk Control

Takes action on user accounts or devices that exhibit risky or malicious behaviors

Through integration with your IAM, Risk Control can identify users and devices that may pose a threat to the integrity of your organization and allows you to take manual or automated mitigation actions (for example, disable a user account that was leaked to the dark web or isolate a device from the network after discovering known vulnerabilities).

None required

Tip

To further enhance the risk identification of your users and devices, deploy additional solutions and configure additional data sources using Threat and Exposure Management.

Private Access

The zero trust network access (ZTNA) solution that controls access to internal applications, data centers, and IaaS environments

After identifying your organization's internal applications and resources through use of Private Access Connectors, you can create specific rules to manage user access based on device usage, time of day, or location.

Secure Access Module: Installed on end-user devices and integrated with your IAM solution, the module transfers connection attempts to configured Private Access Connectors that enforce Private Access Control rules.

User Portal: For external users that require access to internal resources, the User Portal allows your end users to sign into your integrated IAM and view a list of all internal resources permitted by your Private Access Control rules.

Internet Access

The secure web gateway (SWG) solution that secures access to external websites

Internet access rules allow you to restrict access to external websites and applications through use of an Internet Access gateway. End-user traffic is evaluated against your access rules and blocked based on user account, device, security violations, or location.

Secure Access Module: Installed on end-user devices and integrated with your IAM solution, the module transfers connection attempts to the Internet Access Gateway that enforces Internet Access Control rules.

Traffic forwarding: Proxy-based solutions (PAC files, proxy chaining, port forwarding) forward your end-user traffic to the Internet Access Gateway that enforces Internet Access Control rules.

AI Secure Access

Advanced AI content inspection and access control capabilities that ensure secure use of public and private generative AI services and resources

AI secure access rules allow you to prevent prompt injection, malicious large language model attacks, and data leakage through advanced content inspection and content filtering. End user prompts and AI responses are evaluated and monitored or blocked based on data filtering rules, content violations, or potential malicious content.

Important

Current supported public generative AI services include:

Amazon Bedrock

Converse and ConverseStream (all versions)

InvokeModel and InvokeModelWithResponseStream (Anthropic models only)

Anthropic API and Claude (all versions)

ChatGPT (all versions)

DeepSeek (all versions)

GitHub Copilot (Visual Studio Code – chat panel only)

Requires IDE Plugin version 1.5.6.5692 or later

Requires Secure Access Module (SAM)

For more information, see Configuring Copilot subscription-based network routing for your organization

Google Gemini (formerly Bard)

Microsoft Copilot (formerly Bing Chat)

Microsoft Copilot for Microsoft 365

Perplexity (all versions)

Secure Access Module: Installed on end-user devices and integrated with your IAM solution, the module transfers connection attempts to the Internet Access gateway, where content from generative AI services is inspected and evaluated.

Traffic forwarding: Proxy-based solutions (PAC files, proxy chaining, port forwarding) forward your end-user traffic to the Internet Access gateway that enforces AI secure access rules.

.

---

## Deployment guides

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-deployment-guides-ztsa-section

Related information

Set up Zero Trust Secure Access Private Access

Set up Zero Trust Secure Access Internet Access and AI Secure Access

Set up Zero Trust Secure Access Risk Control

Deploy Zero Trust Secure Access Module in restricted environment

Upgrade from TrendAI™ Web Security to Zero Trust Secure Access Internet Access and AI Secure Access

Upgrade from InterScan Web Security to Zero Trust Secure Access Internet Access and AI Secure Access

---


# Email and Collaboration Security – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Email Asset Inventory

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-email-asset-inventory

Manage the security configuration and take action on email assets in your environment.

Email Asset Inventory (Email and Collaboration Security Operations → Email Asset Inventory) allows you to manage email assets in your environment including email accounts, domains, and email servers. You can quickly take action on email accounts that have issues, view detailed information about email accounts and domains, and manage protection policies.

The following table outlines the actions available in Email Asset Inventory.

Options

Screen Location

Description

Available Actions

Displays all discoverable email accounts that may require attention

Click any status to display a list of the affected email accounts. Click the icons ( and ) next to any email account to see recommended actions.

Immediate action required: An issue occurred on the email accounts that requires user intervention

Unmanaged email accounts: The email accounts are discoverable on your network but do not have email sensor detection and response nor a protection solution deployed

Email sensor detection disabled: The email accounts do not have email sensor detection and response deployed

Email Account Inventory

Displays all email accounts that have a protection solution or email sensor detection and response

Click the protection name to view a list of all related email accounts. Important email accounts are marked with an icon (). Click an email account to view detailed information.

All managed email accounts: All email accounts on your network that have either email sensor detection and response or Cloud App Security protection deployed

Cloud Email and Collaboration Protection: All email accounts protected by Cloud Email and Collaboration Protection

Cloud App Security protected: All email accounts protected by Cloud App Security

Email sensor detection: All email accounts for which email sensor detection and response is enabled

Email Domain Inventory

Displays all email domains that have a protection solution

Click the protection name to view a list of all related domains. Click a domain name to view detailed information.

Cloud Email Gateway Protection managed domains: All domains protected by Cloud Email Gateway Protection

TrendAI™ Email Security managed domains: All domains protected by TrendAI™ Email Security

Email Server Inventory

Displays email servers protected by a connected on-premises protection solution

Click the protection name to view a list of managed email servers. Click Access to open the console for the managing protection solution in a new tab in your browser.

All managed email servers: All on-premises email servers managed by a connected email protection solution

ScanMail for Microsoft Exchange: All on-premises email servers managed by a connected ScanMail for Microsoft Exchange protection solution

Interscan Messaging Security Virtual Appliance: All on-premises email servers managed by a connected Interscan Messaging Security virtual appliance protection solution

Search and filter

Search for email assets or apply filters to locate the assets you want to find

Use the following search and filter actions to find the email account, domain, or email server you are looking for.

Organization/Tenants: If you are managing multiple organizations, select the organization you wish to manage (email account inventory list only)

Asset name: Specify the name of an email account, domain, or email server to search for the asset in the relevant list

Add filters (): Filters the email assets that display in the list by selecting criteria

Email sensor detection management

Enables or disables email sensor detection and response for email accounts in Exchange Online, Gmail, or other email services

The button only appears when viewing the Email Account Inventory. For more details, see Manage Email Sensor detection.

Additional actions

Refresh (): Refreshes the screen to show the latest statuses in the list

Show/Hide Columns (): Customizes the columns that display in the list

Related information

Manage the email account inventory

Manage the email domain inventory

---

## Cloud Email and Collaboration Protection

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-cemp

Related information

Introduction

Get started

Grant Cloud Email and Collaboration Protection access to services

Dashboard

Policies

Logs

Operations

Reports

Administration

Troubleshooting and FAQs

Known issues

Cloud Email and Collaboration Protection protection glossary

---

## Cloud Email Gateway Protection

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-cloud-email-gateway-protection

Related information

About Cloud Email Gateway Protection

Get started with Cloud Email Gateway Protection

Work with the dashboard

Manage domains

Inbound and outbound protection

Configure policies

Understand quarantine

Logs in Cloud Email Gateway Protection

Reports

Configure administration settings

FAQs and instructions

---


# Data Security – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Data Security Posture

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-data-posture

Get instant visibility into assets containing sensitive data. Data Security Posture helps you assess your organization's data risk and identify both cloud and local assets with the riskiest sensitive data.

Data Security Posture uses templates to deploy and execute a script in your AWS, Google Cloud, or Azure cloud environment. You can enable Data Security Posture when adding a new cloud account or updating an existing one in Cloud Accounts. The steps to enable Data Security Posture vary between cloud providers:

AWS accounts require deployment of a CloudFormation template in your AWS environment. For more information, see Enable Data Security Posture on AWS accounts.

Azure subscriptions and Google Cloud projects require deployment of a Terraform template, which runs a script in your cloud environment to allow TrendAI Vision One™ to monitor changes in your storage accounts. For more information, see Enable Data Security Posture on Azure subscriptions and Enable Data Security Posture on Google Cloud projects.

After enabling Data Security Posture, TrendAI Vision One™ discovers and classifies sensitive data in your cloud accounts, and predicts potential attack paths for data leakage due to misconfigurations or vulnerabilities.

Tip

Data Security Posture monitors cloud assets for sensitive data. To monitor local devices and files you must create a data policy. For more information, see Create a data policy.

The following table describes each widget in Data Security Posture.

Widget	Description

Data Risk

A graphical representation of your organization's data risk over time. Data Risk is calculated as a summary of all risk events for assets with sensitive data.

For more information, see Data Risk.

Top Risky Assets with Sensitive Data

A list of the assets in your organization with sensitive data that have the highest risk scores among all monitored assets in your environment.

For more information, see Top Risky Assets with Sensitive Data.

Sensitive Data Overview

A summary of sensitive data, including a breakdown of sensitive data types and a summary of contributing sources.

For more information, see Sensitive Data Overview.

Sensitive Data by Location

Displays a map with the number of assets with sensitive data by geographical location. Hover over each number to view details.

For more information, see Sensitive Data by Location.

Exposure Risk Events

A list of exposure-related risk events.

For more information, see Exposure Risk Events.

Related information

Data Risk

Top Risky Assets with Sensitive Data

Sensitive Data Overview

Sensitive Data by Location

Exposure Risk Events

Get started with Data Security Posture

---

## Sensitive Data Overview

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-sensitive-data-overview

The Sensitive Data Overview widget provides a summary of the sensitive data in your organization, including a graph depicting the sensitive data depictions by type: personal, financial, credentials, and other.

Action	Description

View assets by the type of sensitive data detection

Hover over one of the bars in the graph to view the number of sensitive data detections for that category. To view a list of the assets for that category, click the number.

View more information about the contributing sources

In the Contributing Sources area, click the name of a source to view more information.

---


# Threat Intelligence – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Threat Intelligence Hub

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-threat-insights

Threat Intelligence Hub collects and organizes information about emerging threats and threat actors.

Featuring threat intelligence curated by TrendAI™ experts, Threat Intelligence Hub is a continuously updated information resource. Threats currently impacting your organization display at the top of the list with an orange dot.

The following table describes actions available in Threat Intelligence Hub:

Tab

Description

Actions

Emerging Threats

A list of current active threats, along with the targeted countries and industries, impact scope, and the time of the most recent data update

Click a threat name to view details on the threat report page.

Filter and search by common vulnerabilities and exposures (CVE) ID, tactic ID, technique ID, malware name, tool name, threat name, threat actor, or description. Use commas to separate multiple criteria.

Click  to display more information like related Workbench alerts.

Threat Actors

An overview of currently active threat actors, along with known aliases, group type, targeted countries and industries, impact scope, and the time of the most recent data update

Click a threat actor name to view more details on the threat report page.

Filter and search by CVE ID, tactic ID, technique ID, malware name, tool name, threat name, threat actor, or description. Use commas to separate multiple criteria.

Strategic Reports

A list of high‑level intelligence reports that provide broader context on adversaries, campaigns, and trends across regions and industries.​​

Click a report to explore the report contents, associated threat insights, and related intelligence data.

Filter and search strategic reports to focus on the most relevant reports.​

Click  to download the report.

Threat Intelligence Feed

A continuously updated feed of indicators of compromise (IoCs), delivered directly to your security tools via application programming interface (API).

Related information

Threat report

Threat actor types

Vulnerabilities

Threat Intelligence Feed

Threat Intelligence Hub credit usage

Start a free trial of Threat Intelligence Hub

---

## Suspicious Object Management

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-suspicious-object-management

You can manage the Suspicious Object List and Exception List to control the specific information for synchronization.

The Exception List has a higher priority than the Suspicious Object List. Objects may appear in both lists, but TrendAI Vision One™ calculates the list of effective suspicious objects before sending the information to connected products.

TrendAI Vision One™ currently supports sending the Suspicious Object List to the following products and services if they are connected properly:

Endpoint Sensor agent

Server & Workload Protection agent

Standard Endpoint Protection agent

Service Gateway Management

For more information, see Service Gateway overview.

Zero Trust Secure Access Internet Access

Cloud One - Endpoint & Workload Security

TrendAI™ Apex One as a Service

TrendAI™ Apex One (on-premises)

Cloud Email and Collaboration Protection

TrendAI™ Deep Discovery Email Inspector

TrendAI™ Deep Discovery Inspector version 6.7 SP1 or later

Note

Connection with a service gateway is required for TrendAI™ Deep Discovery Inspector version 6.7 or earlier.

TrendAI™ Deep Security

Cloud Email Gateway Protection

TippingPoint Security Management System

Related information

Suspicious Object List

Exception list

---

## Sandbox Analysis

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-sandbox-analysis

Submit samples for analysis in a secure virtual environment.

Sandbox Analysis manages and analyzes objects submitted to the sandbox by integrated products and users.

The following table outlines the actions available on the Sandbox Analysis screen.

Action

Description

Submit objects for analysis

Click Submit Object to manually submit an object for analysis in the sandbox.

Configure credit usage

To view feature options and credit usage, click Manage usage.

Create a High-Risk Submissions report

Select Manage Reports → High-Risk Submissions to create a High-Risk Submissions report.

Filter submitted object data

Use the search and filters to locate specific submitted object data.

Submitted: The date and time the object was submitted to the sandbox

Object type: The type of object

Risk level: The risk level assigned to the object by the sandbox

Submitter: The product or method that submitted the object to the sandbox

Partial matching applies to Object, Threat type, and Threat name. Exact matching applies to SHA-1 hash value.

Note

For URL submissions, the Sandbox Analysis list displays both the normalized URL (the URL that the sandbox analyzed) and the original URL (the URL you submitted). The toolbar search matches against either form.

Refresh the table

Click  to refresh data displayed in the table.

View object profile

Click any object name to display the object profile.

Take additional actions

Click the  to select additional actions on the submitted object.

Important

Downloading and re-analyzing file objects requires granting TrendAI™ permission to save submitted files.

View on Threat Connect: Displays information about the object on Threat Connect

Add to Intelligence Reports: Adds the object to Intelligence Reports and runs an auto sweep

Download investigation package : Downloads the investigation package of submitted objects with high, medium, and low risk levels

Download file object: Downloads the submitted file object to your computer

WARNING

Downloading suspicious samples may potentially harm your endpoint. Ensure that you take the necessary precautions before continuing.

Re-analyze: Submits the file or URL back to the Virtual Analyzer for further analysis

Important

Re-analysis of objects counts toward the daily reserve.

Delete submission: Deletes the previous analysis results and any associated files from Sandbox Analysis

Related information

Consolidated analysis results

Submit objects for analysis

Supported file types

Object profiles

Possible reasons for analysis failure

Sandbox Analysis configuration and credit usage

Start a free trial of Sandbox Analysis

---


# Managed Services – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Managed Services

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-managed-services

Augment your team with the expertly managed detection and response service.

Backed by a team of highly qualified security analysts, TrendAI™ Managed Services is a flexible 24/7 service that provides advanced threat detection, investigation, and response.

The following table outlines the available tabs in Managed Services:

Tab

Description

Request List

Displays a list of response action requests that the Managed Services team submitted.

Reports

Displays a list of reports available for download that the Managed Services team generated.

Settings

Specify contact information, response action approval settings, and other settings for your organization.

Important

Allow a few days for data synchronization after using credits for Managed Services.

Once the synchronization completes, the Get Started button appears. You can proceed to enable the service and complete the initial setup as instructed.

Related information

Request list

Managed Services settings

Response actions

---

## Response actions

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-response-actions-mdr

Explore the response actions available to the Managed Services operations team.

Related information

Approval not required

Automatically approve

Approval not required

The following response actions do not require approval. The operations team is automatically authorized to perform these actions on your behalf:

Link or unlink Workbench alerts to incidents

Add exceptions in Suspicious Object Management

Add exceptions in Detection Model Management

Conduct memory dumps of processes running on endpoints

Note

Process memory dumps on endpoints require remote shell sessions which you must approve. To auto approve operations team requests, see Configure response approval settings.

Automatically approve

You can automate the approval of the following response action requests submitted by the operations team. For instructions on enabling auto approval of requests, see Configure response approval settings.

Critical Actions

Response Action Name

Description

Add to Block List

Adds supported objects such as Secure Hash Algorithm 1 (SHA-1), uniform resource locator (URL), internet protocol (IP) address, or domain objects to the user-defined Suspicious Objects List, which blocks the objects on subsequent detections.

Collect Evidence

Collects detailed evidence from specified endpoints to support threat investigation and incident response

Important

Auto-approval must be enabled to use this response action.

Collect File

Compresses the selected file detected by the network appliance and TrendAI Vision One™ in a password-protected archive and then sends the archive to Response Management.

Disable User Account

Signs the user out of all active application and browser sessions of the user account. This task might take a few minutes to complete. Users are prevented from signing in any new session.

Isolate Endpoint

Disconnects the target endpoint from the network, except for communication with the managing TrendAI™ endpoint protection product.

Quarantine Message

Adds the email address to the Blocked Sender list in Cloud App Security and quarantines incoming messages.

Restore Connection

Restores network connectivity to an endpoint that already applied the Isolate Endpoint action.

Scan for Malware

Performs a one-time scan on one or more endpoints for file-based threats such as viruses, spyware, and grayware.

Terminate Process

Terminates the active process and allows you to terminate the process on all affected endpoints.

Recommended Actions

Response Action Name

Description

Collect Network Analysis Package

Compresses the selected network analysis package, including an investigation package, a packet capture (PCAP) file, and a selected file detected by the network appliance, in a password-protected archive and then sends the archive to Response Management.

Configure and Deploy TippingPoint Filter Policy

Configures TippingPoint virtual patching filter policies in Intrusion Prevention Configuration and applies the policies on TippingPoint SMS profiles to mitigate common vulnerabilities and exposures (CVE) risks.

Run osquery

Runs SQL-based queries on specified endpoints to support threat investigation and incident response

Important

Auto-approval must be enabled in order to use this response action.

Run Remote Custom Script

Connects to a monitored endpoint and executes a previously uploaded PowerShell or Bash script file.

Run YARA Rules

Runs custom YARA rules on specified endpoints to support threat investigation and incident response

Important

Auto-approval must be enabled in order to use this response action.

Start Remote Shell Session

Connects to monitored endpoints to remotely execute commands, custom scripts or process memory dumps for investigation.

Submit for Sandbox Analysis

Submits the selected file objects for automated analysis in a sandbox, a secure virtual environment.

---


# Administration – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Audit Logs

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-audit-logs

TrendAI Vision One™ maintains logs that provide summaries about user access, app-related actions, setting changes, configuration modifications, and system events.

Related information

User logs

System logs

---

## Console Settings

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-console-settings

Configure global console settings, such as time zone and concurrent web browser sessions, which apply to all users.

The following table outlines the actions available in Console Settings (Administration → Console Settings).

Setting

Description

System update

Allows the Primary User Account holder to update TrendAI Vision One™ to the Foundation Services release for your business

Time zone

Converts all data displayed in the console to the specified time zone

Limit concurrent browser sessions per account

Limits the maximum number of concurrent web browser sessions a user account can start to access the console

Note

Exceeding the limit automatically terminates the earliest session.

Restrict console access to specified IP addresses

Restricts user access to the specified IPv4 addresses or IPv4 ranges in CIDR notation

Note

Private IP addresses and wildcards are not supported.

Timeout

Allows organizations to customize inactivity timeout and max session timeout to comply with regulatory standards or internal security policy.

Inactivity timeout is the amount of time a user can be inactive before being signed out. Its value can range from 5 minutes to 8 hours. Its default value is 15 minutes. The inactivity timeout is renewed whenever cursor or keyboard input is detected.

Max session timeout is the amount of time before a user is signed out and re-authentication is required to continue. Its value can range from 30 minutes to 8 hours. Its default value is 8 hours. The max session timeout cannot be renewed, but the user will be notified 5 minutes and 1 minute before it expires.

Note

Inactivity timeout cannot exceed max session timeout.

---

## Getting Help and Troubleshooting

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-getting-help-troubleshooting

Related information

Help and Support

Self-Diagnosis

---


# Privacy and Compliance – TrendAI Vision One™ Documentation

> Source: https://docs.trendmicro.com/en-us/documentation/trend-vision-one/

---

## Privacy and personal data collection disclosure

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-ppdcd-trend-vision-one

Certain features available in TrendAI™ products collect and send feedback regarding product usage and detection information to TrendAI™. Some of this data is considered personal in certain jurisdictions and under certain regulations. If you do not want TrendAI™ to collect personal data, you must ensure that you disable the related features.

The following link outlines the types of data that TrendAI Vision One™ collects and provides detailed instructions on how to disable the specific features that feedback the information.

https://success.trendmicro.com/data-collection-disclosure

Data collected by TrendAI™ is subject to the conditions stated in the TrendAI™ Privacy Notice:

https://www.trendmicro.com/privacy

Related information

Pre-release disclaimer

---

## TrendAI Vision One data privacy, security, and compliance

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-data-privacy-security-compliance

TrendAI™, a global cybersecurity leader, helps make the world safe for exchanging digital information. Fueled by decades of security expertise, global threat research, and continuous innovation, our cybersecurity platform protects hundreds of thousands of organizations and millions of individuals across clouds, networks, devices, and endpoints. As a leader in cloud and enterprise cybersecurity, our platform delivers a powerful range of advanced threat defense techniques optimized for environments like AWS, Microsoft, and Google, and central visibility for better, faster detection and response.

TrendAI™ is committed to the security and privacy of our customers and their data. The following TrendAI Vision One™ resources are representative of our commitment to security, privacy, transparency, and compliance with industry-recognized standards. For more information see the TrendAI™ Trust Center.

The latest information on the security, privacy, and compliance details for TrendAI Vision One™ is provided below.

Privacy

Security

Compliance

Data Privacy

GDPR

TrendAI Vision One™ Data Collection Notices

Data Security

Data Segregation

Data Encryption

Data Access

Security Logs

Data Retention

Disaster Recovery and Business Continuity

Data Deletion

Employee Training

Change Control

Vulnerability Management

Code Analysis

Penetration Testing

Incidence Response

ISO 27001

ISO 27014

ISO 27034-1

ISO 27017

ISO 20243

SOC2

Data privacy

For general information on how TrendAI™ protects your data, see the TrendAI™ Global Privacy Notice.

Depending on the nature of the protected environment and the object that is the target of the security event (for example, files, memory, network traffic) there is a risk that personal information may be collected within a security event. Security policy configuration and module selection are provided to meet the requirements of your target environment and minimize this risk.

For more information on the data sent to TrendAI™ and customer controls over that data, please read the TrendAI Vision One™ Data Collection Notice.

GDPR

TrendAI™ complies with applicable laws, including GDPR. For more information, see the TrendAI™ GDPR Compliance site.

Where appropriate, we implement Technical and Organization Measures (TOMs) to support our processing of data under GDPR.

As a data processor under GDPR, our processing of personal data is limited in a number of cases. The details on the data processed by TrendAI Vision One™ and the controls available to you over that data are documented in the TrendAI Vision One™ Data Collection Notice.

TrendAI Vision One™ Data Collection Notice

Certain features available in TrendAI Vision One™ collect and send feedback regarding product usage and detection information to TrendAI™. For more information, see the TrendAI Vision One™ Data Collection Notice.

Data security

TrendAI™ adheres to industry standards for data security and provides an outline of general security practices. In addition, TrendAI Vision One™ uses industry-accepted best practices to secure your data. This includes segregating individual customer data as well as encrypting data at rest and data in transit. Backup of customer data follows industry-defined best practices and our various certifications such as ISO 27001 (for access control and cryptography) and ISO 27017 (for monitoring of cloud services and segregation of environments) help define our processes for backup and data recovery.

Customers can choose an available TrendAI Vision One™ region to provision the TrendAI Vision One™ console, and store and process all data lake services and data. Customers can assign roles to users which limit access rights to TrendAI Vision One™, including but not limited to, granting support access, initiating response actions, collecting files from endpoints, and limiting users to read-only access.

Data at rest is protected by the native cloud technologies in the cloud on which it resides. Customer data is tagged with a “Customer ID” during ingestion as part of the data schema. The internal data access layer of TrendAI™ applications requires this “Customer ID” parameter to access the data. This measure protects the customer data from being accessed by any other party as queries may only access one “Customer ID” at a time. Customers do not provide the “Customer ID” directly when interacting with the service; it is handled by the application itself. This ensures that there is no way for a malicious actor to pass the wrong customer ID to access another data set.

TrendAI Vision One™ uses TLS 1.2 for data transmission wherever applicable. The platform implements modern AEAD cipher suites to ensure strong encryption and data integrity during communication.

Supported TLS 1.2 Cipher Suites:

TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384

TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256

TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384

TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256

TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256

These cipher suites provide robust security through forward secrecy and authenticated encryption.

Data segregation

All customer information is segregated to ensure that customers have access to only their own data. Customer data is tagged with a “Customer ID” during ingestion as part of the data schema. The internal data access layer of the TrendAI™ application requires this “Customer ID” parameter to access the data. This measure protects the customer data from being accessed by any other party as queries may only have access to the specific “Customer ID” that the customer is authenticated to. Customers do not provide the “Customer ID” directly when interacting with the service, it is handled by the application itself. This ensures there is no way for a malicious actor to pass the wrong customer ID to access another data set.

Customer contact details, such as their email address, are encrypted at rest to ensure confidentiality. Data collected by TrendAI Vision One™ is listed in the TrendAI Vision One™ Data Collection Notice

Data encryption

Information processed by TrendAI Vision One™ is encrypted both in transit, at rest and is sent to a TrendAI Vision One™ node in the region the customer selects during initial setup.

At Rest: Data at rest is protected by native cloud technologies to the cloud on which it resides. For Azure SQL, the database is encrypted by Transparent Database Encryption. TrendAI™'s proprietary architecture within AWS utilizes native AES 256 encryption for the data lake contents at rest.

In Transit: TrendAI Vision One™ uses TLS 1.2 wherever possible for data transmission. TrendAI™ manages the management console and client-server communication encryption for the customer using cloud-native key management infrastructure.

Data access

All access to TrendAI™ offices and networks is strictly controlled to authorized or accompanied individuals only. Access is given through a key card system and approval is required before entry is granted into sensitive areas. The TrendAI Vision One™ platform and data lake infrastructure reside within Microsoft Azure and AWS.

TrendAI Vision One™ is hosted in a highly restricted subnet with no direct internet access. Only a limited set of administrators have access to TrendAI Vision One™ for maintenance tasks. Operator access is done over secure encrypted connections and secured with multiple layers of network and access controls.

Access to information in TrendAI Vision One™ is restricted to TrendAI™ Site Reliability Engineers (SREs), the threat research and analytics teams, and, when explicitly enabled in the console, the customer support teams. Access is allowed for the purposes of troubleshooting, solving issues, and improving the effectiveness of security protections. All access is recorded and audited. Access privileges are managed and approved by the product leadership team. Information in TrendAI Vision One™ may be accessed/viewed by the above TrendAI™ teams from physical locations outside of the customer's deployed region.

Access is restricted to certain allowed IP addresses and is monitored in a SIEM. Alerts are generated for any suspicious access. Investigation of alerts is done according to incident management procedures.

Sub-contractors are not used in the development or operation of TrendAI Vision One™.

Security logs

TrendAI Vision One™ uses the Cloud One agent to monitor: Anti-Malware, Firewall, Intrusion Prevention, Integrity Monitoring, and Log Inspection. All access to the infrastructure is monitored and recorded through native security services offered by the Cloud Service provider.

TrendAI Vision One™ enables automated alerts and employs 24/7 on-call staff. Security alerts are reviewed for all systems on a daily basis. If a security incident is suspected, it is immediately reported to the TrendAI™ Security Operations Center (SOC). Potential incidents are prioritized based on the severity of the suspected incident and a team from the SOC, as well as technical experts, is assigned to investigate.

These logs remain in the region that is hosting the TrendAI Vision One™ account and customers do not have access to these logs. For more information on what regions are covered by TrendAI Vision One™, see TrendAI Vision One™ Data Center Locations.

Audit Logs are generated and stored for all user access and actions in TrendAI Vision One™ systems. TrendAI Vision One™ retains the audit logs for 180 days. Customers can view customer access logs in their console, and can export them if needed.

Data retention

With regards to Log Retention, TrendAI Vision One™ applies retention policies that purge data once it is no longer needed for the purpose for which it was collected. TrendAI Vision One™ retains the collected raw information for 30 days by default, unless the customer purchases an extended storage option. TrendAI Vision One™ also generates and retains alert workbenches for 180 days to give customers time for investigation/reporting. If a customer license expires, all data is deleted after a 30-day grace period.

Data backup

TrendAI Vision One™ backups are conducted daily. Automated tests are run weekly to validate the consistency of our backups and backups are stored to mitigate the risk of issues within a single region. Backups are kept for 35 days before they are destroyed.

Disaster recovery and business continuity (DR)

TrendAI Vision One™ has a disaster recovery (DR) and business continuity plan (BCP). A Disaster Recovery (DR) simulation is executed at least annually to verify the backup data and RTO/RPO claims under ISO 27001.

Backups are stored to mitigate the risk of issues within a single region. DR simulations are executed periodically to verify the data and RTO/RPO claims.

The TrendAI Vision One™ platform and data lake reside within Microsoft Azure and AWS. The TrendAI Vision One™ platform utilizes service-to-service connections to facilitate the operations of an advanced detection and response system. For more information, please refer to TrendAI Vision One™ Security and Privacy Overview.

Personal data deletion

For details on submitting a request for personal data deletion, see https://www.trendmicro.com/en_us/about/trust-center/privacy/gdpr/individual-rights.html.

ISO 27001 contains provisions for data destruction. TrendAI Vision One™, Microsoft Azure, and AWS are ISO 27001 compliant.

Employee training

TrendAI Vision One™ software developers are trained in secure coding practices using an industry-standard curriculum based on SANS 25/OWASP Top 10. Education campaigns are conducted on an annual basis and when an employee joins the company. All employees must adhere to TrendAI™ internet, computer, remote access, and mobile device acceptable use policies. Failure to comply with these policies may result in disciplinary actions, which could include termination. The TrendAI Vision One™ development teams employ specialized staff to handle product security. Security testing, secure code review, and threat modeling are part of the development life-cycle. For more information about our secure coding best practices, see the TrendAI™ Trust Center for Compliance.

TrendAI™ adheres to the following password polices and standards:

All passwords must be changed at least on a quarterly basis.

Passwords must not be inserted into email messages or other forms of electronic communication.

Passwords must not be shared or revealed to anyone.

Passwords must be changed immediately if compromise is suspected.

Passwords must be encrypted during transmission and stored hashed with a salt.

Passwords must be at least eight alphanumeric characters long.

Passwords must contain both upper and lower case characters (for example, a-z, A-Z).

Password reuse prevention is enforced.

Passwords must not be based on personal information, names of family, and so on.

Change control

Ensuring that our customers continue to receive the latest security capabilities in a safe, reliable way is a key priority for our team. In addition to the development practices around code review, functional testing, and scale testing, as well as our vulnerability scanning and penetration testing, we take a number of steps to ensure that any service updates are introduced in a safe and controlled way. All service updates are introduced in small, incremental updates that are rolled out first to a staging environment and then to production. Each change is closely monitored and multiple procedures are in place, both automated and manual, to handle situations that may arise. All updates to the service are introduced transparently to customers, and can be rolled back transparently, should any unforeseen issues arise.

Application upgrades within the TrendAI Vision One™ environment are completed after meeting our quality objectives. TrendAI™ uses best practices for changes, including full backups and approval processes. TrendAI Vision One™ has multiple dedicated development and testing environments. Any changes requested are first reviewed by technical stakeholders to determine the urgency and potential impact of the changes. All changes require a documented back-out plan. These changes are tracked and recorded in a change control system.

Vulnerability management

Vulnerabilities are continuously monitored and tracked. Each vulnerability is assigned a CVSS score. Patching requirements that specify time frames for addressing a vulnerability according to CVSS-based severity are included in the Secure Development Compliance Policy. The TrendAI Vision One™ software in the TrendAI Vision One™ environment is updated once every two weeks to use the latest available code base, including vulnerability fixes. TrendAI Vision One™ team is responsible for patching the TrendAI Vision One™ software and supporting AWS and Microsoft Azure services.

Code analysis

TrendAI™ source code is scanned using static code analysis using industry-standard tools like Fortify, BlackDuck, and more, which are deployed at every development stage or phase. Also, Third-party vulnerabilities are scanned by industry-leading software monthly. Security testing, secure code review, and threat modeling are also part of the development lifecycle of all TrendAI™ products.

TrendAI Vision One™ goes through strict quality checks from the development phase up to the GM release. After release, teams perform vulnerability scans weekly, in an automated fashion. The severity of vulnerabilities is rated using the CVSS score. Third-party penetration tests are conducted annually on the SaaS environment and cover application, external and internal network, and segmentation tests. Critical vulnerabilities are required to be fixed within one month or addressed through mitigation or workaround.

Penetration testing

The TrendAI Vision One™ platform undergoes regular security assessments, both automated and manual, including external 3rd-party assessments.

The TrendAI Vision One™ platform undergoes yearly penetration tests conducted by third-party security experts to detect and rectify common security issues. The scope of the third-party penetration tests includes application security tests, internal and external network scans, and network segmentation tests. TrendAI™ can provide the penetration test certificate upon request. TrendAI™ InfoSec conducts web application assessments of TrendAI Vision One™ for any major release and at least annually using leading dynamic analysis security tools.

For more information about our vulnerability response program, see the TrendAI™ Vulnerability Response site.

Incidence response

TrendAI™ has a dedicated Information Security (InfoSec) team that is responsible for ensuring compliance with TrendAI™ security policies. TrendAI Vision One™ engineers immediately contact the InfoSec team when a security incident is discovered. In addition, InfoSec independently monitors TrendAI Vision One™ environment logs. If a security incident is discovered, the incident is prioritized based on severity. A dedicated team of technical experts is assigned to investigate, advise on containment procedures, perform forensics, and manage communication. Following an incident, the team examines the root cause, and revises the response plan accordingly. In the event of a breach involving customer data, TrendAI™ will follow its obligations under GDPR. For more information, see the TrendAI™ GDPR Compliance site.

If you suspect a security incident, please contact us at the Trend Micro Technical Support site.

Certifications

ISO 27001, ISO 27014, ISO 27034-1, ISO 27017, ISO 20243, and SOC2/3

TrendAI™ and TrendAI™ Cloud Services undergo yearly audits by trusted external auditors to ensure we're adhering to industry best practices. ISO 27001 is a global standard and is used to define the overall Information Security Management System for TrendAI™. ISO 27001 covers items such as human resource security, access control, operations security, and information security incident management. SOC Type II certification is used to validate the security controls over our IT systems and includes TrendAI™ internal systems as well as its SaaS offerings. SOC Type II controls include items such as security (firewalls, IPS, and more), availability (disaster recovery and incident handling), confidentiality (encryption and access control), privacy and processing integrity (quality assurance).

TrendAI Vision One™ is certified for ISO 27001, 27014, 27034-1, 27017, and ISO 20243. You can find the compliance certificates on the TrendAI™ Trust Center for Compliance.

TrendAI Vision One™ has completed a SOC 2 TYPE 2 evaluation and you can find the SOC 3 report and the request form for the SOC 2 report on the TrendAI™ Trust Center for Compliance.

---

## PCI Security Standards

**Source:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-pci-security-standards

Ensure your TrendAI Vision One™ configuration is compliant with PCI Security Standards.

TrendAI Vision One™ offers robust security features, but certain configurations may impact PCI DSS compliance.

The following table outlines potential PCI DSS compliance risks to consider when using TrendAI Vision One™ and the configurations required to eliminate the risks.

Important

To adhere to PCI compliance standards, ensure that your TrendAI Vision One™ has updated to the Foundation Services release.

Feature

Compliance risk

Recommendation

Standard Endpoint Protection - Data Loss Prevention

Standard Endpoint Protection includes Data Loss Prevention (DLP) features that can detect and prevent unauthorized actions with cardholder data. DLP filters logs at the endpoint to retain no more than the first six and last four digits of cardholder data.

However, the optional "Forensic Evidence Collection" feature introduces a critical compliance risk. When activated, this feature can capture complete data payloads, potentially including unmasked cardholder data.

Disable the "Forensic Evidence Collection" feature.

For more information, see Apex One Data Loss Prevention Policies.

Zero Trust Secure Access - Private Access

ZTSA Private Access provides SASE-based VPN services between remote endpoints and internal applications through the use of Private Access Connectors deployed in your corporate environment. Traffic from endpoints to Private Access Connectors is not encrypted by default for traffic sent using an unencrypted protocol. If encryption is not enabled, ZTSA Private Access could potentially transmit cardholder data in an unencrypted format.

Enable Encrypt app traffic transmitted using unencrypted protocols in the configurations for your internal applications.

For more information, see Add an internal application to Private Access.

Important

Encrypting app traffic transmitted using an unencrypted protocol consumes a high amount of system resources and will impact performance when connecting to internal apps.

Zero Trust Secure Access - Internet Access

ZTSA Internet Access offers a proxy-based service to facilitate secure public internet access for users. The service decrypts all HTTPS traffic by default to enforce policies and conduct security checks, a process that temporarily exposes cardholder data within the proxy infrastructure.

Exclude any domains which may transmit cardholder data by adding them to inspection exceptions.

For more information, see Inspection exceptions.

---


