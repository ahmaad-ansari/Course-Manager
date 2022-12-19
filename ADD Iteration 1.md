# ADD Iteration 1
## Step 1: Reviewing Inputs

Table 1: Input Review


<table>
  <tr>
   <td><strong>Category</strong>
   </td>
   <td><strong>Details</strong>
   </td>
  </tr>
  <tr>
   <td>Design Purpose
   </td>
   <td>This is a greenfield system from a mature domain. The purpose is to create a design that supports the construction of the CMS.
   </td>
  </tr>
  <tr>
   <td>Primary Functional Requirements
   </td>
   <td><strong>UC-1</strong> (Course Registration): Directly supports system purpose
<p>
<strong>UC-5</strong> (Manage Courses): Directly supports system purpose
   </td>
  </tr>
  <tr>
   <td>Quality Attributes
   </td>
   <td>* Reviewed in Priority Assessment
   </td>
  </tr>
  <tr>
   <td>Constraints
   </td>
   <td>* Reviewed in Priority Assessment
   </td>
  </tr>
  <tr>
   <td>Concerns
   </td>
   <td>* Reviewed in Priority Assessment
   </td>
  </tr>
</table>


Table 2: Priority Assessment of Drivers to Support Primary Functional Requirements


<table>
  <tr>
   <td><strong>#</strong>
   </td>
   <td><strong>Architectural Drivers</strong>
   </td>
   <td><strong>Importance</strong>
   </td>
   <td><strong>Difficulty</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>QA-1: Usability
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>QA-2: Privacy
   </td>
   <td>High
   </td>
   <td>Low
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>QA-3: Performance
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>QA-4: Availability
   </td>
   <td>High
   </td>
   <td>Low
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>QA-5: Security
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>6
   </td>
   <td>QA-6: Maintainability
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>QA-7: Interoperability
   </td>
   <td>High
   </td>
   <td>Med
   </td>
  </tr>
  <tr>
   <td>8
   </td>
   <td>CON-1
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>9
   </td>
   <td>CON-2
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>10
   </td>
   <td>CON-3
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>11
   </td>
   <td>CON-4
   </td>
   <td>High
   </td>
   <td>Med
   </td>
  </tr>
  <tr>
   <td>12
   </td>
   <td>CON-5
   </td>
   <td>Med
   </td>
   <td>Low
   </td>
  </tr>
  <tr>
   <td>13
   </td>
   <td>CON-6
   </td>
   <td>Low
   </td>
   <td>Low
   </td>
  </tr>
  <tr>
   <td>14
   </td>
   <td>CON-7
   </td>
   <td>Med
   </td>
   <td>Low
   </td>
  </tr>
  <tr>
   <td>15
   </td>
   <td>CRN-1
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>16
   </td>
   <td>CRN-2
   </td>
   <td>High
   </td>
   <td>Med
   </td>
  </tr>
  <tr>
   <td>17
   </td>
   <td>CRN-3
   </td>
   <td>Med
   </td>
   <td>Med
   </td>
  </tr>
  <tr>
   <td>18
   </td>
   <td>CRN-4
   </td>
   <td>Med
   </td>
   <td>Med
   </td>
  </tr>
  <tr>
   <td>19
   </td>
   <td>CRN-5
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
  <tr>
   <td>20
   </td>
   <td>CRN-6
   </td>
   <td>High
   </td>
   <td>High
   </td>
  </tr>
</table>


After review of a collection of drivers, it has been verified that there are sufficient requirements to proceed to the next stage of the iteration.


## Step 2: Drivers Selected for Consideration

The goal of this iteration is to develop an overview of the system architecture. The following drivers have been selected for consideration to support the development of this greenfield system:



* **QA-1**: Usability
* **QA-3**: Performance
* **QA-5**: Security
* **QA-6**: Maintainability
* **CON-1**: Students would not have access to content in the enrolled course until the Professor allows access to the students.
* **CON-2**: System must be accessed through a web browser in an operating system.
* **CON-3**: Server should only serve as a host for the database.
* **CRN-1**: Organizing an initial system structure.
* **CRN-5**: System messages and user interfaces should be localized to accommodate users from various time zones and geographic locations.
* **CRN-6**: Lecturers should have a way of being notified about which item is currently visible to students and which are not visible



