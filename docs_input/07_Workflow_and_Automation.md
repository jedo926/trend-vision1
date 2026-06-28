# Trend Vision One – Workflow and Automation

> **Source:** https://docs.trendmicro.com/en-us/documentation/trend-vision-one/
> **Scraped:** 2025-06-27

---

## Third-Party Integrations | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-third-party-integration

TrendAI Vision One™ enables integrations with key third-party applications and services, enabling secure
            data exchange for enhanced visibility and analysis across your security ecosystem.

You can learn about the available integrations in the following locations: 

- 
TrendAI Vision One™ console: The Third-Party Integrations screen shows supported integrations that require setup on the console and provides
                     links to their corresponding configuration screens.

- 
TrendAI™ Automation Center: The Third-Party Integrations screen shows applications that allow TrendAI™ products and services to integrate with platforms such as Splunk and Azure Sentinel.
                     For more information, see https://automation.trendmicro.com/thirdparty.

The redesigned interface introduces a modern, card-based layout that improves discoverability
               and usability. Users can quickly browse, filter, and evaluate integration options
               tailored to their environment.
The following table outlines the actions available on the Third-Party Integrations screen (Workflow and Automation → Third-Party Integrations).

 | 

 | 
Action

 | 
Description

 | 
Browse available integrations

 | 
Explore a wide range of third-party integrations organized by Vendor, Category, and Integration type. Each integration card provides a quick overview of the third-party application or
                              service, its purpose, and how it connects with TrendAI Vision One™.

 | 
Locate specific integrations

 | 
Use the Search field and drop-down lists to locate specific integration

- 
Category: Functional domain or purpose of the integration

- 
Vendor: Entity that develops or maintains the third-party application or service

- 
Associated app: TrendAI Vision One™ apps that consume data from or share data with the third-party application or service

- 
Integration type: How data flows between TrendAI Vision One™ and the third-party application or service

- 
Outbound: TrendAI Vision One™ shares data with the third-party application or service

- 
Inbound: TrendAI Vision One™ retrieves data from the third-party application or service

- 
Bi-directional: Data flows both ways between TrendAI Vision One™ and the third-party service

 | 
Enable or configure integrations

 | 
Click on any integration card to start the onboarding or configuration process

 | 
 | 

###### Important

Some integrations require a Service Gateway. You must enable third-party integration
                                             on the connected Service Gateway to allow data sharing between TrendAI Vision One™ and third-party applications.
For more information, see Service Gateway overview.

 | View integration details
 | 
Click on any configured integration card to open a detailed view

<div

---

## Response Management | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-response-management

The Response Management app allows you to take actions
            and track the actions you have taken on your environment using the TrendAI Vision One™ console.

The following table outlines the actions available on the Task List tab
               in Response Management (Workflow and Automation → Response Management).

 | 

 | 
Action

 | 
Description

 | 
Filter response data

 | 
Use Search to locate specific task data.

- 
Task status: The current status of the
                                    command sent to the managing server
The Task status indicates whether the managing server was able to successfully receive and execute
                                    the command. If the command target is a Security Agent, the Task status does not necessarily indicate whether the target Security Agent or object successfully
                                    executed the command.

- 
Action: The command sent to the target
For more information, see Response actions.

- 
Target type: The type of target object 

- 
Created/Updated by: The user that created or last updated the task

- 
Search: Provides partial matching for the
                                    Task ID and Target objects

 | 
View task details

 | 
View the table for the status of commands sent to targets.
For more information, see Response data.

 | 
Approve or reject tasks

 | 
Select and approve or reject tasks.
For more information, see Require approval for specified response actions.

 | 
Take additional action on a task

 | 
Depending on the command sent to a target, you may be able to perform secondary or
                              follow-up actions. Select the task to view any additional actions.
For more information, see Response actions.

The following table outlines the actions available on the Response
                  Scripts tab in Response Management (Workflow and Automation → Response Management).

 | 

 | 
Action

 | 
Description

 | 
Add custom scripts

 | 
Under Custom Scripts, click Add script to upload custom Bash or PowerShell script files.
For more information, see Run Remote Custom Script task.

 | 
Add osquery queries

 | 

 | 
 | 

###### Note

This action requires multi-factor authentication.

Under osquery, click Add query to type a custom osquery. Clicking Validate query toidentify any syntax errors.
For more information, see Run osquery task.

 | 
Add YARA rules

 | 

 | 
 | 

###### Note

This action requires multi-factor authentication.

Under YARA Rules, click Add YARA rules to upload a TXT file of custom YARA rules. Click Validate YARA rules to identify any syntax errors.
For more information, see Run YARA rules task.

<div

---

## Service Gateway overview | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-service-gateway-overview

Understand how a Service Gateway works in a hybrid network.

A Service Gateway installed in the local network acts as a relay between TrendAI Vision One™ and other products, such as
               on-premises TrendAI™ or third-party products. This allows use of TrendAI™ cloud services
               while reducing internet traffic and sharing threat intelligence.

How Service Gateway works in a hybrid network

A Service Gateway consists of a cloud-based inventory list in the console app and
               a
               locally-based virtual appliance.

 | 

 | 
Item

 | 
Description

 | 
Service Gateway Management

 | 
Service Gateway Management provides status information on connected Service Gateway
                              virtual appliances, including appliance details, service statuses, and connected
                              endpoints. Service Gateway Management also allows you to configure the connected
                              Service Gateway virtual appliances.
For more information, see Service Gateway appliance
                                 configuration.

 | 
Service Gateway virtual appliance

 | 
The Service Gateway virtual appliance attached to the local network provides
                              services like ActiveUpdate, Smart Protection Services, and Suspicious Object List
                              synchronization to on-premises TrendAI™ products. 
For more information about Service Gateway services, see Manage services in Service Gateway.

---
