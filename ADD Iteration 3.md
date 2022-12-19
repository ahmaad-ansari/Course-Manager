# **ADD Iteration 3**

## **Step 1: Reviewing Inputs**

Input review was performed in the previous two iterations, hence the design team moves directly towards considering drivers for this iteration. The focus of this iteration is to expand on design decisions made from previous iterations by considering quality attribute drivers.


## **Step 2: Drivers Selected for Consideration**

The key quality drivers chosen for this iteration include **QA-1** and **QA-3**.

QA-1: Once logged into their account, users should be able to easily navigate and access the content that they have access to.

QA-3: System shall return results quickly to allow for efficient and effective communication.


## Step 3: Elements for Refinement

The elements selected for refinement relate to the **Clilent Side (CS)** layers from the module dependency diagram created in the previous iteration. Specifically, this iteration will describe the methodology for rendering elements within the browser and how data transfers will be handled.


## **Step 4: Design Concepts for Drivers**

Table 1: Design Considerations


<table>
  <tr>
   <td><strong>Design Decision</strong>
   </td>
   <td><strong>Rationale</strong>
   </td>
  </tr>
  <tr>
   <td>Create UI components that perform a specific task
   </td>
   <td>The modular application of atomicity to UI design allows for the validation of element specifications to occur in early stages. Single responsibility also prevents user from being overwhelmed in providing complex inputs.
   </td>
  </tr>
  <tr>
   <td>Minimize server workload by only sending requests when necessary.
   </td>
   <td>Running times can be improved if the browser can bypass making a call to the server when retrieving information. This is possible if a copy of the data (accessible to the user) is stored in the local cache of the workstation.
   </td>
  </tr>
</table>



## **Step 5: Element Instantiation & Interface Definition**

Table 2: Design Considerations for Element Instantiation and Interface Definition


<table>
  <tr>
   <td><strong>Design Decision</strong>
   </td>
   <td><strong>Rationale</strong>
   </td>
  </tr>
  <tr>
   <td>Render UI elements using context manager from the ReactJS framework
   </td>
   <td>The context manager will allow for UI elements to be subscribed to changes based on inputs from the user. Elements are re-rendered to display the changes (QA-1).
   </td>
  </tr>
  <tr>
   <td>Introduce a Local Data Cache component
   </td>
   <td>During the user’s session, content from the application is stored in the local cache of the workstation. When browser requests content from server it will first check if information is in the cache. If it exists, the browser will load the data directly from the cache, instead of making a new request to the server (QA-3).
   </td>
  </tr>
</table>



## **Step 6: Sketch Views and Record Design Decisions**

<kbd>![image](https://user-images.githubusercontent.com/95059924/205906058-035947e0-4d05-4c31-97e3-5f58ac8ce0d3.png)</kbd>

Fig. 1. Revised Deployment Diagram (Firewall was not addressed in this iteration; might address it in Iteration 4 with Quality Attribute Driver QA-5)

<kbd>![image](https://user-images.githubusercontent.com/95059924/205905759-dbfd70d3-d359-4b4e-906d-6ad4c43172ec.png)</kbd>

Fig. 2. Revised Module Dependency Diagram (Client-Side)


## **Step 7: Perform Analysis of Current Design**

Table 3: Performance Analysis


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
   <td>N/A
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
   <td>N/A
   </td>
   <td>1, 2
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>QA-1
   </td>
   <td>Create single-responsibility UI components and a context manager to alter their behaviours.
   </td>
   <td>1,3
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>QA-3
   </td>
   <td>Store data to local cache to reduce latency and minimize server workload.
   </td>
   <td>1,3
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
   <td>N/A
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
   <td>N/A
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
   <td>N/A
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
