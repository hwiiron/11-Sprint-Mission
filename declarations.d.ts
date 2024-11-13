// TypeScript는 기본적으로 이미지 파일을 모듈로 인식하지 않기 때문에, 이미지 파일을 import할 때 오류가 발생하여 추가
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

declare module "*.svg" {
  const content: string;
  export default content;
}
