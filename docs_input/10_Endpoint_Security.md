# Trend Vision One – Endpoint Security

> **Source:** https://docs.trendmicro.com/en-us/documentation/trend-vision-one/
> **Scraped:** 2025-06-27

---

## Intrusion Prevention Configuration | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-intrusion-prevention-configuration

Assess and prioritize your network vulnerabilities, and quickly deploy virtual patch
            filters for your most at-risk CVE detections.

Intrusion Prevention Configuration centralizes insights from across your network and assesses and prioritizes risk alongside
               other XDR sensor data. Intrusion Prevention Configuration provides policy recommendations and enables the deployment of virtual patch filters
               to stay ahead of critical CVEs.
Intrusion Prevention Configuration was formerly known as Network Intrusion Prevention - Policy Recommendations. You can view your connected TippingPoint devices by navigating to Network Security → Network Inventory.
Policy recommendations speed up your response to the most critical CVE threats affecting
               your network through the deployment of available TippingPoint Security Management
               System (SMS) virtual patch filters. You receive a customized display of the most critical
               CVEs currently affecting your network and the virtual patching filter status across
               your profiles.
Intrusion Prevention Configuration now supports policy enforcement on all TippingPoint SMS appliances connected to TrendAI Vision One™. If you have more than one SMS, use the dropdown menu to select which SMS to display
               for policy tuning. Information and policy configuration options for the SMS you select
               is displayed on the Policy Recommendations page.
In order for TippingPoint users to see Intrusion Prevention Data, they must first
               ensure Vulnerabilities is selected as a Risk Factor in Threat and Exposure Management. Because the Vulnerability
               Assessment service scans endpoints for vulnerabilities, TippingPoint users must also
               either install Endpoint Sensor or a third-party vulnerability scanning tool so that
               vulnerabilities will display in Threat and Exposure Management. The resulting vulnerabilities
               map to the corresponding TippingPoint filter and are shown as network vulnerabilities
               on the Intrusion Prevention Configuration display.
The following table outlines the options available on the Policy Recommendations tab (Network Security → Intrusion Prevention Configuration → Policy Recommendations (tab)).

 | 

 | 
Option

 | 
Description

 | 
Vulnerability Overview

 | 
Displays the current vulnerability status for your most at-risk unique CVEs and emerging
                              ZDI vulnerabilities that have corresponding TippingPoint filters available for virtual
                              patching.

 | 
Prioritized CVE threat list

 | 
Displays a prioritized list of CVEs and the filters available that you can enable
                              and deploy to profiles to virtually patch existing threats.

- 
Use the available filters to view case statuses, or locate specific CVEs and TippingPoint
                                    SMS profiles.

- 
Mitigate the CVE risk by selecting filters and deploying policies directly to your
                                       TippingPoint SMS profiles.

- 
View detailed CVE profiles by clicking the details icon ().

 | 
Policy deployment status

 | 
Displays the current progress of your policy deployment operations.

 | 
Export

 | Export filter recommendations to share and use virtual patching information in other
                           existing processes and systems.

<div

---

## Agent Resource Monitoring | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-agent-resource-monitoring

Get an overview of how your deployed 
TrendAI Vision One™ Endpoint Security agents impact the system performance of your endpoints.

 | 
 | 

###### Important

- 
Agent Resource Monitoring is a "Pre-release" feature and is not considered an official
                                    release. Please review the Pre-Release Disclaimer before using the feature.

- 
This feature is not available in all regions.

- 
Agent Resource Monitoring currently only supports 
TrendAI Vision One™ Endpoint Security agents with Server & Workload Protection version 202503 (feature
                                    version 20.0.2-4960) or later.

- 
Agent Resource Monitoring requires enabling IoT Traffic in the Server & Workload Protection
                                    Manager. To learn how to enable IoT Traffic, contact your support provider.

Agent Resource Monitoring provides both a top-level overview of how 
TrendAI Vision One™ Endpoint Security agents impact performance in your environment and individualized
               details for each of your managed endpoints. You can use this information to help tailor
               security settings to your performance needs or quickly identify abnormal system behavior
               and diagnose issues.
Figure 1 shows the different sections of Agent Resource Monitoring.

Figure 1 - Agent Resource Monitoring Overview

- 
Agent Resource Overview: This section provides a quick glance of how much CPU and Memory resources agents
                     are using across your environment.

- 
The CPU and Memory summary show the (a) calculated average resource usage of your agents across your
                           environment for the past hour, and (b) how usage has trended, whether increasing or
                           decreasing, over the past 7 days. See figure 2.

Figure 2 - CPU and memory overview

- 
The Security Process overview provides the average resource usage of individual agent modules across your
                           environment for the past hour.

##### Security Processes

 | 

 | 
Module

 | 
Description

 | 
Processes

 | 
Anti-Malware Scan

 | 
Includes the processes used to run anti-malware scans

 | 

- 
Linux: ds_am

- 
Windows: coreServiceShell.exe

 | 
Server & Workload Protection

 | 
Includes the processes and services used by the main endpoint protection module.

 | 

- 
Linux: ds_agent

- 
Windows: dsa.exe

 | 
Server & Workload Protection Connect

 | 
Includes the processes and services used to connect to TrendAI™ services.

 | 

- 
Linux: dsa-connect

- 
Windows: dsa-connect.exe

 | 
Net Module

 | 
Includes the processes and services used by network monitoring features.

 | 

- 
Linux: tm_netagent

- 
Windows: tm_netagent.exe

 | 
 | 

###### Note

The averages calculated for CPU and memory are calculated by finding the median total
                                          usage of each agent over the past hour and averaging across all managed endpoints.
Each module contains a number of processes and services which utilize CPU and memory
                                          resources on the endpoint. For more information about agent process for Server & Workload
                                          Protection, see the Success Portal.

- 
The usage graph provides a visual representation of average resource usage across
                     your environment. You can choose to view usage over the past seven days or 24 hours.
                     Memory usage is measured in Megabytes.

- 
The endpoint list displays the managed endpoints in your environment and the median
                     CPU and memory usage for the past hour. You can filter the list or search for specific
                     endpoints. Clicking an endpoint name opens the detailed resource view for that endpoint
                     (see Figure 3).

 | 
 | 

###### Note

Filtering by Security Process only shows endpoints with non-zero resource usage for that process. For example,
                                    if you select Anti-malware scan, agents with the feature disabled do not appear in
                                    the list.

Figure 3 - Endpoint Detailed Resource View

The detailed resource view allows you to look at how agents are impacting the performance
               of individual endpoints.

- 
The endpoint details provide a quick summary of information including the endpoint
                     name, operating system, and last check-in. Click the link to view more details in
                     Endpoint Inventory.

- 
The resource overview provides the median memory and CPU usage for the past hour and
                     the usage trend for the past seven days. Additionally, you can view the resource usage
                     of each security process over the past hour.

- 
The usage graph provides a visual representation of resource usage. You can choose
                     to view usage over the past seven days or 24 hours.

- 
The Top 10 Anti-malware scanned files and paths provides a list of the most frequently scanned files, processes, and folders on the
                     endpoint. You can filter the list by object type.

 | 
 | 

###### Note

If Anti-malware Scan is not enabled on the endpoint, no data appears in the list.

---
