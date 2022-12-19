import React, { useState, useEffect } from 'react';

import { getDept, getLec, addCourse, deleteCourse, getCourseId } from '../api/courses';
import { useStateContext } from '../contexts/ContextProvider';

const Management = () => {
  const { currentColor, loginInfo, setLoginInfo } = useStateContext(); 

  const [selectCourseID, setSelectCourseID] = useState();
  const [selectCourseName, setSelectCourseName] = useState();
  const [selectDeptID, setSelectDeptID] = useState();
  const [selectLecID, setSelectLecID] = useState();
  const [selectCredit, setSelectCredit] = useState();
  const [selectTerm, setSelectTerm] = useState();
  const [selectStudLimit, setSelectStudLimit] = useState();

  const [selectCourseIDDrop, setSelectCourseIDDrop] = useState();
  const [selectDeptIDDrop, setSelectDeptIDDrop] = useState();

  const [depts, setDepts] = useState();
  useEffect(() => {
    async function fetchData() {
        let res = await getDept({ });
        setDepts(res.data);
    }
    fetchData();
  }, []);

  const [deptsFilter, setDeptsFilter] = useState();
  useEffect(() => {
    async function fetchData() {
        let res = await getDept({ course_id: selectCourseIDDrop});
        setDeptsFilter(res.data);
    }
    fetchData();
  }, [selectCourseIDDrop]);

  const [lecs, setLecs] = useState();
  useEffect(() => {
    async function fetchData() {
        let res = await getLec({ });
        setLecs(res.data);
    }
    fetchData();
  }, []);

  const [courseID, setCourseID] = useState();
  useEffect(() => {
    async function fetchData() {
        let res = await getCourseId({ });
        setCourseID(res.data);
    }
    fetchData();
  }, []);

  const [addCurrCourse, setAddCurrCourse] = useState();

  function handleSubmitAdd(){
    let res = addCourse({ course_id: selectCourseID, course_name: selectCourseID, dept_id: selectDeptID, lec_id: selectLecID, credit: selectCredit, term: selectTerm, stud_limit: selectStudLimit });
    setAddCurrCourse(res.data);
  }

  function handleSubmitDrop(){
    let res = deleteCourse({ course_id: selectCourseIDDrop, dept_id: selectDeptIDDrop });
    setAddCurrCourse(res.data);
  }

  
  return (
    <div className="mt-12">
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-1080">
          <form onSubmit={handleSubmitAdd}>
            <div className="mb-6">
                <label htmlFor="course_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course ID</label>
                <input type="text" id="course_id" autoComplete="off" value={selectCourseID} onChange={(e) => setSelectCourseID(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                  <label htmlFor="course_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
                  <input type="text" id="course_name" autoComplete="off" value={selectCourseName} onChange={(e) => setSelectCourseName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>
              <div className="w-full">
                <label htmlFor="dept" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                <select className="w-full" id="dept" value={selectDeptID} onChange={(e) => setSelectDeptID(e.target.value)} required>
                  <option selected hidden></option>
                  {depts?.map((dept) => (
                    <option value={dept.dept_id}>{dept.dept_id}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="lecturer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lecturer</label>
                <select className="w-full" id="lec" value={selectLecID} onChange={(e) => setSelectLecID(e.target.value)} required>
                  <option selected hidden></option>
                  {lecs?.map((lec) => (
                    <option value={lec.lec_id}>{lec.lec_id}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <label htmlFor="credit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Credit</label>
                <input type="text" id="credit" autoComplete="off" value={selectCredit} onChange={(e) => setSelectCredit(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>
              <div>
                <label htmlFor="term" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Term</label>
                <select className="w-full" id="term" value={selectTerm} onChange={(e) => setSelectTerm(e.target.value)} required>
                  <option selected hidden></option>
                  <option value="FALL">FALL</option>
                  <option value="WINTER">WINTER</option>
                  <option value="SPRING">SPRING</option>
                </select>
              </div>
              <div>
                <label htmlFor="stud_limit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Limit</label>
                <input type="text" id="stud_limit" autoComplete="off" value={selectStudLimit} onChange={(e) => setSelectStudLimit(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>
            </div>
            <button style={{ backgroundColor: currentColor }} type="submit" className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Course</button>
          </form>  
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center w-full">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-1080">
          <form onSubmit={handleSubmitDrop}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="w-full">
                <label htmlFor="course_id_drop" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course ID</label>
                <select className="w-full" id="course_id_drop" value={selectCourseIDDrop} onChange={(e) => setSelectCourseIDDrop(e.target.value)} required>
                  <option selected hidden></option>
                  {courseID?.map((course) => (
                    <option value={course.course_id}>{course.course_id}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="dept_drop" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                <select className="w-full" id="dept_drop" value={selectDeptIDDrop} onChange={(e) => setSelectDeptIDDrop(e.target.value)} required>
                  <option selected hidden></option>
                  {deptsFilter?.map((dept) => (
                    <option value={dept.dept_id}>{dept.dept_id}</option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" style={{ backgroundColor:currentColor }} className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Delete Course</button>
          </form>  
        </div>
      </div>
    </div>
  )
}

export default Management

