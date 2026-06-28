# Trend Vision One – Agentic SIEM XDR

> **Source:** https://docs.trendmicro.com/en-us/documentation/trend-vision-one/
> **Scraped:** 2025-06-27

---

## Workbench alerts | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-workbench-alerts

| 

 | No.
 | 
Google SecOps UDM field

 | 
TrendAI Vision One™ field

 | 
Notes

 | 1
 | 
metadata.event_type

 | 

 | 

- 
GENERIC_EVENT

- 
FILE_UNCATEGORIZED

- 
FILE_MODIFICATION

- 
STATUS_UPDATE

 | 2
 | 
metadata.vendor_name

 | 

 | 
TRENDMICRO VISION ONE WORKBENCH

 | 3
 | 
metadata.product_name

 | 

 | 
TRENDMICRO VISION ONE WORKBENCH

 | 4
 | 
target.file.full_path

 | 
fullPath

 | 

 | 5
 | 
target.file.full_path

 | 
filePathName

 | 

 | 6
 | 
target.file.names

 | 
fileName

 | 

 | 7
 | 
principal.hostname

 | 
endpointHostName

 | 

 | 8
 | 
principal.asset.hostname

 | 
endpointHostName

 | 

 | 9
 | 
principal.ip

 | 
endpointIp

 | 

 | 10
 | 
principal.asset.ip

 | 
endpointIp

 | 

 | 11
 | 
additional.fields

 | 
mpver

 | 
key: "mpver"value: {mpver}

 | 12
 | 
metadata.product_version

 | 
pver

 | 

 | 13
 | 
target.process.file.full_path

 | 
processName

 | 

 | 14
 | 
principal.asset.asset_id

 | 
mDeviceGUID

 | 

 | 
15

 | 
metadata.product_event_type

 | 
eventName

 | 

 | 
16

 | 
metadata.product_log_id

 | 
eventId

 | 

 | 
17

 | 

 | 
rt

 | 

 | 
18

 | 
metadata.collected_timestamp

 | 
logReceivedTime

 | 

 | 
19

 | 
additional.fields

 | 
rtDate

 | 
key: "rtDate"value: {rtDate}

 | 
20

 | 
additional.fields

 | 
eventSourceType

 | 
key: "eventSourceType"value: {eventSourceType}

 | 
21

 | 
additional.fields

 | 
hostId

 | 
key: "hostId"value: {hostId}

 | 
22

 | 
security_result.rule_id

 | 
ruleId

 | 

 | 
23

 | 
principal.administrative_domain

 | 
suid

 | 

 | 
24

 | 
principal.user.userid

 | 

 | 

 | 
25

 | 
principal.resource.attribute.labels

 | 
senderGUID

 | 
key: "senderGUID"value: {senderGUID}

 | 
26

 | 
principal.resource.attribute.labels

 | 
uuid

 | 
key: "uuid"value: {uuid}

 | 
27

 | 
security_result.detection_fields

 | 
detectionType

 | 
key: "detectionType"value: {detectionType}

 | 
28

 | 
security_result.detection_fields

 | 
winEventId

 | 
key: "winEventId"value: {winEventId}

 | 
29

 | 
security_result.description

 | 
msg

 | 

 | 
30

 | 
security_result.detection_fields

 | 
subRuleId

 | 
key: "subRuleId"value: {subRuleId}

 | 
31

 | 
security_result.detection_fields

 | 
subRuleName

 | 
key: "subRuleName"value: {subRuleName}

 | 
32

 | 
security_result.category_details

 | 
cat

 | 

 | 
33

 | 
security_result.action_details

 | 
fileOperation

 | 

 | 
34

 | 
security_result.rule_name

 | 
ruleName

 | 

 | 
35

 | 
principal.resource.attribute.labels

 | 
endpointGUID

 | 
key: "endpointGUID"value: {endpointGUID}

 | 
36

 | 
additional.fields

 | 
logKey

 | 
key: "logKey"value: {logKey}

 | 
37

 | 
additional.fields

 | 
productCode

 | 
key: "productCode"value: {productCode}

 | 
38

 | 
additional.fields

 | 
mpname

 | 
key: "mpname"value: {mpname}

 | 
39

 | 
security_result.severity_details

 | 
severity

 | 

 | 
40

 | 
target.user.userid

 | 
duser

 | 

 | 
41

 | 
metadata.description

 | 
description

 | 

 | 
42

 | 
severity

 | 
modelSeverity

 | 

 | 
43

 | 
principal.hostname

 | 
impactScope.entities.entityValue.name

 | 
impactScope.entities.entityType = "host"

 | 
44

 | 
principal.asset.hostname

 | 
impactScope.entities.entityValue.name

 | 
impactScope.entities.entityType = "host"

 | 
