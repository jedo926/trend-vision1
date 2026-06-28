# Trend Vision One – Cyber Risk Exposure Management

> **Source:** https://docs.trendmicro.com/en-us/documentation/trend-vision-one/
> **Scraped:** 2025-06-27

---

## Cloud Risk Management | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-cloud-risk-management

Cloud Risk Management helps you maintain visibility and control over your cloud security
               posture across AWS, Azure, Google Cloud, Oracle Cloud Infrastructure, and Alibaba
               Cloud environments. The app provides continuous monitoring, compliance tracking, and
               risk assessment to identify and remediate misconfigurations before they become security
               incidents.

#### Get started with Cloud Risk Management

To use Cloud Risk Management, connect your cloud accounts through the Cloud Accounts app. Once connected, Cloud Risk Management automatically begins scanning your resources
                  and providing insights into your security posture.
Access Cloud Risk Management from Cloud Security → Cloud Risk Management.

<div

---

## Endpoint Inventory | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-endpoint-inventory-intro-part

Manage, locate, and take action on any endpoint in your environment or download the
            agent installer packages to deploy on more endpoints.

Use the Endpoint Inventory to manage the endpoints in your environment. You can quickly
               find
               and take action on endpoints that have issues, view detailed information about endpoints
               with
               agents installed, and download new agent packages.
The following table lists the options available in Endpoint Inventory.

 | 

 | 
Options

 | Location
 | 
Description

 | 
Available Actions

 | 

 | 
Displays all discoverable endpoints that may require attention
Click any status to display a list of the affected endpoints. Click any endpoint to
                              see
                              recommended remediation actions. Endpoint Inventory automatically hides actions that
                              have
                              zero (0) matching endpoints.

- 
Immediate action required: An issue occurred on the endpoint that
                                    requires user intervention

- 
Unmanaged endpoints: The endpoints are discoverable on your
                                    network but do not have any available protection or sensor agent program installed

- 
Sensor disabled: The endpoints have the 
TrendAI Vision One™ sensor
                                    installed but not enabled, either through the sensor or policy settings

- 
Sensor update recommended: The endpoint has an older version of
                                    the Endpoint Sensor component installed (including Activity Monitoring and Apex One
                                    Endpoint Sensor) and should update to the latest 
TrendAI Vision One™ version

 | 
Security Deployment

 | 

 | 
Displays all endpoints that have a protection or sensor agent installed
Click any status to view a list of all related endpoints. Click any endpoint to view
                              detailed information about the endpoint and applied policies.

- 
All managed endpoints: All endpoints on your network that have a
                                    protection or sensor agent installed

- 
Standard Endpoint Protection: All endpoints that have the Standard Endpoint Protection agent installed (includes
                                    endpoints that also have the Endpoint sensor detection and response feature enabled)

- 
Server & Workload Protection: All endpoints that have the Server & Workload agent installed (includes endpoints
                                    that also have the Endpoint sensor detection and response feature enabled)

- 
Sensor only: All endpoints that only have the Sensor agent
                                    installed

- 
Connected Endpoint Protection: All endpoints that have protection
                                    or sensor agent installed from a connected product.

 | 
Endpoint Management

 | 

 | 
Displays your Protection Managers, Endpoint Group Managers, and all endpoint groups
                              for
                              your business

- 
Standard Endpoint Protection Management: Your provisioned Standard Endpoint Protection Manager and Endpoint Group Managers.

- 
Server & Workload Protection Management: Your provisioned Server & Workload Protection Managers and Endpoint Group Managers

- 
Connected Endpoint Protection Management: Your connected Trend
                                    Micro endpoint protection products.

For more information, see Endpoint Management.

 | 
 | 

###### Note

Sensor only endpoints are not included in any endpoint groups. Use the Add
                                                filters () button to locate the sensors you want to manage.

 | 
Endpoint actions

 | 

 | 
After selecting an endpoint from the displayed list, you can take the following actions.
                              The actions available may vary depending on your region and if you have chosen to
                              opt-in to certain pre-release features.

 | 
 | 

###### Tip

If you have a large number of connected endpoints, the select all
                                             option appears after selecting all endpoints on the current page, or at least 100
                                             endpoints.

- 
Move Endpoint: Select the new endpoint group that the endpoints belong to 

 | 
 | 

###### Note

You can only move endpoints to other endpoint groups managed by the same Endpoint
                                                   Group Manager.
Certain restrictions apply if you have updated TrendAI Vision One™ to the Foundation services release without unlocking the TrendAI Vision One™ Endpoint Security functionality. Specifically, you cannot move endpoints managed
                                                   by on-premises servers or SaaS instances that have not yet updated to TrendAI Vision One™ Endpoint Security.
You cannot move sensor only endpoints to an endpoint group. Use the Add filters () button to locate the sensors you want to manage.

