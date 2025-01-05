import instance from "./instance";

// 게시글 상세
export const getArticle = async (id: number) => {
  try {
    const response = await instance.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("게시글 조회 실패", error);
  }
};

// 게시글 댓글
export const getComments = async (id: number) => {
  try {
    const response = await instance.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments?limit=10`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("게시글 댓글 조회 실패", error);
  }
};

// 게시글 댓글 작성
export const postComment = async (id: number, textareaValue: string) => {
  try {
    const response = await instance.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}/comments`,
      {
        content: textareaValue,
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("게시글 댓글 작성 실패", error);
  }
};

// 게시글 댓글 삭제
export const deleteComment = async (id: number) => {
  try {
    const response = await instance.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("게시글 댓글 삭제 실패", error);
  }
};

// 게시글 댓글 수정
export const patchComment = async (id: number, editComment: string) => {
  try {
    const response = await instance.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/${id}`,
      {
        content: editComment,
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("댓글 수정 실패", error);
  }
};

// 게시글 등록
export const postArticle = async (values: any) => {
  try {
    const requestBody: any = {
      title: values.name,
      content: values.description,
    };

    if (values.imgFile) {
      requestBody.image = values.imgFile;
    }

    const response = await instance.post(
      `${process.env.NEXT_PUBLIC_API_URL}/articles`,
      requestBody
    );

    return response.data;
  } catch (error) {
    console.error("게시글 등록 실패", error);
  }
};