![CMS1](https://user-images.githubusercontent.com/88805493/201577762-b5ed87b9-b4d3-4f92-8027-7c5a01dbb6db.png)



Figure 1: Context Diagram for CMS


## Step 3: Elements for Decomposition

The element for decomposition is the entire Course Management System.

	


## Step 4: Design Concepts for Drivers

Table 3: Logical/Deployment Design Considerations


<table>
  <tr>
   <td><strong>Design Decision</strong>
   </td>
   <td><strong>Rationale</strong>
   </td>
  </tr>
  <tr>
   <td>Structure the database system using the Rich Internet Client App reference architecture.
   </td>
   <td>This architecture allows the system to be deployed inside a browser while maintaining a rich user interface. Some client-side processing is performed using web scripts to reduce load on the server's processing unit (<strong>QA-1</strong>, <strong>CON-2, CON-3</strong>).
<p>
<span style="text-decoration:underline;">Discarded Alternative(s)</span>
<p>
<strong>Web Application</strong>: This structure fits some of our needs such as the browser being on the client side and allowing us to break the server side into different layers with a cross section for security measures. However, it does not allow the user to be more engaged with the application and the security is not as restricted as Rich Internet Client App Reference.
<p>
<strong>Rich Client</strong>: This structure seems to be a likely candidate however, when broken down, it does not allow network connectivity and is more focused on having a stand alone system. 
   </td>
  </tr>
  <tr>
   <td>Use Load Cluster Balancer pattern to reduce the chance of having server failure
   </td>
   <td>This deployment pattern could improve performance as it introduces multiple servers in the system compared to having 1. There would be a server to handle static requests from users and delegate that request to another server depending on the current workload to reduce the risk of server failure <strong>(QA-3)</strong>. 
<p>
<span style="text-decoration:underline;">Discarded Alternative(s)</span>
<p>
<strong>3 Tier Deployment </strong> : Using 3 Tier deployment is very common for web applications so this would suit our situation perfectly. It separates each tier so it is not as coupled and allows flexibility in what each tier behaves. However, when requests from the client start to build up, the server may become unresponsive which can cause the server to overload. 
   </td>
  </tr>
  <tr>
   <td>Use Data Mapper pattern to insulate application objects from details of relational database.
   </td>
   <td>The data mapper pattern acts as a mediator between object-oriented model and a relational database. This will keep objects simpler and reduce external dependencies. Improved functionality for system maintainers and admins to maintain and update the database (<strong>QA-5</strong>, <strong>QA-6</strong>).
   </td>
  </tr>
  <tr>
   <td>Deploy application using React JS
   </td>
   <td>React is a JavaScript-based library for UI development used to facilitate the creation of quick and scalable applications. Development team has experience in using React and ensures organization of initial system structure (<strong>CRN-1</strong>).
   </td>
  </tr>
</table>



## 


## Step 5: Element Instantiation & Interface Definition

Table 4: Design Considerations for Element Instantiation and Interface Definition


<table>
  <tr>
   <td><strong>Design Decision</strong>
   </td>
   <td><strong>Rationale</strong>
   </td>
  </tr>
  <tr>
   <td>Remove the Isolated Storage 
   </td>
   <td>Since the user would be logging into the application, there would be no need for the client side to have a storage unit.
   </td>
  </tr>
  <tr>
   <td>Rich UI Engine
   </td>
   <td>Responsible for handling all of the rendering of the elements within the plug in extensions for the User Interface (<strong>QA-1</strong>).
   </td>
  </tr>
  <tr>
   <td>Including a presentation layer in the client side
   </td>
   <td>This will provide a layer that can handle interactions within the client side between the UI components and the UI process logic components.
   </td>
  </tr>
  <tr>
   <td>Message Type
   </td>
   <td>Account for a wide range of messages exchanged between the server and client part of the application (<strong>CRN-5</strong>, <strong>CRN-6</strong>).
   </td>
  </tr>
</table>



## Step 6: Sketch Views and Record Design Decisions



![CMS2](https://user-images.githubusercontent.com/88805493/201577809-bacb93a1-3da2-418b-a760-130572776e08.png)



Figure 2: Logical View

Table 5: Element Listing and Responsibility Allocation


<table>
  <tr>
   <td><strong>Element</strong>
   </td>
   <td><strong>Responsibility</strong>
   </td>
  </tr>
  <tr>
   <td>Browser
   </td>
   <td>Web browser running on the client machine.
   </td>
  </tr>
  <tr>
   <td>Presentation
   </td>
   <td>Manages all user interactions and represents UI components and UI process logic components.
   </td>
  </tr>
  <tr>
   <td>Rich UI Engine
   </td>
   <td>Renders UI elements inside the plug-in execution container.
   </td>
  </tr>
  <tr>
   <td>Business Processing
   </td>
   <td>Manages business logic on the client side.
   </td>
  </tr>
  <tr>
   <td>Service Interfaces
   </td>
   <td>Exposes services that are consumed by the components that run on the browser.
   </td>
  </tr>
  <tr>
   <td>Message Types
   </td>
   <td>Manages the types of messages that are exchanged between the client part and the server part of the application.
   </td>
  </tr>
  <tr>
   <td>Application Facade
   </td>
   <td>Provides a simple interface to the business logic components.
   </td>
  </tr>
  <tr>
   <td>Business Workflow
   </td>
   <td>Manages business processes, involving the execution of multiple use cases.
   </td>
  </tr>
  <tr>
   <td>Business Logic
   </td>
   <td>Retrieves and processes application data and applies business rules on the data.
   </td>
  </tr>
  <tr>
   <td>Business Entities
   </td>
   <td>Represent entities from the business domain with their associated business logic
   </td>
  </tr>
  <tr>
   <td>Security
   </td>
   <td>Handles security aspects such as authorization and authentication.
   </td>
  </tr>
  <tr>
   <td>Operational Management
   </td>
   <td>Manages exceptions, logging, and instrumentation and validation.
   </td>
  </tr>
  <tr>
   <td>Communication
   </td>
   <td>Handles communication mechanisms across layers and physical tiers.
   </td>
  </tr>
  <tr>
   <td>Data Access
   </td>
   <td>Provides common operations used to retrieve and store information.
   </td>
  </tr>
  <tr>
   <td>Helpers and Utilities
   </td>
   <td>Contains functionalities similar to other modules in the data layer.
   </td>
  </tr>
  <tr>
   <td>Service Agents
   </td>
   <td>Abstract communication mechanisms used to transfer data to external services.
   </td>
  </tr>
</table>




![CMS3](https://user-images.githubusercontent.com/88805493/201577823-ff7604df-108e-4e17-bd6a-7e6e78b88d98.png)


Figure 3: Deployment View

Table 6: Element Listing and Responsibility Allocation


<table>
  <tr>
   <td><strong>Element</strong>
   </td>
   <td><strong>Responsibility</strong>
   </td>
  </tr>
  <tr>
   <td>Firewall
   </td>
   <td>A system for securing networks that keeps track of and regulates both incoming and outgoing network traffic in accordance with pre-established security standards. Creates a barrier between a trusted network and an untrusted network, like the Internet to prevent unauthorized access to the application servers.
   </td>
  </tr>
  <tr>
   <td>Load Balancer
   </td>
   <td>Distributes connections from clients between a number of servers.
   </td>
  </tr>
  <tr>
   <td>Application Server
   </td>
   <td>Hosts software or applications that transmit a business application via a communication protocol.
   </td>
  </tr>
</table>



## **Step 7: Perform Analysis of Current Design**

Table 7: Performance Analysis


<table>
  <tr>
   <td><strong>Not Addressed</strong>
   </td>
   <td><strong>Partially Addressed</strong>
   </td>
   <td><strong>Completely Addressed</strong>
   </td>
   <td><strong>Design Decisions Made</strong>
<p>
<strong>During Iteration</strong>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>QA-1
   </td>
   <td>
   </td>
   <td>Having the Rich UI to account for the different interactions users may have with the system
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>QA-3
   </td>
   <td>
   </td>
   <td>Having multiple servers to offload request to ensure that the system respond efficiently 
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>QA-5
   </td>
   <td>
   </td>
   <td>Implementing security measures within the system and database to protect information.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>QA-6
   </td>
   <td>
   </td>
   <td>Data mapper pattern improves maintenance capabilities for users by reducing external dependency between objects and databases.
   </td>
  </tr>
  <tr>
   <td>CON-1
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>Concern relates to business logic, however no relevant decisions were made in this iteration.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>CON-2
   </td>
   <td>
   </td>
   <td>The Rich Internet Client App reference restrict the user to access to through a browser
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>CON-3
   </td>
   <td>
   </td>
   <td>By selecting the architecture, the model depicts the database to be a host of the system/application
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>CRN-1
   </td>
   <td>Development team has agreed to use React JS and has ensured that organization of initial system structure can be achieved through the framework.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>CRN-5
   </td>
   <td>
   </td>
   <td>Having an element that focuses on the communication between both sides of the system. 
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>CRN-6
   </td>
   <td>
   </td>
   <td>Notification message type will be sent by server to client.
   </td>
  </tr>
</table>
