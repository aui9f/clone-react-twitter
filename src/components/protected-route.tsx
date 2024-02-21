/**
 * 보호해주는 역할
 * 체크
 * 로그인한 사용자는 protected route
 * 아니면 리다이렉트
 */

import { auth } from "@/fBase";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}:{children: React.ReactNode}){
    console.log("auth", auth.currentUser)
    return auth.currentUser===null ? <Navigate to="/login"/> : children;
}

export default ProtectedRoute