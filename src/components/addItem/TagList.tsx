import StyledTagList from "./TagList.style";

type TagListProps = {
  tagsLength: number;
  tags: string[];
  onClick: (idx: number) => void;
};

const TagList = ({ tagsLength, tags, onClick }: TagListProps) => {
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
