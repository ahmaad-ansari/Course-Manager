import React, { useState, useEffect } from 'react';

import { getEnrolledCourses } from '../api/courses';
import { dropCourse } from '../api/registration';
import { useStateContext } from '../contexts/ContextProvider';

const Courses = () => {
  const { currentColor, loginInfo } = useStateContext(); 

  const [courses, setCourses] = useState();
  useEffect(() => {
    async function fetchData() {
        let res = await getEnrolledCourses({ account_id: loginInfo.account_id });
        setCourses(res.data);
    }
    fetchData();
  }, [loginInfo.account_id]);

  const [selectCourse, setSelectCourse] = useState();
  const [dropCurrCourse, setDropCurrCourse] = useState();

  function handleSubmit(){
    let res = dropCourse({ account_id: loginInfo.account_id, course_id: selectCourse });
    setDropCurrCourse(res.data);
  }
  
  return (
    <div className="mt-12">
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-1080">
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">Course ID</th>
                  <th scope="col" class="py-3 px-6">Course Name</th>
                  <th scope="col" class="py-3 px-6">Department ID</th>
                  <th scope="col" class="py-3 px-6">Credits</th>
                  <th scope="col" class="py-3 px-6">Term</th>
                  <th scope="col" class="py-3 px-6">Student Limit</th>
                  <th scope="col" class="py-3 px-6">Instructor</th>
                </tr>
              </thead>
              <tbody>

              {courses?.map((course) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {course.course_id}
                  </th>
                  <td class="py-4 px-6">{course.course_name}</td>
                  <td class="py-4 px-6">{course.dept_id}</td>
                  <td class="py-4 px-6">{course.credit}</td>
                  <td class="py-4 px-6">{course.term}</td>
                  <td class="py-4 px-6">{course.stud_limit}</td>
                  <td class="py-4 px-6">{course.first_name} {course.last_name}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <select id="courses" value={selectCourse} onChange={(e) => setSelectCourse(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected hidden>Choose a course from the list...</option>
                  {courses?.map((course) => (
                    <option value={course.course_id}>{course.course_name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" style={{ backgroundColor:currentColor }} className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Drop Course</button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Courses