45

 | 
principal.ip

 | 
impactScope.entities.entityValue.ips

 | 
impactScope.entities.entityType = "host"

 | 
46

 | 
principal.asset.ip

 | 
impactScope.entities.entityValue.ips

 | 
impactScope.entities.entityType = "host"

 | 
47

 | 
principal.user.user_display_name

 | 
impactScope.entities.entityValue

 | 
impactScope.entities.entityType = "account"

 | 
48

 | 
principal.user.email_addresses

 | 
impactScope.entities.entityValue

 | 
impactScope.entities.entityType = "emailAddress"

 | 
49

 | 
security_result.detection_fields

 | 
indicators

 | 
key: {indicators.type}value: {indicators.value}key: "field"value: {indicators.field}

 | 
50

 | 
security_result.rule_id

 | 
matchedRules.id

 | 

 | 
51

 | 
security_result.rule_name

 | 
matchedRules.name

 | 

 | 
52

 | 
security_result.attack_details.tactics.id

 | 
matchedRules.matchedFilters.mitreTacticIds

 | 

 | 
53

 | 
security_result.attack_details.techniques.techniques.id

 | 
matchedRules.matchedFilters.mitreTechniqueIds

 | 

 | 
54

 | 
additional.fields

 | 
model

 | 
key: "model"value: {model}

 | 
55

 | 
security_result.url_back_to_product

 | 
workbenchLink

 | 

 | 
56

 | 
security_result.detection_fields

 | 
key: "status"value: {status}

 | 

 | 
57

 | 
security_result.about.investigation.status

 | 
investigationStatus

 | 

 | 
58

 | 
security_result.about.investigation.comments

 | 
investigationResult

 | 

 | 
59

 | 
security_result.risk_score

 | 
score

 | 

 | 
60

 | 
security_result.last_updated_time

 | 
updatedDateTime

 | 

 | 
61

 | 
metadata.product_log_id

 | 

 | 

 | 
62

 | 
metadata.event_timestamp

 | 
createdDateTime

 | 

 | 
63

 | 
security_result.first_discovered_time

 | 
createdDateTime

 | 

 | 
64

 | 
metadata.product_name

 | 
pname

 |

---

## Alert details | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-alert-details

Workbench provides detailed alert information
            for more effective investigations.

The following table describes the basic information Workbench provides about alerts.

 | 

 | 
Element

 | 
Description

 | 
Status

 | 
Status: The current status of the alert or investigation triggered in Workbench

- 

Open:  The alert is new and not currently under investigation

- 

In progress: The alert is under investigation.

- 

Closed: The alert investigation is complete.

 | 
Score

 | 
The overall severity assigned to the alert
TrendAI Vision One™
                              calculates the score based on the severity of the matched detection model and the
                              impact
                              scope of the alert.

 | 
 | 

###### Note

Starting on January 18, 2021, TrendAI Vision One™ adjusted the scoring model and redefined the maximum alert score as 99. The new scoring
                                             model only affects new alerts.
The new scoring model takes the severity of the matched model as the
                                             dominant factor in calculation and defines a certain threshold for the impact scope
                                             value.

 | 
Workbench ID

 | 
The Workbench alert ID

 | 
Model name

 | 
The detection model that triggered the alert

 | 
Model severity

 | 
The severity assigned to a model that triggered the alert

 | 
Impact scope

 | 
The number of entities that the alert affects within the company
                              network

 | 
Data source / processor

 | 
The product that is providing data

 | 
Created

 | 
The date and time that TrendAI Vision One™ generated the alert

 | 
Findings

 | 
Findings: The findings of the alert investigation.

- 
Benign true positive: The investigation confirmed the presence of a genuine threat that poses no risk
                                    to the organization. Benign true positives are the result of penetration tests or
                                    other legitimate activities in your environment.

- 
False positive: No malicious activity found.

- 
Noteworthy: TrendAI Vision One™ detected unusual activity that requires more investigation.

- 
Other findings: The investigation did not have not enough data to validate the findings.

- 
True positive: The investigation confirmed the occurrence of threats or malicious activities.

 | 
Case

 | 
The ID of the case assigned to the alert.

 | 
Owner

 | 
The user assigned to the alert.

 | 
Associated insight

 | 
The Workbench insight associated with the alert

 | 
Automated response

 | 
The status of the automated response tasks associated with the alert

The following table describes the alert information displayed on the alert details
               screen.

 | 

 | 
Element

 | 
Description

 | 
Summary

 | 
Basic information of the alert you investigate
If the Threat Intelligence Sweeping model triggers the alert, the following information
                              displays:

- 
Campaign: The associated threat campaign

- 
Industry: The industry that the threat campaign belongs to

- 
Intelligence source: The data source that provides the matched
                                    intelligence report

