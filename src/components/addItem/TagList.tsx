import React from "react";
import StyledTagList from "./TagList.style";

const TagList = ({ tagsLength, tags, onClick }) => {
  return (
    <>
      {tagsLength !== 0 && (
        <StyledTagList>
          {tags.map((tag: string, idx: number) => {
            return (
              <li key={idx}>
                #{tag}
                <button onClick={() => onClick(idx)}></button>
              </li>
            );
          })}
        </StyledTagList>
      )}
    </>
  );
};

export default TagList;