- 
Remove Endpoint: Remove the selected endpoints from Endpoint Inventory
Removing an endpoint does not uninstall the TrendAI Vision One™ Endpoint Security agent. If the endpoint reconnects to your TrendAI Vision One™ instance within a year of removal, the endpoint is added to the inventory again.
                                    To uninstall agents, see Uninstall the TrendAI Vision One™ Endpoint Security agent.
For more information about removed endpoint behavior, see What happens when a removed endpoint
                                       reconnects to 
                                       TrendAI Vision One™ Endpoint Security?.

- 
Response actions: Create response tasks on specific endpoints and
                                    follow the task status using the Response Management app

- 
Isolate Endpoint

- 
Run Remote Custom Script

- 
Start Remote Shell Session

 | 
 | 

###### Note

If you isolate an endpoint using the Isolate Endpoint task, you must go to the Response
                                                   Management app and find the Isolate Endpoint task to restore the connection. 

- 
Endpoint security policy: Manage overrides for endpoint policy settings for the selected endpoints. Overrides
                                    help apply different settings to specific endpoints. You can chose the following actions:

- 
Override endpoint security policy: Apply setting overrides to the selected endpoints

- 
Remove override settings: Remove all setting overrides applied using the Override endpoint security policy action.

- 
Remove Intrusion Prevention endpoint overrides: Remove any overrides configured for Intrusion Prevention in Server & Workload Protection → Computers

For more information about policy overrides, see Endpoint security policy overrides.

 | 
Agent Installer

 | 

 | 
Opens the Agent Installer window, which provides access to the different installer
                              packages

- 
Deploy agents using the installer package

- 
Deploy agents using the offline installer package

- 
Deploy agents using the deployment script

For more deployment options, see Deploy agents.
TrendAI Vision One™ Endpoint Security agent system requirements

 | 
Global Settings ()

 | 

 | 
Displays the option to configure your global agent settings

- 
Global
                                       Settings: A collection of sensor and proxy settings that apply to all endpoints in
                                    your environment

 | 
Additional actions

 | 

 | 

- 
Add filters (): Add filters to help locate endpoints based on criteria such as
                                    statuses, policies, operating systems, and more
To save applied filters as a custom filter, click Save (). You can save up to 20 custom filters per TrendAI Vision One™ user account.

- 
Display Guides ():
                                    Reopens the Getting Started Guide for Endpoint Inventory

- 
Manage Reports:

- 
Export view to CSV: Exports all endpoints based on the current
                                          filters set in the current view

- 
Endpoint Inventory: Creates a one-time or recurring report
                                          based on endpoint data using the Endpoint Inventory report template

- 
Show/Hide Columns ():
                                    Customizes the columns that display in the list
For more information, see Endpoint Inventory table columns.

<div

---

## Network Inventory | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-network-inventory

View and manage connected security products and the network sensor feature which provides
            visibility into your network environment.

Use Network Inventory (Network Security → Network Inventory) to monitor, manage, and configure your connected TrendAI™ security products and enable the Network Sensor function. Network Inventory provides an overview of your connected Virtual Network Sensors, Deep Discovery Inspector
               appliances, and TippingPoint devices managed by your connected TippingPoint SMS. The
               Network Sensor is a feature deployed on supported products which allows your connected
               devices to monitor traffic and provide greater visibility for XDR detection and analysis.
Advanced Network Security features are located on the following screens, accessible from the navigation bar.

- 
To configure advanced scanning settings and define your network topography, see Network Analysis Configuration.

- 
To configure intrusion prevention settings including deploying virtual patches, see
                     Intrusion Prevention Configuration.

Network Inventory retains data for all Network Sensors for 180 days.
The following table lists the options available in Network Inventory.

 | 

 | 
Options

 | 
Description

 | 
Inventory

 | 
Displays an overview of your network security environment and allows you to filter
                              the list view by product type or assigned group
Click on any product name or group name to filter the table. Hover your mouse over
                              an entry and click the options icon () to do the following group management actions.

- 
Create group: Create a new appliance group or sub-group

- 
Rename: Rename the appliance group or sub-group

- 
Delete: Delete the appliance group or sub-group

Some actions are limited based on group type or level.
For more information about managing Virtual Network Sensor, see Virtual Network Sensor.
For more information about managing Deep Discovery Inspector, see Deep Discovery Inspector appliances.
For more information about managing TippingPoint appliances, see TippingPoint devices.

 | 
Common actions

 | 
Common Network Security actions that are available in all views
The buttons and links located at the top of the Network Inventory screen allow you
                              to manage resources and policies that apply across appliance type.

- 
Monitored throughput: Click to view a breakdown of your network throughput by sensor type and individual
                                    connected sensors. 

- 
Virtual Network Sensors and TippingPoint devices display the throughput monitored
                                          from the start of the billing cycle to the previous day.

- 
Deep Discovery Inspector appliances display the allocated bandwidth for connected
                                          appliances with the Network Sensor feature turned on. Bandwidth allocation is fixed
                                          based on the purchased license.

You can view details about your actual scanned throughput with the Monitored Network
                                    Throughput widget in the Network Overview app.