- 
First seen: The date and time indicators of compromise were first
                                    identified in the environment

- 
Last seen: The date and time indicators of compromise were last
                                    identified in the environment

 | 
Highlights

 | 
The list of the event objects that triggered the alert with contextually enriched
                              information.
Events consist of the following information:

- 
The filter that detected suspicious behavior

- 
Technique: The detected MITRE technique

- 
Detection: The detected malware

- 
Data source / processor: The product that sent the alert data to
                                    Workbench

- 
Emerging threats: The emerging threats associated with the
                                    detection

- 
Threat actors: The threat actors associated with the
                                    detection

- 
Exploited CVE: The detected common vulnerabilities and exposures (CVE) and information about campaigns
                                    actively exploiting the vulnerability

- 
Malware/Tool: The tools or malware detected in the alert

- 
The date and time the detection occurred

- 
The objects involved in the event, such as endpoints, commands, email messages, and
                                    registry values
An event comprises two types of objects:

- 
Highlighted objects that triggered the current filter

- 
Entities included in the impact scope

If the Threat Intelligence Sweeping model triggers the alert, the Highlights section shows the identified indicators of compromise (IoCs), data source/processor,
                                    and the related objects instead.

 | 
Timeline

 | 
Date and time that the detection occurred

 | 
Observable Graph

 | 
More detailed context for the alert in a visualized form
Click any of the events in the Highlights section to highlight the
                              specific objects in the Observable Graph.
Each node in the graph refers to an object, and each link reflects the relationship
                              between one node and the adjacent node.

- 
Each line () represents the association between the
                                    two objects, for example, a user account associated with an endpoint.

- 
Each arrow () indicates the direction of the
                                    transaction between the two objects, for example, the direction from the email sender
                                    to
                                    the recipient.

- 
The Connection Details icon () indicates the connection between the two objects. For example, the connection between
                                    an endpoint and a website.
Click the Connection Details icon to view more information.

 | 
Related assets

 | 
The most recent endpoints and users that communicated with the assets involved in
                              the event

---

## Observed Attack Techniques | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-observed-attack-techniques

Review the individual events detected in your environment that might trigger a Workbench
            alert.

TrendAI Vision One™ detects events through use of granular predefined or custom detection filters that
               make up the detection models that trigger alerts. Events listed in Observed Attack
               Techniques (Agentic SIEM and XDR → Observed Attack Techniques) might not generate a Workbench insight or Workbench alert. You can use the data
               in TrendAI Vision One™ to further investigate Workbench insights and evaluate individual detections.
The following table actions are available in Observed Attack Techniques:

 | 

 | 
Action

 | 
Description

 | 
Filter event data

 | 
Use the drop-down menus to filter by Event severity and last Detected time.

 | 
 | 

###### Note

Click Add filter and select an option from the drop-down menu to filter by Asset group, Custom tag, Data source / processor, Detection filter, Endpoint group, Tactic ID, or Technique ID.

You may also use the search box to filter insights by endpoint or container name.

 | 
Create a query from filters

 | 
To create a query in XDR Data Explorer based on your specified filters, click Query in XDR Data Explorer.

 | 
Hide detection filters from the list

 | 
If you receive a lot of detections on particular detection filters that do not
                              interest you, you can temporarily hide the data for specific filters.
Right-click the unwanted Detection filter name and click Hide Value. After adding all unwanted filters to the Hidden objects list, click Apply to reload the list.

 | 
 | 

###### Note

You cannot save the Hidden objects list. If you leave the Observed Attack Techniques, the list resets.

 | 
View event details in XDR Data Explorer

 | 
Locate an event, click the options icon () at the end of the row and select View Event in XDR Data Explorer to open XDR Data Explorer in a new browser tab.

 | 
Add event to Workbench insight

 | 
Locate and right-click an event, then select Add to Workbench Insight.
Adding events to Workbench insights updates the insight information, including impact
                              scope and highlighted object.

 | 
Add event to a general case

 | 
Click  for an event and select Add event to a general case to add the event as evidence in a case.

 | 
View detailed information about an associated entity

 | 
Click the Show Detailed Profile icon () to view detailed information about the associated entity.

 | 
View more details

 | 
Expand any row to see more details related to the detection and associated entities.

 | 
Chat with TrendAI™ Companion

 | 

- 
Click  to start a conversation with TrendAI™ Companion.

- 
Right-click a CLI command element (parentCmd, processCmd, and objectCmd) and choose Explain Command to learn about the commands executed in an event.

- 
To learn about an event, you can right-click an event or click  and choose Explain Event. TrendAI™ Companion cannot explain events that only contain custom filters.

<div

---

## Detection Model Management | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-detection-model-management

