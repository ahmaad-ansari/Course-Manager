# ADD Iteration 2
## **Step 1: Reviewing Inputs**

Evlaution of inputs was already performed in the previous iteration. However, during second review, the team has decided to perform a reassessment of the priority of architectural drivers. Affected drivers include QA-7, CON-4, CON-6, CRN-5, and CRN-6.

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
   <td>Low
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
   <td>High
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
   <td>High
   </td>
   <td>High
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
   <td>Med
   </td>
   <td>Low
   </td>
  </tr>
  <tr>
   <td>20
   </td>
   <td>CRN-6
   </td>
   <td>Med
   </td>
   <td>Low
   </td>
  </tr>
</table>



## **Step 2: Drivers Selected for Consideration**

The goal of this iteration is to identify structures to support the primary functionality of the system. The following drivers have been selected for consideration to support the development of this greenfield system:



* **UC-1**: Students will have access to a list of available courses for them to register to. System maintainers will ensure that the students are eligible to register for their courses considering that course times and course prerequisites are met. Administrators will be allowed to manage courses for students.
* **UC-5**: Once connected to the system, administrators can manage courses. Actions that fall under course management include course creation, deletion, and updating. The system maintainer is also able to manage courses by setting certain course prerequisites. Administrators are able to appoint lecturers to courses.
* **CON-1**: Students would not have access to content in the enrolled course until the Professor allows access to the students.
* **CON-4**: Students can only enroll in course if they completed necessary prerequisites.
* **CON-6**: Students cannot enroll in a course that is not within their department.


## **Step 3: Elements for Refinement**

The modules found in the layers from the two architectures defined in the previous iteration of the CMS are the elements that will be selected for refinement in this iteration. This involves defining the method of collaboration of components within these modules.


## **Step 4: Design Concepts for Drivers**

Table 3: Architecture Pattern Considerations


<table>
  <tr>
   <td><strong>Design Decision</strong>
   </td>
   <td colspan="2" ><strong>Rationale</strong>
   </td>
  </tr>
  <tr>
   <td>The Domain Object Pattern Architecture will be used and decomposed within layers.
   </td>
   <td colspan="2" >A key design principle involves separation of concerns, wherein decoupling of system components allows for them to be developed independent from one another. This pattern divides the application’s functionalities into distinct blocks, known as domain objects.
   </td>
  </tr>
  <tr>
   <td>Identify the Domain Objects that encapsulate the functional requirements.
   </td>
   <td colspan="2" >Distinct functionalities should be encapsulated within a single block.
   </td>
  </tr>
  <tr>
   <td rowspan="4" >In the event of hard failure, the behaviour of the query client will stop sending queries.
   </td>
   <td colspan="2" >The following shows the patterns of query client behaviour for when a primary server fails.
   </td>
  </tr>
  <tr>
   <td>Stop Query Transmission
   </td>
   <td>Saves time of loading information from the communication line.
   </td>
  </tr>
  <tr>
   <td>Continue Sending Queries
   </td>
   <td>Data that is sent cannot be utilized.
   </td>
  </tr>
  <tr>
   <td>Store Queries
   </td>
   <td>Messages are saved and loaded upon reboot.
   </td>
  </tr>
  <tr>
   <td rowspan="4" >In the event of hard failure, the behaviour of the update client will stop sending updates.
   </td>
   <td colspan="2" >The following shows the patterns of update client behaviour for when a primary server fails.
   </td>
  </tr>
  <tr>
   <td>Stop Updating
   </td>
   <td>Saves time of loading information from the communication line.
   </td>
  </tr>
  <tr>
   <td>Continue Updating
   </td>
   <td>Data sent for updating will not be useful.
   </td>
  </tr>
  <tr>
   <td>Store Updates
   </td>
   <td>Messages are saved and loaded upon reboot.
   </td>
  </tr>
</table>



## **Step 5: Element Instantiation, Responsibility Allocation, and Interface Definition**

Table 4: Design Considerations for Element Instantiation and Interface Definition