- 
Start free trial: Try XDR for Networks features for free to add TrendAI Vision One™ XDR capabilities to your network solutions.
This feature is available only for eligible users. For details, see Start a free trial of XDR for Networks.

- 
Manage usage: View your current credit usage for XDR for Networks features

- 
Simulations: Use demonstration scripts to simulate attacks and find out what TrendAI Vision One™ can uncover for you

 | 
Network appliance actions

 | 
Deploy or connect your network security appliances and take management actions on
                              selected appliances
The actions available change depending on which product type you are viewing and if
                              you have selected an appliance from the appliance list.
For more information, see the product specific topics:

- 
Virtual Network Sensor

- 
Deep Discovery Inspector appliances

- 
TippingPoint devices

 | 
Other actions

 | 
Take additional actions for your appliance type
The actions available change depending on which product type you are viewing.

- 
Setup Guide: Open the Virtual Network Sensor Getting Started Guide in the TrendAI Vision One™ console to review setup and deployment steps.

- 
Manage: Manage appliance plans and the Virtual Analyzer image source for your connected Deep Discovery Inspector appliances

- 
Refresh (): Refresh the current view

 | 
Inventory list

 | 
Displays the connected network security appliances based on which product type or
                              group you selected from the Inventory section

<div

---

## Email Asset Inventory | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-email-asset-inventory

Manage the security configuration and take action on email assets in your
            environment.

Email Asset Inventory (Email and Collaboration Security Operations → Email Asset Inventory) allows you to manage email assets in your environment including email
               accounts, domains, and email servers. You can quickly take action on email accounts
               that have
               issues, view detailed information about email accounts and domains, and manage protection
               policies.
The following table outlines the actions available in Email Asset
                  Inventory.

 | 

 | 
Options

 | Screen Location
 | 
Description

 | 
Available Actions

 | 

 | 
Displays all discoverable email accounts that may require attention
Click any status to display a list of the affected email accounts. Click the icons
                              ( and ) next to any email account to see
                              recommended actions. 

- 
Immediate action required: An issue occurred on the
                                    email accounts that requires user intervention

- 
Unmanaged email accounts: The email accounts are
                                    discoverable on your network but do not have email sensor detection and response
                                    nor a protection solution deployed

- 
Email sensor detection disabled: The email accounts do
                                    not have email sensor detection and response deployed

 | 
Email Account Inventory

 | 

 | 
Displays all email accounts that have a protection solution or email sensor
                              detection and response
Click the protection name to view a list of all related email accounts. Important
                              email accounts are marked with an icon (). Click an email account to view detailed
                              information.

- 
All managed email accounts: All email accounts on your
                                    network that have either email sensor detection and response or Cloud App
                                    Security protection deployed

- 
Cloud Email and Collaboration Protection: All email
                                    accounts protected by Cloud Email and Collaboration Protection

- 
Cloud App Security protected: All email accounts
                                    protected by Cloud App Security

- 
Email sensor detection: All email accounts for which
                                    email sensor detection and response is enabled

 | 
Email Domain Inventory

 | 

 | 
Displays all email domains that have a protection solution
Click the protection name to view a list of all related domains. Click a domain
                              name to view detailed information.

- 
Cloud Email Gateway Protection managed domains: All
                                    domains protected by Cloud Email Gateway Protection

- 
TrendAI™ Email Security managed domains: All domains
                                    protected by TrendAI™ Email Security

 | 
Email Server Inventory

 | 

 | 
Displays email servers protected by a connected on-premises protection solution
Click the protection name to view a list of managed email servers. Click
                              Access to open the console for the managing protection
                              solution in a new tab in your browser.

- 
All managed email servers: All on-premises email servers
                                    managed by a connected email protection solution

- 
ScanMail for Microsoft Exchange: All on-premises email
                                    servers managed by a connected ScanMail for Microsoft Exchange protection
                                    solution

- 
Interscan Messaging Security Virtual Appliance: All
                                    on-premises email servers managed by a connected Interscan Messaging Security
                                    virtual appliance protection solution

 | 
Search and filter

 | 

 | 
Search for email assets or apply filters to locate the assets you want to find
Use the following search and filter actions to find the email account, domain, or
                              email server you are looking for.

- 
Organization/Tenants: If you are managing multiple
                                    organizations, select the organization you wish to manage (email account
                                    inventory list only)

- 
Asset name: Specify the name of an email account,
                                    domain, or email server to search for the asset in the relevant list

- 
Add filters (): Filters the email assets that display
                                    in the list by selecting criteria

 | 
Email sensor detection management

 | 

 | 
Enables or disables email sensor detection and response for email accounts in
                              Exchange Online, Gmail, or other email services
The button only appears when viewing the Email Account Inventory. For more details,
                              see Manage Email Sensor detection.

 | 
Additional actions

 | 

 | 

- 
Refresh (): Refreshes the screen to show the
                                    latest statuses in the list

- Show/Hide Columns (): Customizes the columns that display in the list

<div

---