Manage the detection models and filters TrendAI Vision One™ uses to detect events and trigger alerts.

Detection Model
                  Management (Agentic SIEM and XDR → Detection Model
                     Management) enables you to configure how TrendAI Vision One™ detects events in Observed Attack Techniques and generates alerts in Workbench.
The detection models combine multiple rules and filters using a variety of analysis
               techniques including data stacking and machine learning.
TrendAI™ refines and adds detection models and filters to improve threat detection capabilities
               and reduce false positive alerts on a regular basis.
The following table outlines the tabs available in Detection Model
                  Management:

 | 

 | 
Tab

 | 
Description

 | 
Detection Models

 | 
View all predefined detection models provided by TrendAI Vision One™

 | 
Custom
                                 Models

 | 

- 
Create, manage, edit, import, and export custom detection models

- 
Filter custom detection models by severity, status, and time of last update

- 
Search for custom detection models by model ID, name, or filters

 | 
Custom
                                 Filters

 | 

- 
Create, manage, edit, import, and export custom filters

- 
Filter custom filters by risk level, event type, and time of last update

- 
Search for custom filters by filter ID, name, or query

 | 
Exceptions

 | 

- 
Add, manage, and edit exceptions to detection models

- 
Search for exceptions by name or criteria

<div

---

## Sandbox Analysis | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-sandbox-analysis

Submit samples for analysis in a secure virtual environment.

Sandbox Analysis manages and analyzes objects submitted to the sandbox by integrated products and
               users.
The following table outlines the actions available on the Sandbox Analysis screen.

 | 

 | 
Action

 | 
Description

 | 
Submit objects for analysis

 | 
Click Submit Object to manually submit an object
                              for analysis in the sandbox.

 | 
Configure credit usage

 | 
To view feature options and credit usage, click Manage usage.

 | 
Create a High-Risk Submissions report

 | Select Manage Reports → High-Risk Submissions to create a High-Risk Submissions report.

 | 
Filter submitted object data

 | 
Use the search and filters to locate specific submitted object data.

- 
Submitted: The date and time the object was submitted to the sandbox

- 
Object type: The type of object

- 
Risk level: The risk level assigned to the object by the sandbox

- 
Submitter: The product or method that
                                       submitted the object to the sandbox

Partial matching applies to Object, Threat type, and Threat name. Exact matching applies to SHA-1 hash value.

 | 
 | 

###### Note

For URL submissions, the Sandbox Analysis list displays both the normalized URL (the
                                             URL that the sandbox analyzed) and the original URL (the URL you submitted). The toolbar
                                             search matches against either form.

 | 
Refresh the table

 | 
Click  to refresh data displayed in the table.

 | 
View object profile

 | 
Click any object name to display the object profile.

 | 
Take additional actions

 | 
Click the  to select additional actions on the submitted object.
                              

 | 
 | 

###### Important

Downloading and re-analyzing file objects requires granting TrendAI™ permission to save submitted files.

- 

View on Threat Connect: Displays information about the object on Threat Connect

- 

Add to Intelligence Reports: Adds the object to Intelligence Reports and runs an auto sweep

- 

Download investigation package : Downloads the investigation package of submitted objects with high, medium, and
                                    low risk levels

- 

Download file object: Downloads the submitted file object to your computer

 | 
 | 

###### WARNING

Downloading suspicious samples may potentially harm your endpoint. Ensure that you
                                                   take
                                                   the necessary precautions before continuing.

- 

Re-analyze: Submits the file or URL back to the Virtual Analyzer for further analysis

 | 
 | 

###### Important

Re-analysis of objects counts toward the daily reserve.

- 

Delete submission: Deletes the previous analysis results and any associated files from Sandbox Analysis

<div

---

## Exception list | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-exception-list

You can select objects that are considered safe and add them to the exception
            list.

When TrendAI Vision One™ detects a suspicious object in the exception list, it considers the object safe and does not act on the object. File exceptions are hash-based, not path or file‑upload
               based. Exceptions are specific to each hash value.

 | 
 | 

###### Note

Suspicious object exceptions only apply to suspicious object detections managed by
                              TrendAI Vision One™. They do not suppress detections made by endpoint security agent engines such as
                              antivirus (AV), Advanced Threat Scan Engine (ATSE), or Behavior Monitoring (BM). If
                              an endpoint agent independently detects a file as malicious, the agent will still
                              take action (like quarantine or block) even if that file's hash appears in the exception
                              list.

You can only add the following object types to the exception list. Examples show the
               correct format.

##### Supported object types

 | 

 | 
Object type

 | 
Example

 | 
Domain

 | 
example.com 

 | 
File SHA‑256 

 | 
c9f5d3e2a6b7c8d9e0f123456789abcdef0123456789abcdef0123456789abcd

 | 