<table>
  <tr>
   <td><strong>Design Decision</strong>
   </td>
   <td colspan="2" ><strong>Rationale</strong>
   </td>
  </tr>
  <tr>
   <td>Create an initial Domain model
   </td>
   <td colspan="2" >To facilitate the progression of this design step, a basic domain model will be produced to identify and represent the entities that correspond to the principal use cases.
   </td>
  </tr>
  <tr>
   <td>Identify Domain objects to map to primary Use Cases
   </td>
   <td colspan="2" >Normally domain objects would be created for all use cases so that select members of the team can work on modules that do no correspond to primary use cases. However for the purpose of this project only 2 domain objects are identified.
   </td>
  </tr>
  <tr>
   <td>Decompose objects across layers
   </td>
   <td colspan="2" >Domain objects represent entire functional sets, however this iteration requires the design of the interaction between layers and how modules communicate to one another. Hence, these functional sets are broken down into modules placed across the layers defined in the pervious iteration.
   </td>
  </tr>
  <tr>
   <td rowspan="9" >Domain entities will be stored as tuples within a relational database
   </td>
   <td colspan="2" >To query server for relevant data, it is required to define some objects with attributes and to populate them with data. For CMS, the following object have been established:
   </td>
  </tr>
  <tr>
   <td><strong>Object</strong>
   </td>
   <td><strong>Attribute(s)</strong>
   </td>
  </tr>
  <tr>
   <td>Account
   </td>
   <td>account_id, first_name, last_name, ssn, username, password, birthdate, address, phone, permission
   </td>
  </tr>
  <tr>
   <td>Student
   </td>
   <td>stud_id, dept_id
   </td>
  </tr>
  <tr>
   <td>Lecturer
   </td>
   <td>lec_id, dept_id
   </td>
  </tr>
  <tr>
   <td>Department
   </td>
   <td>dept_id, dept_name
   </td>
  </tr>
  <tr>
   <td>Course
   </td>
   <td>course_id, course_name, dept_id, lec_id, credit, term, stud_limit
   </td>
  </tr>
  <tr>
   <td>Pre-Req
   </td>
   <td>prereq_id, course_id
   </td>
  </tr>
  <tr>
   <td>Enrollment
   </td>
   <td>stud_id, course_id
   </td>
  </tr>
</table>



## **Step 6: Sketch Views and Record Design Decisions**

<kbd>![image](https://user-images.githubusercontent.com/95059924/205769837-dcd91727-214a-43fc-80a3-337a989e353c.png)</kbd>

Fig. 1. Domain Model

</br>

<kbd>![image](https://user-images.githubusercontent.com/95059924/206011042-8290759c-3804-4d26-839f-1025f08851e1.png)</kbd>

Fig. 2. Module Dependency View

</br>

Table 5: Element Listing and Responsibility Specification


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
   <td>Displays HTML elements from Page Components.
   </td>
  </tr>
  <tr>
   <td>Page Components
   </td>
   <td>Manages information that is being provided to the Presentation Layer.
   </td>
  </tr>
  <tr>
   <td>API
   </td>
   <td>Deals with the sending and retrieval of data to and from the Server Side.
   </td>
  </tr>
  <tr>
   <td>Services Interface
   </td>
   <td>Retrieves requests from the client sent by the API.
   </td>
  </tr>
  <tr>
   <td>Node Modules
   </td>
   <td>Reads HTTP requests and stores form input as a JS object.
   </td>
  </tr>
  <tr>
   <td>RouteController
   </td>
   <td>Performs CRUD instructions on database related to the account, course, and student.
   </td>
  </tr>
</table>

</br>

<kbd>![image](https://user-images.githubusercontent.com/95059924/206016545-bc833e0d-55ca-45a2-9ec9-0a3ac1cf15b8.png)</kbd>

Fig. 3. Sequence Diagram for Use Case 1

</br>

<kbd>![image](https://user-images.githubusercontent.com/95059924/206016113-1d9a7805-c6c0-4e61-b257-e7349e931259.png)</kbd>

Fig. 4. Sequence Diagram for Use Case 5

</br>



## **Step 7: Analysis of Current Deisgn and Review of Iteration Goal**

Table 6: Performance Analysis


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
<strong>During This Iteration</strong>
   </td>
   <td><strong>Iteration(s) Where Driver was Addressed</strong>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>UC-1
   </td>
   <td>
     The Domain Object Pattern Architecture was used to capture the use case and decompose it within layers.
   </td>
   <td>1, 2
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>UC-5
   </td>
   <td>
     Domain object identified for this use case, object decomposed into various layers.
   </td>
   <td>1, 2
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>QA-1
   </td>
   <td>
   </td>
   <td>N/A
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>QA-3
   </td>
   <td>
   </td>
   <td>N/A
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>QA-5
   </td>
   <td>
   </td>
   <td>N/A
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>QA-6
   </td>
   <td>
   </td>
   <td>N/A
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>CON-1
   </td>
   <td>
     When registering, students will only see the basic information about the course, such as name, course code and the professor teaching the course.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>CON-2
   </td>
   <td>N/A
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>CON-4
   </td>
   <td>
     During the process of retrieving available courses, the server will search and filter the course before presenting the eligible courses back to the student.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>CON-6
   </td>
   <td>
     Department id stored in student entity is checked before displaying relevant courses for them to register to.
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>CRN-1
   </td>
   <td>N/A
   </td>
   <td>1
   </td>
  </tr>
</table>
