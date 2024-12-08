import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import AssignmentPreview from "./Assignments/Preview";
import QuizzesPreview from "./Quizzes/QuizzesPreview";

import Quizzes from "./Quizzes/QuizDetails";

import QuizEditor from "./Quizzes/QuizEditor";
import QuizDetails from "./Quizzes/QuizDetails/QuizDetails";
import SubmitScreen from "./Quizzes/QuizzesPreview/SubmitScreen";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const courseName = course?.name || "Unnamed Course";
  const { pathname } = useLocation();

  // get current page from pathname
  const currPage = pathname.split("/").pop();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course"} &gt; {currPage}
      </h2> <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/Editor/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid" element={<AssignmentPreview />} />
            <Route path="Assignments/:aid/Edit" element={<AssignmentEditor />} />
            <Route path="Assignments/AddAssignment" element={<AssignmentEditor />} />

            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/New" element={<QuizEditor />} />
            <Route path="Quizzes/:qid" element={<QuizDetails />} />
            <Route path="Quizzes/:qid/Edit" element={<QuizEditor />} />
            <Route path="Quizzes/:qid/Preview" element={<QuizzesPreview />} />
            <Route path="Quizzes/:qid/Submit" element={<SubmitScreen />} />

            <Route path="People" element={<PeopleTable />} />


          </Routes>
        </div></div>
    </div>
  )
}