File SHA‑1 

 | 
a94a8fe5ccb19ba61c4c0873d391e987982fbbd3

 | 
IP address 

 | 
192.168.1.10

 | 
Sender address 

 | 
user@example.com

 | 
URL

 | 
https://example.com/path/file.html

The following table outlines the actions available on the Exception List screen. You can also add exceptions using the context menu.

 | 

 | 
Action

 | 
Description

 | 
Filter object data

 | 
Use the Search field and Object type drop-down
                              list to filter objects.

 | 
View or edit object details

 | 
Click any object name in the Object column to open the
                              details panel. View the object settings and make changes if necessary.

 | 
Add exceptions

 | 
Click Add to open the Add Exception screen.
Choose to manually add different types of objects as exceptions. For more information,
                              see Add exceptions.
You can add a maximum of 5,000 exceptions.
The Exception object types table shows which object types you can add to the Exception List.

 | 
Delete exceptions

 | 
Select one or more exceptions and click Delete.

##### Exception object types

 | 

 | 
Object type

 | 
Example

 | 
Domain

 | 
example.com

 | 
File SHA-256

 | 
c9f5d3e2a6b7c8d9e0f123456789abcdef0123456789abcdef0123456789abcd

 | 
File SHA‑1

 | 
a94a8fe5ccb19ba61c4c0873d391e987982fbbd3

 | 
IP address

 | 
192.168.1.10

 | 
Sender address

 | 
user@example.com 

 | 
URL

 | 
https://example.com/path/file.html

<div

---

## Data Source and Log Management | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-data-source-log-management

Manage and monitor connected TrendAI™ and third-party data sources that supply data to Cyber Risk Exposure Management and Agentic SIEM and XDR. 

Data Source and Log Management provides central visibility of the status of TrendAI™ and third-party data sources that supply data to Cyber Risk Exposure Management and Agentic SIEM and XDR for threat and risk analysis.
Data Source and Log Management includes the following features:
               
- 
Data usage and monitoring:

- 
Check your data ingestion and retention usage over time.

- 
View data use by ingestion type, retention type, and data source.

- 
Keep track of your data usage up to and beyond the default period.

- 
Data sources and retention:

- 
See all data sources that contribute to Agentic SIEM and XDR and Cyber Risk Exposure Management.

- 
View the connection status, data target, and retention period of your data sources.

- 
Get information on how to configure individual data sources to send data to 
TrendAI Vision One™. 

- 
See the configurations of your third-party log repositories and the associated collectors
                              that are receiving third-party log data.

<div

---

## Data sources and retention | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-data-sources-retention

View the status of and manage data retention periods for TrendAI™ and third-party data sources that supply data to Cyber Risk Exposure Management and Agentic SIEM and XDR.

In the Data sources and retention section of Data Source and Log Management, you can view all available TrendAI™ and third-party data sources that contribute to threat and risk analysis for Cyber Risk Exposure Management and Agentic SIEM and XDR. The centralized location shows which data sources you have configured, what other
               data sources are available for configuration, and if any connection issues are preventing
               TrendAI Vision One™ from receiving data. Click a data source name to view details and learn how to manage,
               connect, or disconnect the data source.
If you have configured third-party log repositories and Third-Party Log Collection, you can also view log repository configurations and details on associated collectors.

<div

---

## Start a free trial of Agentic SIEM | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-agentic-siem-free-trial

Experience the benefits of Agentic SIEM with a free trial.

#### Procedure

- Go to Agentic SIEM & XDR → Data Source and Log Management.

- Click Start free trial.

- If you want to continue using Agentic SIEM with no disruption in service after the
                        trial ends, enable Continue using the solution after the trial expires.

 | 
 | 

###### Tip

- 
You can adjust this setting at any time before the trial expires.

- 
If you disable automatic paid usage, your access to this solution stops when the trial
                                                ends. To continue your usage after the trial, you must manually reenable the solution
                                                using credits or pay-as-you-go. TrendAI Vision One™ deletes related settings, PII, and data from the trial period 30 days after the trial
                                                ends, except for information related to cyber threats or shared with other solutions.

- Click Start free trial.
Your free trial begins.

 | 
 | 

###### Tip

Go to Platform Usage and Credits → Credits overview → Trial usage to view your trial usage.
Your estimated post-trial credit usage indicates the estimated number of credits you would need to continue using the solution
                                          in the same volume of usage after the trial ends. The number changes throughout the
                                          trial period. For more information, see Platform Usage and Credits.

- If you would like to extend the trial, click Manage trial → Extend trial for 30 days.

---

## Response actions | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-response-actions-intro

Object-specific actions allow you to directly respond to threats
            without leaving the TrendAI Vision One™
            console.

