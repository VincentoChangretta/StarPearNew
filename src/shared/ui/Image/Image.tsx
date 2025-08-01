interface ImageProps {
   src: string;
   alt: string;
   imgBoxClassName?: string;
   imgClassName?: string;
   childrenImg?: string;
   childrenImgClassName?: string;
}

export const Image = (props: ImageProps) => {
   const { src, alt, imgBoxClassName = 'max-w-[300px]', imgClassName, childrenImg, childrenImgClassName } = props;

   const imgBox = `${imgBoxClassName}`;
   const img = `flex w-full h-full object-cover ${imgClassName}`;

   return (
      <div className={imgBox}>
         <img className={img} src={src} alt={alt} />
         {childrenImg && <img className={childrenImgClassName} src={childrenImg} alt={alt} />}
      </div>
   );
};
