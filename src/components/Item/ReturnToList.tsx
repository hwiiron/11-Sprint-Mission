import React from "react";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
};

const ReturnToList = ({ className }: Props) => {
  return (
    <div className={className}>
      <Link to="/items">목록으로 돌아가기</Link>
    </div>
  );
};

export default ReturnToList;