##### User Account / IAM

 | 

 | 
Action

 | 
Description

 | 
Supporting Services

 | 
Add to Zscaler Restricted User Group

 | 
Adds user accounts with a high risk exposure to the Zscaler-defined restricted user
                              group to allow for Zscaler policy enforcement.
For more information, see Add to Zscaler Restricted User Group
                                 task.

 | 

- 
Microsoft Entra ID

 | 
Disable User Account

 | 
Signs the user out of all active application and browser sessions of the user account.
                              This task might take a few minutes to complete. Users are prevented from signing in
                              any new session.

 | 
 | 

###### Note

Not applicable on accounts assigned the Microsoft Entra ID Administrator role.

For more information, see Disable User Account task.

 | 

- 
Microsoft Entra ID

- 
Active Directory (on-premises)

- 
Okta

- 
OpenLDAP

 | 
Enable User Account

 | 
Allows the user to sign in to new application and browser sessions. This task might
                              take a few minutes to complete. The user's subsequent sign-in attempts and access
                              requests follow the control by secure access rules.
For more information, see Enable User Account task.

 | 

- 
Microsoft Entra ID

- 
Active Directory (on-premises)

- 
Okta

- 
OpenLDAP

 | 
Force Password Reset

 | 
Signs the user out of all active application and browser sessions, and forces the
                              user to create a new password during the next sign-in attempt. This task might take
                              a few minutes to complete.
For more information, see Force Password Reset task.

 | 

- 
Microsoft Entra ID

- 
Active Directory (on-premises)

- 
Okta

- 
OpenLDAP

 | 
Force Sign Out

 | 
Signs the user out of all active application and browser sessions of the user account.
                              This task might take a few minutes to complete. Users are not prevented from immediately
                              signing back in the closed sessions or signing in new sessions.
For more information, see Force Sign Out task.

 | 

- 
Google Cloud Identity

- 
Microsoft Entra ID

- 
Okta

 | 
Remove from Zscaler Restricted User Group

 | 
Removes user accounts from the Zscaler-defined restricted user group.
For more information, see Remove from Zscaler Restricted User Group
                                 task.

 | 

- 
Microsoft Entra ID

 | 
Revoke Access Permission

 | 
Revokes the user’s access permission on the Amazon Web Services (AWS) Identity and
                              Access Management (IAM) service. After revoking the permission, the user can no longer
                              access any AWS resources. Allow a few minutes for this task to complete.

 | 
 | 

###### Important

This feature is only available for customers that have updated to the Foundation Services release.

For more information, see Revoke Access Permission task.

 | 

- 
AWS

##### Network

 | 

 | 
Action

 | 
Description

 | 
Supporting Services

 | 
Add to Block List

 | 
Adds supported objects such as Secure Hash Algorithm 1 (SHA-1), uniform resource locator
                              (URL), internet protocol (IP) address, or domain objects to the user-defined Suspicious
                              Objects List, which blocks the objects on subsequent detections.

 | 
 | 

###### Important

Adding an object to the user-defined Suspicious Object List does not terminate any
                                             active processes or connections to the object. To terminate active processes, ensure
                                             that you also trigger the Terminate response.

For more information, see Add to Block List task.

 | 

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
Cloud App Security

- 
Deep Discovery Inspector

- 
Deep Security

 | 
Collect File

 | 
Compresses the selected file detected by the network appliance and TrendAI Vision One™ in a password-protected archive and then sends the archive to Response Management.

 | 

- 
Deep Discovery Inspector

 | 
Collect Investigation Package

 | 
Compresses the selected investigation package, including OpenIOC files describing Indicators of Compromise identified on the affected host or network,
                              in a password-protected archive and then sends the archive to Response Management.

 | 
 | 

###### Important

To execute the Collect Investigation Package action, you must first enable the
                                             Virtual Analyzer in Deep Discovery
                                             Inspector.

 | 

- 
Deep Discovery Inspector

 | 
Collect Network Analysis Package

 | 
Compresses the selected network analysis package, including an investigation package,
                              a packet capture (PCAP) file, and a selected file detected by the network appliance,
                              in a password-protected archive and then sends the archive to Response Management.

 | 
 | 

###### Important

To execute the Collect Network Analysis Package task, you must first enable the
                                             Virtual Analyzer and packet capture function in Deep Discovery
                                             Inspector.

 | 
 | 

###### Note

The Collect PCAP File action only supports Deep Discovery Inspector 6.5 or
                                             above.

For more information, see Collect Network Analysis Package
                                 task.

 | 

- 
Deep Discovery Inspector

 | 
Collect PCAP File

 | 
Compresses the selected Packet Capture file in a password-protected archive and then
                              sends the archive to Response Management.

 | 
 | 

###### Note

