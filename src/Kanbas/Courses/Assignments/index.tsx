import { Link, useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCaretDown, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GrDocument } from "react-icons/gr";
import AssignmentControls from "./AssignmentControls";
import GreenCheckmark from "../Modules/GreenCheckmark";
import * as db from "../../Database";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";
import { fetchAssignment } from "../../../Labs/Lab5/client";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  
  // include reducer functions
  const assignments  = useSelector((state: any) => 
    state.assignmentsReducer.assignments.filter(
      (assignment: { course: string | undefined; }) => assignment.course === cid
    )
  );

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  // user role
	const { currentUser } = useSelector((state: any) => state.accountReducer.currentUser);
	// const user = db.users.find((user: any) => user.username === currentUser?.username);
	// const userRole = user ? user.role : null;
  const userRole = currentUser?.role;

  useEffect(() => {
    const fetchAssignments = async () => {
      if (cid) {
        const fetchedAssignments = await assignmentsClient.getAssignmentsByCourseId(cid);
        fetchedAssignments.forEach((assignment: any) => {
          dispatch(addAssignment(assignment));
        });
      }
    };
    fetchAssignments();
  }, [cid, dispatch]);

  const handleAddAssignmentClick = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/Editor/NewAssignment`); 
  };
  const handleDeleteClick = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowConfirmDialog(true);
  };

  const confirmDelete = async () => {
    if (assignmentToDelete) {
      await assignmentsClient.deleteAssignment(assignmentToDelete);
      dispatch(deleteAssignment(assignmentToDelete));
      setAssignmentToDelete(null);
    }
    setShowConfirmDialog(false);
  };

  const cancelDelete = () => {
    setAssignmentToDelete(null);
    setShowConfirmDialog(false);
  };
  
  return (
    <div>
      <AssignmentControls />
      <div className="mb-5" />
      <ul id="wd-assignments-title" className="list-group rounded-0">
        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border border-secondary">
          <div className="wd-title p-3 ps-2 bg-assignment">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown />
            ASSIGNMENTS
            <div className="float-end">
              <button id="wd-title" className="btn me-1 rounded-btn">
                40% of Total
              </button>
              { userRole === "FACULTY" && (
              <button
                id="wd-add-assignment"
                style={{
                  background: "none", border: "none", padding: "0",
                  cursor: "pointer",
                }}
                onClick={handleAddAssignmentClick}
              >
                <FaPlus />
              </button>
              )}
              <IoEllipsisVertical className="fs-4" style={{ marginLeft: "5px" }} />
            </div>
          </div>

          <ul className="wd-assignment-list list-group rounded-0">
            {assignments.map((assignment: { _id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; available_from_date: string | number | Date; dueDate: string | number | Date; points: any; }) => (
              <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson d-flex align-items-center">
                <div className="d-flex align-items-center me-2">
                  <BsGripVertical className="me-2 fs-3" />
                  <GrDocument style={{ marginRight: "10px" }} />
                </div>
                <div className="ms-2 d-flex flex-column">
                  <Link to={`/Kanbas/Courses/${cid}/Assignments/Editor/${assignment._id}`} className="fw-bold">
                    {assignment.title}
                  </Link>
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ color: "#8F0000" }}>Multiple Modules</span>
                      <span style={{ marginLeft: "20px", color: "#363636" }}>|</span>
                      <span style={{ marginLeft: "20px", color: "#363636", fontWeight: "bold" }}>
                        Not Available until
                      </span>
                      <span className="text-muted" style={{ marginLeft: "10px" }}>
                        {assignment.available_from_date ? new Date(assignment.available_from_date).toLocaleString() : "N/A"} 
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span style={{ color: "#363636", fontWeight: "bold" }}>Due</span>
                      <span style={{ marginLeft: "10px" }} className="text-muted">
                        {assignment.dueDate ? new Date(assignment.dueDate).toLocaleString() : "N/A"} | {assignment.points ? `${assignment.points} pts` : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="float-end ms-auto">
                {userRole === "FACULTY" && (
                  <>
                  <GreenCheckmark />
                  <FaTrash
                    style={{ marginLeft: "10px", cursor: "pointer", color: "red" }}
                    onClick={() => handleDeleteClick(assignment._id as string)}
                  />
                  <IoEllipsisVertical className="fs-4" />
                  </>
                )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      {/* pop up window to confirm  */}
      {userRole === "FACULTY" && (
        <>
      {showConfirmDialog && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button onClick={confirmDelete} className="btn btn-danger me-2">OK</button>
          <button onClick={cancelDelete} className="btn btn-secondary">Cancel</button>
        </div>
      )}
      </>     
      )}
    </div>
  );
}