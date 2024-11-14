import React from "react";

type Props = {
  className?: string;
};

const NoInquiries = ({ className }: Props) => {
  return <p className={className}>아직 문의가 없어요</p>;
};

export default NoInquiries;