The Collect PCAP File action only supports Deep Discovery Inspector 6.5 or
                                             above.

 | 
 | 

###### Important

To execute the Collect PCAP File action, you must first enable the packet capture function in Deep Discovery
                                             Inspector.

 | 

- 
Deep Discovery Inspector

 | 
Remove from Block List

 | 
Removes the File SHA-1, URL, IP address, or Domain object added to the user-defined
                              Suspicious Objects List through the Add to Block List response action.
For more information, see Remove from Block List task.

 | 

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
Cloud App Security

- 
Deep Discovery Inspector

- 
Deep Security

 | 
Submit for Sandbox Analysis

 | 
Submits the selected file objects for automated analysis in a sandbox, a secure virtual
                              environment.
For more information, see Submit for Sandbox Analysis task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

- 
macOS agent

- 
Apex One as a Service

- 
Windows agent

- 
Linux agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
macOS agent

- 
Deep Discovery Inspector

##### Endpoint

 | 

 | 
Action

 | 
Description

 | 
Supporting Services

 | 
Add to Block List

 | 
Adds supported objects such as Secure Hash Algorithm 1 (SHA-1), uniform resource locator
                              (URL), internet protocol (IP) address, or domain objects to the user-defined Suspicious
                              Objects List, which blocks the objects on subsequent detections.

 | 
 | 

###### Important

Adding an object to the user-defined Suspicious Object List does not terminate any
                                             active processes or connections to the object. To terminate active processes, ensure
                                             that you also trigger the Terminate response.

For more information, see Add to Block List task.

 | 

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
Cloud App Security

- 
Deep Security

 | 
Collect Evidence

 | 
Collects forensic evidence from the specified endpoints and uploads the evidence to
                              Forensics.
For more information, see Collect Evidence task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

 | 
Collect File

 | 
Compresses the selected file detected by the network appliance and TrendAI Vision One™ in a password-protected archive and then sends the archive to Response Management.
For more information, see Collect File task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

- 
macOS agent

- 
Linux agent

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
macOS agent

 | 
Dump Process Memory

 | 
Directly accesses an endpoint and executes remote shell commands to identify currently
                              running processes that may be causing suspicious activity during an investigation.

 | 
 | 

###### Important

The Dump Process Memory action is only triggered by the memdump command through remote shell on endpoints running Windows or macOS.
For more information on supporting services and contexts for use, see Start remote access (formerly shell) session task.

 | 
 | 

###### Note

Use an external decompression program to extract the file contents.

 | 

- 
TrendAI Vision One™

- 
Windows agent

- 
macOS agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
macOS agent

 | 
Isolate Endpoint

 | 
Disconnects the target endpoint from the network, except for communication with the
                              managing TrendAI™
 endpoint protection product.
For more information, see Isolate Endpoint task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

- 
Linux agent

- 
macOS agent

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
macOS agent

 | 
Remove from Block List

 | 
Removes the File SHA-1, URL, IP address, or Domain object added to the user-defined
                              Suspicious Objects List through the Add to Block List response action.
For more information, see Remove from Block List task.

 | 

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
Cloud App Security

- 
Deep Security

 | 
Restore Connection

 | 
Restores network connectivity to an endpoint that already applied the Isolate Endpoint
                              action.
For more information, see Restore Connection task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

- 
Linux agent

- 
macOS agent

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
macOS agent

 | 
Run osquery

 | 
Executes SQL queries using osquery (version 5.7.0) to obtain system information of
                              the specified endpoints.
For more information, see Run osquery task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

 | 
Run Remote Custom Script

 | 
Connects to a monitored endpoint and executes a previously uploaded PowerShell or
                              Bash script file.
For more information, see Run Remote Custom Script task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

- 
macOS agent

- 
Linux agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
macOS agent

- 
Linux agent

 | 
Run YARA Rules

 | 
Executes custom YARA rules (version 4.2.3) on the specified endpoints.
For more information, see Run YARA rules task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

 | 
Start Remote Shell Session

 | 
Connects to a monitored endpoint and allows you to execute remote commands or a custom
                              script file for investigation.
For more information, see Start remote access (formerly shell) session task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

- 
macOS agent

- 
Linux agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
macOS agent

- 
Linux agent

 | 
Submit for Sandbox Analysis

 | 
Submits the selected file objects for automated analysis in a sandbox, a secure virtual
                              environment.
For more information, see Submit for Sandbox Analysis task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

- 
macOS agent

- 
Apex One as a Service

- 
Windows agent

- 
Linux agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
macOS agent

 | 
Terminate Process

 | 
Terminates the active process and allows you to terminate the process on all affected
                              endpoints.
For more information, see Terminate Process task.

 | 

- 
TrendAI Vision One™

