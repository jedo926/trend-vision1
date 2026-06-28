# Trend Vision One – Zero Trust Secure Access

> **Source:** https://docs.trendmicro.com/en-us/documentation/trend-vision-one/
> **Scraped:** 2025-06-27

---

## What is Zero Trust Secure Access? | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-what-is-zero-trust-secure-access

Ensure that only authenticated users and devices can access your corporate applications
            and internet sites based on granular rule-based security policies.

Zero Trust Secure Access protects your organization from unauthorized access to internal
               and
               external applications, and allows you to take immediate or automated action against
               possible
               access violations or risky user behaviors. Zero Trust Secure Access provides multiple
               access
               control services to provide the optimal protection against unwanted access.

 | 

 | 
Service

 | 
Description

 | 
End-User Components

 | 
Risk Control

 | 
Takes action on user accounts or devices that exhibit risky or malicious behaviors
Through integration with your
                                 IAM, Risk Control can identify users and devices that may pose a threat to the
                              integrity of your organization and allows you to take manual or automated mitigation
                              actions
                              (for example, disable a user account that was leaked to the dark web or isolate a
                              device
                              from the network after discovering known vulnerabilities). 

 | 
None required

 | 
 | 

###### Tip

To further enhance the risk identification of your users and devices, deploy additional
                                             solutions and configure additional data sources using  Threat and Exposure Management.

 | 
Private Access

 | 
The zero trust network access (ZTNA) solution that controls access to internal
                              applications, data centers, and IaaS environments
After identifying your organization's internal applications and resources through
                              use of
                              Private Access Connectors, you can create specific rules to manage user access
                              based on device usage, time of day, or location. 

 | 

- 
Secure
                                       Access Module: Installed on end-user devices and integrated with your IAM
                                    solution, the module transfers connection attempts to configured Private Access Connectors
                                    that enforce Private Access Control rules.

- 
User Portal: For external users that require access to internal resources, the
                                    User Portal allows your end users to sign into your integrated IAM and view a list
                                    of all
                                    internal resources permitted by your Private Access Control rules.

 | 
Internet Access

 | 
The secure web gateway (SWG) solution that secures access to external websites
Internet access rules allow you to restrict access to external websites and applications
                              through use of an Internet Access gateway. End-user traffic is evaluated against your
                              access rules and blocked based on user account, device, security violations, or location.
                              

 | 

- 
Secure
                                       Access Module: Installed on end-user devices and integrated with your IAM
                                    solution, the module transfers connection attempts to the Internet Access Gateway
                                    that
                                    enforces Internet Access Control rules.

- 
Traffic forwarding: Proxy-based solutions (PAC files, proxy chaining, port forwarding) forward your end-user traffic to the Internet Access
                                    Gateway that enforces Internet Access Control rules.

 | 
AI Secure Access

 | 
Advanced AI content inspection and access control capabilities that ensure secure
                              use of public and private generative AI services and resources
AI secure access rules allow you to prevent prompt injection, malicious large language
                              model attacks, and data leakage through advanced content inspection and content filtering.
                              End user prompts and AI responses are evaluated and monitored or blocked based on
                              data filtering rules, content violations, or potential malicious content.

 | 
 | 

###### Important

Current supported public generative AI services include:
                                             
- 
Amazon Bedrock
                                                      
- 
Converse and ConverseStream (all versions)

- 
InvokeModel and InvokeModelWithResponseStream (Anthropic models only) 

- 
Anthropic API and Claude (all versions)

- 
ChatGPT (all versions)

- 
DeepSeek (all versions)

- 
GitHub Copilot (Visual Studio Code – chat panel only)
                                                      
- 
Requires IDE Plugin version 1.5.6.5692 or later

- 
Requires Secure Access Module (SAM)

- 
For more information, see Configuring Copilot subscription-based network routing for your organization

- 
Google Gemini (formerly Bard)

- 
Microsoft Copilot (formerly Bing Chat)

- 
Microsoft Copilot for Microsoft 365

- 
Perplexity (all versions)

 | 

- 
Secure Access Module: Installed on end-user devices and integrated with your IAM solution, the module
                                    transfers connection attempts to the Internet Access gateway, where content from generative
                                    AI services is inspected and evaluated.

- 
Traffic forwarding: Proxy-based solutions (PAC files, proxy chaining, port forwarding) forward your end-user traffic to the Internet Access
                                    gateway that enforces AI secure access rules.

.

---
