import React, { useState, useEffect, useDebugValue } from 'react';

import { getCourses, registerCourse } from '../api/registration';
import { useStateContext } from '../contexts/ContextProvider';

const View = () => {
  const { currentColor, loginInfo, setLoginInfo } = useStateContext(); 

  const [courses, setCourses] = useState();
  useEffect(() => {
    async function fetchData() {
        let res = await getCourses({ });
        setCourses(res.data);
    }
    fetchData();
  }, []);

  
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
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View