- 
Windows agent

 | 
Scan for Malware

 | 
Performs a one-time scan on one or more endpoints for file-based threats such as viruses,
                              spyware, and grayware.
For more information, see Scan for Malware task.

 | 

- 
Standard Endpoint Protection

- 
Apex One as a Service

##### Email

 | 

 | 
Action

 | 
Description

 | 
Supporting Services

 | 
Add to Block List

 | 
Adds supported objects such as Secure Hash Algorithm 1 (SHA-1), uniform resource locator
                              (URL), internet protocol (IP) address, or domain objects to the user-defined Suspicious
                              Objects List, which blocks the objects on subsequent detections.

 | 
 | 

###### Important

Adding an object to the user-defined Suspicious Object List does not terminate any
                                             active processes or connections to the object. To terminate active processes, ensure
                                             that you also trigger the Terminate response.

For more information, see Add to Block List task.

 | 

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
Cloud App Security

- 
Deep Security

 | 
Delete Message

 | 
Deletes the selected email message from the selected mailboxes.
For more information, see Delete Message task.

 | 

- 
Cloud Email Collaboration Protection

 | 
Quarantine Message

 | 
Moves the selected email message to the quarantine folder and allows you to quarantine
                              the message from all affected mailboxes.
For more information, see Quarantine Message task.

 | 

- 
Cloud Email Collaboration Protection

 | 
Remove from Block List

 | 
Removes the File SHA-1, URL, IP address, or Domain object added to the user-defined
                              Suspicious Objects List through the Add to Block List response action.
For more information, see Remove from Block List task.

 | 

- 
Apex One as a Service

- 
Windows agent

- 
Cloud One - Endpoint & Workload Security

- 
Windows agent

- 
Linux agent

- 
Cloud App Security

- 
Deep Security

##### Container

 | 

 | 
Action

 | 
Description

 | 
Supporting Services

 | 
Isolate Container

 | 
Disconnects the containing pod from relevant networks and prevents data transfer into
                              and out of the pod. Preventing data transfer to and from the pod limits the spread
                              of suspicious processes within a container so the user can and investigate the causes.
For more information, see Isolate Container task.

 | 

- 
TrendAI Vision One™ Container Security

 | 
Terminate Container

 | 
Stops suspicious behavior of containers within a pod by terminating the containing
                              pod.

 | 
 | 

###### Important

Terminating a pod destroys evidence of the suspicious behavior and does not prevent
                                                the behavior from happening again.

For more information, see Terminate Container task.

 | 

- 
TrendAI Vision One™ Container Security

 | 
Resume Container

 | 
Resumes containers within a previously isolated pod.
For more information, see Resume Container task.

 | 

- 
TrendAI Vision One™ Container Security

---

## XDR Data Explorer actions | TrendAI™

**URL:** https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-search-actions

The TrendAI Vision One™ context menu provides XDR Data Explorer options that you can access during an investigation
            after encountering objects or data that you want to further explore.

The following table describes the XDR Data Explorer actions available for certain
               events or objects found in your environment.

 | 

 | 
Action

 | 
Description

 | 
Run new query: match field and value

 | 
Opens another instance of TrendAI Vision One™ and creates a new XDR Data Explorer query with the selected value added as criteria

 | 
Run new query: endpoint +/- 1 min

 | 
Opens another instance of TrendAI Vision One™ and creates a new XDR Data Explorer query with the selected value added as criteria
                              for endpoint activities. This option limits the time range for the new query to one
                              minute before and after the logged time.

 | 
Run new query: endpoint +/- 5 min

 | 
Opens another instance of TrendAI Vision One™ and creates a new XDR Data Explorer query with the selected value added as criteria
                              for endpoint activities. This option limits the time range for the new query to five
                              minutes before and after the logged time.

 | 
Run new query: endpoint +/- 10 min

 | 
Opens another instance of TrendAI Vision One™ and creates a new XDR Data Explorer query with the selected value added as criteria
                              for endpoint activities. This option limits the time range for the new query to ten
                              minutes before and after the logged time.

 | 
Add filter: field IS value

 | 
Adds the selected value as criteria to the existing query

 | 
Add filter: field IS NOT value

 | 
Adds the selected value as an exception to the existing query

 | 
Add Filter: field IS EMPTY

 | 
Adds the selected field with no value as criteria to the existing query

 | 
Add Filter: field EXISTS

 | 
Adds the selected field with any value as criteria to the existing query

 | 
Google

 | 
Opens a new browser tab and searches Google for the selected value

 | 
VirusTotal

 | 
Opens a new browser tab and searches VirusTotal for the selected value

 | 
View Event in Observed Attack Techniques

 | 
Opens a new browser tab and shows events in Observed Attack Techniques for the selected
                              value

---
